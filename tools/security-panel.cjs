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
  const paths=[
    '<rect x="8" y="2" width="8" height="5" rx="1"/><rect x="2" y="17" width="7" height="5" rx="1"/><rect x="15" y="17" width="7" height="5" rx="1"/><path d="M12 7v5M5.5 17v-5h13v5"/>',
    '<circle cx="8" cy="9" r="5"/><path d="m12 13 9 9m-5-5 3-3m0 6 3-3"/>',
    '<path d="m12 2 8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V6l8-4Z"/><path d="m8 12 3 3 5-6"/>'
  ];
  return `<aside class="security-panel"><div class="security-panel-head"><span class="security-panel-eyebrow">NEXORA / CYBERSECURITY</span><span class="security-panel-tag">${i?'FOR BUSINESSES':'PARA EMPRESAS'}</span></div><${heading}>${i?'Networks, access<br>and systems.':'Redes, accesos<br>y sistemas.'}</${heading}><div class="security-panel-areas">${rows.map((r,n)=>`<div><span class="security-area-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="25" height="25">${paths[n]}</svg></span><div><strong>${r[0]}</strong><p>${r[1]}</p></div></div>`).join('')}</div><a class="security-panel-credential" href="${formationUrl}"><span class="security-panel-logo"><img src="/assets/portfolio/cisco.svg" alt="Cisco" width="216" height="114"></span><span class="security-credential-copy"><small>${i?'STAFF CERTIFICATIONS':'CERTIFICACIONES DEL PERSONAL'}</small><strong><span>CCNA</span><span>CyberOps</span></strong><span class="security-credential-link">${i?'Explore team education':'Conoce la formación del equipo'} ↗</span></span></a></aside>`;
};
