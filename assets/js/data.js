// ============================================
// SVG ICONS FOR DATA (inline, used in cards)
// ============================================
const S = {
  python: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3776AB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C7.58 2 4 3.79 4 6s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4z"/><path d="M4 12c0 2.21 3.58 4 8 4s8-1.79 8-4"/><path d="M4 18c0 2.21 3.58 4 8 4s8-1.79 8-4"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
  
  js: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#F7DF1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M8 16v-4a2 2 0 0 1 4 0v4"/><line x1="8" y1="14" x2="12" y2="14"/><path d="M16 8v8"/></svg>`,
  
  figma: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/><path d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z"/><path d="M12 8h4a4 4 0 0 1 0 8h-4z"/></svg>`,
  
  ml: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#667EEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 21h8"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  
  flutter: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#54C5F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 16l5-5 5 5"/><path d="M7 8l5 5 5-5"/></svg>`,
  
  docker: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#2496ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><rect x="6" y="6" width="4" height="4"/><rect x="14" y="6" width="4" height="4"/><rect x="6" y="14" width="4" height="4"/><rect x="14" y="14" width="4" height="4"/></svg>`,
  
  security: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  
  sql: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#336791" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  
  react: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)"/></svg>`,
  
  graphic: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  
  pandas: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#E84393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  
  aws: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
};

