export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
}

export interface TechStack {
  name: string;
  category: 'Linguagens' | 'Frameworks & APIs' | 'Bancos de Dados' | 'DevOps & Ferramentas';
  iconName: string;
}

export const PERSONAL_DATA = {
  name: "Washington Moreira",
  fullName: "Washington Willian Roncador Moreira",
  role: "Desenvolvedor Back-end",
  specialty: "Desenvolvimento Back-end com Python",
  education: {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade São Judas Tadeu (USJT)",
    status: "Em andamento"
  },
  location: "Guarulhos, SP - Brasil",
  bio: "Sou estudante de Análise e Desenvolvimento de Sistemas e venho construindo minha trajetória em desenvolvimento de software, com foco em Back-end. Tenho interesse especial em Python, APIs, bancos de dados, automação e construção de sistemas que resolvem problemas reais.",
  complementaryBio: "Busco constantemente o aprimoramento técnico através da prática e da leitura de literaturas fundamentais da computação. Meu foco atual está na criação de soluções eficientes, arquitetura de código limpo e automação de processos.",
  contact: {
    email: "washi wm1@gmail.com",
    phone: "+55 11 96588-12227",
    phoneRaw: "+55119658812227",
    linkedIn: "https://www.linkedin.com/in/washington-willian-roncador-moreira-04a0662b9/",
    gitHub: "https://github.com/washiquant",
    gitHubPages: "https://washiquant.github.io/"
  }
};

export const METRICS = [
  { label: "Curso Superior", value: "ADS", subtext: "São Judas Tadeu" },
  { label: "Linguagem Foco", value: "Python", subtext: "Back-end & Automação" },
  { label: "Orientação", value: "Projetos Práticos", subtext: "Código no GitHub" },
  { label: "Status Profissional", value: "Open to Work", subtext: "Oportunidades Back-end" }
];

export const PROJECTS: Project[] = [
  {
    id: "faturamento-entregadores",
    title: "Controle de Faturamento para Entregadores",
    description: "Aplicação desenvolvida em Python e SQLite para auxiliar entregadores no registro diário de corridas, consolidação de faturamento, gestão de despesas e análise de desempenho financeiro.",
    technologies: ["Python", "SQLite", "Dashboard", "Análise de Dados"],
    githubUrl: "https://github.com/washiquant",
    image: "/project-faturamento.jpg"
  },
  {
    id: "pipeline-vagas",
    title: "Pipeline de Monitoramento e Alertas de Vagas",
    description: "Pipeline automatizado em Python focado em coleta, processamento de dados e monitoramento contínuo de oportunidades na área de tecnologia, emitindo alertas estruturados.",
    technologies: ["Python", "Automação", "APIs", "Web Scraping"],
    githubUrl: "https://github.com/washiquant",
    image: "/project-pipeline.jpg"
  },
  {
    id: "projeto-quant",
    title: "Análise Quantitativa e Algoritmos Financeiros",
    description: "Projeto voltado para automação de análise de dados financeiros, coleta de métricas de mercado e execução de rotinas analíticas em Python.",
    technologies: ["Python", "Pandas", "YFinance", "Matplotlib"],
    githubUrl: "https://github.com/washiquant",
    image: "/project-quant.jpg"
  }
];

export const TECHNOLOGIES: TechStack[] = [
  { name: "Python", category: "Linguagens", iconName: "Code2" },
  { name: "FastAPI", category: "Frameworks & APIs", iconName: "Zap" },
  { name: "SQL", category: "Bancos de Dados", iconName: "Database" },
  { name: "SQLite", category: "Bancos de Dados", iconName: "HardDrive" },
  { name: "PostgreSQL", category: "Bancos de Dados", iconName: "Server" },
  { name: "Docker", category: "DevOps & Ferramentas", iconName: "Box" },
  { name: "Linux", category: "DevOps & Ferramentas", iconName: "Terminal" },
  { name: "Git", category: "DevOps & Ferramentas", iconName: "GitBranch" },
  { name: "Redis", category: "Bancos de Dados", iconName: "Cpu" },
  { name: "APIs REST", category: "Frameworks & APIs", iconName: "Globe" }
];

export const WORK_PILLARS = [
  {
    number: "01",
    title: "Código Organizado",
    description: "Estruturação clara, legível e de fácil manutenção, priorizando boas práticas de desenvolvimento."
  },
  {
    number: "02",
    title: "Soluções Orientadas a Problemas Reais",
    description: "Foco total na entrega de valor e utilidade prática para os utilizadores do sistema."
  },
  {
    number: "03",
    title: "Automação e Eficiência",
    description: "Substituição de tarefas repetitivas por fluxos e pipelines automatizados em Python."
  },
  {
    number: "04",
    title: "Aprendizado Contínuo",
    description: "Evolução técnica contínua baseada em documentação oficial e literatura essencial."
  }
];