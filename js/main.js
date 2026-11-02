/**
 * Washington Willian R. Moreira — <washiquant/>
 * Editorial Portfolio Engine: Bilingual i18n (PT-BR / EN), Scroll Pill Tracker & IntersectionObserver
 */

const I18N_DICTIONARY = {
  pt: {
    meta_title: "Washington Willian R. Moreira — Back-End Developer | Python & C# (.NET)",
    skip_link: "Pular para o conteúdo principal",

    // Floating Pill Header
    nav_home: "Início",
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_toolkit: "Toolkit",
    nav_credentials: "Formação",
    nav_contact: "Contato",
    lang_aria: "Alternar idioma entre Português e Inglês",

    // Hero Section
    hero_eyebrow: "PYTHON & C# .NET BACKEND DEVELOPER",
    hero_availability: "GUARULHOS, SP — PRESENCIAL SP / HÍBRIDO / REMOTO",
    hero_stmt_1: "Sistemas robustos.",
    hero_stmt_2: "Fundações sólidas.",
    hero_bio_html:
      'Sou um <span class="text-accent">desenvolvedor backend</span> focado na construção de aplicações em camadas, automação de processos, APIs RESTful e persistência relacional. Desenvolvo sistemas testáveis e containerizados com <span class="text-white">Python (FastAPI, SQLAlchemy, Pytest)</span> e <span class="text-white">C# (.NET)</span> para resolver problemas reais com estabilidade e clareza arquitetural.',
    hero_cta_primary: "Ver Projetos",
    hero_cta_secondary: "Contato",

    // 01 — About Section (Building Robust Systems / My Journey)
    about_card_eyebrow: "SOBRE MIM",
    about_card_title: "Minha Jornada",
    about_eyebrow: "01 — SOBRE MIM",
    about_heading: "Construindo Sistemas Robustos",
    about_p1_html:
      'Olá, sou <span class="text-accent">Washington Willian R. Moreira</span>, desenvolvedor Back-End de Guarulhos, São Paulo. Gosto de transformar regras operacionais complexas em APIs RESTful previsíveis, fluxos automatizados e camadas de dados que mantêm a integridade mesmo sob falhas externas.',
    about_p2_html:
      'Curso <span class="text-white">Análise e Desenvolvimento de Sistemas (ADS)</span> na Universidade São Judas Tadeu (2026–2028) e concluí a qualificação presencial intensiva de <span class="text-white">Desenvolvedor Back-End C# / .NET (160h)</span> e <span class="text-white">IA Generativa (Google Cloud)</span> no SENAI. Na prática, projeto sistemas desacoplados unindo orientação a objetos, modelagem SQL/ORM, testes isolados em memória (<code>Pytest</code> e mocks) e empacotamento em <code>Docker</code>.',
    about_p3_html:
      'Fora dos projetos principais, mantenho uma rotina constante de resolução algorítmica no HackerRank, estudos de literatura fundamental de computação, automação via CLI com fluxos assistidos pelo Google AntiGravity e preparação para as certificações <span class="text-white">PCAP / PCEP (Python Institute)</span>.',

    // 02 — Projects & Practical Experience (Editorial Split Grid)
    proj_eyebrow: "02 — PROJETOS EM DESTAQUE",
    proj_heading: "Engenharia aplicada em sistemas reais.",
    proj_lead:
      "Arquitetura limpa em camadas, separação estrita entre interface, regras de negócio e acesso a dados, controle de estado idempotente e testes automatizados sem dependência de rede externa.",
    proj_all_repos_link: "Ver todos os 13 repositórios no GitHub",

    // Flagship 01
    p1_title: "Controle de Entregas & Painel Analítico",
    p1_meta: "2026 — GESTÃO & LOGÍSTICA",
    p1_summary:
      "Sistema completo de gestão financeira e logística projetado com separação de responsabilidades (UI / Services / Data Access) e ambiente isolado em container.",
    p1_h1_html:
      "Persistência relacional em <code>SQLite</code> com regras de negócio integralmente desacopladas da camada visual construída em <code>Flet</code>.",
    p1_h2_html:
      "Integração externa e higienização de dados de endereçamento consumindo a <code>API ViaCEP</code> com tratamento resiliente de exceções.",
    p1_h3_html:
      "Suíte de testes unitários com <code>Pytest</code> utilizando banco em memória (<code>:memory:</code>) e <code>unittest.mock</code> para isolar chamadas HTTP.",
    p1_h4_html:
      "Padronização de execução via <code>Docker</code> e renderização dinâmica de gráficos financeiros com <code>Matplotlib</code> convertidos em <code>Base64</code>.",

    // Flagship 02
    p2_title: "Alerta de Vagas Tech",
    p2_meta: "2026 — PIPELINE & MENSAGERIA",
    p2_summary:
      "Pipeline automatizado de coleta contínua, filtragem por critérios técnicos e despacho de notificações em tempo real.",
    p2_h1_html:
      "Mapeamento Objeto-Relacional (ORM) com <code>SQLAlchemy</code> e <code>SQLite</code> garantindo controle transacional de estado e idempotência estrita contra alertas duplicados.",
    p2_h2_html:
      "Integração direta com a <code>Telegram Bot API</code> para disparo assíncrono de oportunidades qualificadas com tratamento de falhas de rede.",

    // Flagship 03
    p3_title: "API REST FastAPI & Contratos Tipados",
    p3_meta: "2026 — SERVIÇOS WEB",
    p3_summary:
      "Arquitetura de serviços HTTP assíncronos focada em validação rigorosa de schemas, semântica REST e documentação viva.",
    p3_h1_html:
      "Desenvolvimento de rotas assíncronas modulares respeitando verbos HTTP, códigos de status semânticos e tratamento padronizado de erros.",
    p3_h2_html:
      "Contratos de entrada e saída fortemente tipados via <code>Pydantic</code> com geração automática de especificação interativa <code>Swagger / OpenAPI</code>.",

    // Flagship 04
    p4_title: "C# .NET Backend Suite (Formação SENAI)",
    p4_meta: "2026 — ECOSSISTEMA .NET",
    p4_summary:
      "Conjunto de aplicações corporativas desenvolvidas durante as 160 horas presenciais de qualificação Back-End no SENAI São Caetano do Sul.",
    p4_h1_html:
      "Aplicação profunda de Orientação a Objetos em <code>C#</code> e <code>.NET</code>: encapsulamento, herança, polimorfismo, classes abstratas e contratos por interfaces.",
    p4_h2_html:
      "Manipulação de coleções genéricas, arquitetura orientada a domínio e integração estruturada com bancos de dados relacionais <code>SQL</code>.",

    // Flagship 05
    p5_title: "Aplicações & Automação Google AntiGravity",
    p5_meta: "2026 — IA & PRODUTIVIDADE CLI",
    p5_summary:
      "Ferramentas de linha de comando e fluxos automatizados integrando engenharia Back-End e modelos de IA Generativa.",
    p5_h1_html:
      "Construção de scripts CLI para automação de tarefas repetitivas, processamento local de arquivos e instrumentação de produtividade.",
    p5_h2_html:
      "Orquestração de fluxos assistidos por IA Generativa aplicando fundamentos de <code>Google Cloud GenAI</code> e <code>AntiGravity</code>.",

    // Remaining Repositories Table (06 to 13 = Total 13 Repositories)
    archive_heading: "Índice Complementar de Repositórios & Laboratórios",
    archive_count: "13 REPOSITÓRIOS NO TOTAL",
    r6_name: "Pense em Python",
    r6_scope: "Implementação completa de algoritmos, recursão e estruturas de dados fundamentais.",
    r7_name: "Python Challenges (HackerRank)",
    r7_scope: "Resolução estruturada de desafios algorítmicos, lógica e manipulação eficiente de dados.",
    r8_name: "C# POO — Orientação a Objetos",
    r8_scope: "Modelagem de classes, interfaces, polimorfismo e princípios SOLID no ecossistema .NET.",
    r9_name: "C# SQL Integration",
    r9_scope: "Persistência relacional, consultas parametrizadas e mapeamento de entidades em C#.",
    r10_name: "C# Fundamentos",
    r10_scope: "Tipagem estática, estruturas de controle, tratamento de exceções e coleções .NET.",
    r11_name: "Tool Challenges",
    r11_scope: "Desafios práticos de automação, utilitários de terminal e integração de ferramentas.",
    r12_name: "Relatório Técnico Java",
    r12_scope: "Estudos comparativos de tipagem, orientação a objetos e execução na JVM.",
    r13_name: "washiquant.github.io",
    r13_scope: "Portfólio editorial estático de alta performance com internacionalização instantânea.",

    // 03 — Toolkit Section (Warm Stone Contrast #EAE8E1)
    tk_label_text: "ARSENAL TÉCNICO",
    tk_heading: "Ferramentas com propósito.",
    tk_lead:
      "Foco Backend-first. Amplitude técnica suficiente para modelar dados, construir APIs, isolar testes automatizados e entregar a aplicação inteira.",
    tk_cat_1: "Linguagens",
    tk_cat_2: "Backend & APIs",
    tk_cat_3: "Bancos de Dados & ORM",
    tk_val_3_modeling: "Modelagem Relacional",
    tk_cat_4: "Testes & DevOps",
    tk_note_pytest: "(Unit, Mocks, :memory:)",
    tk_cat_5: "IA & Automação",
    tk_val_5_cli: "Automação CLI",

    // 04 — Academic Education & Certifications
    cred_eyebrow: "04 — FORMAÇÃO & CREDENCIAIS",
    cred_heading: "Base acadêmica e qualificação técnica.",
    cred_lead:
      "Formação universitária em andamento aliada ao treinamento prático presencial do SENAI e certificações reconhecidas pelo mercado.",
    c1_title: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    c1_org: "Universidade São Judas Tadeu (USJT) — São Paulo, SP",
    c1_meta: "2026 – 2028",
    c2_title: "Qualificação Profissional: Desenvolvedor Back-End C# / .NET (160h)",
    c2_org: "SENAI São Caetano do Sul",
    c2_meta: "PRESENCIAL",
    c3_title: "Python (Basic) Certificate",
    c3_org: "HackerRank",
    c3_meta: "CERTIFICADO",
    c4_title: "Fundamentos de IA Generativa (Google Cloud)",
    c4_org: "SENAI",
    c4_meta: "CONCLUÍDO",
    c5_title: "Python para Análise de Dados & Data Science",
    c5_org: "Data Science Academy (DSA)",
    c5_meta: "CONCLUÍDO",
    c6_title: "PCAP / PCEP — Certified Python Programmer",
    c6_org: "Python Institute",
    c6_meta: "EM PREPARAÇÃO",

    // 05 — Contact & Footer
    contact_eyebrow: "05 — CONTATO",
    contact_heading: "Vamos construir sistemas sólidos juntos.",
    contact_sub:
      "Disponível para oportunidades de Desenvolvedor Back-End (Júnior, Estágio ou Trainee) em São Paulo/SP (Presencial ou Híbrido) e Remoto. Entre em contato diretamente por e-mail ou LinkedIn.",
    contact_copy_btn: "Copiar E-mail",
    toast_copied: "E-mail copiado: washiwm1@gmail.com",
    footer_copy: "© 2026 Washington Willian R. Moreira. Todos os direitos reservados.",
    footer_loc: "GUARULHOS, SP — BRASIL"
  },

  en: {
    meta_title: "Washington Willian R. Moreira — Back-End Developer | Python & C# (.NET)",
    skip_link: "Skip to main content",

    // Floating Pill Header
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_toolkit: "Toolkit",
    nav_credentials: "Education",
    nav_contact: "Contact",
    lang_aria: "Switch language between Portuguese and English",

    // Hero Section
    hero_eyebrow: "PYTHON & C# .NET BACKEND DEVELOPER",
    hero_availability: "GUARULHOS, SP — ON-SITE SP / HYBRID / REMOTE",
    hero_stmt_1: "Robust systems.",
    hero_stmt_2: "Solid foundations.",
    hero_bio_html:
      'I am a <span class="text-accent">backend developer</span> focused on layered software architecture, process automation, RESTful APIs, and relational persistence. I build testable, containerized services using <span class="text-white">Python (FastAPI, SQLAlchemy, Pytest)</span> and <span class="text-white">C# (.NET)</span> to solve real-world problems with stability and architectural clarity.',
    hero_cta_primary: "View Projects",
    hero_cta_secondary: "Contact Me",

    // 01 — About Section (Building Robust Systems / My Journey)
    about_card_eyebrow: "ABOUT ME",
    about_card_title: "My Journey",
    about_eyebrow: "01 — ABOUT ME",
    about_heading: "Building Robust Systems",
    about_p1_html:
      'Hi, I\'m <span class="text-accent">Washington Willian R. Moreira</span>, a Back-End Developer based in Guarulhos, São Paulo. I enjoy turning complex operational workflows into predictable RESTful APIs, automated data pipelines, and persistence layers that preserve data integrity even when external dependencies fail.',
    about_p2_html:
      'I am pursuing a degree in <span class="text-white">Systems Analysis and Development (ADS)</span> at Universidade São Judas Tadeu (2026–2028), paired with an intensive 160-hour on-site qualification in <span class="text-white">C# / .NET Back-End Development</span> and <span class="text-white">Generative AI (Google Cloud)</span> at SENAI. My engineering workflow combines object-oriented design, SQL/ORM modeling, isolated in-memory unit tests (<code>Pytest</code> & mocks), and <code>Docker</code> containerization.',
    about_p3_html:
      'Beyond flagship systems, I maintain a disciplined practice of algorithmic problem solving on HackerRank, computer science literature studies, CLI workflow automation powered by Google AntiGravity, and active preparation for the <span class="text-white">PCAP / PCEP (Python Institute)</span> certifications.',

    // 02 — Projects & Practical Experience (Editorial Split Grid)
    proj_eyebrow: "02 — FEATURED PROJECTS",
    proj_heading: "Applied engineering for real-world systems.",
    proj_lead:
      "Clean layered architecture, strict separation between presentation, business logic, and data access, idempotent state persistence, and automated unit tests decoupled from external networks.",
    proj_all_repos_link: "View all 13 repositories on GitHub",

    // Flagship 01
    p1_title: "Delivery Management & Analytics Dashboard",
    p1_meta: "2026 — LOGISTICS & FINANCE",
    p1_summary:
      "End-to-end financial and logistics management system architected with strict separation of concerns (UI / Services / Data Access) inside an isolated containerized runtime.",
    p1_h1_html:
      "Relational persistence in <code>SQLite</code> with domain and business rules cleanly decoupled from the <code>Flet</code> presentation interface.",
    p1_h2_html:
      "External address consumption and data validation via the <code>ViaCEP REST API</code> with resilient network exception handling.",
    p1_h3_html:
      "Automated unit test suite built with <code>Pytest</code> leveraging an in-memory database (<code>:memory:</code>) and <code>unittest.mock</code> to isolate external HTTP calls.",
    p1_h4_html:
      "Reproducible <code>Docker</code> containerization and dynamic financial charts generated via <code>Matplotlib</code> rendered as <code>Base64</code> streams.",

    // Flagship 02
    p2_title: "Automated Tech Job Monitor",
    p2_meta: "2026 — DATA PIPELINE & MESSAGING",
    p2_summary:
      "Automated ingestion, filtering, and real-time notification pipeline tracking software engineering opportunities.",
    p2_h1_html:
      "Object-Relational Mapping (ORM) powered by <code>SQLAlchemy</code> and <code>SQLite</code> enforcing transactional state tracking and strict idempotency against duplicate alerts.",
    p2_h2_html:
      "Direct integration with the <code>Telegram Bot API</code> for asynchronous notification dispatching with network fault tolerance.",

    // Flagship 03
    p3_title: "FastAPI REST Service & Typed Contracts",
    p3_meta: "2026 — WEB SERVICES",
    p3_summary:
      "Asynchronous HTTP service architecture centered on strict schema validation, RESTful semantics, and living API documentation.",
    p3_h1_html:
      "Modular asynchronous routing implementing proper HTTP verbs, semantic status codes, and structured error payloads.",
    p3_h2_html:
      "Strongly-typed request and response contracts enforced via <code>Pydantic</code> schemas with interactive <code>Swagger / OpenAPI</code> specs.",

    // Flagship 04
    p4_title: "C# .NET Backend Suite (SENAI Track)",
    p4_meta: "2026 — .NET ECOSYSTEM",
    p4_summary:
      "Suite of back-end applications engineered during the 160-hour on-site C# / .NET professional qualification at SENAI São Caetano do Sul.",
    p4_h1_html:
      "Advanced Object-Oriented Programming in <code>C#</code> and <code>.NET</code>: encapsulation, inheritance, polymorphism, abstract classes, and interface contracts.",
    p4_h2_html:
      "Generic collections management, domain-driven layering, and structured relational persistence with <code>SQL</code> databases.",

    // Flagship 05
    p5_title: "Google AntiGravity Workflows & CLI Automation",
    p5_meta: "2026 — GENAI & CLI TOOLING",
    p5_summary:
      "Command-line productivity utilities and automated engineering pipelines bridging Back-End scripts and Generative AI.",
    p5_h1_html:
      "Development of Python CLI utilities automating repetitive operational routines, file processing, and developer workflows.",
    p5_h2_html:
      "AI-assisted workflow orchestration applying <code>Google Cloud GenAI</code> fundamentals and <code>Google AntiGravity</code>.",

    // Remaining Repositories Table (06 to 13 = Total 13 Repositories)
    archive_heading: "Complementary Repository & Lab Index",
    archive_count: "13 TOTAL REPOSITORIES",
    r6_name: "Think Python (Pense em Python)",
    r6_scope: "Comprehensive implementations of core algorithms, recursion, and fundamental data structures.",
    r7_name: "Python Challenges (HackerRank)",
    r7_scope: "Structured algorithmic problem-solving, logic optimization, and data manipulation challenges.",
    r8_name: "C# OOP — Object-Oriented Design",
    r8_scope: "Class modeling, interface contracts, polymorphism, and SOLID principles in .NET.",
    r9_name: "C# SQL Integration",
    r9_scope: "Relational data access, parameterized SQL queries, and entity persistence in C#.",
    r10_name: "C# Fundamentals",
    r10_scope: "Static typing, control flow architectures, exception handling, and .NET collections.",
    r11_name: "Tool Challenges",
    r11_scope: "Hands-on CLI automation challenges, terminal utilities, and developer tooling.",
    r12_name: "Java Technical Report",
    r12_scope: "Comparative engineering studies on static typing, OOP, and JVM execution.",
    r13_name: "washiquant.github.io",
    r13_scope: "High-performance static editorial portfolio featuring instant bilingual internationalization.",

    // 03 — Toolkit Section (Warm Stone Contrast #EAE8E1)
    tk_label_text: "A CONSIDERED TOOLKIT",
    tk_heading: "Tools with purpose.",
    tk_lead:
      "Backend-first focus. Enough breadth to model relational data, design clean APIs, isolate automated tests, and ship the whole system.",
    tk_cat_1: "Languages",
    tk_cat_2: "Backend & APIs",
    tk_cat_3: "Databases & ORM",
    tk_val_3_modeling: "Relational Modeling",
    tk_cat_4: "Testing & DevOps",
    tk_note_pytest: "(Unit, Mocks, :memory:)",
    tk_cat_5: "AI & Automation",
    tk_val_5_cli: "CLI Automation",

    // 04 — Academic Education & Certifications
    cred_eyebrow: "04 — EDUCATION & CREDENTIALS",
    cred_heading: "Academic foundation & technical training.",
    cred_lead:
      "Undergraduate degree in Systems Analysis and Development combined with intensive on-site C#/.NET training at SENAI and industry certifications.",
    c1_title: "A.S. in Systems Analysis and Development (ADS)",
    c1_org: "Universidade São Judas Tadeu (USJT) — São Paulo, Brazil",
    c1_meta: "2026 – 2028",
    c2_title: "Professional Qualification: Back-End Developer C# / .NET (160h)",
    c2_org: "SENAI São Caetano do Sul",
    c2_meta: "ON-SITE",
    c3_title: "Python (Basic) Certificate",
    c3_org: "HackerRank",
    c3_meta: "CERTIFIED",
    c4_title: "Generative AI Fundamentals (Google Cloud)",
    c4_org: "SENAI",
    c4_meta: "COMPLETED",
    c5_title: "Python for Data Analysis & Data Science",
    c5_org: "Data Science Academy (DSA)",
    c5_meta: "COMPLETED",
    c6_title: "PCAP / PCEP — Certified Python Programmer",
    c6_org: "Python Institute",
    c6_meta: "IN PREPARATION",

    // 05 — Contact & Footer
    contact_eyebrow: "05 — CONTACT",
    contact_heading: "Let's build reliable systems together.",
    contact_sub:
      "Available for Back-End Developer opportunities (Junior, Intern, or Working Student) in São Paulo, Brazil (On-site or Hybrid) and Remote worldwide. Reach out directly via email or LinkedIn.",
    contact_copy_btn: "Copy Email",
    toast_copied: "Email copied: washiwm1@gmail.com",
    footer_copy: "© 2026 Washington Willian R. Moreira. All rights reserved.",
    footer_loc: "GUARULHOS, SP — BRAZIL"
  }
};

