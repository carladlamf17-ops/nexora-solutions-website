module.exports = (i,formationUrl='#formacion',heading='h2') => {
  const rows=i?[
    ['Networks','Connectivity and service exposure.'],
    ['Access','Accounts, permissions and responsibilities.'],
    ['Systems','Configurations and protection practices.']
  ]:[
    ['Redes','Conectividad y exposición de servicios.'],
    ['Accesos','Cuentas, permisos y responsabilidades.'],
    ['Sistemas','Configuraciones y prácticas de protección.']
  ];
  return `<aside class="security-panel"><div class="security-panel-head"><span class="security-panel-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="m12 2 8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V6l8-4Z"/><path d="m8 12 3 3 5-6"/></svg></span><span>NEXORA / CYBERSECURITY</span><span class="security-panel-arrow" aria-hidden="true">↗</span></div><p class="security-panel-kicker">${i?'SECURITY FOR YOUR OPERATIONS':'SEGURIDAD PARA TU OPERACIÓN'}</p><${heading}>${i?'Understand.<br>Strengthen. Protect.':'Conocer.<br>Fortalecer. Proteger.'}</${heading}><div class="security-panel-areas">${rows.map((r,n)=>`<div><span class="security-area-index" aria-hidden="true">0${n+1}</span><div><strong>${r[0]}</strong><p>${r[1]}</p></div></div>`).join('')}</div><a class="security-panel-credential" href="${formationUrl}"><span class="security-panel-logo"><img src="/assets/portfolio/cisco.svg" alt="Cisco" width="216" height="114"></span><span><small>${i?'STAFF CERTIFICATIONS':'CERTIFICACIONES DEL PERSONAL'}</small><strong>CCNA <span>·</span> CyberOps</strong><span class="security-credential-link">${i?'Explore team education':'Conoce la formación del equipo'} ↗</span></span></a></aside>`;
};
