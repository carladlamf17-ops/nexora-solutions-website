const editionDate = '2026-11-09';
const { phishingGuide, phishingTitle } = require('./magazine-phishing.cjs');
const magazineRoute = i => `${i ? '/en' : ''}/revista/`;
const sources = {
  ponzi: 'https://www.investor.gov/protect-your-investments/fraud/types-fraud/ponzi-scheme',
  tasks: 'https://consumidor.ftc.gov/alertas-para-consumidores/2025/08/como-detectar-y-evitar-las-estafas-de-tareas',
  movistar: 'https://www.telefonica.com.ve/wp-content/uploads/sites/3/2023/05/NdP_Movistar-promueve-la-seguridad-digital-y-mantiene-advertencias-sobre-estafas-telefonicas.pdf',
  citations: 'https://laprensademonagas.com/douglas-rico-alerta-sobre-el-uso-de-falsas-citaciones-del-cicpc-para-extorsionar-a-la-poblacion/',
  whatsapp: 'https://faq.whatsapp.com/1131652977717250/',
  dollars: 'https://noticiasvenevision.com/noticias/nacional/cicpc-alerto-sobre-modus-operandi-para-evitar-estafas-via-whatsapp',
  mobilePayment: 'https://www.banesco.com/personas/banca-digital-personas/pagomovil/'
};
const investmentSources = [
  'https://noticiasvenevision.com/noticias/economia/sunaval-alerta-sobre-posibles-fraudes-electronicos-en-el-mercado-de-valores-venezolano',
  'https://mundour.com/2024/06/19/5-claves-para-entender-la-estafa-detras-de-solesbot/',
  'https://es.beincrypto.com/hyper-ai-alertan-nuevo-fraude-criptomonedas-venezuela/',
  'https://elestimulo.com/elinteres/de-interes/2025-04-15/hv-ijex-venezuela/'
];

