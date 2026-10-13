const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

const english = {
  "meta.homeTitle": "Nexora Solutions | Technology solutions for businesses",
  "meta.homeDescription": "Nexora Solutions develops business systems, web and mobile applications, automation, and integrations for companies in Venezuela.",
  "meta.homeOgDescription": "Business systems, applications, and automation. Explore the Nexora Solutions portfolio.",
  "meta.privacyTitle": "Privacy Policy | Nexora Solutions",
  "meta.privacyDescription": "Privacy policy for the Nexora Solutions website.",
  "meta.privacyOgDescription": "Information about the handling of contact data at Nexora Solutions.",
  "meta.locale": "en_US",
  "global.skip": "Skip to content",
  "global.brandAria": "Nexora Solutions, home",
  "global.openMenu": "Open menu",
  "global.mainNav": "Main navigation",
  "global.languageSelector": "Select language",
  "global.whatsapp": "Contact us on WhatsApp",
  "global.whatsappArrow": "Contact us on WhatsApp <span>↗</span>",
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.about": "About us",
  "nav.contact": "Contact",
  "nav.privacy": "Privacy",
  "hero.eyebrow": "Technology that moves you forward",
  "hero.title": "Technology solutions <em>for businesses</em>",
  "hero.lead": "Software development, automation, integration, and digital transformation that turn real business needs into clear, reliable solutions.",
  "hero.logoAlt": "Official Nexora Solutions logo with RIF J-50851044-5",
  "hero.projects": "View projects <span>↓</span>",
  "signal.systems": "Systems",
  "signal.automation": "Automation",
  "signal.integration": "Integration",
  "proof.real": "Real solutions",
  "proof.responsible": "Responsible implementation",
  "proof.software": "Software for better operations",
  "manifesto.aria": "Nexora Solutions, software for businesses",
  "manifesto.alt": "Nexora Solutions, software for businesses: systems, automation, and applications",
  "manifesto.badge": "Custom technology development",
  "services.kicker": "01 / Services",
  "services.title": "Technology tailored to your business needs.",
  "services.intro": "Professional solutions focused on optimizing operations, connecting information, and simplifying daily work.",
  "services.oneTitle": "Custom business systems",
  "services.oneText": "Tools tailored to the processes, users, and specific goals of each organization.",
  "services.twoTitle": "Web, Windows, and mobile applications",
  "services.twoText": "Practical, accessible digital experiences built for the right work environment.",
  "services.threeTitle": "Process automation",
  "services.threeText": "Workflows that reduce repetitive tasks, operational errors, and response times.",
  "services.fourTitle": "Database and service integration",
  "services.fourText": "Securely connected information that improves operational continuity and visibility.",
  "services.fiveTitle": "Technology consulting and support",
  "services.fiveText": "Guidance to evaluate alternatives, resolve incidents, and make technical decisions with greater clarity.",
  "portfolio.kicker": "02 / Portfolio",
  "portfolio.title": "Systems built for real operations.",
  "portfolio.intro": "Projects developed for organizations across different industries, from agriculture and hardware retail to industrial maintenance and customer management.",
  "portfolio.reaccionMetaOne": "Web + mobile application",
  "portfolio.reaccionMetaTwo": "Business management",
  "portfolio.reaccionAlt": "ReacciónGPS logo",
  "portfolio.reaccionText": "A digital work center for automated customer registration, centralized operations, and inventory management through a web platform and mobile application.",
  "portfolio.reaccionFeatureOne": "Automated customer registration",
  "portfolio.reaccionFeatureTwo": "Digital work center",
  "portfolio.reaccionFeatureThree": "Inventory control",
  "portfolio.raincaMetaOne": "Mobile application",
  "portfolio.raincaMetaTwo": "Industry",
  "portfolio.raincaAlt": "Rainca, Radiadores Industriales El Tigre logo",
  "portfolio.raincaText": "A mobile application for digitizing industrial maintenance documents, making it easier to record and review information in the field.",
  "portfolio.raincaFeatureOne": "Document digitization",
  "portfolio.raincaFeatureTwo": "Mobile field operations",
  "portfolio.raincaFeatureThree": "Maintenance information",
  "portfolio.ferrearcaMetaOne": "Business system",
  "portfolio.ferrearcaMetaTwo": "Hardware retail",
  "portfolio.ferrearcaAlt": "Ferrearca C.A. logo",
  "portfolio.ferrearcaText": "An inventory system developed to organize products, stock, and movements within the daily operations of a hardware store.",
  "portfolio.ferrearcaFeatureOne": "Product catalog",
  "portfolio.ferrearcaFeatureTwo": "Stock control",
  "portfolio.ferrearcaFeatureThree": "Movement management",
  "portfolio.ramirenaMetaOne": "Business solution",
  "portfolio.ramirenaMetaTwo": "Agriculture",
  "portfolio.ramirenaAlt": "La Ramireña Ecoagraria La Trinidad C.A. logo",
  "portfolio.ramirenaText": "A custom digital solution developed for an agricultural company and tailored to the internal needs of its work environment.",
  "portfolio.ramirenaFeatureOne": "Custom software",
  "portfolio.ramirenaFeatureTwo": "Business environment",
  "portfolio.ramirenaFeatureThree": "Agricultural sector",
  "portfolio.ctaText": "Does one of your processes still depend on spreadsheets, messages, or manual tasks?",
  "portfolio.ctaButton": "Let's talk about your system <span>↗</span>",
  "about.kicker": "03 / About Nexora",
  "about.title": "Useful technology with a clear purpose.",
  "about.one": "Nexora Solutions provides technology development and implementation services for businesses seeking to improve their processes and digital capabilities.",
  "about.two": "Every project begins with understanding the business need in order to propose a practical, maintainable solution suited to its operations.",
  "about.clarity": "Clarity",
  "about.clarityText": "Clear objectives and scope.",
  "about.functionality": "Functionality",
  "about.functionalityText": "Solutions designed for real-world use.",
  "about.continuity": "Continuity",
  "about.continuityText": "Technology ready to evolve.",
  "contact.kicker": "04 / Contact",
  "contact.title": "Let's discuss your next project.",
  "contact.intro": "Contact Nexora Solutions through our official business channels.",
  "contact.aria": "Nexora Solutions contact details",
  "contact.email": "Business email",
  "contact.country": "Country",
  "contact.address": "Operational address",
  "contact.note": "This website does not use a submission form. You can contact us directly by email or WhatsApp.",
  "company.kicker": "Business information",
  "company.title": "Nexora company details",
  "company.legalName": "Legal name",
  "company.tradeName": "Trade name",
  "company.type": "Business type",
  "company.typeValue": "Sole Proprietorship",
  "company.industry": "Industry",
  "company.industryValue": "Technology",
  "company.country": "Country",
  "company.legalNotice": "Legal notice",
  "footer.privacy": "Privacy policy ↗",
  "footer.official": "Official business website",
  "privacy.title": "Privacy Policy",
  "privacy.updated": "Last updated: July 30, 2026",
  "privacy.back": "← Back to home",
  "privacy.responsibleTitle": "1. Data controller and address",
  "privacy.responsibleText": "Nexora Solutions is the trade name of Emprendimiento Carla Moreno, RIF J-50851044-5.",
  "privacy.collectionTitle": "2. Information we receive",
  "privacy.collectionOne": "Nexora Solutions may receive information that a person voluntarily provides when contacting us by email or WhatsApp, such as their name, company, email address, telephone number, and message.",
  "privacy.collectionTwo": "This website does not have an active submission form and does not request personal data directly.",
  "privacy.purposeTitle": "3. Purpose of processing",
  "privacy.purposeText": "Information received through our official contact channels is used solely to answer inquiries, provide information about services, and follow up on business or support conversations initiated by the interested person.",
  "privacy.disclosureTitle": "4. Use and disclosure",
  "privacy.disclosureText": "Nexora Solutions does not sell personal data to third parties. Information may only be processed by providers needed to operate our communication channels, subject to applicable safeguards and obligations.",
  "privacy.correctionTitle": "5. Correction and deletion",
  "privacy.correctionText": "You may request access to, correction of, or deletion of your data by writing to the official Nexora Solutions business email address.",
  "privacy.channel": "Privacy contact:",
  "privacy.securityTitle": "6. Security and retention",
  "privacy.securityText": "Reasonable measures are applied to protect the information received and retain it only for as long as needed to address the inquiry or comply with applicable obligations.",
  "privacy.changesTitle": "7. Changes to this policy",
  "privacy.changesText": "This policy may be updated to reflect changes to the website, contact channels, or data handling practices. The latest update date will be displayed at the top of this page."
};

