const photos = {
  'guia-phishing': [
    'Stephen Phillips – Hostreviews.co.uk', 'Unsplash', 'https://unsplash.com/photos/black-laptop-computer-3Mhgvrk4tjM',
    'Bandeja de correo abierta en la pantalla de una laptop', 'Email inbox open on a laptop screen'
  ],
  'dolares-whatsapp': [
    'Pixabay', 'Pexels', 'https://www.pexels.com/photo/persom-holding-black-android-smartphone-and-2-1-u-s-dollar-163069/',
    'Una mano sostiene un teléfono y billetes de dólar', 'A hand holds a phone and US dollar bills'
  ],
  'pago-movil-falso': [
    'Hook Tell', 'Pexels', 'https://www.pexels.com/photo/photo-of-a-person-printing-a-receipt-3570244/',
    'Una terminal de pago imprime un comprobante sobre un mostrador', 'A payment terminal prints a receipt over a counter'
  ],
  ponzi: [
    'Alesia Kozik', 'Pexels', 'https://www.pexels.com/photo/a-person-holding-a-smartphone-with-trading-graphs-6771740/',
    'Un teléfono muestra cotizaciones junto a una computadora y monedas', 'A phone displays market prices next to a computer and coins'
  ],
  adselect: [
    'Pixabay', 'Pexels', 'https://www.pexels.com/photo/person-holding-tablet-computer-showing-videos-221181/',
    'Dos manos sostienen una tableta con una lista de videos', 'Two hands hold a tablet displaying a video list'
  ],
  operadoras: [
    'Barnabas Davoti', 'Pexels', 'https://www.pexels.com/photo/tall-cell-towers-9290878/',
    'Torres de telefonía con antenas y platos bajo un cielo nublado', 'Cell towers with antennas and dishes under a cloudy sky'
  ],
  citaciones: [
    'Angela Roma', 'Pexels', 'https://www.pexels.com/photo/close-up-of-woman-taking-out-a-blank-piece-of-paper-form-an-envelope-7318933/',
    'Una persona extrae una hoja blanca de un sobre', 'A person pulls a blank sheet of paper from an envelope'
  ],
  'alertas-inversion': [
    'Lisa Fotios', 'Pexels', 'https://www.pexels.com/photo/close-up-of-newspapers-on-wooden-table-18287623/',
    'Periódicos doblados y apilados sobre una mesa', 'Folded newspapers stacked on a table'
  ]
};

function coverPhoto(i, id, esc) {
  const [author, provider, source, es, en] = photos[id];
  const asset = `/assets/revista-portadas/${id}`;
  return `<figure class="magazine-dossier-photo">
        <img src="${asset}.webp" srcset="${asset}-720.webp 720w, ${asset}.webp 1440w"
          sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 954px) calc(100vw - 64px), 890px"
          width="1440" height="810" alt="${esc(i ? en : es)}" fetchpriority="high">
        <figcaption><span>${i ? 'Reference photo' : 'Fotografía de referencia'}</span> <a href="${esc(source)}">${esc(author)} · ${provider}</a></figcaption>
      </figure>`;
}

module.exports = { coverPhoto };