const editions = [
  {
    label: 'Revista de ciberseguridad', date: '9 de noviembre de 2026',
    title: 'Estafas digitales en Venezuela',
    coverTitle: ['Estafas digitales', 'en Venezuela'],
    coverAlt: 'Portada ilustrada de periódico: Alerta digital. ¡Te están estafando! Un celular, dólares y un recibo sellado como falso.',
    intro: 'Una oferta de dólares por WhatsApp, un comprobante falso o una supuesta citación pueden llegar al mismo teléfono. Aprende a reconocer las señales y qué hacer si ya respondiste.',
    contents: 'En esta edición', response: 'Si ya pagaste o compartiste datos',
    topics: [
      ['dolares-whatsapp', '«Prima, cambié de número»: la trampa de los dólares por WhatsApp', '«Prima, cambié de número. Estoy vendiendo dólares baratos. Hazme el Pago Móvil ya y te los aparto». El mensaje puede llegar desde un número nuevo con la foto de un familiar o desde su cuenta de WhatsApp si alguien tomó el control. Una tasa demasiado atractiva, la urgencia y los datos bancarios de un tercero son señales de alerta.', 'Llama al número que ya tenías guardado usando una llamada telefónica fuera de WhatsApp, o confirma en persona. Si no logras verificar la oferta, pausa el pago. Si confirmas la suplantación, avisa al familiar y a otros contactos por otra vía, guarda el chat y reporta el contacto en WhatsApp. Si ya transferiste, llama de inmediato a tu banco por su canal oficial y conserva la referencia.', [['Advertencia del CICPC sobre falsas ventas de dólares · Venevisión', sources.dollars]]],
      ['pago-movil-falso', '«¡Ya te pagué!»: el comprobante falso que te puede costar el pedido', 'El supuesto comprador manda una captura por WhatsApp y presiona para que entregues el pedido. Puede ser una imagen alterada o un recibo de otra operación. Revisa si el monto o la fecha difieren, si la referencia ya se usó o si los datos del beneficiario no coinciden. Una captura bien hecha también puede engañar.', 'Abre tú mismo la app o la web oficial de tu banco. Busca el abono en los movimientos de la cuenta afiliada y comprueba el monto, la fecha y la referencia si está disponible. Si el abono no aparece, espera la confirmación antes de entregar el producto o devolver un supuesto excedente. Si ya entregaste, guarda el chat, la captura y los datos del pedido. Consulta con el banco y lleva la evidencia al CICPC.', [['Cómo consultar movimientos y operaciones de Pago Móvil · Banesco', sources.mobilePayment]]],
      ['ponzi', 'El saldo sube, pero te cobran para retirarlo', 'Ponzi: las ganancias de los primeros participantes salen del dinero de los nuevos. Cuando dejan de entrar fondos, los pagos se frenan. En una estafa de tareas te prometen dinero por ver anuncios o dar clics, muestran un saldo en pantalla y luego exigen una recarga para seguir o retirar. Un primer pago pequeño puede servir de gancho.', 'Desconfía de los rendimientos fijos sin una actividad verificable, la presión para invitar gente y los cobros para liberar un saldo. Antes de entregar dinero, verifica quién opera la oferta, de dónde salen los pagos y qué condiciones de retiro aplica. Si te exigen depositar para cobrar por una tarea, detente.', [['Cómo funciona un Ponzi · Investor.gov', sources.ponzi], ['Estafas de tareas · FTC', sources.tasks]]],
      ['adselect', 'AdSelect y las ofertas por ver anuncios', 'En páginas que usan el nombre AdSelect se anuncian recompensas por actividades publicitarias. Una página que se presenta como AdSelect también advierte sobre supuestos administradores que prometen ganancias o cobran para desbloquear saldos. Esa advertencia es una declaración de la propia plataforma. No encontramos una resolución de autoridad que clasifique a AdSelect como Ponzi.', 'Si alguien te contacta con ese nombre, verifica por separado el dominio y quién te escribe. Si te piden una recarga, criptomonedas o un pago para retirar, corta el contacto y guarda capturas. Un nombre conocido o un comprobante compartido en un grupo no verifican la oferta.'],
      ['operadoras', '«Te vamos a cortar la línea»: el falso técnico que busca tu código', 'Ejemplos ficticios: «Te cambiamos el plan y necesitamos el código» o «Si no haces un pago móvil en bolívares hoy, te cortamos la línea». Movistar Venezuela documentó llamadas que usaban una supuesta actualización a 5G para conseguir códigos de WhatsApp. El mismo tipo de engaño puede usar el nombre de cualquier operadora.', 'Cuelga y revisa tu saldo, factura o plan desde la app o el sitio oficial de tu operadora. No dictes códigos de SMS ni escanees un QR que te envíen para activar el plan. Si hay un saldo pendiente, págalo por el canal que confirmaste por tu cuenta.', [['Alerta sobre estafas telefónicas · Movistar Venezuela (PDF)', sources.movistar]]],
      ['citaciones', '«Hay una denuncia en tu contra»: la falsa citación que exige dinero', 'Una persona dice ser del CICPC u otro organismo y afirma que hay una denuncia en tu contra. Puede enviar por WhatsApp una supuesta boleta con sellos y firmas, y exigir dinero o datos para detener el trámite. La dirección del CICPC alertó sobre el uso de formatos falsos de citación con fines de extorsión.', 'Corta la conversación. Conserva el mensaje y verifica la supuesta citación con la dependencia correspondiente, usando un contacto obtenido por tu cuenta o acudiendo a su sede. Evita los números y enlaces de la boleta dudosa y no transfieras para cancelar el supuesto trámite.', [['Advertencia del director del CICPC recogida por La Prensa de Monagas', sources.citations]]]
    ],
    steps: [
      ['Si transferiste dinero', 'Contacta de inmediato a tu banco o proveedor de pago por su canal oficial. Reporta la operación y pregunta qué medidas pueden tomar. Guarda los comprobantes, el número receptor y la fecha. Evita pagos adicionales a quien prometa recuperar el dinero.'],
      ['Si entregaste un código de WhatsApp', 'Sigue el procedimiento oficial para volver a registrar tu número. Avisa a tus contactos por otra vía. Al recuperar el acceso, revisa los dispositivos vinculados y activa la verificación en dos pasos.'],
      ['Si hubo amenazas o suplantación', 'Guarda chats, números, capturas y documentos recibidos. Lleva esa evidencia a una sede del CICPC para reportar el hecho. Conserva los originales y evita publicar datos personales al alertar a otros.']
    ],
    recovery: 'Cómo recuperar tu cuenta · WhatsApp', prevention: 'Cómo protegerte'
  },
  {
    label: 'Cybersecurity magazine', date: 'November 9, 2026',
    title: 'Digital scams in Venezuela',
    coverTitle: ['Digital scams', 'in Venezuela'],
    coverAlt: 'Illustrated Spanish tabloid cover reading “Digital alert: You’re being scammed!” with a phone, dollars, and a receipt stamped “Fake”.',
    intro: 'An offer to sell dollars over WhatsApp, a fake receipt, or a supposed police summons can all reach the same phone. Learn the warning signs and what to do if you already responded.',
    contents: 'In this issue', response: 'If you already paid or shared information',
    topics: [
      ['dolares-whatsapp', '“Cousin, I got a new number”: the WhatsApp dollar trap', '“Cousin, I changed my number. I’m selling dollars cheap. Send me a Pago Móvil payment now and I’ll set them aside.” The message may come from a new number using a relative’s photo or from their actual WhatsApp account if someone took it over. An unusually good rate, pressure to pay immediately, and bank details belonging to someone else are warning signs.', 'Call the number you already saved using a regular phone call outside WhatsApp, or confirm in person. If you cannot verify the offer, hold off on payment. If you confirm impersonation, warn your relative and other contacts through another channel, save the chat, and report the contact in WhatsApp. If you already transferred money, contact your bank immediately through an official channel and keep the reference number.', [['CICPC warning about fake dollar sales · Venevisión (Spanish)', sources.dollars]]],
      ['pago-movil-falso', '“I already paid!”: the fake receipt that can cost you the order', 'A supposed buyer sends a screenshot over WhatsApp and pressures you to hand over the order. The image may have been edited or may show a different transaction. Watch for an incorrect amount or date, a reused reference number, or mismatched recipient details. Even a convincing screenshot can be misleading.', 'Open your bank’s official app or website yourself. Look for the credit in the account linked to Pago Móvil and check the amount, date, and reference if available. If it does not appear, wait for confirmation before handing over goods or refunding a supposed overpayment. If you already handed over the order, keep the chat, screenshot, and order details. Check with your bank and take the evidence to the CICPC.', [['How to check Pago Móvil transactions · Banesco (Spanish)', sources.mobilePayment]]],
      ['ponzi', 'Your balance goes up, then they charge you to withdraw', 'A Ponzi scheme pays earlier participants with money from newer ones. Payments dry up when new funds stop coming in. A task scam promises money for watching ads or clicking, shows a balance on screen, then asks you to top up to continue or withdraw. A small initial payout can be bait.', 'Watch for fixed returns without a verifiable business, pressure to recruit, and fees to unlock a balance. Check who operates the offer, where the payouts come from, and the withdrawal terms before sending money. Stop if asked to deposit money to get paid for a task.', [['How Ponzi schemes work · Investor.gov', sources.ponzi], ['Task scams · FTC (Spanish)', sources.tasks]]],
      ['adselect', 'AdSelect and offers to watch ads', 'Pages using the AdSelect name advertise rewards for advertising activities. A page presenting itself as AdSelect also warns of supposed administrators promising returns or charging to unlock balances. This is the platform’s own statement. We found no ruling from an authority classifying AdSelect as a Ponzi scheme.', 'If someone approaches you using that name, independently verify the domain and who contacted you. If asked for a top-up, cryptocurrency, or a fee to withdraw, stop responding and save screenshots. A familiar name or payment receipt shared in a group cannot verify the offer.'],
      ['operadoras', '“We’ll cut off your line”: the fake technician after your code', 'Fictional examples include “We’re upgrading your plan and need your code” and “Send a Pago Móvil payment in bolívares today or we’ll cut off your line.” Movistar Venezuela documented calls using a supposed 5G upgrade to obtain WhatsApp codes. The same tactic can use any carrier’s name.', 'Hang up and check your balance, bill, or plan through your carrier’s official app or website. Keep SMS codes private and avoid QR codes sent to activate your plan. If you owe money, pay through the channel you independently confirmed.', [['Phone fraud warning · Movistar Venezuela (Spanish PDF)', sources.movistar]]],
      ['citaciones', '“There’s a complaint against you”: the fake summons demanding money', 'Someone claiming to be from Venezuela’s CICPC investigative police or another agency says a complaint has been filed against you. They may send a supposed summons over WhatsApp with seals and signatures, then demand money or information to stop proceedings. The CICPC director warned that fake summons forms were being used for extortion.', 'End the conversation. Save the message and verify the summons with the relevant office using independently obtained contact details or by visiting in person. Avoid the phone numbers and links on the suspicious notice and decline requests to transfer money to cancel proceedings.', [['CICPC director’s warning reported by La Prensa de Monagas (Spanish)', sources.citations]]]
    ],
    steps: [
      ['If you sent money', 'Contact your bank or payment provider immediately through an official channel. Report the transaction and ask what action they can take. Save receipts, the recipient details, and the date. Avoid paying anyone who promises to recover the money.'],
      ['If you gave out a WhatsApp code', 'Follow the official instructions to re-register your number. Warn your contacts through another channel. Once you regain access, review linked devices and enable two-step verification.'],
      ['If someone threatened you or impersonated an official', 'Save chats, numbers, screenshots, and documents you received. Take the evidence to a CICPC office to report the incident. Keep the originals and avoid exposing personal details when warning others.']
    ],
    recovery: 'How to recover your account · WhatsApp', prevention: 'How to protect yourself'
  }
];

