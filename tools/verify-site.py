"""Check generated pages, local references, metadata and sitemap before publishing."""
import json
import re
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = 'https://www.nexorasolutionsve.com'

class Page(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.file, self.ids, self.refs, self.headings = file, set(), [], 0
        self.canonicals, self.alternates, self.jsonld = [], {}, []
        self.description = self.language = None
        self.script = None
        self.feed(file.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, (self.file, 'duplicate id', a['id'])
            self.ids.add(a['id'])
        if tag == 'html': self.language = a.get('lang')
        if tag == 'h1': self.headings += 1
        if tag == 'meta' and a.get('name') == 'description': self.description = a.get('content')
        if tag == 'meta' and a.get('property') == 'og:image': self.refs.append(a['content'])
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a['href'])
        if tag == 'link' and a.get('rel') == 'alternate': self.alternates[a['hreflang']] = a['href']
        for key in ('href','src'):
            if a.get(key): self.refs.append(a[key])
        if tag == 'img' and a.get('src'): assert a.get('alt'), (self.file, 'missing image alt')
        if tag == 'script' and a.get('type') == 'application/ld+json': self.script = ''

    def handle_data(self, data):
        if self.script is not None: self.script += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.script is not None:
            self.jsonld.append(json.loads(self.script)); self.script = None

files = [ROOT/'index.html',ROOT/'privacy.html',*sorted((ROOT/'proyectos').rglob('*.html')),*sorted((ROOT/'servicios').rglob('*.html')),*sorted((ROOT/'en').rglob('*.html'))]
pages = {f:Page(f) for f in files}
for f,p in pages.items():
    rel = f.relative_to(ROOT).as_posix()
    url = ORIGIN+'/'+(rel[:-10] if rel.endswith('index.html') else rel)
    assert p.headings == 1, (rel,'h1 count',p.headings)
    assert p.language in ('es-VE','en') and p.description, (rel,'language/description')
    assert p.canonicals == [url], (rel,'canonical',p.canonicals,url)
    assert set(p.alternates) == {'es-VE','en','x-default'}, (rel,'hreflang')
    assert len(p.jsonld) == 1 and p.jsonld[0]['@graph'], (rel,'structured data')
    if '/servicios/' in url and not url.endswith('/servicios/'):
        services = [item for item in p.jsonld[0]['@graph'] if item.get('@type') == 'Service']
        assert len(services) == 1 and services[0]['url'] == url, (rel, 'service URL')
        assert services[0]['provider']['@id'] == ORIGIN+'/#organization', (rel, 'service provider')
        assert {a['name'] for a in services[0]['areaServed']} == {'El Tigre','Anzoátegui','Venezuela'}, (rel, 'service coverage')
        assert urlsplit(url).path in pages[ROOT/('en/index.html' if p.language=='en' else 'index.html')].refs, (rel, 'service missing from home')
    for ref in p.refs:
        u=urlsplit(ref)
        if u.scheme and (u.scheme not in ('http','https') or u.netloc != 'www.nexorasolutionsve.com'): continue
        target=ROOT/unquote(u.path).lstrip('/') if u.path else f
        if target.is_dir(): target=target/'index.html'
        assert target.is_file(), (rel,'missing reference',ref)
        if u.fragment and target in pages: assert u.fragment in pages[target].ids, (rel,'missing anchor',ref)
    for lang,alternate in p.alternates.items():
        target=ROOT/urlsplit(alternate).path.lstrip('/')
        if target.is_dir(): target=target/'index.html'
        other=pages[target]
        assert other.alternates['en' if p.language=='en' else 'es-VE'] == url, (rel,'nonreciprocal hreflang')

sitemap={e.text for e in ET.parse(ROOT/'sitemap.xml').iter() if e.tag.endswith('}loc')}
assert sitemap == {p.canonicals[0] for p in pages.values()}, 'sitemap mismatch'
assert 'Disallow: /' not in (ROOT/'robots.txt').read_text(), 'robots blocked'
css=(ROOT/'styles.css').read_text()
for asset in re.findall(r"url\(['\"]?([^)'\"]+)",css): assert (ROOT/asset.lstrip('/')).is_file(), ('CSS asset missing',asset)
print(f'OK: {len(pages)} pages; local links/assets/anchors, reciprocal languages, canonical URLs, JSON-LD and sitemap.')
