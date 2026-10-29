// Shared explanation lives on the home page; service pages link here.
module.exports = i => {
  const delivery=i?[
    ['The agreed system','The developed version and the functions covered by the approved project scope.'],
    ['Deployment arrangements','The installation or deployment environment, required access and responsibilities for putting the system into use.'],
    ['Guidance for your team','The user materials and training sessions included in the proposal, for the people who will use the system.']
  ]:[
    ['El sistema acordado','La versión desarrollada y las funciones comprendidas en el alcance aprobado del proyecto.'],
    ['Puesta en marcha definida','El entorno de instalación o publicación, los accesos necesarios y las responsabilidades para comenzar a utilizar el sistema.'],
    ['Orientación para tu equipo','Los materiales de uso y las sesiones de capacitación incluidos en la propuesta, para las personas que utilizarán el sistema.']
  ];
  const support=i?[
    ['Reporting an issue','We agree on a contact channel and the information needed to review an incident: what happened, the steps taken and any error message.'],
    ['Corrections and maintenance','Coverage, service hours, support duration and response times are defined in the support arrangement.'],
    ['Adding new functions','Enhancements are assessed and quoted with their own scope, so you can decide how to develop the system further.']
  ]:[
    ['Reportar una incidencia','Acordamos un canal de atención y la información para revisar el caso: qué ocurrió, los pasos realizados y cualquier mensaje de error.'],
    ['Correcciones y mantenimiento','La cobertura, los horarios, la duración del acompañamiento y los tiempos de atención se definen en las condiciones del soporte.'],
    ['Incorporar nuevas funciones','Las ampliaciones se evalúan y presupuestan con su propio alcance, para que puedas decidir cómo continuar la evolución del sistema.']
  ];
  const rows = items => `<dl>${items.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('')}</dl>`;
  return `<section id="entrega" class="section delivery-support"><div class="wrap"><div class="section-heading"><div><p class="eyebrow">04 / ${i?'CUSTOM DEVELOPMENT PROJECTS':'PROYECTOS DE DESARROLLO A MEDIDA'}</p><h2>${i?'Delivery<br>and ongoing support.':'Entrega<br>y soporte.'}</h2></div><p>${i?'The proposal sets out the deliverables, deployment arrangements and support included in your project.':'La propuesta detalla los entregables, la puesta en marcha y el acompañamiento que incluye tu proyecto.'}</p></div><div class="delivery-support-grid"><article class="delivery-card"><p class="eyebrow">${i?'AT PROJECT HANDOVER':'AL CERRAR EL PROYECTO'}</p><h3>${i?'What your business receives':'Qué recibe tu empresa'}</h3>${rows(delivery)}</article><article id="soporte" class="delivery-card support-card"><p class="eyebrow">${i?'AFTER HANDOVER':'CONTINUIDAD DEL SISTEMA'}</p><h3>${i?'After delivery':'Después de la entrega'}</h3>${rows(support)}</article></div></div></section>`;
};
