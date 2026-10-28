// Areas of custom development. Each project defines its own module coverage.
const modules = [
  {
    name:['Contabilidad y finanzas','Accounting and finance'],
    body:['Conecta los registros comerciales con la información que necesita el equipo contable.','Connect commercial records with the information the accounting team needs.'],
    features:[['Caja y bancos','Conciliación y movimientos','Valoración de inventario y reportes contables'],['Cash and banks','Reconciliation and movements','Inventory valuation and accounting reports']],
    service:'sistemas-contables', project:'ferrearca'
  },
  {
    name:['Administración y personal','Administration and staff'],
    body:['Organiza los registros internos y las responsabilidades de quienes usan el sistema.','Organise internal records and the responsibilities of system users.'],
    features:[['Clientes, proveedores y documentos','Usuarios, roles y permisos','Procesos de nómina y beneficios según el alcance'],['Customers, suppliers and documents','Users, roles and permissions','Payroll and benefits workflows based on scope']],
    service:'sistemas-administrativos', project:'ferrearca'
  },
  {
    name:['Inventario y almacén','Inventory and warehouse'],
    body:['Da seguimiento a los productos desde su recepción hasta la salida y el conteo físico.','Follow products from receipt through stock issues and physical counts.'],
    features:[['Productos y consulta de existencias','Entradas, salidas y movimientos','Conteo físico y captura móvil'],['Products and stock enquiries','Receipts, issues and movements','Physical counts and mobile capture']],
    service:'sistemas-inventario', project:'ferrearca'
  },
  {
    name:['Ventas y atención al cliente','Sales and customer service'],
    body:['Relaciona lo que tu cliente consulta con los documentos y el seguimiento de su solicitud.','Connect customer enquiries with documents and request follow-up.'],
    features:[['Catálogos y búsqueda de productos','Cotizaciones, crédito y cobros','Registro y seguimiento de clientes'],['Catalogues and product search','Quotations, credit and collections','Customer records and follow-up']],
    service:'sistemas-comerciales', project:'catalogo-ferrearca'
  },
  {
    name:['Operaciones y documentos','Operations and documents'],
    body:['Lleva el trabajo de campo y sus reportes a un recorrido que el equipo pueda consultar.','Bring field work and its reports into a workflow the team can review.'],
    features:[['Formularios y planillas de trabajo','Evidencia, firmas y revisión','Estados, consultas y reportes por áreas'],['Work forms and records','Evidence, signatures and review','Statuses, enquiries and reports by department']],
    service:'sistemas-operativos', project:'rainca'
  },
  {
    name:['Integraciones y procesos propios','Integrations and custom workflows'],
    body:['Define herramientas para las tareas particulares de tu empresa y conecta las fuentes disponibles.','Define tools for your business-specific tasks and connect available sources.'],
    features:[['Conexión con bases de datos y servicios','Automatización de tareas repetitivas','Aplicaciones web, Windows y móviles'],['Database and service connections','Automation of repetitive tasks','Web, Windows and mobile applications']],
    service:'automatizacion-procesos', project:'reaccion-gps'
  }
];

module.exports = (i,arrow) => `<div class="system-overview"><h3>${i?'Modules shaped around your business.':'Módulos que se adaptan a tu empresa.'}</h3><p>${i?'An accounting, administrative or operational system can share information across departments. We define which modules your business needs, how they connect and which platforms support the work.':'Un sistema contable, administrativo u operativo puede compartir información entre varias áreas. Definimos qué módulos necesita tu empresa, cómo se conectan y en qué plataformas debe trabajar tu equipo.'}</p></div>
  <div class="module-grid">${modules.map((m,n)=>`<article class="module-card"><span class="eyebrow">0${n+1} / ${i?'CUSTOM SYSTEMS':'SISTEMAS A MEDIDA'}</span><h3>${m.name[i]}</h3><p>${m.body[i]}</p><ul>${m.features[i].map(f=>`<li>${f}</li>`).join('')}</ul><div class="module-actions"><a href="${i?'/en':''}/servicios/${m.service}/">${i?'Explore service':'Explorar servicio'} ${arrow}</a><a href="${i?'/en':''}/proyectos/${m.project}/">${i?'View related project':'Ver proyecto relacionado'} ${arrow}</a></div></article>`).join('')}</div>
  <p class="module-scope">${i?'These areas describe our custom development work. Functions, integrations, migration, delivery and support are defined for each project. See the portfolio for the scope and screen context of each system.':'Estas áreas describen nuestro trabajo de desarrollo a medida. Las funciones, integraciones, migración, entrega y soporte se definen para cada proyecto. En el portafolio puedes consultar el alcance y el contexto de las pantallas de cada sistema.'}</p>`;
