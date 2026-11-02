/**
 * Washington Willian R. Moreira — Back-End Developer Portfolio
 * Vanilla JS Module: Instant i18n (PT-BR / EN), Scroll Telemetry & UI Controls
 */

const I18N_DICTIONARY = {
  pt: {
    meta_title: "Washington Willian R. Moreira | Desenvolvedor Back-End • Python • C# (.NET) • SQL",
    skip_to_content: "Pular para o conteúdo principal",

    // Navigation
    nav_about: "Resumo",
    nav_stack: "Tech Stack",
    nav_projects: "Projetos",
    nav_labs: "Laboratórios",
    nav_education: "Formação",
    nav_contact: "Contato",
    lang_toggle_aria: "Alternar idioma entre Português e Inglês",

    // Hero Section
    hero_status: "Disponível para atuação em São Paulo/SP, Híbrido ou Remoto",
    hero_location: "Guarulhos, SP — Brasil",
    hero_title: "Desenvolvedor Back-End | Python • C# (.NET) • SQL",
    hero_summary:
      "Desenvolvedor Back-End com foco na construção de aplicações em camadas, automação de processos, APIs RESTful e persistência relacional. Experiência prática no desenvolvimento de sistemas testáveis e containerizados utilizando Python (FastAPI, SQLAlchemy, Pytest) e C# (.NET), aplicando orientação a objetos, testes automatizados e integração de serviços externos na resolução de problemas reais.",
    hero_cta_projects: "Explorar Sistemas",
    hero_cta_github: "GitHub",
    hero_cta_linkedin: "LinkedIn",
    hero_cta_email: "Contato via E-mail",

    // Hero Telemetry Spec Card
    spec_header: "system.profile // runtime",
    spec_role_sub: "Engenharia de Software Back-End",
    spec_badge: "Arquitetura em Camadas & Automação",
    spec_k_stack: "Core Stack",
    spec_v_stack: "Python • C# (.NET) • SQL",
    spec_k_arch: "Arquitetura",
    spec_v_arch: "Camadas (UI / Services / Data)",
    spec_k_testing: "Qualidade & Testes",
    spec_v_testing: "Pytest • Mocks • :memory: DB",
    spec_k_infra: "Infra & Deploy",
    spec_v_infra: "Docker • Linux • Git/CI",
    spec_k_mode: "Modalidade",
    spec_v_mode: "SP Presencial • Híbrido • Remoto",

    // Section 2: Categorized Tech Stack
    stack_eyebrow: "01 // ARQUITETURA & FERRAMENTAS",
    stack_title: "Tech Stack Categorizada",
    stack_subtitle:
      "Tecnologias organizadas pelos pilares de engenharia utilizados no ciclo de desenvolvimento, persistência de dados, testes isolados e entrega em containers.",

    pillar1_tag: "PILAR 01 // CORE",
    pillar1_title: "Back-End & APIs",
    pillar1_desc:
      "Desenvolvimento de regras de negócio desacopladas, contratos tipados, validação de dados, orientação a objetos e integração com APIs RESTful.",
    pillar1_oop: "POO (OOP)",

    pillar2_tag: "PILAR 02 // DATA LAYER",
    pillar2_title: "Database & ORM",
    pillar2_desc:
      "Modelagem relacional estruturada, abstração de consultas via ORM, integridade transacional, controle de estado e idempotência.",
    pillar2_modeling: "Modelagem Relacional",

    pillar3_tag: "PILAR 03 // RELIABILITY",
    pillar3_title: "Quality, DevOps & Cloud",
    pillar3_desc:
      "Suítes de testes automatizados com isolamento de rede e banco em memória, padronização de ambientes com Docker e fluxos em Linux/Cloud.",
    pillar3_pytest: "Pytest (Unit Testing, Mocks, In-Memory DB)",

    // Section 3: Flagship Engineering Projects
    projects_eyebrow: "02 // ENGENHARIA DE SOFTWARE APLICADA",
    projects_title: "Projetos de Engenharia em Destaque",
    projects_subtitle:
      "Sistemas principais projetados com separação explícita de responsabilidades, persistência relacional, suíte de testes automatizados e tratamento de falhas.",

    // Project 1: Controle de Entregas & Painel Analítico
    proj1_sys_category: "Gestão Financeira & Logística",
    proj1_tag_arch: "Architecture: Layered",
    proj1_tag_test: "Testing: Pytest + Mocks",
    proj1_tag_infra: "Infra: Dockerized",
    proj1_title: "Controle de Entregas & Painel Analítico",
    proj1_context:
      "Sistema completo de gestão financeira e logística projetado com separação de responsabilidades (UI / Services / Data Access) e ambiente isolado.",
    proj1_highlights_label: "Destaques de Engenharia & Arquitetura",
    proj1_hl_1:
      "Persistência relacional em <strong>SQLite</strong> com regras de negócio desacopladas da interface (<strong>Flet</strong>);",
    proj1_hl_2:
      "Consumo e validação de dados de endereçamento via <strong>API ViaCEP</strong>;",
    proj1_hl_3:
      "Suíte de testes unitários com <strong>Pytest</strong> utilizando banco em memória (<code>:memory:</code>) e <code>unittest.mock</code> para isolar chamadas de rede;",
    proj1_hl_4:
      "Containerização em <strong>Docker</strong> e gráficos analíticos gerados com <strong>Matplotlib</strong> renderizados em <code>Base64</code>.",
    proj1_cta_repo: "Inspecionar Código no GitHub",
    proj1_bp_header: "Arquitetura do Sistema (3 Camadas)",
    proj1_bp_l1_name: "UI / Presentation",
    proj1_bp_l1_spec: "Flet GUI + Matplotlib Base64",
    proj1_bp_l2_name: "Service Layer",
    proj1_bp_l2_spec: "Regras de Negócio + ViaCEP Client",
    proj1_bp_l3_name: "Data Access & QA",
    proj1_bp_l3_spec: "SQLite + Pytest (:memory: & Mocks)",

    // Project 2: Alerta de Vagas Tech
    proj2_sys_category: "Automação de Dados & Mensageria",
    proj2_tag_arch: "Architecture: Pipeline",
    proj2_tag_test: "State: Idempotent ORM",
    proj2_tag_infra: "Integration: Telegram API",
    proj2_title: "Alerta de Vagas Tech",
    proj2_context:
      "Pipeline automatizado de coleta, filtragem e notificação em tempo real de oportunidades na área de tecnologia.",
    proj2_highlights_label: "Destaques de Engenharia & Arquitetura",
    proj2_hl_1:
      "Mapeamento Objeto-Relacional (ORM) com <strong>SQLAlchemy</strong> e persistência em <strong>SQLite</strong> garantindo controle de estado e <strong>idempotência</strong> (prevenção de envio de vagas duplicadas);",
    proj2_hl_2:
      "Integração direta com a <strong>Telegram Bot API</strong> para disparo assíncrono de alertas com tratamento de falhas de rede.",
    proj2_stack_automation: "Automação",
    proj2_cta_repo: "Ver Repositórios no GitHub",
    proj2_bp_header: "Fluxo do Pipeline & Idempotência",
    proj2_bp_l1_name: "Collector & Filter",
    proj2_bp_l1_spec: "Extração + Higienização de Dados",
    proj2_bp_l2_name: "State & ORM Layer",
    proj2_bp_l2_spec: "SQLAlchemy + SQLite (Idempotente)",
    proj2_bp_l3_name: "Notification Dispatch",
    proj2_bp_l3_spec: "Telegram Bot API + Retry Handling",

    // Section 4: Technical Labs & Study Repositories
    labs_eyebrow: "03 // TRILHA PRÁTICA & FUNDAMENTOS",
    labs_title: "Laboratórios Técnicos & Repositórios de Estudo",
    labs_subtitle:
      "Implementações focadas em domínio de linguagem, orientação a objetos em C# (.NET), construção de APIs RESTful com FastAPI, algoritmos e automação.",
    labs_th_domain: "Domínio Técnico",
    labs_th_scope: "Escopo de Estudo & Implementação Prática",
    labs_th_stack: "Tecnologias",
    labs_th_links: "Repositórios / Referência",

    lab1_domain: "APIs REST (Python)",
    lab1_scope:
      "Estudos de FastAPI (rotas assíncronas, Pydantic schemas, HTTP status codes, documentação interativa Swagger/OpenAPI).",
    lab1_link: "GitHub @washiquant",

    lab2_domain: "Ecossistema .NET",
    lab2_scope:
      "Formação C# & .NET no SENAI (POO avançada, herança, polimorfismo, interfaces, coleções e integração SQL).",
    lab2_link: "Trilha C# / .NET",

    lab3_domain: "Algoritmos & Estruturas de Dados",
    lab3_scope:
      "Resolução estruturada de desafios lógicos, manipulação de estruturas de dados e exercícios do livro Pense em Python e HackerRank.",
    lab3_link_1: "Pense em Python",
    lab3_link_2: "HackerRank Challenges",

    lab4_domain: "Automação & IA Aplicada",
    lab4_scope:
      "Scripts CLI de produtividade e integração de fluxos com IA Generativa (Google Cloud / AntiGravity).",
    lab4_link: "Scripts & Fluxos",

    // Section 5: Academic Education & Certifications
    edu_eyebrow: "04 // BASE ACADÊMICA & CREDENCIAIS",
    edu_title: "Formação Acadêmica & Certificações",
    edu_subtitle:
      "Graduação tecnológica em andamento combinada com qualificação técnica intensiva presencial no SENAI e certificações da indústria.",

    edu_col1_title: "Formação Acadêmica & Técnica",
    edu1_badge: "Ensino Superior • Graduação",
    edu1_period: "2026 – 2028",
    edu1_course: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    edu1_inst: "Universidade São Judas Tadeu (USJT)",

    edu2_badge: "Qualificação Profissional • 160h",
    edu2_period: "Presencial",
    edu2_course: "Desenvolvedor Back-End C# / .NET (160h)",
    edu2_inst: "SENAI São Caetano do Sul",

    edu_col2_title: "Certificações & Cursos",
    cert1_name: "Python (Basic) Certificate",
    cert1_issuer: "HackerRank",
    cert1_status: "Concluído",

    cert2_name: "Fundamentos de IA Generativa (Google Cloud)",
    cert2_issuer: "SENAI",
    cert2_status: "Concluído",

    cert3_name: "Python para Análise de Dados & Data Science",
    cert3_issuer: "Data Science Academy (DSA)",
    cert3_status: "Concluído",

    cert4_name: "PCAP / PCEP — Certified Associate / Entry-Level Python Programmer",
    cert4_issuer: "Python Institute",
    cert4_status: "Em preparação",

    // Section 6: Contact & Footer
    contact_eyebrow: "05 // CONEXÃO DIRETA",
    contact_title: "Disponível para Oportunidades Back-End",
    contact_desc:
      "Aberto para posições de Desenvolvedor Back-End (Júnior / Estágio / Trainee) em São Paulo/SP (Presencial ou Híbrido) ou Remoto. Vamos conversar sobre como posso agregar ao seu time de engenharia.",
    contact_btn_email: "Enviar E-mail",
    contact_btn_copy: "Copiar E-mail",
    contact_btn_linkedin: "Conectar no LinkedIn",
    contact_btn_github: "Ver Perfil no GitHub",
    toast_copied: "E-mail copiado para a área de transferência: washiwm1@gmail.com",

    footer_rights: "© 2026 Washington Willian R. Moreira. Engenharia de Software Back-End.",
    footer_built: "Arquitetura estática de alta performance • HTML5 • CSS3 • Vanilla JS"
  },

  en: {
    meta_title: "Washington Willian R. Moreira | Back-End Developer • Python • C# (.NET) • SQL",
    skip_to_content: "Skip to main content",

    // Navigation
    nav_about: "Overview",
    nav_stack: "Tech Stack",
    nav_projects: "Projects",
    nav_labs: "Tech Labs",
    nav_education: "Education",
    nav_contact: "Contact",
    lang_toggle_aria: "Switch language between Portuguese and English",

    // Hero Section
    hero_status: "Available for opportunities in São Paulo, Brazil, Hybrid or Remote",
    hero_location: "Guarulhos, SP — Brazil",
    hero_title: "Back-End Developer | Python • C# (.NET) • SQL",
    hero_summary:
      "Back-End Developer focused on layered architecture, process automation, RESTful APIs, and relational persistence. Hands-on experience building testable, containerized applications using Python (FastAPI, SQLAlchemy, Pytest) and C# (.NET), applying object-oriented design, automated testing, and external API integrations to solve real-world problems.",
    hero_cta_projects: "Explore Systems",
    hero_cta_github: "GitHub",
    hero_cta_linkedin: "LinkedIn",
    hero_cta_email: "Contact via Email",

    // Hero Telemetry Spec Card
    spec_header: "system.profile // runtime",
    spec_role_sub: "Back-End Software Engineering",
    spec_badge: "Layered Architecture & Automation",
    spec_k_stack: "Core Stack",
    spec_v_stack: "Python • C# (.NET) • SQL",
    spec_k_arch: "Architecture",
    spec_v_arch: "Layered (UI / Services / Data)",
    spec_k_testing: "Quality & Testing",
    spec_v_testing: "Pytest • Mocks • :memory: DB",
    spec_k_infra: "Infra & Deploy",
    spec_v_infra: "Docker • Linux • Git/CI",
    spec_k_mode: "Work Mode",
    spec_v_mode: "On-site SP • Hybrid • Remote",

    // Section 2: Categorized Tech Stack
    stack_eyebrow: "01 // ARCHITECTURE & TOOLING",
    stack_title: "Categorized Tech Stack",
    stack_subtitle:
      "Technologies structured across the core engineering pillars used for service development, relational persistence, isolated automated testing, and containerized delivery.",

    pillar1_tag: "PILLAR 01 // CORE",
    pillar1_title: "Back-End & APIs",
    pillar1_desc:
      "Development of decoupled business logic, strongly-typed schemas, data validation, object-oriented design, and RESTful API integrations.",
    pillar1_oop: "OOP (Object-Oriented Programming)",

    pillar2_tag: "PILLAR 02 // DATA LAYER",
    pillar2_title: "Database & ORM",
    pillar2_desc:
      "Structured relational modeling, ORM query abstraction, transactional integrity, state management, and idempotent persistence.",
    pillar2_modeling: "Relational Modeling",

    pillar3_tag: "PILLAR 03 // RELIABILITY",
    pillar3_title: "Quality, DevOps & Cloud",
    pillar3_desc:
      "Automated unit test suites with network mocking and in-memory databases, reproducible Docker environments, and Linux/Cloud workflows.",
    pillar3_pytest: "Pytest (Unit Testing, Mocks, In-Memory DB)",

    // Section 3: Flagship Engineering Projects
    projects_eyebrow: "02 // APPLIED SOFTWARE ENGINEERING",
    projects_title: "Featured Engineering Projects",
    projects_subtitle:
      "Flagship systems engineered with strict separation of concerns, relational persistence, automated unit testing suites, and fault-tolerant external integrations.",

    // Project 1: Delivery Management & Analytics Dashboard
    proj1_sys_category: "Financial & Logistics Management",
    proj1_tag_arch: "Architecture: Layered",
    proj1_tag_test: "Testing: Pytest + Mocks",
    proj1_tag_infra: "Infra: Dockerized",
    proj1_title: "Delivery Management & Analytics Dashboard",
    proj1_context:
      "End-to-end financial and logistics management system designed with clear separation of concerns (UI / Services / Data Access) and an isolated runtime environment.",
    proj1_highlights_label: "Engineering & Architecture Highlights",
    proj1_hl_1:
      "Relational persistence in <strong>SQLite</strong> with business rules cleanly decoupled from the user interface (<strong>Flet</strong>);",
    proj1_hl_2:
      "External data consumption and address validation via the <strong>ViaCEP REST API</strong>;",
    proj1_hl_3:
      "Automated unit test suite built with <strong>Pytest</strong> leveraging an in-memory database (<code>:memory:</code>) and <code>unittest.mock</code> to isolate network calls;",
    proj1_hl_4:
      "Full <strong>Docker</strong> containerization and analytical charts generated with <strong>Matplotlib</strong> rendered as <code>Base64</code> streams.",
    proj1_cta_repo: "Inspect Source on GitHub",
    proj1_bp_header: "System Architecture (3-Tier Layered)",
    proj1_bp_l1_name: "UI / Presentation",
    proj1_bp_l1_spec: "Flet GUI + Matplotlib Base64",
    proj1_bp_l2_name: "Service Layer",
    proj1_bp_l2_spec: "Business Logic + ViaCEP Client",
    proj1_bp_l3_name: "Data Access & QA",
    proj1_bp_l3_spec: "SQLite + Pytest (:memory: & Mocks)",

    // Project 2: Automated Tech Job Monitor
    proj2_sys_category: "Data Automation & Async Messaging",
    proj2_tag_arch: "Architecture: Pipeline",
    proj2_tag_test: "State: Idempotent ORM",
    proj2_tag_infra: "Integration: Telegram API",
    proj2_title: "Automated Tech Job Monitor",
    proj2_context:
      "Automated data pipeline for real-time collection, filtering, and instant notification of technology job opportunities.",
    proj2_highlights_label: "Engineering & Architecture Highlights",
    proj2_hl_1:
      "Object-Relational Mapping (ORM) with <strong>SQLAlchemy</strong> and <strong>SQLite</strong> persistence ensuring state tracking and strict <strong>idempotency</strong> (preventing duplicate job alerts);",
    proj2_hl_2:
      "Direct integration with the <strong>Telegram Bot API</strong> for asynchronous alert dispatching with network failure handling.",
    proj2_stack_automation: "Automation",
    proj2_cta_repo: "View Repositories on GitHub",
    proj2_bp_header: "Pipeline Flow & State Idempotency",
    proj2_bp_l1_name: "Collector & Filter",
    proj2_bp_l1_spec: "Ingestion + Rule Validation",
    proj2_bp_l2_name: "State & ORM Layer",
    proj2_bp_l2_spec: "SQLAlchemy + SQLite (Idempotent)",
    proj2_bp_l3_name: "Notification Dispatch",
    proj2_bp_l3_spec: "Telegram Bot API + Fault Handling",

    // Section 4: Technical Labs & Study Repositories
    labs_eyebrow: "03 // HANDS-ON TRACK & FUNDAMENTALS",
    labs_title: "Technical Labs & Study Repositories",
    labs_subtitle:
      "Focused implementations covering language internals, object-oriented programming in C# (.NET), RESTful API design with FastAPI, algorithms, and workflow automation.",
    labs_th_domain: "Technical Domain",
    labs_th_scope: "Technical Scope & Practical Implementation",
    labs_th_stack: "Core Stack",
    labs_th_links: "Repositories / Links",

    lab1_domain: "REST APIs (Python)",
    lab1_scope:
      "FastAPI engineering studies (asynchronous routing, Pydantic validation schemas, HTTP status codes, interactive Swagger/OpenAPI docs).",
    lab1_link: "GitHub @washiquant",

    lab2_domain: ".NET Ecosystem",
    lab2_scope:
      "C# & .NET Engineering Track at SENAI (advanced OOP, inheritance, polymorphism, interfaces, collections, and SQL integration).",
    lab2_link: "C# / .NET Track",

    lab3_domain: "Algorithms & Data Structures",
    lab3_scope:
      "Structured problem-solving, data structure manipulation, and algorithmic challenges from Think Python and HackerRank.",
    lab3_link_1: "Think Python (Pense em Python)",
    lab3_link_2: "HackerRank Challenges",

    lab4_domain: "Automation & Applied AI",
    lab4_scope:
      "Productivity CLI scripts and workflow integrations powered by Generative AI (Google Cloud / AntiGravity).",
    lab4_link: "Scripts & Workflows",

    // Section 5: Academic Education & Certifications
    edu_eyebrow: "04 // ACADEMIC FOUNDATION & CREDENTIALS",
    edu_title: "Academic Education & Certifications",
    edu_subtitle:
      "Higher education degree in Systems Analysis and Development paired with intensive on-site C#/.NET engineering training at SENAI and industry certifications.",

    edu_col1_title: "Academic & Technical Education",
    edu1_badge: "Higher Education • Undergraduate Degree",
    edu1_period: "2026 – 2028",
    edu1_course: "A.S. in Systems Analysis and Development (ADS)",
    edu1_inst: "Universidade São Judas Tadeu (USJT)",

    edu2_badge: "Professional Qualification • 160h",
    edu2_period: "On-site",
    edu2_course: "Back-End Developer C# / .NET (160h)",
    edu2_inst: "SENAI São Caetano do Sul",

    edu_col2_title: "Certifications & Courses",
    cert1_name: "Python (Basic) Certificate",
    cert1_issuer: "HackerRank",
    cert1_status: "Completed",

    cert2_name: "Generative AI Fundamentals (Google Cloud)",
    cert2_issuer: "SENAI",
    cert2_status: "Completed",

    cert3_name: "Python for Data Analysis & Data Science",
    cert3_issuer: "Data Science Academy (DSA)",
    cert3_status: "Completed",

    cert4_name: "PCAP / PCEP — Certified Associate / Entry-Level Python Programmer",
    cert4_issuer: "Python Institute",
    cert4_status: "In preparation",

    // Section 6: Contact & Footer
    contact_eyebrow: "05 // DIRECT CONNECTION",
    contact_title: "Available for Back-End Engineering Roles",
    contact_desc:
      "Open to Back-End Developer roles (Junior / Intern / Working Student) in São Paulo, Brazil (On-site or Hybrid) or Remote worldwide. Let's discuss how I can contribute to your engineering team.",
    contact_btn_email: "Send Email",
    contact_btn_copy: "Copy Email",
    contact_btn_linkedin: "Connect on LinkedIn",
    contact_btn_github: "View GitHub Profile",
    toast_copied: "Email copied to clipboard: washiwm1@gmail.com",

    footer_rights: "© 2026 Washington Willian R. Moreira. Back-End Software Engineering.",
    footer_built: "High-performance static architecture • HTML5 • CSS3 • Vanilla JS"
  }
};