const STORAGE_KEY = "washiquant_portfolio_lang";

/**
 * Instant DOM translation without page reload
 */
function setPortfolioLanguage(lang) {
  const activeLang = I18N_DICTIONARY[lang] ? lang : "pt";
  const dict = I18N_DICTIONARY[activeLang];

  document.documentElement.lang = activeLang === "en" ? "en" : "pt-BR";

  if (dict.meta_title) {
    document.title = dict.meta_title;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const isCurrent = btn.getAttribute("data-lang-btn") === activeLang;
    btn.classList.toggle("active", isCurrent);
    btn.setAttribute("aria-pressed", String(isCurrent));
  });

  try {
    localStorage.setItem(STORAGE_KEY, activeLang);
  } catch (_) {
    // Ignore storage restriction
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Language (PT-BR default, persistent via localStorage)
  let initialLang = "pt";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") {
      initialLang = saved;
    }
  } catch (_) {
    initialLang = "pt";
  }
  setPortfolioLanguage(initialLang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setPortfolioLanguage(btn.getAttribute("data-lang-btn"));
    });
  });

  // 2. Subtle Editorial Entrance Animations via IntersectionObserver
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -48px 0px"
      }
    );

    revealItems.forEach((el) => revealObserver.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }

  // 3. Header Scroll Blur & Floating Pill Active Section Highlight
  const header = document.getElementById("site-header");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll("[data-nav-section]");

  function updateScrollState() {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }

    let currentId = "home";
    const triggerOffset = window.scrollY + window.innerHeight * 0.32;

    sections.forEach((sec) => {
      if (triggerOffset >= sec.offsetTop) {
        currentId = sec.id;
      }
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute("data-nav-section");
      link.classList.toggle("active", target === currentId);
    });
  }

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  // 4. Mobile Navigation Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const open = mobileDrawer.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(open));
    });

    mobileDrawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileDrawer.classList.remove("is-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 5. One-Click Email Copy with Localized Toast
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyToast = document.getElementById("copy-toast");
  let toastTimer = null;

  if (copyEmailBtn && copyToast) {
    copyEmailBtn.addEventListener("click", async () => {
      const address = "washiwm1@gmail.com";
      try {
        await navigator.clipboard.writeText(address);
      } catch (_) {
        const temp = document.createElement("textarea");
        temp.value = address;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }

      copyToast.classList.add("is-visible");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        copyToast.classList.remove("is-visible");
      }, 3000);
    });
  }
});