Object.assign(english, {
  "hero.eyebrow": "CUSTOM SOFTWARE · VENEZUELA",
  "hero.title": "Your business,<br>at its <em>next level.</em>",
  "hero.lead": "We connect your processes, automate repetitive work, and build the software your business needs to move forward.",
  "global.whatsapp": "Let's talk ↗",
  "global.whatsappArrow": "Let's talk about your project <span>↗</span>",
  "clients.label": "TECHNOLOGY FOR REAL OPERATIONS",
  "value.kicker": "LESS FRICTION. MORE POSSIBILITIES.",
  "value.title": "Technology should make<br>your work <em>simpler.</em>",
  "value.text": "If your information is scattered across spreadsheets, messages, and manual tasks, it is time to connect the pieces. We design tools to bring more order to your operations and more clarity to your team.",
  "value.link": "Find your solution ↗",
  "services.title": "Your next step starts with a solution.",
  "services.intro": "From an application to a system that connects your entire operation. We start with what your business needs to solve.",
  "services.oneText": "Organize inventory, customers, and movements in a system adapted to the way your team works.",
  "services.twoText": "Bring your processes to the web, desktop, or mobile, with tools designed for the people who use them every day.",
  "services.threeText": "Reduce manual entry and connect repetitive tasks so your team can focus on work that adds value.",
  "services.fourText": "Connect databases and services to access information without relying on scattered files.",
  "services.fiveText": "Evaluate what to digitize first, define your solution's scope, and get technical guidance to maintain it.",
  "portfolio.title": "Ideas that became working solutions.",
  "portfolio.intro": "Explore Nexora's work in business management, inventory, industrial maintenance, and agriculture.",
  "project.details": "Explore project ↗",
  "project.close": "Close",
  "project.label": "A NEXORA PROJECT",
  "project.contact": "Let's talk about a solution for you ↗",
  "about.title": "We understand your business. Then we build.",
  "about.one": "We are Nexora Solutions, a technology development and implementation company in El Tigre, Venezuela. We build custom software to connect technology with the daily work of businesses.",
  "about.two": "Our approach starts with understanding your processes, your users, and the problem you need to solve. Every technical decision has a purpose within your business.",
  "process.kicker": "FROM PROBLEM TO SOLUTION",
  "process.title": "A clear path for your project.",
  "process.intro": "Every need has its own scope. These stages help structure the conversation and implementation.",
  "process.0.title": "Listen",
  "process.0.text": "We understand your operations, who will use the tool, and what you need to improve.",
  "process.1.title": "Define",
  "process.1.text": "We agree on priorities, scope, and the right platform for your project.",
  "process.2.title": "Build",
  "process.2.text": "We develop the solution and review progress against the agreed scope.",
  "process.3.title": "Support",
  "process.3.text": "We review rollout and the needs for ongoing support and evolution.",
  "faq.kicker": "BEFORE WE START",
  "faq.title": "Good questions. Clear answers.",
  "faq.intro": "Your project starts with understanding the options.",
  "faq.0.title": "Do I need a fully defined idea?",
  "faq.0.text": "Start by telling us which process takes too much time, where information gets lost, or what your team needs. That conversation helps define the solution.",
  "faq.1.title": "How much does a project cost and how long does it take?",
  "faq.1.text": "It depends on scope, integrations, and platform. Cost and timelines need to be defined after reviewing your needs; every project requires a specific proposal.",
  "faq.2.title": "Can you work with a system I already use?",
  "faq.2.text": "Nexora offers database and service integration. First we review access possibilities, compatibility, and the requirements of your current system.",
  "faq.3.title": "What happens after the software is built?",
  "faq.3.text": "Nexora offers technology consulting and support. Rollout, maintenance, and support terms are defined within each project's scope.",
  "contact.title": "Your next big change starts with a conversation.",
  "contact.intro": "Tell us what is slowing down your operation and what you would like to improve. We can discuss the scope and next step for your project.",
  "contact.action": "Tell us your idea ↗"
});