const COURSES = [
  {
    id: 1,
    title: "Python для начинающих",
    description: "Полный курс Python с нуля. Научитесь программировать, создавать скрипты, работать с файлами и базами данных.",
    fullDescription: "Этот курс охватывает все аспекты Python: от базового синтаксиса до объектно-ориентированного программирования. Вы создадите несколько реальных проектов и получите навыки, которые работодатели ищут в 2024 году.",
    price: 2990,
    oldPrice: 5990,
    category: "programming",
    categoryName: "Программирование",
    instructorId: 1,
    instructor: "Алексей Петров",
    rating: 4.8,
    students: 15420,
    duration: "42 часа",
    lessons: 156,
    level: "Начинающий",
    icon: S.python,
    color: "#3776AB",
    tags: ["Python", "ООП", "Алгоритмы"],
    featured: true,
    curriculum: [
      { section: "Введение", lessons: ["Установка Python", "Первая программа", "Переменные и типы"] },
      { section: "Управление потоком", lessons: ["Условия if/else", "Циклы for/while", "Функции"] },
      { section: "ООП", lessons: ["Классы и объекты", "Наследование", "Полиморфизм"] },
      { section: "Проекты", lessons: ["Калькулятор", "To-Do список", "Парсер данных"] }
    ]
  },
  {
    id: 2,
    title: "JavaScript Full Stack",
    description: "От основ JS до Node.js и React. Станьте full-stack разработчиком с нуля за 3 месяца.",
    fullDescription: "Комплексный курс по JavaScript, охватывающий frontend и backend разработку. Изучите современный ES6+, async/await, REST API, работу с базами данных.",
    price: 4990,
    oldPrice: 8990,
    category: "programming",
    categoryName: "Программирование",
    instructorId: 2,
    instructor: "Мария Козлова",
    rating: 4.9,
    students: 22350,
    duration: "68 часов",
    lessons: 240,
    level: "Средний",
    icon: S.js,
    color: "#F7DF1E",
    tags: ["JavaScript", "Node.js", "API"],
    featured: true,
    curriculum: [
      { section: "Основы JS", lessons: ["Переменные", "Функции", "DOM"] },
      { section: "ES6+", lessons: ["Arrow functions", "Promises", "Async/Await"] },
      { section: "Backend", lessons: ["Node.js", "Express", "MongoDB"] },
      { section: "Проект", lessons: ["REST API", "Аутентификация", "Деплой"] }
    ]
  },
  {
    id: 3,
    title: "UI/UX Дизайн",
    description: "Создавайте красивые и удобные интерфейсы. Figma, прототипирование, user research.",
    fullDescription: "Курс по UI/UX дизайну для тех, кто хочет создавать продукты, которыми приятно пользоваться. Освоите Figma, научитесь проводить UX-исследования и создавать прототипы.",
    price: 3490,
    oldPrice: 6990,
    category: "design",
    categoryName: "Дизайн",
    instructorId: 3,
    instructor: "Светлана Иванова",
    rating: 4.7,
    students: 8920,
    duration: "38 часов",
    lessons: 128,
    level: "Начинающий",
    icon: S.figma,
    color: "#FF6B6B",
    tags: ["Figma", "UX", "Прототипирование"],
    featured: true,
    curriculum: [
      { section: "Основы дизайна", lessons: ["Теория цвета", "Типографика", "Сетки"] },
      { section: "Figma", lessons: ["Интерфейс", "Компоненты", "Автолейаут"] },
      { section: "UX Research", lessons: ["Интервью", "Personas", "Customer Journey"] },
      { section: "Портфолио", lessons: ["Кейс-стади", "Презентация", "Behance"] }
    ]
  },
  {
    id: 4,
    title: "Machine Learning с нуля",
    description: "Изучите машинное обучение на Python. Scikit-learn, TensorFlow, реальные проекты.",
    fullDescription: "Погрузитесь в мир искусственного интеллекта. Курс охватывает классические алгоритмы ML, нейронные сети и практическое применение в реальных задачах.",
    price: 5990,
    oldPrice: 11990,
    category: "data",
    categoryName: "Data Science",
    instructorId: 4,
    instructor: "Дмитрий Сидоров",
    rating: 4.9,
    students: 11230,
    duration: "55 часов",
    lessons: 189,
    level: "Продвинутый",
    icon: S.ml,
    color: "#667EEA",
    tags: ["ML", "Python", "TensorFlow"],
    featured: false,
    curriculum: [
      { section: "Математика", lessons: ["Линейная алгебра", "Статистика", "Вероятности"] },
      { section: "Классический ML", lessons: ["Регрессия", "Классификация", "Кластеризация"] },
      { section: "Deep Learning", lessons: ["Нейросети", "CNN", "RNN"] },
      { section: "Проекты", lessons: ["Распознавание", "NLP", "Рекомендации"] }
    ]
  },
  {
    id: 5,
    title: "Flutter разработка",
    description: "Создавайте кроссплатформенные мобильные приложения для iOS и Android на Dart/Flutter.",
    fullDescription: "Flutter позволяет создавать красивые нативные приложения для мобильных платформ из единой кодовой базы. Курс от основ до публикации в App Store и Google Play.",
    price: 4490,
    oldPrice: 7990,
    category: "mobile",
    categoryName: "Мобильная разработка",
    instructorId: 1,
    instructor: "Алексей Петров",
    rating: 4.6,
    students: 6780,
    duration: "46 часов",
    lessons: 165,
    level: "Средний",
    icon: S.flutter,
    color: "#54C5F8",
    tags: ["Flutter", "Dart", "Mobile"],
    featured: false,
    curriculum: [
      { section: "Dart", lessons: ["Синтаксис", "ООП", "Async"] },
      { section: "Flutter Basics", lessons: ["Виджеты", "Layouts", "Navigation"] },
      { section: "State Management", lessons: ["setState", "Provider", "Bloc"] },
      { section: "Публикация", lessons: ["Firebase", "App Store", "Play Market"] }
    ]
  },
  {
    id: 6,
    title: "Docker и Kubernetes",
    description: "Контейнеризация приложений, оркестрация, CI/CD пайплайны для DevOps инженеров.",
    fullDescription: "Научитесь упаковывать приложения в контейнеры, управлять ими с помощью Kubernetes и настраивать автоматизированные процессы доставки кода.",
    price: 5490,
    oldPrice: 9990,
    category: "devops",
    categoryName: "DevOps",
    instructorId: 5,
    instructor: "Игорь Новиков",
    rating: 4.8,
    students: 9340,
    duration: "51 час",
    lessons: 178,
    level: "Продвинутый",
    icon: S.docker,
    color: "#2496ED",
    tags: ["Docker", "K8s", "CI/CD"],
    featured: false,
    curriculum: [
      { section: "Docker", lessons: ["Контейнеры", "Images", "Docker Compose"] },
      { section: "Kubernetes", lessons: ["Pods", "Services", "Deployments"] },
      { section: "CI/CD", lessons: ["GitHub Actions", "Jenkins", "GitLab CI"] },
      { section: "Мониторинг", lessons: ["Prometheus", "Grafana", "Logs"] }
    ]
  },
  {
    id: 7,
    title: "Этичный хакинг",
    description: "Основы кибербезопасности, пентестинг, защита систем. Kali Linux, Metasploit.",
    fullDescription: "Курс по этичному хакингу и кибербезопасности. Научитесь думать как хакер, чтобы защищать системы. Практика на легальных стендах.",
    price: 6990,
    oldPrice: 12990,
    category: "security",
    categoryName: "Кибербезопасность",
    instructorId: 6,
    instructor: "Андрей Волков",
    rating: 4.9,
    students: 7560,
    duration: "60 часов",
    lessons: 210,
    level: "Продвинутый",
    icon: S.security,
    color: "#1A1A2E",
    tags: ["Security", "Kali", "Pentest"],
    featured: false,
    curriculum: [
      { section: "Основы", lessons: ["Сети", "Linux", "Протоколы"] },
      { section: "Разведка", lessons: ["OSINT", "Сканирование", "Перечисление"] },
      { section: "Эксплуатация", lessons: ["Metasploit", "SQL Injection", "XSS"] },
      { section: "Защита", lessons: ["Firewall", "IDS/IPS", "SOC"] }
    ]
  },
  {
    id: 8,
    title: "SQL и базы данных",
    description: "PostgreSQL, MySQL, оптимизация запросов, проектирование схем баз данных.",
    fullDescription: "Освойте работу с реляционными базами данных. От базовых SELECT запросов до сложных JOIN, индексов, транзакций и оптимизации производительности.",
    price: 2490,
    oldPrice: 4990,
    category: "data",
    categoryName: "Data Science",
    instructorId: 4,
    instructor: "Дмитрий Сидоров",
    rating: 4.7,
    students: 18900,
    duration: "32 часа",
    lessons: 112,
    level: "Начинающий",
    icon: S.sql,
    color: "#336791",
    tags: ["SQL", "PostgreSQL", "БД"],
    featured: false,
    curriculum: [
      { section: "Основы SQL", lessons: ["SELECT", "WHERE", "JOIN"] },
      { section: "DML/DDL", lessons: ["INSERT", "UPDATE", "CREATE TABLE"] },
      { section: "Оптимизация", lessons: ["Индексы", "Планы запросов", "Партиции"] },
      { section: "Проект", lessons: ["Схема БД", "Процедуры", "Триггеры"] }
    ]
  },
  {
    id: 9,
    title: "React.js Мастер-класс",
    description: "Современный React: Hooks, Context, Redux Toolkit, TypeScript. Создание SPA приложений.",
    fullDescription: "Глубокое погружение в экосистему React. Изучите все современные паттерны разработки, управление состоянием и оптимизацию производительности.",
    price: 4290,
    oldPrice: 7990,
    category: "programming",
    categoryName: "Программирование",
    instructorId: 2,
    instructor: "Мария Козлова",
    rating: 4.8,
    students: 13450,
    duration: "49 часов",
    lessons: 172,
    level: "Средний",
    icon: S.react,
    color: "#61DAFB",
    tags: ["React", "Redux", "TypeScript"],
    featured: false,
    curriculum: [
      { section: "React Basics", lessons: ["JSX", "Props", "State"] },
      { section: "Hooks", lessons: ["useState", "useEffect", "Custom Hooks"] },
      { section: "Redux", lessons: ["Store", "Actions", "RTK Query"] },
      { section: "TypeScript", lessons: ["Типы", "Interfaces", "Generics"] }
    ]
  },
  {
    id: 10,
    title: "Графический дизайн",
    description: "Adobe Photoshop, Illustrator, Canva. Создание логотипов, баннеров, брендинг.",
    fullDescription: "Освойте профессиональные инструменты графического дизайна. Научитесь создавать логотипы, иллюстрации, баннеры и целые фирменные стили.",
    price: 2990,
    oldPrice: 5490,
    category: "design",
    categoryName: "Дизайн",
    instructorId: 3,
    instructor: "Светлана Иванова",
    rating: 4.6,
    students: 10230,
    duration: "35 часов",
    lessons: 124,
    level: "Начинающий",
    icon: S.graphic,
    color: "#FF6B35",
    tags: ["Photoshop", "Illustrator", "Брендинг"],
    featured: false,
    curriculum: [
      { section: "Photoshop", lessons: ["Слои", "Маски", "Ретушь"] },
      { section: "Illustrator", lessons: ["Векторная графика", "Логотипы", "Иконки"] },
      { section: "Брендинг", lessons: ["Стиль", "Гайдлайн", "Презентация"] },
      { section: "Портфолио", lessons: ["Оформление", "Behance", "Клиенты"] }
    ]
  },
  {
    id: 11,
    title: "Data Analysis с Pandas",
    description: "Анализ данных на Python: Pandas, NumPy, Matplotlib, Seaborn. От сырых данных к инсайтам.",
    fullDescription: "Научитесь работать с большими наборами данных, проводить статистический анализ, визуализировать результаты и делать обоснованные выводы.",
    price: 3990,
    oldPrice: 6990,
    category: "data",
    categoryName: "Data Science",
    instructorId: 4,
    instructor: "Дмитрий Сидоров",
    rating: 4.8,
    students: 8760,
    duration: "38 часов",
    lessons: 134,
    level: "Средний",
    icon: S.pandas,
    color: "#E84393",
    tags: ["Pandas", "NumPy", "Визуализация"],
    featured: false,
    curriculum: [
      { section: "NumPy", lessons: ["Arrays", "Operations", "Broadcasting"] },
      { section: "Pandas", lessons: ["DataFrame", "Groupby", "Merge"] },
      { section: "Визуализация", lessons: ["Matplotlib", "Seaborn", "Plotly"] },
      { section: "Проект", lessons: ["EDA", "Отчёт", "Дашборд"] }
    ]
  },
  {
    id: 12,
    title: "AWS Cloud Architect",
    description: "Amazon Web Services: EC2, S3, RDS, Lambda, архитектура облачных решений.",
    fullDescription: "Подготовка к работе с AWS. Освойте основные сервисы Amazon Web Services, научитесь проектировать масштабируемые и отказоустойчивые системы в облаке.",
    price: 7490,
    oldPrice: 14990,
    category: "devops",
    categoryName: "DevOps",
    instructorId: 5,
    instructor: "Игорь Новиков",
    rating: 4.9,
    students: 5670,
    duration: "65 часов",
    lessons: 228,
    level: "Продвинутый",
    icon: S.aws,
    color: "#FF9900",
    tags: ["AWS", "Cloud", "Архитектура"],
    featured: false,
    curriculum: [
      { section: "Основы AWS", lessons: ["IAM", "EC2", "VPC"] },
      { section: "Хранилища", lessons: ["S3", "EBS", "RDS"] },
      { section: "Serverless", lessons: ["Lambda", "API Gateway", "DynamoDB"] },
      { section: "Сертификация", lessons: ["Экзамен SAA", "Практика", "Симулятор"] }
    ]
  }
];

