module.exports = (projects,route,i) => {
  const items = projects.filter(p=>!p.duplicateBrand).map(p=>({name:p.name,logo:p.logo,url:route(p,i),caption:i?'Nexora project':'Proyecto Nexora'}));
  items.push({name:'Cisco',logo:'cisco.svg',url:`${i?'/en':''}/servicios/ciberseguridad/#formacion`,caption:i?'CCNA · CyberOps · Certified staff':'CCNA · CyberOps · Personal certificado'});
  items.push({name:'Lone Star College',logo:'lone-star-college.svg',url:`${i?'/en':''}/servicios/ciberseguridad/#formacion`,caption:i?'Team academic training':'Formación académica del equipo'});
  const group = duplicate => `<div class="logo-group" ${duplicate?'aria-hidden="true" inert':''}>${items.map(p=>`<a class="logo-item" href="${p.url}"><img src="/assets/portfolio/${p.logo}" width="210" height="86" alt="${p.name}" loading="lazy"><span>${p.caption}</span></a>`).join('')}</div>`;
  return `<section id="referencias" class="logo-reel" aria-label="${i?'Projects and team education':'Proyectos y formación del equipo'}"><p class="logo-reel-label">${i?'PROJECTS & TEAM EDUCATION':'PROYECTOS Y FORMACIÓN DEL EQUIPO'}</p><div class="logo-window"><div class="logo-track">${group(false)}${group(true)}</div></div></section>`;
};
