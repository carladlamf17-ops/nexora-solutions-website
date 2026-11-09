const cases = [
  ['https://', 'banco.example', '/validar',
    ['Punto de comparación', 'Coincide con el servidor que esperamos en este ejercicio. La ruta /validar solo identifica una página en ese servidor. El dominio por sí solo no demuestra que el correo sea legítimo.', 'Abre la app del banco o tu marcador y comprueba si existe la misma solicitud.'],
    ['Baseline', 'This matches the server we expect in the exercise. The /validar path identifies a page on that server. The domain alone does not prove the email is legitimate.', 'Open the bank app or your bookmark and check whether the same request appears there.']],
  ['https://', 'banco.acceso.example', '/validar',
    ['La marca como subdominio', 'El servidor completo es banco.acceso.example. En este ejemplo lo controla acceso.example. Quien controla ese dominio puede crear un subdominio llamado banco.', 'Si esperabas banco.example, descarta este enlace y verifica el aviso por separado.'],
    ['Brand in a subdomain', 'The full server is banco.acceso.example. Here, acceso.example controls it. Whoever controls that domain can create a subdomain called banco.', 'If you expected banco.example, leave this link unopened and verify the notice separately.']],
  ['https://', 'acceso.example', '/banco.example/validar',
    ['La marca en la ruta', 'La primera barra después del servidor separa acceso.example de la ruta. El texto banco.example que viene después es un nombre elegido para la página y puede imitar cualquier marca.', 'Compara lo que está antes de esa barra con tu dirección conocida. Aquí el servidor es distinto.'],
    ['Brand in the path', 'The first slash after the server separates acceso.example from the path. The banco.example text that follows is a page name and can imitate any brand.', 'Compare what comes before that slash with the address you already know. Here the server is different.']],
  ['https://banco.example@', 'acceso.example', '/validar',
    ['La trampa de la arroba', 'El navegador interpreta banco.example como información de usuario. El servidor viene después de la arroba. Que la marca aparezca inmediatamente después de https:// hace que el inicio parezca convincente.', 'Si ves ese formato en un enlace de cobro o acceso, deja el enlace cerrado y entra al servicio por tu cuenta.'],
    ['The at-sign trick', 'The browser interprets banco.example as user information. The server follows the at sign. Putting the brand immediately after https:// makes the beginning look convincing.', 'If you see this format in a payment or sign-in link, leave it unopened and go to the service yourself.']],
  ['https://', 'banc0.example', '/seguridad',
    ['Un cero se hace pasar por una letra', 'La última letra de banco fue sustituida por el número 0. La palabra seguridad en la ruta y el candado no cambian el servidor.', 'Compara el nombre carácter por carácter con el de tu marcador. Si el navegador muestra una etiqueta que empieza por xn--, puede representar un dominio internacionalizado legítimo, pero revisa el nombre por un canal independiente si esperabas otro.'],
    ['A zero posing as a letter', 'The final letter in banco was replaced by the digit 0. The word seguridad in the path and the padlock do not change the server.', 'Compare the name character by character with your bookmark. A label beginning with xn-- may represent a legitimate internationalized domain, but verify independently if you expected a different name.']],
  ['https://', 'go.example', '/8Qx',
    ['Un enlace corto oculta el destino final', 'La primera petición iría a go.example. El código 8Qx no dice adónde podría reenviarte ese servicio. Un QR de un supuesto cobro también puede esconder la dirección hasta que lo lees.', 'Si el mensaje no era esperado, evita abrirlo o escanearlo. Confirma el cobro desde la app o el sitio que ya usas.'],
    ['A short link hides the final destination', 'The first request goes to go.example. The code 8Qx does not tell you where that service could send you next. A QR code for a supposed payment can also hide the address until read.', 'If the message was unexpected, avoid opening or scanning it. Confirm the payment request through the app or site you already use.']],
  ['https://', 'banco.example', '/salir?next=https%3A%2F%2Facceso.example%2Fingresar',
    ['Un dominio conocido con posible redirección', 'La primera petición iría a banco.example. El parámetro next contiene https://acceso.example/ingresar codificado. Eso sugiere un destino posterior, pero solo el comportamiento del sitio determina si realmente redirige.', 'Si el enlace viene de un correo que pide iniciar sesión, entra desde tu marcador. No pegues enlaces de restablecimiento o acceso privado en analizadores públicos.'],
    ['A known domain with a possible redirect', 'The first request goes to banco.example. The next parameter contains an encoded https://acceso.example/ingresar. That suggests a later destination, but the site’s behavior determines whether it redirects.', 'If an email asks you to sign in, use your bookmark. Keep password reset and private access links out of public scanning tools.']],
  ['https://', 'acceso.example', '/inicio#https://banco.example',
    ['La marca aparece después del numeral', 'El texto después de # es un fragmento que la página puede interpretar. El navegador sigue contactando primero a acceso.example. La segunda dirección visible no sustituye al servidor.', 'Lee el enlace de izquierda a derecha y separa el servidor antes de evaluar el resto. Este enlace no coincide con el banco del ejercicio.'],
    ['The brand comes after the hash sign', 'Text after # is a fragment that the page can interpret. The browser still contacts acceso.example first. The second visible address does not replace the server.', 'Read the URL from left to right and separate the server before checking the rest. This link does not match the bank in the exercise.']]
];

function urlCases(i, esc) {
  const labels = i ? ['First server', 'How to read it', 'What to do'] : ['Servidor inicial', 'Cómo leerlo', 'Qué hacer'];
  return cases.map(([start, host, end, es, en], n) => {
    const [title, explanation, action] = i ? en : es;
    return `<details class="magazine-url-case">
      <summary><span class="magazine-url-number">${String(n + 1).padStart(2, '0')}</span><strong>${esc(title)}</strong><code>${esc(start + host + end)}</code></summary>
      <div class="magazine-url-breakdown">
        <p><code>${esc(start)}<mark>${esc(host)}</mark>${esc(end)}</code></p>
        <dl>
          <dt>${labels[0]}</dt><dd><code>${esc(host)}</code></dd>
          <dt>${labels[1]}</dt><dd>${esc(explanation)}</dd>
          <dt>${labels[2]}</dt><dd>${esc(action)}</dd>
        </dl>
      </div>
    </details>`;
  }).join('');
}

module.exports = { urlCases };