const fieldNotes = [
  {
    'dolares-whatsapp': ['La trampa cambia de cuenta', 'Ejemplo ficticio. Después de decirte que cambió de número, el supuesto familiar te pide que pagues a nombre de otra persona. Si te llama desde el chat o manda un audio, haz tu propia llamada al contacto que ya tenías. Si no contesta, espera.'],
    'pago-movil-falso': ['El mismo monto puede aparecer dos veces', 'Ejemplo ficticio. Dos pedidos cuestan Bs. 1.250. Un comprador reenvía el comprobante del primero para retirar el segundo. Revisa los movimientos de la cuenta receptora y asigna cada abono a un solo pedido. Compara la referencia si tu banco la muestra. Si la app está caída o el movimiento es dudoso, deja el pedido pendiente y consulta al banco.'],
    ponzi: ['Después de la primera recarga llega otra', 'Ejemplo ficticio. Tras un retiro pequeño, la plataforma dice que debes pagar una comisión de desbloqueo. Luego pide otra recarga para corregir un supuesto error. Guarda las condiciones, los chats y los comprobantes y detén los pagos.'],
    operadoras: ['El SMS revela para qué sirve el código', 'Si el mensaje menciona el registro de WhatsApp o el acceso a tu cuenta, léelo sin dictarlo. Si ya compartiste el código y perdiste el acceso, sigue los pasos de recuperación de WhatsApp que aparecen al final de la edición.']
  },
  {
    'dolares-whatsapp': ['The payment goes to a different person', 'Fictional example. After claiming to have a new number, the supposed relative asks you to pay into someone else’s account. If they call through the chat or send a voice note, place your own call to the number you already saved. If no one answers, wait.'],
    'pago-movil-falso': ['Two orders can cost exactly the same', 'Fictional example. Two orders cost Bs. 1,250. A buyer forwards the receipt for the first one to collect the second. Check the receiving account and match each credit to just one order. Compare the reference if your bank shows it. If the app is down or the transaction is unclear, keep the order pending and check with your bank.'],
    ponzi: ['One top-up leads to another', 'Fictional example. After a small withdrawal, the platform asks for a fee to unlock your balance. It then demands another top-up to fix a supposed error. Save the terms, chats, and receipts and stop sending money.'],
    operadoras: ['The SMS tells you what the code is for', 'If the message mentions registering WhatsApp or accessing your account, read it without sharing the code. If you already shared it and lost access, follow the WhatsApp recovery steps at the end of this issue.']
  }
];

