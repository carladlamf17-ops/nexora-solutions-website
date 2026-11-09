const { urlCases } = require('./magazine-url-cases.cjs');

const links = {
  cisa: 'https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Phishing-Tip-Sheet.pdf',
  gmail: 'https://support.google.com/mail/answer/8253?hl=es',
  authentication: 'https://support.google.com/mail/answer/180707?hl=es',
  ftc: 'https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams',
  anatomy: 'https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Authority',
  qr: 'https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information'
};

const guides = [
  {
    title: 'Phishing bajo la lupa: revisa antes de hacer clic',
    intro: 'El mensaje puede tener tu nombre, el logo correcto y buena ortografía. Antes de actuar, separa dos preguntas: ¿quién lo envió y adónde me lleva?',
    headings: ['Inspecciona el enlace sin abrirlo', 'Desarma un correo sospechoso', 'Si ya caíste, actúa según lo que hiciste'],
    linkSteps: [
      ['Mira el destino real.', 'En escritorio, pasa el cursor sobre el botón y lee la dirección que muestra el navegador o el correo. Si no puedes verla completa en el celular, deja el enlace sin abrir y busca la gestión en la app oficial.'],
      ['Ubica el servidor del enlace.', 'Empieza después de https:// y detente en la primera barra, signo de interrogación o numeral. Si hay una arroba en ese tramo, el servidor viene después de ella. En los ejemplos de abajo esperas “banco.example”. Compáralo con la dirección completa de un marcador que ya usas. Evita contar los dos últimos bloques como regla universal: hay terminaciones compuestas como .com.ve.'],
      ['Reconoce lo que puede quedar oculto.', 'HTTPS y el candado protegen la conexión, pero una página falsa también puede usarlos. Un acortador o un QR puede ocultar el destino. Incluso una dirección visible puede redirigir. Si el mensaje pide dinero, claves o códigos, abre el servicio por tu cuenta.']
    ],
    practice: 'El banco de este ejercicio usa banco.example. En cada caso, identifica primero el servidor y luego despliega el análisis. Las direcciones son ficticias y están impresas como texto.',
    emailExample: ['Ejemplo ficticio', 'De: Banco Ejemplo <avisos@acceso.example>', 'Responder a: soporte@tramite.example', 'Asunto: Tu cuenta se bloqueará en 30 minutos', 'Botón visible: «Restablecer acceso»'],
    emailSteps: [
      ['Despliega el remitente.', 'El nombre visible dice “Banco Ejemplo”, pero la dirección viene de acceso.example. Si el cliente de correo muestra “Responder a”, revisa si apunta a otra dirección inesperada. No respondas para comprobarlo.'],
      ['Mira qué te están pidiendo.', 'Un plazo de 30 minutos y un botón para entrar a la cuenta buscan que actúes sin verificar. Si piden un código de SMS o un adjunto inesperado como una factura, consulta por un canal conocido antes de abrirlo. Un nombre de archivo como factura.pdf.exe termina en .exe.'],
      ['Usa las pistas de Gmail.', 'Abre el detalle junto al nombre del remitente y comprueba “enviado por” y “firmado por” cuando aparezcan. Un mensaje puede estar autenticado para un dominio controlado por el atacante. Si algo no cuadra, usa la opción de denunciar phishing. En el trabajo, avisa a soporte por el canal interno.']
    ],
    recovery: [
      ['Solo abriste el enlace.', 'Cierra la página. Si se descargó un archivo, evita abrirlo. Si abriste un archivo sospechoso o instalaste algo, avisa a soporte o ejecuta un análisis de seguridad actualizado.'],
      ['Ingresaste una clave o un código.', 'Entra desde la app o web oficial con un dispositivo confiable. Cambia la clave, cierra otras sesiones y revisa el correo o teléfono de recuperación. Cambia la misma clave en cualquier otro servicio donde la reutilizaste.'],
      ['Diste datos bancarios o autorizaste un pago.', 'Llama de inmediato al banco por su canal oficial. Pide que revisen los movimientos y guarda el mensaje, la hora y las referencias.']
    ],
    references: ['CISA · Señales de phishing (PDF)', 'Gmail · Cómo denunciar phishing', 'Gmail · Cómo revisar la autenticación', 'FTC · Qué hacer si respondiste', 'MDN · Cómo se compone la dirección', 'FTC · Enlaces ocultos en códigos QR']
  },
  {
    title: 'Phishing under the microscope: check before you click',
    intro: 'The message can have your name, the right logo and perfect spelling. Before acting, ask two separate questions: who sent it, and where does the link go?',
    headings: ['Inspect a link without opening it', 'Take apart a suspicious email', 'If you fell for it, act based on what you did'],
    linkSteps: [
      ['Look at the actual destination.', 'On a desktop, hover over the button and read the address shown by the browser or email client. If you cannot see it in full on mobile, leave it unopened and look for the request in the official app.'],
      ['Find the server in the link.', 'Start after https:// and stop at the first slash, question mark or hash sign. If that part contains an at sign, the server follows it. In the examples below you expect “banco.example”. Compare the full address with one you already bookmarked. Avoid assuming the last two labels always identify the owner. Some public suffixes have multiple labels, such as .com.ve.'],
      ['Recognize what can stay hidden.', 'HTTPS and the padlock protect the connection, but a fake site can use them too. A short link or QR code can hide the destination. Even a visible address can redirect. If the message asks for money, passwords or codes, open the service yourself.']
    ],
    practice: 'The bank in this exercise uses banco.example. Identify the server in each case, then expand the breakdown. The fictional URLs are shown as plain text.',
    emailExample: ['Fictional example', 'From: Banco Ejemplo <avisos@acceso.example>', 'Reply-To: soporte@tramite.example', 'Subject: Your account will be locked in 30 minutes', 'Visible button: “Restore access”'],
    emailSteps: [
      ['Expand the sender details.', 'The display name says “Banco Ejemplo” but the address is at acceso.example. If your client shows a Reply-To address, check whether it points somewhere unexpected. Avoid replying to verify it.'],
      ['Look at what they ask you to do.', 'A 30-minute deadline and a sign-in button are meant to get you to act before checking. If they ask for an SMS code or send an unexpected attachment such as an invoice, verify through a known channel first. A filename such as invoice.pdf.exe ends in .exe.'],
      ['Use Gmail’s clues.', 'Open the details next to the sender and check “mailed by” and “signed by” if shown. A message can be authenticated for a domain controlled by the attacker. If something looks wrong, use the report phishing option. At work, notify IT through your internal channel.']
    ],
    recovery: [
      ['You only opened the link.', 'Close the page. If it downloaded a file, leave it unopened. If you opened a suspicious file or installed something, notify IT or run an up-to-date security scan.'],
      ['You entered a password or code.', 'Use the official app or website on a trusted device. Change the password, sign out other sessions and review the recovery email or phone number. Change that password on any other service where you reused it.'],
      ['You shared banking details or authorized a payment.', 'Call your bank immediately through its official channel. Ask it to review your transactions and save the message, time and references.']
    ],
    references: ['CISA · Phishing warning signs (PDF)', 'Gmail · How to report phishing', 'Gmail · How to check authentication', 'FTC · What to do if you responded', 'MDN · URL authority', 'FTC · Links hidden in QR codes']
  }
];

function phishingGuide(i, esc) {
  const g = guides[i];
  const list = items => `<ol>${items.map(([title, detail]) => `<li><strong>${esc(title)}</strong> ${esc(detail)}</li>`).join('')}</ol>`;
  return `<article id="guia-phishing" class="magazine-phishing">
    <h2>${esc(g.title)}</h2>
    <p>${esc(g.intro)}</p>
    <h3>${esc(g.headings[0])}</h3>
    ${list(g.linkSteps)}
    <div class="magazine-evidence">
      <p>${esc(g.practice)}</p>
      ${urlCases(i, esc)}
    </div>
    <h3>${esc(g.headings[1])}</h3>
    <div class="magazine-evidence">
      <strong>${esc(g.emailExample[0])}</strong>
      <p>${g.emailExample.slice(1).map(esc).join('<br>')}</p>
    </div>
    ${list(g.emailSteps)}
    <h3>${esc(g.headings[2])}</h3>
    ${list(g.recovery)}
    <ul class="magazine-sources">${Object.values(links).map((url, n) => `<li><a href="${esc(url)}">${esc(g.references[n])}</a></li>`).join('')}</ul>
  </article>`;
}

module.exports = { phishingGuide, phishingTitle: i => guides[i].title };
