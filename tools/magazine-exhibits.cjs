const { records } = require('./magazine-dossiers.cjs');

const exhibitTypes = {
  'guia-phishing': ['Correo sospechoso', 'Suspicious email', '#665421'],
  'dolares-whatsapp': ['Chat de una supuesta familiar', 'Chat from a supposed relative', '#256752'],
  'pago-movil-falso': ['Comprobante y movimientos', 'Receipt and account transactions', '#23547c'],
  ponzi: ['Saldo y retiros en una app', 'App balance and withdrawals', '#544080'],
  adselect: ['Mensaje de un supuesto gestor', 'Message from a supposed manager', '#655525'],
  operadoras: ['Llamada y mensaje de verificación', 'Call and verification message', '#24596b'],
  citaciones: ['Supuesta citación recibida por chat', 'Alleged summons received over chat', '#8b1731'],
  'alertas-inversion': ['Cronología de casos y alertas', 'Timeline of cases and warnings', '#39566e']
};

function exhibit(i, id, esc) {
  const [es, en, accent] = exhibitTypes[id];
  const title = i ? en : es;
  const timeline = id === 'alertas-inversion';
  const label = timeline
    ? (i ? 'EDITORIAL TIMELINE · BASED ON CITED SOURCES' : 'CRONOLOGÍA EDITORIAL · BASADA EN FUENTES CITADAS')
    : (i ? 'SIMULATED · EDUCATIONAL EXAMPLE' : 'SIMULADO · EJEMPLO EDUCATIVO');
  const rows = (i ? records[id].en : records[id].es)[3].map(line => {
    const lines = [];
    let current = '';
    for (const word of line.split(' ')) {
      if (current && current.length + word.length > 46) {
        lines.push(current);
        current = word;
      } else {
        current = current ? `${current} ${word}` : word;
      }
    }
    return [...lines, current];
  });
  let y = 162;
  const content = rows.map((lines, n) => {
    const height = 36 + lines.length * 37;
    const row = `<g transform="translate(42 ${y})">
      <rect width="876" height="${height}" rx="11" fill="${n % 2 ? '#eef1f7' : '#fff'}" stroke="#ccd4e1"/>
      <rect x="18" y="15" width="48" height="43" rx="8" fill="${accent}"/>
      <text x="42" y="44" text-anchor="middle" fill="#fff" font-size="21" font-weight="700">${String(n + 1).padStart(2, '0')}</text>
      ${lines.map((line, j) => `<text x="85" y="${43 + 37 * j}" fill="#202636" font-size="28">${esc(line)}</text>`).join('')}
    </g>`;
    y += height + 14;
    return row;
  }).join('\n');
  const height = y + 30;
  const url = `/assets/revista-ejemplo-${id}-${i ? 'en' : 'es'}.svg`;
  return {
    url, title, label, height,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="${height}" viewBox="0 0 960 ${height}" role="img" aria-labelledby="title">
  <title id="title">${esc(title)} — ${esc(label)}</title>
  <rect width="960" height="${height}" fill="#f6f8fc"/>
  <g font-family="system-ui, sans-serif">
    <rect width="960" height="72" fill="${accent}"/>
    <text x="42" y="45" fill="#fff" font-size="24" font-weight="750">${esc(label)}</text>
    <text x="42" y="126" fill="#202636" font-size="38" font-weight="750">${esc(title)}</text>
    ${content}
  </g>
</svg>\n`
  };
}

module.exports = { exhibit };
