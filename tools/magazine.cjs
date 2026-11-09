const editionDate = '2026-11-09';
const magazineRoute = i => `${i ? '/en' : ''}/revista/`;
const sources = {
  ponzi: 'https://www.investor.gov/protect-your-investments/fraud/types-fraud/ponzi-scheme',
  tasks: 'https://consumidor.ftc.gov/alertas-para-consumidores/2025/08/como-detectar-y-evitar-las-estafas-de-tareas',
  movistar: 'https://www.telefonica.com.ve/wp-content/uploads/sites/3/2023/05/NdP_Movistar-promueve-la-seguridad-digital-y-mantiene-advertencias-sobre-estafas-telefonicas.pdf',
  citations: 'https://laprensademonagas.com/douglas-rico-alerta-sobre-el-uso-de-falsas-citaciones-del-cicpc-para-extorsionar-a-la-poblacion/',
  whatsapp: 'https://faq.whatsapp.com/1131652977717250/'
};

const editions = [
  {
    label: 'Revista de ciberseguridad', date: '9 de noviembre de 2026',
    title: 'Estafas digitales en Venezuela',
    intro: 'Una inversión que promete ganancias diarias, un supuesto técnico que pide un código y una falsa citación pueden llegar al mismo teléfono. Aprende a reconocer cada táctica y qué hacer si ya respondiste.',
    contents: 'En esta edición', response: 'Si ya pagaste o compartiste datos',
    topics: [
      ['ponzi', 'Plataformas Ponzi y estafas de tareas', 'Ponzi: las ganancias de los primeros participantes salen del dinero de los nuevos. Cuando dejan de entrar fondos, los pagos se frenan. En una estafa de tareas te prometen dinero por ver anuncios o dar clics, muestran un saldo en pantalla y luego exigen una recarga para seguir o retirar. Un primer pago pequeño puede servir de gancho.', 'Desconfía de los rendimientos fijos sin una actividad verificable, la presión para invitar gente y los cobros para liberar un saldo. Antes de entregar dinero, verifica quién opera la oferta, de dónde salen los pagos y qué condiciones de retiro aplica. Si te exigen depositar para cobrar por una tarea, detente.', [['Cómo funciona un Ponzi · Investor.gov', sources.ponzi], ['Estafas de tareas · FTC', sources.tasks]]],
      ['adselect', 'AdSelect y las ofertas por ver anuncios', 'En páginas que usan el nombre AdSelect se anuncian recompensas por actividades publicitarias. Una página que se presenta como AdSelect también advierte sobre supuestos administradores que prometen ganancias o cobran para desbloquear saldos. Esa advertencia es una declaración de la propia plataforma. No encontramos una resolución de autoridad que clasifique a AdSelect como Ponzi.', 'Si alguien te contacta con ese nombre, verifica por separado el dominio y quién te escribe. Si te piden una recarga, criptomonedas o un pago para retirar, corta el contacto y guarda capturas. Un nombre conocido o un comprobante compartido en un grupo no verifican la oferta.'],
      ['operadoras', 'Falsos técnicos de telefonía móvil', 'Ejemplos ficticios: «Te cambiamos el plan y necesitamos el código» o «Si no haces un pago móvil en bolívares hoy, te cortamos la línea». Movistar Venezuela documentó llamadas que usaban una supuesta actualización a 5G para conseguir códigos de WhatsApp. El mismo tipo de engaño puede usar el nombre de cualquier operadora.', 'Cuelga y revisa tu saldo, factura o plan desde la app o el sitio oficial de tu operadora. No dictes códigos de SMS ni escanees un QR que te envíen para activar el plan. Si hay un saldo pendiente, págalo por el canal que confirmaste por tu cuenta.', [['Alerta sobre estafas telefónicas · Movistar Venezuela (PDF)', sources.movistar]]],
      ['citaciones', 'Falsos funcionarios y citaciones', 'Una persona dice ser del CICPC u otro organismo y afirma que hay una denuncia en tu contra. Puede enviar por WhatsApp una supuesta boleta con sellos y firmas, y exigir dinero o datos para detener el trámite. La dirección del CICPC alertó sobre el uso de formatos falsos de citación con fines de extorsión.', 'Corta la conversación. Conserva el mensaje y verifica la supuesta citación con la dependencia correspondiente, usando un contacto obtenido por tu cuenta o acudiendo a su sede. Evita los números y enlaces de la boleta dudosa y no transfieras para cancelar el supuesto trámite.', [['Advertencia del director del CICPC recogida por La Prensa de Monagas', sources.citations]]]
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
    intro: 'An investment promising daily returns, a supposed technician asking for a code, and a fake police summons can all reach the same phone. Learn how each tactic works and what to do if you already responded.',
    contents: 'In this issue', response: 'If you already paid or shared information',
    topics: [
      ['ponzi', 'Ponzi schemes and task scams', 'A Ponzi scheme pays earlier participants with money from newer ones. Payments dry up when new funds stop coming in. A task scam promises money for watching ads or clicking, shows a balance on screen, then asks you to top up to continue or withdraw. A small initial payout can be bait.', 'Watch for fixed returns without a verifiable business, pressure to recruit, and fees to unlock a balance. Check who operates the offer, where the payouts come from, and the withdrawal terms before sending money. Stop if asked to deposit money to get paid for a task.', [['How Ponzi schemes work · Investor.gov', sources.ponzi], ['Task scams · FTC (Spanish)', sources.tasks]]],
      ['adselect', 'AdSelect and offers to watch ads', 'Pages using the AdSelect name advertise rewards for advertising activities. A page presenting itself as AdSelect also warns of supposed administrators promising returns or charging to unlock balances. This is the platform’s own statement. We found no ruling from an authority classifying AdSelect as a Ponzi scheme.', 'If someone approaches you using that name, independently verify the domain and who contacted you. If asked for a top-up, cryptocurrency, or a fee to withdraw, stop responding and save screenshots. A familiar name or payment receipt shared in a group cannot verify the offer.'],
      ['operadoras', 'Fake mobile carrier technicians', 'Fictional examples include “We’re upgrading your plan and need your code” and “Send a Pago Móvil payment in bolívares today or we’ll cut off your line.” Movistar Venezuela documented calls using a supposed 5G upgrade to obtain WhatsApp codes. The same tactic can use any carrier’s name.', 'Hang up and check your balance, bill, or plan through your carrier’s official app or website. Keep SMS codes private and avoid QR codes sent to activate your plan. If you owe money, pay through the channel you independently confirmed.', [['Phone fraud warning · Movistar Venezuela (Spanish PDF)', sources.movistar]]],
      ['citaciones', 'Impersonated officials and fake summonses', 'Someone claiming to be from Venezuela’s CICPC investigative police or another agency says a complaint has been filed against you. They may send a supposed summons over WhatsApp with seals and signatures, then demand money or information to stop proceedings. The CICPC director warned that fake summons forms were being used for extortion.', 'End the conversation. Save the message and verify the summons with the relevant office using independently obtained contact details or by visiting in person. Avoid the phone numbers and links on the suspicious notice and decline requests to transfer money to cancel proceedings.', [['CICPC director’s warning reported by La Prensa de Monagas (Spanish)', sources.citations]]]
    ],
    steps: [
      ['If you sent money', 'Contact your bank or payment provider immediately through an official channel. Report the transaction and ask what action they can take. Save receipts, the recipient details, and the date. Avoid paying anyone who promises to recover the money.'],
      ['If you gave out a WhatsApp code', 'Follow the official instructions to re-register your number. Warn your contacts through another channel. Once you regain access, review linked devices and enable two-step verification.'],
      ['If someone threatened you or impersonated an official', 'Save chats, numbers, screenshots, and documents you received. Take the evidence to a CICPC office to report the incident. Keep the originals and avoid exposing personal details when warning others.']
    ],
    recovery: 'How to recover your account · WhatsApp', prevention: 'How to protect yourself'
  }
];

function magazinePage(i, { head, header, footer, esc }) {
  const issue = editions[i];
  const issueLabel = i ? 'Issue 01' : 'Edición 01';
  const items = [...issue.topics.map(([id, title]) => [id, title]), ['respuesta', issue.response]];
  return head(i, magazineRoute(i), `${issue.title} | Nexora Solutions`, issue.intro) + header(i, magazineRoute(1 - i)) + `
<main id="contenido" class="magazine">
  <div class="magazine-cover">
    <div class="wrap">
      <p class="eyebrow">${issue.label} · Nexora Solutions</p>
      <h1>${issue.title}</h1>
      <p class="magazine-intro">${issue.intro}</p>
      <p class="magazine-edition">${issueLabel} <span aria-hidden="true">·</span> <time datetime="${editionDate}">${issue.date}</time></p>
    </div>
  </div>
  <div class="wrap magazine-layout">
    <nav class="magazine-index" aria-label="${issue.contents}">
      <h2>${issue.contents}</h2>
      <ol>${items.map(([id, title]) => `<li><a href="#${id}">${esc(title)}</a></li>`).join('')}</ol>
    </nav>
    <div class="magazine-stories">
      ${issue.topics.map(([id, title, detail, prevention, references = []]) => `<article id="${id}">
        <h2>${esc(title)}</h2>
        <p>${esc(detail)}</p>
        <div class="magazine-tip"><h3>${issue.prevention}</h3><p>${esc(prevention)}</p></div>
${references.length ? `        <ul class="magazine-sources">${references.map(([label, url]) => `<li><a href="${esc(url)}">${esc(label)}</a></li>`).join('')}</ul>` : ''}
      </article>`).join('')}
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