const STORAGE_KEY = "washiquant_portfolio_lang";

/**
 * Applies the selected language ('pt' or 'en') across the entire DOM
 * without reloading the page.
 */
function applyLanguage(lang) {
  const validLang = I18N_DICTIONARY[lang] ? lang : "pt";
  const dict = I18N_DICTIONARY[validLang];

  // Update <html lang="...">
  document.documentElement.lang = validLang === "en" ? "en" : "pt-BR";

  // Update document title
  if (dict.meta_title) {
    document.title = dict.meta_title;
  }

  // Update all text elements with [data-i18n]
  const textNodes = document.querySelectorAll("[data-i18n]");
  textNodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update rich HTML elements with [data-i18n-html]
  const htmlNodes = document.querySelectorAll("[data-i18n-html]");
  htmlNodes.forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update aria-label attributes with [data-i18n-aria]
  const ariaNodes = document.querySelectorAll("[data-i18n-aria]");
  ariaNodes.forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  // Update active state on language buttons
  const langButtons = document.querySelectorAll("[data-lang-switch]");
  langButtons.forEach((btn) => {
    const targetLang = btn.getAttribute("data-lang-switch");
    const isActive = targetLang === validLang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Persist preference in localStorage
  try {
    localStorage.setItem(STORAGE_KEY, validLang);
  } catch (_) {
    // Fallback if storage is restricted
  }
}

/**
 * Initialize language switcher, mobile menu, header scroll state, and email copy
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Restore saved language or default to PT-BR
  let savedLang = "pt";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") {
      savedLang = stored;
    }
  } catch (_) {
    savedLang = "pt";
  }
  applyLanguage(savedLang);

  // 2. Bind language switcher buttons
  const langButtons = document.querySelectorAll("[data-lang-switch]");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang-switch");
      applyLanguage(targetLang);
    });
  });

  // 3. Header scroll state & active navigation link highlight
  const header = document.getElementById("site-header");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links .nav-link");

  function onScroll() {
    if (window.scrollY > 16) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    let currentSection = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentSection}`);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 4. Mobile drawer toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 5. Copy email button with localized feedback toast
  const copyBtn = document.getElementById("copy-email-btn");
  const copyToast = document.getElementById("copy-toast");
  let toastTimeout = null;

  if (copyBtn && copyToast) {
    copyBtn.addEventListener("click", async () => {
      const email = "washiwm1@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
      } catch (_) {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      copyToast.classList.add("visible");
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        copyToast.classList.remove("visible");
      }, 3200);
    });
  }
});