Object.assign(english, {
  "hero.title": "We build software.<br><em>We move businesses forward.</em>",
  "art.alt": "Abstract blue and violet sculpture representing connection and transformation",
  "art.title": "Your operation, connected.", "art.subtitle": "Software · Processes · People",
  "art.caption": "WE DESIGN WHAT'S NEXT.", "art.scroll": "Explore services",
  "proof.real": "Custom software", "proof.responsible": "Web, Windows, and mobile", "proof.software": "Built for your operation",
  "value.title": "Less manual work.<br><em>More room to grow.</em>",
  "services.title": "A challenge in your business.<br>A solution made for you.",
  "portfolio.title": "Real work.<br>Solutions with purpose."
});
Object.assign(english, {
"business.location":"El Tigre, Anzoátegui · Venezuela",
"hero.title":"Software for your<br><em>daily operations.</em>",
"hero.lead":"We build inventory, customer, and document management systems. Web, Windows, and mobile applications adapted to your business.",
"global.whatsappArrow":"Discuss my project <span>↗</span>",
"portfolio.title":"Projects developed<br>by Nexora.",
"services.title":"What we can build<br>for your business.",
"contact.title":"Let's discuss<br>what you need.",
"contact.intro":"Tell us which process you want to digitize, which system you use, and who will use the solution. That information helps us review the scope.",
"solution.aria":"Explore solution examples","solution.inventory":"Inventory","solution.customers":"Customers","solution.documents":"Documents",
"solution.mobile":"Mobile","solution.note":"Solution overview · Platform depends on the project","solution.pause":"Pause animation","solution.resume":"Resume animation"
});
const originals = new Map();

