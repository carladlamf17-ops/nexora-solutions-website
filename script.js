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
