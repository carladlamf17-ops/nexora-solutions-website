const styles = {
 'desarrollo-software': ['#5363ff','#eaeaff','#17184c','code',['A MEDIDA','CUSTOM'],['Gestión','Management']],
 'sistemas-contables': ['#157dce','#e4f3ff','#092d53','chart',['FINANZAS','FINANCE'],['Contabilidad','Accounting']],
 'sistemas-inventario': ['#bf641b','#fff0dd','#58341b','box',['INVENTARIO','INVENTORY'],['Inventario','Inventory']],
 'automatizacion-procesos': ['#7950ce','#f0e8ff','#32205c','flow',['AUTOMATIZACIÓN','AUTOMATION'],['Procesos','Workflows']],
 'sistemas-administrativos': ['#14816b','#dff7ef','#123d38','grid',['ADMINISTRACIÓN','ADMINISTRATION'],['Administración','Administration']],
 'sistemas-comerciales': ['#bd456d','#ffe8f0','#57243b','users',['COMERCIAL','SALES'],['Clientes','Customers']],
 'sistemas-operativos': ['#156e9c','#e0f5ff','#123b50','doc',['OPERACIONES','OPERATIONS'],['Operaciones','Operations']],
 'ciberseguridad': ['#4462ed','#e6ebff','#111d44','shield',['CYBERSECURITY','CYBERSECURITY'],['Seguridad','Security']]
};
const paths = {
 code:'<path d="m10 8-4 4 4 4m4-8 4 4-4 4m-1-11-2 22"/>',
 chart:'<path d="M4 4v16h16M8 15v-4m5 4V7m5 8v-5"/>',
 box:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5M3 8l9 5v9M7.5 5.5l9 5V15"/>',
 flow:'<rect x="8" y="2" width="8" height="5" rx="1"/><rect x="1" y="17" width="8" height="5" rx="1"/><rect x="15" y="17" width="8" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 users:'<circle cx="9" cy="7" r="4"/><path d="M2 21v-3a7 7 0 0 1 14 0v3M17 3a4 4 0 0 1 0 8m3 4a7 7 0 0 1 2 5"/>',
 doc:'<path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8m-8 4h5"/>',
 shield:'<path d="m12 2 9 4v6c0 5-5 9-9 11-4-2-9-6-9-11V6l9-4Z"/><path d="m8 12 3 3 5-6"/>'
};
function icon(type){return `<svg viewBox="0 0 24 25" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[type]||paths.code}</svg>`;}
function theme(s){const v=styles[s.slug]||styles['desarrollo-software'];return `--accent:${v[0]};--soft:${v[1]};--deep:${v[2]}`;}
function config(s){return styles[s.slug]||styles['desarrollo-software'];}
const projects = require('./projects.cjs');
const projectMap = {'desarrollo-software':'reaccion-gps','sistemas-contables':'ferrearca','sistemas-inventario':'ferrearca','automatizacion-procesos':'rainca','sistemas-administrativos':'ferrearca','sistemas-comerciales':'catalogo-ferrearca','sistemas-operativos':'rainca'};
function visual(s,i){
 if(s.slug==='ciberseguridad') return require('./security-panel.cjs')(i);
 const p=projects.find(p=>p.slug===projectMap[s.slug])||projects[0];
 return `<figure class="portfolio-proof"><div class="proof-label"><span>${i?'PROJECT FROM OUR PORTFOLIO':'PROYECTO DEL PORTAFOLIO'}</span><span>↗</span></div><a class="proof-image" href="${i?'/en':''}/proyectos/${p.slug}/"><img src="/assets/screens/${p.image}" alt="${i?'Actual application screen':'Pantalla real de la aplicación'} ${p.name}" width="${p.width||1440}" height="${p.height||900}" fetchpriority="high"></a><figcaption><div><strong>${p.name}</strong><p>${p.caption[i]}</p></div><a href="${i?'/en':''}/proyectos/${p.slug}/">${i?'View project':'Ver proyecto'} ↗</a></figcaption></figure>`;
}
const cardCopy = {
 'desarrollo-software': {
  summary:['Una solución propia para conectar las áreas, las personas y los procesos de tu empresa.','Your own solution for connecting business departments, people and workflows.'],
  tags:[['Módulos conectados','Web y escritorio','Aplicaciones móviles'],['Connected modules','Web and desktop','Mobile applications']]
 },
 'sistemas-contables': {
  summary:['Lleva la operación comercial a registros financieros que tu equipo pueda consultar y revisar.','Connect commercial operations with financial records your team can review.'],
  tags:[['Caja y bancos','Conciliación','Reportes contables'],['Cash and banks','Reconciliation','Accounting reports']]
 },
 'sistemas-inventario': {
  summary:['Organiza productos, existencias y movimientos, desde la recepción hasta el conteo físico.','Organise products, stock and movements, from goods receipt to physical counts.'],
  tags:[['Productos','Entradas y salidas','Conteo físico'],['Products','Receipts and issues','Stock counts']]
 },
 'automatizacion-procesos': {
  summary:['Conecta tus herramientas y transforma tareas repetitivas en un proceso con reglas claras.','Connect your tools and turn repetitive tasks into a workflow with clear rules.'],
  tags:[['Integraciones','Validaciones','Documentos'],['Integrations','Validation','Documents']]
 },
 'sistemas-administrativos': {
  summary:['Centraliza los documentos y registros internos con responsabilidades definidas para cada usuario.','Centralise internal documents and records with clear responsibilities for each user.'],
  tags:[['Proveedores','Personal','Roles y permisos'],['Suppliers','Staff','Roles and permissions']]
 },
 'sistemas-comerciales': {
  summary:['Acompaña cada venta con información de productos, clientes, cotizaciones y seguimiento.','Support each sale with product, customer, quotation and follow-up information.'],
  tags:[['Catálogos','Cotizaciones','Clientes y cobros'],['Catalogues','Quotations','Customers and collections']]
 },
 'sistemas-operativos': {
  summary:['Conecta el trabajo de campo con la oficina mediante registros, evidencia y reportes por área.','Connect field work with the office through records, evidence and departmental reports.'],
  tags:[['Planillas','Evidencia y firmas','Reportes'],['Forms','Evidence and signatures','Reports']]
 },
 'ciberseguridad': {
  summary:['Revisa los accesos, las configuraciones y la protección de los sistemas que sostienen tu operación.','Review access, configurations and protection for the systems behind your operations.'],
  tags:[['Redes','Accesos','Protección de sistemas'],['Networks','Access','System protection']]
 }
};
function cardContent(s,i){const c=cardCopy[s.slug];return {summary:c.summary[i],tags:c.tags[i]};}
module.exports={icon,theme,config,visual,cardContent};