// SVG icons for categories
const CAT_ICONS = {
  programming: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  design: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  data: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  mobile: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  devops: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  security: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

const CATEGORIES = [
  { id: "programming", name: "Программирование", icon: CAT_ICONS.programming, count: 48, color: "#6366f1" },
  { id: "design", name: "Дизайн", icon: CAT_ICONS.design, count: 32, color: "#ec4899" },
  { id: "data", name: "Data Science", icon: CAT_ICONS.data, count: 27, color: "#14b8a6" },
  { id: "mobile", name: "Мобильная разработка", icon: CAT_ICONS.mobile, count: 21, color: "#f59e0b" },
  { id: "devops", name: "DevOps", icon: CAT_ICONS.devops, count: 19, color: "#3b82f6" },
  { id: "security", name: "Кибербезопасность", icon: CAT_ICONS.security, count: 15, color: "#ef4444" }
];

// SVG for teacher avatars
const TEACHER_AVATARS = {
  dev_male: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  dev_female: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  design_female: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  scientist: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  devops_male: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  security_male: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

const TEACHERS = [
  {
    id: 1,
    name: "Алексей Петров",
    title: "Senior Python Developer",
    company: "Yandex",
    bio: "10 лет опыта в Python разработке. Ранее работал в Яндексе и Сбербанке. Автор 3 open-source библиотек.",
    avatar: TEACHER_AVATARS.dev_male,
    rating: 4.9,
    students: 28450,
    courses: 4,
    experience: "10 лет",
    skills: ["Python", "Django", "FastAPI", "PostgreSQL"]
  },
  {
    id: 2,
    name: "Мария Козлова",
    title: "Frontend Tech Lead",
    company: "VK",
    bio: "Tech Lead во ВКонтакте. Специализируется на React экосистеме и производительности веб-приложений.",
    avatar: TEACHER_AVATARS.dev_female,
    rating: 4.9,
    students: 35780,
    courses: 3,
    experience: "8 лет",
    skills: ["JavaScript", "React", "TypeScript", "Node.js"]
  },
  {
    id: 3,
    name: "Светлана Иванова",
    title: "Lead Product Designer",
    company: "Tinkoff",
    bio: "Product Designer в Тинькофф. Создала дизайн-систему для 50+ продуктов. Спикер конференций по UX.",
    avatar: TEACHER_AVATARS.design_female,
    rating: 4.8,
    students: 19120,
    courses: 3,
    experience: "7 лет",
    skills: ["Figma", "UX Research", "Photoshop", "Motion Design"]
  },
  {
    id: 4,
    name: "Дмитрий Сидоров",
    title: "Data Science Lead",
    company: "Сбер",
    bio: "Руководит командой Data Science в Сбербанке. PhD по математике. Публикации в международных журналах.",
    avatar: TEACHER_AVATARS.scientist,
    rating: 4.9,
    students: 22890,
    courses: 4,
    experience: "12 лет",
    skills: ["Python", "TensorFlow", "Spark", "SQL"]
  },
  {
    id: 5,
    name: "Игорь Новиков",
    title: "DevOps Architect",
    company: "Mail.ru Group",
    bio: "Архитектор DevOps в Mail.ru. Построил инфраструктуру для сервисов с нагрузкой 100M+ запросов в сутки.",
    avatar: TEACHER_AVATARS.devops_male,
    rating: 4.8,
    students: 15340,
    courses: 3,
    experience: "9 лет",
    skills: ["Kubernetes", "AWS", "Terraform", "Ansible"]
  },
  {
    id: 6,
    name: "Андрей Волков",
    title: "Security Researcher",
    company: "Kaspersky Lab",
    bio: "Исследователь безопасности в Kaspersky Lab. Обнаружил 20+ критических уязвимостей в популярных продуктах.",
    avatar: TEACHER_AVATARS.security_male,
    rating: 4.9,
    students: 11230,
    courses: 2,
    experience: "11 лет",
    skills: ["Penetration Testing", "Reverse Engineering", "Malware Analysis", "CTF"]
  }
];

// ... BLOG_POSTS, FAQ_DATA, PRICING_PLANS без изменений ...

const BLOG_POSTS = [
  {
    id: 1,
    title: "Как стать Python разработчиком в 2024 году",
    excerpt: "Полный гайд по изучению Python: от выбора учебных материалов до первой работы в IT.",
    content: "Python остаётся одним из самых востребованных языков программирования...",
    category: "Карьера",
    author: "Алексей Петров",
    date: "15 декабря 2024",
    readTime: "8 мин",
    icon: S.python,
    featured: true
  },
  {
    id: 2,
    title: "React vs Vue vs Angular: что выбрать в 2024",
    excerpt: "Сравнение трёх главных фреймворков для фронтенд разработки. Плюсы, минусы, перспективы.",
    content: "Выбор фреймворка — один из ключевых вопросов для любого фронтенд разработчика...",
    category: "Технологии",
    author: "Мария Козлова",
    date: "10 декабря 2024",
    readTime: "12 мин",
    icon: S.react,
    featured: true
  },
  {
    id: 3,
    title: "10 навыков, которые нужны каждому DevOps инженеру",
    excerpt: "Разбираем ключевые компетенции DevOps в 2024 году: от Docker до GitOps и FinOps.",
    content: "DevOps — это не просто набор инструментов, это культура и методология...",
    category: "DevOps",
    author: "Игорь Новиков",
    date: "5 декабря 2024",
    readTime: "10 мин",
    icon: S.docker,
    featured: false
  },
  {
    id: 4,
    title: "Как подготовиться к техническому интервью",
    excerpt: "Структура технического интервью в топовых IT компаниях. Алгоритмы, системный дизайн, soft skills.",
    content: "Техническое интервью пугает многих разработчиков, но с правильной подготовкой...",
    category: "Карьера",
    author: "Дмитрий Сидоров",
    date: "1 декабря 2024",
    readTime: "15 мин",
    icon: S.ml,
    featured: false
  },
  {
    id: 5,
    title: "Начало пути в Data Science: пошаговый план",
    excerpt: "С чего начать изучение Data Science? Математика, Python, инструменты и первые проекты.",
    content: "Data Science — одна из самых перспективных профессий в IT...",
    category: "Data Science",
    author: "Дмитрий Сидоров",
    date: "25 ноября 2024",
    readTime: "11 мин",
    icon: S.pandas,
    featured: false
  },
  {
    id: 6,
    title: "UX дизайн: 7 принципов, которые изменят ваши проекты",
    excerpt: "Ключевые принципы пользовательского опыта, которые отличают хороший дизайн от плохого.",
    content: "Хороший UX дизайн невидим — пользователь просто делает то, что хочет...",
    category: "Дизайн",
    author: "Светлана Иванова",
    date: "20 ноября 2024",
    readTime: "9 мин",
    icon: S.figma,
    featured: false
  }
];

const FAQ_DATA = [
  {
    question: "Как проходит обучение на платформе?",
    answer: "Обучение проходит в формате видеолекций, доступных 24/7. Вы можете учиться в удобное время, в своём темпе. К каждому уроку прилагаются материалы, задания и тесты для закрепления знаний."
  },
  {
    question: "Получу ли я сертификат по окончании курса?",
    answer: "Да! После успешного прохождения всех модулей и финального тестирования вы получаете электронный сертификат с уникальным ID, который можно проверить онлайн. Сертификаты принимаются ведущими IT компаниями."
  },
  {
    question: "Можно ли вернуть деньги, если курс не подойдёт?",
    answer: "Мы предоставляем 30-дневную гарантию возврата без вопросов. Если в течение 30 дней после покупки вы решите, что курс не подходит, мы вернём полную стоимость."
  },
  {
    question: "Есть ли доступ к материалам после окончания курса?",
    answer: "Да, все купленные курсы доступны пожизненно. Вы можете пересматривать материалы в любое время, а все обновления курса также будут доступны бесплатно."
  },
  {
    question: "Нужны ли предварительные знания для начала обучения?",
    answer: "Это зависит от выбранного курса. Курсы уровня 'Начинающий' не требуют никаких предварительных знаний. Для курсов уровня 'Средний' и 'Продвинутый' рекомендуется базовый опыт в соответствующей области."
  },
  {
    question: "Как получить доступ к купленным курсам?",
    answer: "После оплаты курс мгновенно появляется в вашем личном кабинете в разделе 'Мои курсы'. Войдите в аккаунт и начинайте обучение в любое время."
  },
  {
    question: "Есть ли общение с преподавателем?",
    answer: "Да! В каждом курсе есть раздел вопросов и ответов, где преподаватель отвечает в течение 24-48 часов. Также проводятся еженедельные живые сессии Q&A."
  },
  {
    question: "Можно ли учиться с мобильного устройства?",
    answer: "Наша платформа полностью адаптирована для мобильных устройств. Вы можете учиться с телефона или планшета в любом браузере без необходимости скачивать приложение."
  },
  {
    question: "Есть ли скидки для студентов?",
    answer: "Да! Студентам предоставляется скидка 40% на все курсы при предъявлении студенческого билета. Также у нас регулярно проходят акции и распродажи — подпишитесь на рассылку, чтобы не пропустить."
  },
  {
    question: "Как часто обновляются материалы курсов?",
    answer: "Наши преподаватели регулярно обновляют курсы. Большинство курсов обновляются каждые 3-6 месяцев, чтобы содержать актуальную информацию о новейших технологиях и инструментах."
  }
];

const PRICING_PLANS = [
  {
    id: "free",
    name: "Бесплатный",
    price: 0,
    period: "навсегда",
    description: "Для тех, кто только начинает знакомство с платформой",
    color: "#64748b",
    features: [
      { text: "5 бесплатных курсов", included: true },
      { text: "Доступ к материалам", included: true },
      { text: "Форум сообщества", included: true },
      { text: "Сертификаты", included: false },
      { text: "Поддержка преподавателя", included: false },
      { text: "Загрузка материалов", included: false },
      { text: "Живые сессии Q&A", included: false }
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: 1990,
    period: "месяц",
    description: "Лучший выбор для серьёзного обучения",
    color: "#6366f1",
    featured: true,
    features: [
      { text: "Все курсы платформы", included: true },
      { text: "Доступ к материалам", included: true },
      { text: "Форум сообщества", included: true },
      { text: "Сертификаты", included: true },
      { text: "Поддержка преподавателя", included: true },
      { text: "Загрузка материалов", included: true },
      { text: "Живые сессии Q&A", included: false }
    ]
  },
  {
    id: "business",
    name: "Business",
    price: 3990,
    period: "месяц",
    description: "Для команд и корпоративного обучения",
    color: "#8b5cf6",
    features: [
      { text: "Все курсы платформы", included: true },
      { text: "Доступ к материалам", included: true },
      { text: "Форум сообщества", included: true },
      { text: "Сертификаты", included: true },
      { text: "Поддержка преподавателя", included: true },
      { text: "Загрузка материалов", included: true },
      { text: "Живые сессии Q&A", included: true }
    ]
  }
];

const TESTIMONIALS = [
  {
    name: "Сергей Морозов",
    role: "Junior Python Developer в Сбере",
    text: "За 4 месяца обучения на платформе я получил работу мечты! Курс Python был настолько практичным, что уже на собеседовании я чувствовал себя уверенно.",
    avatar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1"/></svg>`,
    rating: 5
  },
  {
    name: "Анна Белова",
    role: "UI/UX Designer в стартапе",
    text: "Курс по UI/UX дизайну полностью изменил мою карьеру. Перешла из маркетинга в дизайн и теперь зарабатываю в 2 раза больше. Рекомендую!",
    avatar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1"/></svg>`,
    rating: 5
  },
  {
    name: "Михаил Тарасов",
    role: "Data Analyst в ВТБ",
    text: "Отличные курсы по Data Science! Преподаватели объясняют сложные вещи простым языком. Портфолио из учебных проектов помогло получить оффер.",
    avatar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1"/></svg>`,
    rating: 5
  }
];