document.querySelectorAll("[data-i18n]").forEach((element) => {
  originals.set(element, { type: "text", value: element.textContent });
});

document.querySelectorAll("[data-i18n-html]").forEach((element) => {
  originals.set(element, { type: "html", value: element.innerHTML });
});

document.querySelectorAll("[data-i18n-content]").forEach((element) => {
  originals.set(element, { type: "content", value: element.getAttribute("content") });
});

document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
  originals.set(element, { type: "aria", value: element.getAttribute("aria-label") });
});

document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
  originals.set(element, { type: "alt", value: element.getAttribute("alt") });
});

function applyLanguage(language) {
  const selected = language === "en" ? "en" : "es";
  document.documentElement.lang = selected;

  originals.forEach((original, element) => {
    const key =
      element.dataset.i18n ||
      element.dataset.i18nHtml ||
      element.dataset.i18nContent ||
      element.dataset.i18nAria ||
      element.dataset.i18nAlt;
    const value = selected === "en" ? english[key] : original.value;
    if (value == null) return;

    if (original.type === "html") element.innerHTML = value;
    if (original.type === "text") element.textContent = value;
    if (original.type === "content") element.setAttribute("content", value);
    if (original.type === "aria") element.setAttribute("aria-label", value);
    if (original.type === "alt") element.setAttribute("alt", value);
  });

  if (typeof updateSolution === "function") updateSolution();

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selected));
  });

  try {
    localStorage.setItem("nexora-language", selected);
  } catch {
    // The language selector remains functional when storage is unavailable.
  }
}

