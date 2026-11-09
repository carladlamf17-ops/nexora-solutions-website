const records = {
  'guia-phishing': {
    refs: [
      ['FTC · Phishing', 'https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams'],
      ['Gmail · Autenticación / Authentication', 'https://support.google.com/mail/answer/180707'],
      ['MDN · URL authority', 'https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Authority']
    ],
    es: [
      'El correo que se hace pasar por tu banco',
      'El nombre visible, la dirección del remitente y el destino del botón son tres datos distintos. Revisarlos por separado permite detectar un mensaje que copia el diseño del banco.',
      'La FTC documenta correos que inventan problemas con cuentas o facturas para que abras enlaces. Gmail explica cómo consultar la autenticación del dominio. Un correo autenticado para el dominio del atacante sigue pudiendo ser phishing.',
      ['De: Banco Ejemplo <avisos@acceso.example>', 'Responder a: soporte@tramite.example', 'Botón: Restablecer acceso', 'Destino al pasar el cursor: https://banco.acceso.example/validar'],
      ['Fíjate en lo que controla el atacante', 'Puede poner el nombre y logo del banco, añadir la palabra banco como subdominio y pedir respuesta a otra dirección. En el ejemplo, el servidor es banco.acceso.example, bajo acceso.example.'],
      ['Usa una referencia independiente', 'Abre la app bancaria o tu marcador. Si allí no ves el aviso, consulta al banco por su canal conocido. Un candado solo indica que la conexión está cifrada.'],
      ['Despliega el remitente y compara el dominio completo con uno que ya conozcas.', 'En escritorio, pasa el cursor sobre el botón sin abrirlo. En móvil, si no puedes leer la dirección completa, usa directamente la app oficial.', 'Reporta el correo como phishing. Si entregaste una clave, cámbiala desde el servicio oficial y cierra las demás sesiones.']
    ],
    en: [
      'The email impersonating your bank',
      'The display name, sender address, and button destination are separate clues. Checking them independently exposes messages that copy a bank’s visual design.',
      'The FTC documents emails that invent account problems or invoices to get people to open links. Gmail explains how to inspect domain authentication. A message authenticated for an attacker-controlled domain can still be phishing.',
      ['From: Banco Ejemplo <avisos@acceso.example>', 'Reply-To: soporte@tramite.example', 'Button: Restore access', 'Hover destination: https://banco.acceso.example/validar'],
      ['Look at what the attacker controls', 'They can copy the bank name and logo, put banco in a subdomain, and direct replies elsewhere. The example server is banco.acceso.example, under acceso.example.'],
      ['Use an independent reference', 'Open your banking app or bookmark. If you do not see the notice there, contact the bank through a known channel. A padlock only indicates an encrypted connection.'],
      ['Expand the sender and compare the full domain with one you already know.', 'On desktop, hover over the button without opening it. On mobile, use the official app if you cannot read the full address.', 'Report phishing. If you gave away a password, change it in the official service and sign out other sessions.']
    ]
  },
  'dolares-whatsapp': {
    es: [
      '«Prima, cambié de número»: así arranca la venta falsa de dólares',
      'El primer mensaje busca que reconozcas a un familiar. La oferta, la urgencia y el cambio de beneficiario aparecen cuando ya confías en el chat.',
      'Venevisión recogió una alerta del CICPC sobre la modalidad. WhatsApp ofrece instrucciones para recuperar una cuenta comprometida. La conversación de abajo ilustra el patrón y no pertenece a una denuncia real.',
      ['«Prima, cambié de número»', '«Estoy vendiendo dólares baratos»', '«Hazme el Pago Móvil a nombre de otra persona y te los aparto»'],
      ['Lo que muestra el chat', 'Una foto, un audio o un número conocido pueden darte confianza. También es posible que alguien haya tomado el control de la cuenta real.'],
      ['Lo que debes confirmar', 'Llama al número que ya tenías, por fuera de ese chat, o pregunta en persona. Confirma quién vende, el monto y quién recibirá el pago.'],
      ['Detén el pago si no puedes verificar la oferta por otra vía.', 'Si hubo suplantación, avisa al familiar por otro canal y conserva el chat y los datos del destinatario.', 'Si ya transferiste, contacta a tu banco por un canal oficial y ten a mano la referencia.']
    ],
    en: [
      '“Cousin, I got a new number”: how the fake dollar sale starts',
      'The first message seeks recognition. The offer, urgency, and new payment recipient appear once you trust the conversation.',
      'Venevisión reported the CICPC warning. WhatsApp provides account recovery instructions. The conversation below illustrates the pattern and comes from no actual complaint.',
      ['“Cousin, I got a new number.”', '“I have cheap dollars.”', '“Send the Pago Móvil payment to this other person and I’ll set them aside.”'],
      ['What the chat shows', 'A photo, voice note, or familiar number can build trust. Someone may also have taken over the real account.'],
      ['What you should confirm', 'Call the number you already saved outside that chat or ask in person. Confirm who is selling, the amount, and who will receive payment.'],
      ['Pause payment if you cannot confirm the offer independently.', 'If it was impersonation, alert your relative through another channel and save the chat and recipient details.', 'If you already paid, contact your bank through its official channel and keep the reference handy.']
    ]
  },
  'pago-movil-falso': {
    es: [
      'La captura dice «pagado». ¿Qué dicen los movimientos?',
      'El fraude funciona cuando un comercio entrega por una imagen. Dos pedidos pueden costar lo mismo y una captura auténtica puede corresponder a otra venta.',
      'La guía pública de Banesco explica que las operaciones se pueden consultar desde los movimientos de la cuenta. La ubicación exacta de esa función varía según el banco.',
      ['Pedido A: Bs. 1.250 · referencia ficticia 4821', 'Pedido B: Bs. 1.250 · captura que repite la referencia 4821', 'Movimientos: aparece un solo abono'],
      ['Comprobante enviado', 'Una imagen permite leer un monto y una referencia. Puede haber sido alterada, reutilizada o enviada antes de que se confirme un abono.'],
      ['Registro de tu banco', 'Entra por tu cuenta, elige la cuenta receptora y busca un movimiento que corresponda al pedido. Usa la referencia si aparece y evita asociar un abono a dos entregas.'],
      ['Registra pedido, importe, fecha y referencia disponible.', 'Si el movimiento no aparece, deja pendiente la entrega y cualquier devolución. Si la app no funciona, consulta al banco.', 'Si ya entregaste, guarda el pedido, la captura y el chat para reportar el hecho.']
    ],
    en: [
      'The screenshot says “paid.” What do your transactions show?',
      'The scam works when a store releases goods based on an image. Two orders can cost the same and a genuine screenshot can belong to a different sale.',
      'Banesco’s public guide explains that operations are visible in the account’s transactions. The exact location of that feature varies by bank.',
      ['Order A: Bs. 1,250 · fictional reference 4821', 'Order B: Bs. 1,250 · screenshot repeats reference 4821', 'Transactions: only one credit appears'],
      ['The receipt you were sent', 'An image displays an amount and reference. It could be altered, reused, or sent before a credit is confirmed.'],
      ['Your bank’s record', 'Open your bank yourself, select the receiving account, and find a transaction matching the order. Use the reference if available and match each credit to just one delivery.'],
      ['Record the order, amount, date, and available reference.', 'If the transaction is missing, hold the order and any refund. Contact the bank if its app is unavailable.', 'If you already handed it over, save the order, screenshot, and chat to report the incident.']
    ]
  },
  ponzi: {
    es: [
      'El saldo sube. ¿De dónde sale la plata?',
      'Un tablero con números verdes y un retiro pequeño pueden convencerte de depositar más. La pregunta que importa es quién financia esos pagos.',
      'Investor.gov describe cómo un Ponzi paga a participantes anteriores con aportes nuevos. La FTC documenta una modalidad distinta, la estafa de tareas, que muestra comisiones ficticias y exige depósitos para cobrar.',
      ['Primer depósito: USD 100', 'Saldo que muestra la app: USD 200', 'Retiro inicial: USD 10', 'Nuevo mensaje: «Recarga para liberar el saldo»'],
      ['Un pago temprano', 'Demuestra que hubo una transferencia. El origen de esos fondos, las ganancias del negocio y la posibilidad de retirar el resto requieren evidencia aparte.'],
      ['Una oferta verificable', 'Busca la identidad legal del operador y su autorización cuando corresponda, por un canal independiente. Pide una explicación del negocio y reglas de retiro por escrito.'],
      ['Identifica quién recibe el dinero y comprueba si coincide con el operador.', 'Pregunta qué actividad genera el rendimiento. Investiga promesas de ganancias fijas o bonos por reclutar.', 'Si exigen una recarga para cobrar o presionan para depositar hoy, detén el pago y guarda el material.']
    ],
    en: [
      'Your balance goes up. Where does the money come from?',
      'A dashboard with green numbers and a small withdrawal can persuade you to put in more. What matters is who funds those payments.',
      'Investor.gov explains how Ponzi schemes pay earlier participants with new contributions. The FTC documents a different pattern, task scams that display fictional commissions and demand deposits to cash out.',
      ['First deposit: USD 100', 'Displayed balance: USD 200', 'First withdrawal: USD 10', 'New message: “Top up to unlock the balance.”'],
      ['An early payout', 'It shows money was sent. The source, business earnings, and ability to withdraw the remainder all need separate evidence.'],
      ['A verifiable offer', 'Independently check the operator’s legal identity and authorization where required. Ask how the business works and get the withdrawal terms in writing.'],
      ['Identify the payment recipient and check whether it matches the operator.', 'Ask what generates the returns. Investigate claims of fixed returns or recruitment bonuses.', 'If they demand a top-up or pressure you to deposit today, stop paying and save the materials.']
    ]
  },
  adselect: {
    refs: [['FTC · Estafas de tareas / Task scams', 'https://consumidor.ftc.gov/alertas-para-consumidores/2025/08/como-detectar-y-evitar-las-estafas-de-tareas']],
    es: [
      'AdSelect y la promesa de cobrar por ver anuncios',
      'Una oferta con un nombre conocido puede venir de la plataforma, de un tercero o de alguien que se hace pasar por ella. La identidad y las condiciones deben revisarse antes de depositar.',
      'La edición distingue lo que afirma la plataforma de la alerta general de la FTC sobre estafas de tareas. La fuente de la FTC describe la modalidad y no identifica a AdSelect. No hemos confirmado una resolución oficial que la clasifique como Ponzi.',
      ['Ejemplo de mensaje de un supuesto gestor', '«Tienes un saldo pendiente»', '«Recarga hoy y podrás retirarlo»'],
      ['Una promesa en un chat', 'Un nombre, una captura y un testimonio dejan sin responder quién administra el dominio y quién recibe los fondos.'],
      ['Lo que puedes comprobar', 'Verifica la identidad y las condiciones por separado. Compara el dominio exacto y pide reglas de pago y retiro que puedas conservar.'],
      ['Evita pagar a un supuesto gestor para acceder a ganancias por tareas.', 'Conserva el dominio escrito, el chat y las condiciones que te ofrecieron.', 'Si ya pagaste, contacta a tu proveedor de pagos y evita a quienes prometen recuperar fondos a cambio de otro depósito.']
    ],
    en: [
      'AdSelect and the promise of getting paid to watch ads',
      'An offer using a familiar name can come from the platform, a third party, or an impersonator. Check identity and terms before depositing.',
      'This edition separates the platform’s statements from the FTC’s general task-scam warning. The FTC source describes the pattern and does not name AdSelect. We have not confirmed an official decision classifying it as a Ponzi scheme.',
      ['Example message from a supposed manager', '“You have a pending balance.”', '“Top up today and you can withdraw it.”'],
      ['A promise in a chat', 'A name, screenshot, and testimonial leave two questions open: who operates the domain, and who receives the funds?'],
      ['What you can verify', 'Independently check the identity and terms. Compare the exact domain and ask for payment and withdrawal rules you can keep.'],
      ['Avoid paying a supposed manager to access task earnings.', 'Save the written domain, chat, and terms you were offered.', 'If you paid, contact your payment provider and avoid anyone demanding a new deposit to recover funds.']
    ]
  },
  operadoras: {
    es: [
      '«Te vamos a cortar la línea»: qué busca el falso técnico',
      'La amenaza de suspensión o el anuncio de una actualización pueden encubrir una petición de códigos o dinero. El SMS suele dar la pista más útil.',
      'Movistar Venezuela documentó llamadas en las que alguien prometía una supuesta actualización a 5G y solicitaba un código relacionado con WhatsApp. La nota institucional enlazada es la fuente del caso.',
      ['Llamada: «Para subir a 5G, dime el código que te acaba de llegar»', 'SMS simulado: «Código de registro de WhatsApp. No lo compartas»'],
      ['Lo que dice la llamada', 'El técnico se atribuye autoridad y te da prisa. Que conozca tu nombre, operadora o número aporta poca evidencia sobre su identidad.'],
      ['Lo que indica el SMS', 'Si el texto dice que el código registra WhatsApp, entregarlo puede permitir que otra persona intente registrar la cuenta. Verifica tu plan desde la app de la operadora.'],
      ['Cuelga antes de dictar un código, abrir un enlace o escanear un QR.', 'Revisa el saldo y el plan en la app o web oficial. Si hay deuda, usa el canal que verificaste.', 'Si compartiste el código y perdiste el acceso a WhatsApp, usa su guía oficial de recuperación.']
    ],
    en: [
      '“We’ll cut off your line”: what the fake technician is after',
      'A threat to suspend service or an upgrade announcement can disguise a request for codes or money. The SMS often provides the most useful clue.',
      'Movistar Venezuela documented calls promising an alleged 5G upgrade and asking for a WhatsApp-related code. The linked carrier notice is the source for this case.',
      ['Call: “Read me the code you just received to upgrade to 5G.”', 'Simulated SMS: “WhatsApp registration code. Do not share it.”'],
      ['What the caller claims', 'The caller claims authority and rushes you. Knowing your name, carrier, or phone number gives little evidence of their identity.'],
      ['What the SMS says', 'If the message identifies the code as a WhatsApp registration code, giving it away can let someone try to register the account. Verify your plan in your carrier’s app.'],
      ['Hang up before sharing a code, opening a link, or scanning a QR code.', 'Check your balance and plan through the official app or website. If you owe money, use the channel you verified.', 'If you shared the code and lost WhatsApp access, use its official recovery guide.']
    ]
  },
  citaciones: {
    es: [
      'La citación que termina en una exigencia de dinero',
      'El mensaje empieza con una denuncia y puede incluir una boleta con sellos. El giro llega cuando te piden un pago para evitar el trámite.',
      'La Prensa de Monagas recogió la advertencia del director del CICPC sobre formatos falsos usados para extorsionar. El documento de abajo es una recreación textual sin sellos, firmas, expedientes ni datos personales reales.',
      ['AVISO FICTICIO · Supuesta citación', '«Hay una denuncia en tu contra»', '«Paga hoy y cerramos el caso»'],
      ['Lo que ves en el archivo', 'Una firma, un sello o un nombre copiado pueden parecer oficiales. El remitente controla el número, enlace o cuenta de pago que incluyó en su propio mensaje.'],
      ['Cómo comprobarlo', 'Busca el contacto de la dependencia por separado o consulta en su sede. Explica que recibiste un mensaje y pide orientación para verificarlo.'],
      ['Corta la conversación si te presionan para pagar o entregar datos.', 'Conserva el mensaje original, el archivo, el número y la hora.', 'Verifica con la dependencia y, si hubo intento de extorsión, presenta la evidencia por un canal institucional.']
    ],
    en: [
      'The summons that turns into a demand for money',
      'It starts with a complaint and may include a notice with seals. Then someone asks you to pay to avoid the proceedings.',
      'La Prensa de Monagas reported the CICPC director’s warning about fake forms used for extortion. The sample below is a text recreation without real seals, signatures, case files, or personal data.',
      ['FICTIONAL NOTICE · Alleged summons', '“There’s a complaint against you.”', '“Pay today and we’ll close the case.”'],
      ['What the document shows', 'A copied signature, seal, or name can look official. The sender controls the numbers, links, and payment details in their own message.'],
      ['How to verify', 'Find the agency’s contact independently or go to its office. Explain that you received a message and ask how to verify it.'],
      ['End the conversation if someone pressures you for money or personal data.', 'Keep the original message, file, number, and time.', 'Verify with the agency and submit the evidence through an institutional channel if someone tried to extort you.']
    ]
  },
  'alertas-inversion': {
    es: [
      'Alertas de inversión en Venezuela: qué se publicó y cuándo',
      'Una alerta vigente y un caso histórico responden preguntas distintas. La fecha, la fuente y el alcance importan antes de compartir un nombre.',
      'Venevisión recogió el aviso de Sunaval del 30 de octubre de 2026 sobre ofertas difundidas en WhatsApp y Telegram. Las otras fuentes documentan hechos anteriores y no acreditan captación actual.',
      ['2024 · SolesBot: Unión Radio reportó cese de operaciones tras denuncias.', '2024 · Hyper AI: BeInCrypto recogió reportes de usuarios sobre un presunto Ponzi.', '2025 · HV IJEX: El Estímulo documentó el colapso.', '2026 · Sunaval: alerta sobre la modalidad sin señalar plataformas por nombre.'],
      ['Una publicación histórica', 'Sirve para reconocer patrones y reconstruir una cronología. Hace falta evidencia reciente para afirmar que un sitio sigue captando.'],
      ['Una alerta sobre la modalidad', 'Advierte de ofertas que circulan por canales específicos. Si no da nombres, no permite atribuir el aviso a una plataforma concreta.'],
      ['Busca la fecha y el enlace original antes de reenviar una acusación.', 'Comprueba el nombre legal y el dominio exacto. Un nombre parecido puede corresponder a otro sitio.', 'Consulta al regulador por canales propios cuando la oferta diga estar autorizada.']
    ],
    en: [
      'Investment alerts in Venezuela: what was published and when',
      'A current warning and a historical case answer different questions. Check the date, source, and scope before sharing a name.',
      'Venevisión reported the October 30, 2026 Sunaval warning about offers circulating on WhatsApp and Telegram. The other sources document past cases and do not establish current recruitment.',
      ['2024 · SolesBot: Unión Radio reported that operations stopped after complaints.', '2024 · Hyper AI: BeInCrypto reported users’ allegations of a suspected Ponzi.', '2025 · HV IJEX: El Estímulo reported the collapse.', '2026 · Sunaval: warning about the pattern without naming platforms.'],
      ['A historical report', 'It helps identify patterns and establish a timeline. Current recruitment requires recent evidence.'],
      ['A warning about a pattern', 'It identifies offers circulating through certain channels. Without named platforms, it cannot be attributed to a particular site.'],
      ['Check the date and original link before forwarding an allegation.', 'Confirm the legal name and exact domain. Similar names may belong to different sites.', 'Contact the regulator independently when an offer claims authorization.']
    ]
  }
};

module.exports = { records };