function magazinePage(i, { head, header, footer, esc }) {
  const issue = editions[i];
  const issueLabel = i ? 'Issue 01' : 'Edición 01';
  const lang = i ? 'en' : 'es';
  const videoClips = [
    {
      id: 'video-whatsapp', story: 'dolares-whatsapp', asset: 'chat',
      label: 'WhatsApp', title: i ? '“Cousin, I got a new number”' : '«Prima, cambié de número»'
    },
    {
      id: 'video-pago-movil', story: 'pago-movil-falso', asset: 'pagomovil',
      label: 'Pago Móvil', title: i ? 'Did the money actually arrive?' : '¿La plata sí cayó?'
    },
    {
      id: 'video-cicpc', story: 'citaciones', asset: 'cicpc',
      label: 'CICPC', title: i ? '“There’s a complaint against you”' : '«Hay una denuncia en tu contra»'
    },
    {
      id: 'video-phishing', story: 'guia-phishing', asset: 'phishing',
      label: 'Phishing', title: i ? '“Your account will be locked”' : '«Tu cuenta se va a bloquear»'
    }
  ];
  const investmentTitle = i ? 'Investment traps in Venezuela: named cases and a recent warning' : 'Inversiones trampa en Venezuela: casos con nombre y una alerta reciente';
  const items = [['guia-phishing', phishingTitle(i)], ...issue.topics.map(([id, title]) => [id, title]), ['alertas-inversion', investmentTitle], ['respuesta', issue.response]];
  return head(i, magazineRoute(i), `${issue.title} | Nexora Solutions`, issue.intro) + header(i, magazineRoute(1 - i)) + `
<main id="contenido" class="magazine">
  <div class="magazine-cover">
    <div class="wrap magazine-masthead">
      <p><span aria-hidden="true">◆</span> Nexora Solutions / ${i ? 'Digital magazine' : 'Revista digital'}</p>
      <p>${issueLabel} <span aria-hidden="true">·</span> <time datetime="${editionDate}">${issue.date}</time></p>
    </div>
    <div class="wrap magazine-cover-layout">
      <div>
      <p class="eyebrow">${issue.label}</p>
      <h1>${esc(issue.coverTitle[0])} <span>${esc(issue.coverTitle[1])}</span></h1>
      <p class="magazine-intro">${issue.intro}</p>
      <div class="magazine-cover-links">
        <a class="magazine-watch" href="#video-whatsapp"><span aria-hidden="true">▶</span> ${i ? 'Watch the news clip' : 'Ver el noticiero'}</a>
        <a href="#guia-phishing">${i ? 'Practice spotting phishing' : 'Practica cómo detectar phishing'} <span aria-hidden="true">↓</span></a>
      </div>
      </div>
      <div class="magazine-cover-art">
        <div class="magazine-cover-sheet magazine-cover-playing">
          <img class="magazine-cover-image" src="/assets/revista-portada-periodico.webp" width="1200" height="900" alt="${esc(issue.coverAlt)}" fetchpriority="high">
          <div class="magazine-cover-action" aria-hidden="true">
            <span class="magazine-cover-message">•••</span>
            <span class="magazine-cover-message">•••</span>
            <span class="magazine-cover-stamp"></span>
          </div>
        </div>
        <button class="magazine-replay" type="button" hidden>${i ? 'Replay cover animation' : 'Repetir animación de portada'}</button>
      </div>
    </div>
    <div class="wrap magazine-cover-topics">
      <a href="#dolares-whatsapp"><span>01</span> ${i ? 'WhatsApp impersonation' : 'Suplantación por WhatsApp'}</a>
      <a href="#pago-movil-falso"><span>02</span> ${i ? 'Fake receipts' : 'Comprobantes falsos'}</a>
      <a href="#citaciones"><span>03</span> ${i ? 'Fake summonses' : 'Falsas citaciones'}</a>
    </div>
  </div>
  <section class="magazine-media" aria-labelledby="magazine-reels-title">
    <div class="wrap">
      <p class="eyebrow">${i ? 'Digital alert · Vertical videos' : 'Alerta digital · Videos verticales'}</p>
      <h2 id="magazine-reels-title">${i ? 'Scams in short clips' : 'Estafas en video'}</h2>
      <p class="magazine-reels-intro">${i ? 'Four simulated scams with narration and captions.' : 'Cuatro estafas simuladas con narración y subtítulos.'}</p>
      <p class="magazine-reels-hint">${i ? 'Scroll sideways to see all four.' : 'Desliza para ver los cuatro.'}</p>
      <div class="magazine-reels" role="region" aria-labelledby="magazine-reels-title" tabindex="0">
        ${videoClips.map(({ id, story, asset, label, title }, n) => `<article class="magazine-news magazine-news-${asset}" id="${id}">
          <p class="eyebrow"><span aria-hidden="true">${String(n + 1).padStart(2, '0')} · </span>${esc(label)}</p>
          <video class="magazine-news-video" controls playsinline preload="none" width="540" height="960" poster="/assets/revista-noticiero-${asset}-${lang}.webp" aria-labelledby="${id}-title">
            <source src="/assets/revista-noticiero-${asset}-${lang}.mp4" type="video/mp4">
          </video>
          <h3 id="${id}-title">${esc(title)}</h3>
          <a href="#${story}">${i ? 'Read the full story' : 'Leer el caso completo'}</a>
        </article>`).join('')}
      </div>
    </div>
  </section>
  <div class="wrap magazine-layout" id="casos">
    <nav class="magazine-index" aria-label="${issue.contents}">
      <h2>${issue.contents}</h2>
      <ol>${items.map(([id, title]) => `<li><a href="#${id}">${esc(title)}</a></li>`).join('')}</ol>
    </nav>
    <div class="magazine-stories">
      ${phishingGuide(i, esc)}
      ${issue.topics.map(([id, title, detail, prevention, references = []], n) => `<article id="${id}">
        <p class="magazine-story-number" aria-hidden="true">${String(n + 1).padStart(2, '0')}</p>
        <h2>${esc(title)}</h2>
        <p>${esc(detail)}</p>
${id === 'pago-movil-falso' ? `        <picture class="magazine-media-alert">
          <source media="(prefers-reduced-motion: reduce)" srcset="/assets/revista-alerta-${lang}.webp">
          <img src="/assets/revista-alerta-${lang}.gif" width="560" height="315" loading="lazy" alt="${i ? 'Sent a payment screenshot? Check that the money reached your bank.' : '¿Te mandaron un comprobante? Confirma el abono en tu banco.'}">
        </picture>` : ''}
${id === 'citaciones' ? `        <p><a href="#video-cicpc">${i ? 'Watch the CICPC news clip' : 'Ver el noticiero sobre falsas citaciones'}</a></p>` : ''}
${fieldNotes[i][id] ? `        <div class="magazine-evidence"><h3>${esc(fieldNotes[i][id][0])}</h3><p>${esc(fieldNotes[i][id][1])}</p></div>` : ''}
        <div class="magazine-tip"><h3>${issue.prevention}</h3><p>${esc(prevention)}</p></div>
${references.length ? `        <ul class="magazine-sources">${references.map(([label, url]) => `<li><a href="${esc(url)}">${esc(label)}</a></li>`).join('')}</ul>` : ''}
      </article>`).join('')}
      <article id="alertas-inversion">
        <h2>${investmentTitle}</h2>
        <p>${i ? 'On October 30, 2026, Venevisión reported that Venezuela’s securities regulator, Sunaval, warned about misleading investment offers promoted on WhatsApp, Telegram and other digital channels. The published warning describes the tactics without naming specific platforms.' : 'El 30 de octubre de 2026, Venevisión recogió una alerta de Sunaval sobre ofertas engañosas de inversión difundidas por WhatsApp, Telegram y otros canales digitales. El aviso publicado describe la modalidad sin identificar plataformas por nombre.'} <a href="${investmentSources[0]}">${i ? 'Read the warning' : 'Leer la alerta'}</a></p>
        <div class="magazine-evidence">
          <h3>${i ? 'Cases previously reported in Venezuela' : 'Casos reportados anteriormente en Venezuela'}</h3>
          <ul>
            <li><strong>SolesBot · 2024.</strong> ${i ? 'Unión Radio reported that operations stopped after fraud complaints. A specialist interviewed by the station described the model as a Ponzi scheme.' : 'Unión Radio reportó el cese de operaciones tras denuncias de estafa. Un especialista entrevistado por la emisora describió el modelo como un esquema Ponzi.'} <a href="${investmentSources[1]}">Unión Radio</a></li>
            <li><strong>Hyper AI · 2024.</strong> ${i ? 'Venezuelan users reported problems and a lack of transparency in what BeInCrypto covered as a suspected Ponzi scheme.' : 'Usuarios venezolanos reportaron problemas y falta de transparencia. BeInCrypto cubrió el caso como un presunto esquema Ponzi.'} <a href="${investmentSources[2]}">BeInCrypto</a></li>
            <li><strong>HV IJEX · 2025.</strong> ${i ? 'El Estímulo reported the collapse of the platform after it drew users in Venezuela.' : 'El Estímulo documentó el colapso de la plataforma tras captar usuarios en Venezuela.'} <a href="${investmentSources[3]}">El Estímulo</a></li>
          </ul>
          <p>${i ? 'These reports concern past cases. We found no confirmation that those three platforms were still recruiting in Venezuela in November 2026.' : 'Estos reportes corresponden a casos históricos. No encontramos confirmación de que esas tres plataformas siguieran captando usuarios en Venezuela en noviembre de 2026.'}</p>
        </div>
      </article>
      <section class="magazine-response" id="respuesta">
        <h2>${issue.response}</h2>
        <ol>${issue.steps.map(([label, detail]) => `<li><strong>${esc(label)}</strong><p>${esc(detail)}</p></li>`).join('')}</ol>
        <p><a href="${sources.whatsapp}">${issue.recovery}</a></p>
      </section>
    </div>
  </div>
</main>` + footer(i) + '</body></html>';
}

module.exports = { editionDate, magazineRoute, magazinePage };