let initialLanguage = "es";
try {
  initialLanguage = localStorage.getItem("nexora-language") || "es";
} catch {
  initialLanguage = "es";
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(initialLanguage);

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("#current-year").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

// Enhancement only: content remains available with JavaScript disabled.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".section-heading, .service-card, .project-card, .value-grid, .about-grid, .process-grid article, .faq-grid, .contact-grid").forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) document.documentElement.classList.remove("motion-ready");
  });
}

const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
document.body.append(progress);
let scrollQueued = false;
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${available > 0 ? window.scrollY / available : 0})`;
  scrollQueued = false;
}
window.addEventListener("scroll", () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(updateProgress);
  }
}, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const projectDialog = document.querySelector(".project-dialog");
if (projectDialog) {
  document.querySelectorAll(".project-detail").forEach((button) => {
    button.addEventListener("click", () => {
      const project = button.closest(".project-card");
      projectDialog.querySelector("h2").textContent = project.querySelector("h3").textContent;
      projectDialog.querySelector(".dialog-description").textContent = project.querySelector(".project-content > p").textContent;
      const features = projectDialog.querySelector(".dialog-features");
      features.replaceChildren(...Array.from(project.querySelectorAll(".project-features li"), (feature) => {
        const item = document.createElement("li");
        item.textContent = feature.textContent;
        return item;
      }));
      projectDialog.showModal();
    });
  });
  projectDialog.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
  projectDialog.addEventListener("click", (event) => {
    const bounds = projectDialog.getBoundingClientRect();
    if (event.target === projectDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) projectDialog.close();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mainNav?.classList.contains("open")) {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});

function updateSolution() {
  const canvas = document.querySelector(".technology-canvas");
  if (!canvas) return;
  const mode = document.querySelector("[data-solution][aria-pressed='true']")?.dataset.solution || "inventory";
  const en = document.documentElement.lang === "en";
  const labels = {
    inventory: en ? ["Products and movements", "Inventory management", "Organized stock"] : ["Productos y movimientos", "Control de inventario", "Existencias organizadas"],
    customers: en ? ["Customer registration", "Customer management", "Centralized information"] : ["Registro de clientes", "Gestión de clientes", "Información centralizada"],
    documents: en ? ["Field documents", "Document management", "Mobile document access"] : ["Documentos de campo", "Gestión documental", "Consulta desde el móvil"]
  };
  const [input, system, output] = labels[mode];
  canvas.dataset.mode = mode;
  canvas.querySelector(".workflow-input-label").textContent = input;
  canvas.querySelector(".workflow-system-label").textContent = system;
  canvas.querySelector(".workflow-output-label").textContent = output;
  const toggle = document.querySelector(".motion-toggle");
  const paused = document.documentElement.classList.contains("motion-paused");
  toggle.textContent = en ? (paused ? "Resume animation" : "Pause animation") : (paused ? "Reanudar animación" : "Pausar animación");
}

document.querySelectorAll("[data-solution]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-solution]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    updateSolution();
  });
});
document.querySelector(".motion-toggle")?.addEventListener("click", (event) => {
  const paused = document.documentElement.classList.toggle("motion-paused");
  event.currentTarget.setAttribute("aria-pressed", String(paused));
  updateSolution();
});
updateSolution();

const techCanvas = document.querySelector(".technology-canvas");
if (techCanvas && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let tiltQueued = false;
  techCanvas.addEventListener("pointermove", (event) => {
    if (tiltQueued || reducedMotion.matches || document.documentElement.classList.contains("motion-paused")) return;
    tiltQueued = true;
    const bounds = techCanvas.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    requestAnimationFrame(() => {
      techCanvas.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
      tiltQueued = false;
    });
  });
  techCanvas.addEventListener("pointerleave", () => { techCanvas.style.transform = "none"; });
}
