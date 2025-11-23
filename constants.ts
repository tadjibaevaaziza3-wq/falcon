
import { NavItem, Service, Project, License, Partner } from './types';

export const COMPANY_NAME = "Falcon Telecom Expert";

// --- STATIC DATA (Shared across languages) ---
export const MAIN_PARTNERS: Partner[] = [
  { name: 'Uzbektelecom', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Uztelecom_Brand_logotype.svg/500px-Uztelecom_Brand_logotype.svg.png' },
  { name: 'Mobiuz (UMS)', logoUrl: 'https://company.mobi.uz/local/templates/main_v2/images/logo.svg' },
];

export const CAROUSEL_PARTNERS: Partner[] = [
  { name: 'OOO «TELECON ENGINEERING»', logoUrl: 'https://telecon.uz/t/v102/images/logo.png' },
  { name: 'OOO «AERO-YO’L LOYIHA»', logoUrl: 'https://aeroyolloyiha.uz/img/logo/2_0300.png' },
  { name: 'SOLA', logoUrl: 'https://sola.uz/uploads/logo.png' },
  { name: 'OOO "TOWERS RB CONSTRUCTION"', logoUrl: 'https://placehold.co/100x100/f3f4f6/d97706?text=TRB' },
  { name: 'OOO "INTERCONNECT"', logoUrl: 'https://placehold.co/100x100/f3f4f6/d97706?text=IC' },
  { name: 'OOO "SAUVRON AZIYA BUILDING"', logoUrl: 'https://placehold.co/100x100/f3f4f6/d97706?text=SAB' },
  { name: 'ЧП "TURON MEDIA"', logoUrl: 'https://turontelecom.uz/assets/logo.svg' },
  { name: 'OOO «ONE-NET»', logoUrl: 'https://one-net.uz/assets/logo-svg.9cee5312.svg' },
  { name: 'ДМ "O`ZSHAHARSOZLIK LITI"', logoUrl: 'https://shaharsozlik.uz/wp-content/uploads/2024/08/cropped-IMG_7124-1-e1723554966719.png' },
  { name: '"NANO TELECOM" MCHJ', logoUrl: 'https://nano.uz/wp-content/uploads/2023/08/cropped-IMG_3623-2048x459.png' },
  { name: '"SUNRISE INFO TECHNOLOGIES"', logoUrl: 'https://sunriseinfo.uz/image/catalog/imag/Sunrise-logo_2.png' },
];

export const LICENSES: License[] = [
  { 
    id: 'l1', 
    name: 'Гувохнома (Регистрация)', 
    docType: 'GUVOHNOMA',
    pages: [
      {
        pageNumber: 1,
        type: 'SINGLE',
        content: {
          number: '848625',
          registryNumber: '3247804',
          date: '20.05.2020',
          stir: '307386923',
          title: 'GUVOHNOMA',
          address: "Toshkent shahri, Mirzo Ulug'bek tumani, Navnihol 3-tor ko'chasi, 7-uy",
          issuer: "Toshkent shahri, Mirzo Ulug'bek tumani, DAVLAT XIZMATLARI MARKAZI"
        }
      }
    ]
  },
  { 
    id: 'l2', 
    name: 'Лицензия (Архитектура)', 
    docType: 'LICENSE',
    pages: [
      {
        pageNumber: 1,
        type: 'FRONT',
        content: {
          number: '095615',
          registryNumber: 'АЛ-001631',
          date: '11.02.2021',
          stir: '307386923',
          title: 'ЛИЦЕНЗИЯ',
          validity: '11.02.2021 дан - чексиз',
          address: "Toshkent shahri, Mirzo Ulug'bek tumani, NAVNIHOL 3-TOR KO'CHASI, 7-UY",
          issuer: "O'zbekiston Respublikasi Qurilish va uy-joy kommunal xo'jaligi vazirligi",
          activities: ["Архитектура-шаҳарсозлик ҳужжатларини ишлаб чиқиш фаолияти учун лицензия"]
        }
      },
      {
        pageNumber: 2,
        type: 'BACK',
        content: {
          number: '095615',
          activities: [
            "Уй-жой-хўжалик қурилиши учун обектлар ва комплекслар лойиҳа-смета ҳужжатларини ишлаб чиқиш",
            "шу жумладан, уларнинг муҳандислик тармоқлари ва тизимларини лойиҳалаштириш"
          ],
          complexity: "II - Тоифа"
        }
      }
    ]
  },
  { 
    id: 'l3', 
    name: 'Лицензия (Проектирование)', 
    docType: 'LICENSE',
    pages: [
      {
        pageNumber: 1,
        type: 'FRONT',
        content: {
          number: 'AA 0007101',
          registryNumber: '50',
          date: '10.02.2021',
          stir: '307386923',
          title: 'ЛИЦЕНЗИЯ',
          validity: '10.02.2021 дан - чексиз',
          address: "Toshkent shahri, Mirzo Ulug'bek tumani, M.Ulug'bekskiy rayon, ul. 3 proezd Navnixol, d.7",
          issuer: "O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi",
          activities: ["Телекоммуникациялар тармоқларини лойиҳалаштириш, қуриш, улардан фойдаланиш..."]
        }
      },
      {
        pageNumber: 2,
        type: 'BACK',
        content: {
          number: 'AA 0007101',
          activities: [
            "Маҳаллий, шаҳарлараро ва халқаро телекоммуникациялар тармоқларини лойиҳалаштириш"
          ]
        }
      }
    ]
  },
  { 
    id: 'l4', 
    name: 'Лицензия (Строительство)', 
    docType: 'LICENSE',
    pages: [
      {
        pageNumber: 1,
        type: 'FRONT',
        content: {
          number: '212855',
          registryNumber: 'L-4603167',
          date: '26.01.2024',
          stir: '307386923',
          title: 'ЛИЦЕНЗИЯ',
          validity: '26.01.2024 дан - чексиз',
          address: "Toshkent shahri, Mirzo Ulug'bek tumani, Navnihol 3-tor ko'chasi, 7-uy",
          issuer: "O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi",
          activities: ["Телекоммуникациялар тармоқларини лойиҳалаштириш, қуриш, улардан фойдаланиш..."]
        }
      },
      {
        pageNumber: 2,
        type: 'BACK',
        content: {
          number: '212855',
          activities: [
            "Маҳаллий, шаҳарлараро ва халқаро телекоммуникациялар тармоқларини қуриш"
          ]
        }
      }
    ]
  },
  { 
    id: 'l5', 
    name: 'Аккредитация 2025', 
    docType: 'ACCREDITATION',
    pages: [
      {
        pageNumber: 1,
        type: 'SINGLE',
        content: {
          number: 'КЛЭ-00382',
          registryNumber: '№ 9863-6368',
          date: '03-10-2025',
          stir: '307386923',
          title: 'ГУВОҲНОМА',
          address: "Toshkent shahri, Mirzo Ulug'bek tumani, Navnihol 3-tor ko'chasi, 7-uy",
          issuer: "ABDUALIYEV NODIR UTKIR O'G'LI",
          activities: ["Қурилиш лойиҳаларини экспертизадан ўтказувчи юридик шахсларни аккредитациядан ўтказилганлиги тўғрисида"]
        }
      }
    ]
  },
];

// --- TRANSLATION DICTIONARY ---

const commonProjects = {
  // Only translating static text parts, preserving names and addresses as they appear in documents
  exp1: { client: 'ООО «UNIVERSAL MOBILE SYSTEMS»\nг.Ташкент, ул.Aмира Темура, 24-уй\n+998880088081', contract: '№242Д/21/ДУЗ' },
  exp2: { client: 'ООО "TELECON ENGINEERING"\nг.Ташкент, ул.Кичик Миробод, д.5\n+998935018636', contract: '№ 017-2022-Э\n№001-2024-Э' },
  exp3: { client: '"O`ZBEKTELEKOM " AJ (00016-Ўзмобайл филиали)\nТошкент шахри, Чилонзор тумани, Бунёдкор шох кучаси, 8 уй\n+998991111140', contract: '№05-2022-Э' },
  exp4: { client: '"SAUVRON AZIYA BUILDING" MCHJ\nг.Ташкент, ул.Буюк Турон, 41\nТел: (71) 233-58-99', contract: '№ 027-2022-Э\n№ 30-2022-Э\n№ 010-2024-Э' },
  exp5: { client: 'ООО «TOWERS RB CONSTRUCTION»\nг.Ташкент, Яккасарайский район, ул.Ш.Рашидова, 40-60\nТел: (94) 311-06-44', contract: '№ 02-2023-Э\n№ 007-2024-Э' },
  exp6: { client: '"DILDORA-F" XK\nг.Ташкент, Лабзак дахаси, 22-уй ёнида\nТел: (90) 920-04-34', contract: '№ 24-2022-Э\n№ 11-2023-Э\n№ 004-2024-Э' },
  exp7: { client: '"TURON MEDIA" MCHJ\nг.Ташкент, Лабзак дахаси, 22-уй ёнида\nТел: +998 90 014-05-78', contract: '' },
  exp8: { client: '«ASIA WIRELESS GROUP» MCHJ\nг. Ташкент ул. Шота Руставели, 32А\nТел: (71) 207-08-07', contract: '№16-2024-Э' },
  exp9: { client: '"NANO TELECOM" MCHJ\nг. Ташкент, ЯШНАБАДСКИЙ РАЙОН, Чулпон МФЙ, Пахлавон Махмуд ул., 2 проезд, 1 тупик, 3-уй, 1-хонадон', contract: '' },
  exp10: { client: '"INTERCONNECT" MChJ\nРеспублика Узбекистан, г.Ташкент, Чиланзарский район, ул.Арнасай, дом-27', contract: '' },
  exp11: { client: '«COMPASS» MCHJ\nKO`KCHA DARVOZA KO`CHASI, 314-UY', contract: '' },

  // Design Projects
  des2: { client: 'OOO «AERO-YO’L LOYIHA»\nг. Ташкент, М.Улугбекский район, ул.Паркентская, 243-58\nТел.: (99894) 6549064', contract: 'ДОГОВОР № 016-РП-2025' },
  des3: { client: 'ООО «ONE-NET»\nг.Ташкент, ул. Дурмон йули, 31.\nТел: +99871 203 30 05', contract: 'ДОГОВОР № 011-РП-2025' },
  des4: { client: 'ООО «ME\'MOR STUDIO»\nг.Ташкент, Чиланзарский район, ул.Эски Чиланзар, 1-тор , дом № 5\nТел: (90) 135-01-02', contract: 'ДОГОВОР № 015-РП-2025\nДОГОВОР № 014-РП-2025' },
  des5: { client: 'ООО «IMAADS»\nг.Ташкент, Шайхантохурский район, ул. Кичик Халка Йули, дом-3', contract: 'ДОГОВОР № 008-РП-2025' },
  des6: { client: 'OOO “URBAN NEW PROJECT”\nТошкент шахар, Шайхонтоҳур тумани, Зулфияхоним кўчаси, 27 уй', contract: 'ДОГОВОР № 005-РП-2025' },
  des7: { client: '"BEKTIMIR HILLS DEVELOPMENT" MCHJ XK\nИйкота МФЙ, Каноат кучаси', contract: 'ДОГОВОР № 004-РП-2025' },
  des8: { client: 'СП ООО «IST TELEKOM»\nг.Ташкент, Яшнабадский р-н, Дустабот МФЙ, ул.Махтумкули, д.130\nТел.78-150-01-17', contract: 'ДОГОВОР № 015-ИД-2025\nДОГОВОР № 020-ИД-2025' },
  des9: { client: '"GOOD FOOD CATERING" MCHJ\nQizg`aldoq ko`chasi, 41-uy', contract: 'ДОГОВОР № 009-РП-2024' },
  des10: { client: 'SOCIAL PROGRESS" MCHJ\nYALONG\'OCH MAVZESI, 119A-UY', contract: 'ДОГОВОР № 006-РП-2024\nДОГОВОР № 029-РП-2022' },
  des11: { client: 'ДМ "O`ZSHAHARSOZLIK LITI"\nг.Ташкент, ул.Навои, дом 1\nТел: +99878 241 44 64', contract: 'ДОГОВОР № 14-РП-2023' },
  des12: { client: '"SUNRISE INFO TECHNOLOGIES" MCHJ\nг.Ташкент, Ифтихор МФЙ, Ифтихор кучаси, 1-уй', contract: 'ДОГОВОР № 03-РП-2023' },
  des13: { client: 'TRANSPORT OQIMI NAZORATI MCHJ\nДилбулоқ МФЙ, Ш.Руставели кучаси, 91-уй', contract: 'ДОГОВОР № 001-РП-2023\nДОГОВОР № 026-РП-2022' },
  des14: { client: '"MICROYOL" MCHJ\nАлпомиш МФЙ, Буюк Ипак Йули кучаси, 173 а-уй', contract: 'ДОГОВОР № 027-РП-2022' },
};

export const TRANSLATIONS = {
  ru: {
    nav: [
      { label: 'Главная', path: '/' },
      { label: 'О нас', path: '/about' },
      { label: 'Услуги', path: '/services' },
      { label: 'Проекты', path: '/projects' },
      { label: 'Лицензии', path: '/licenses' },
      { label: 'Контакты', path: '/contact' },
    ],
    companyDesc: "Профессиональные решения в сфере телекоммуникаций и строительства ВОЛС.",
    address: "г.Ташкент, Мирзо-Улугбекский р-н, ул.3-Навнихол, дом 7",
    
    // HOME PAGE
    home: {
      since: "Основано в 2020",
      heroTitle: "Инновации в",
      heroTitleGradient: "Телекоммуникациях",
      heroDesc: "Falcon Telecom Expert — ваш надежный партнер в проектировании, строительстве ВОЛС и экспертизе документации. Мы строим связь будущего.",
      projectsBtn: "Наши Проекты",
      contactBtn: "Связаться с нами",
      stats: {
        years: "Лет опыта",
        projects: "Реализованных проектов",
        partners: "Крупных партнеров",
        support: "Техническая поддержка"
      },
      aboutTitle: "О Компании",
      aboutHeading: "Лидеры в сфере инженерных изысканий",
      aboutText1: "Компания Falcon Telecom Expert основана в 2020 году. Мы специализируемся на предоставлении полного спектра услуг в области телекоммуникаций: от разработки проектно-сметной документации до строительства сложных волоконно-оптических сетей.",
      aboutText2: "Нашими клиентами являются крупнейшие операторы связи Узбекистана, включая UMS (Mobiuz) и Uzbektelecom. Мы гарантируем качество, соответствующее международным стандартам.",
      moreAbout: "Подробнее о нас",
      solutionsTitle: "Наши Решения",
      solutionsSub: "Комплексный подход к реализации проектов любой сложности",
      learnMore: "Узнать больше",
      ctaTitle: "Готовы начать проект?",
      ctaDesc: "Свяжитесь с нашими экспертами для получения консультации и расчета стоимости работ.",
      ctaBtn: "Оставить заявку"
    },

    // ABOUT PAGE
    about: {
      headerTitle: "О компании",
      headerSub: "История успеха и наши партнеры",
      heroTitle: "Строим будущее телекоммуникаций Узбекистана",
      formationTitle: "Наше становление",
      formationText1: "Наше общество существует не так давно, оно было основано в 2020 году, но несмотря на это зарекомендовало себя как профессионалы и имеет ряд хороших отзывов на рынке телекоммуникационных услуг Узбекистана.",
      formationText2: "Мы специализируемся на полном цикле работ: от инженерных изысканий и проектирования до строительства и технического консалтинга.",
      formationText3: "Наша компания активно участвует в развитии инфраструктуры связи страны, сотрудничая с ведущими государственными и частными операторами. Мы гарантируем высокое качество исполнения и соблюдение всех нормативных требований.",
      stats: {
        sinceTitle: "С 2020 года",
        sinceDesc: "Успешной работы на рынке",
        partnersTitle: "10+ Партнеров",
        partnersDesc: "Долгосрочные контракты с лидерами",
        shaffofTitle: "Shaffof Qurilish",
        shaffofDesc: "Включены в единый реестр экспертов"
      },
      partnersTitle: "Наши Партнеры и Клиенты",
      partnersDesc: "Компании, которые доверяют нам свои проекты",
      genPartners: "Генеральные Партнеры",
      otherPartners: "Наши постоянные партнеры"
    },

    // SERVICES PAGE
    services: {
      headerTitle: "Наши Услуги",
      headerSub: "Комплексные решения для телекома",
      readMore: "Подробнее",
      close: "Закрыть",
      list: [
        {
          id: '1',
          title: 'Экспертиза Проектно-Сметной Документации',
          description: 'Проведение квалифицированной экспертизы проектно-сметной документации в строгом соответствии с требованиями заказчика и нормативными актами Республики Узбекистан.',
          fullDescription: `
            <p class="mb-4">ООО «FALCON TELECOM EXPERT» обладает многолетним практическим опытом проведения комплексной экспертизы ПСД для телекоммуникационных объектов, инфраструктурных проектов, а также объектов гражданского и промышленного строительства.</p>
            <p class="mb-6">Мы выполняем полный цикл экспертной оценки документации, включая проверку:</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Что включает экспертиза ПСД:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Соответствие техническим требованиям и строительным нормам Республики Узбекистан.</li>
              <li>Проверка корректности инженерных решений по всем разделам проекта.</li>
              <li>Анализ сметной стоимости, обоснованности закупок и расчётных материалов.</li>
              <li>Проверка на соответствие экологическим, энергетическим, технологическим стандартам.</li>
              <li>Аудит рисков, потенциальных несоответствий и возможных ошибок в проекте.</li>
              <li>Выдача официального экспертного заключения с включением в реестр «Shaffof Qurilish».</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Какие разделы мы проверяем:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-1 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <li>КЖ – железобетонные конструкции</li>
              <li>КМ – металлические конструкции</li>
              <li>АС – архитектурно-строительные решения</li>
              <li>ЭП – электропитание</li>
              <li>ТХ – технологические решения</li>
              <li>ООС – охрана окружающей среды</li>
              <li>СОМ – светоограждение</li>
              <li>ОВ – охлаждение и вентиляция</li>
              <li>ОПС – охранно-пожарные системы</li>
              <li>ЭО – электроосвещение</li>
              <li>СМ – сметная документация</li>
              <li>Телеком-секции: РРЛ, ВОЛС, базовые станции, антенно-мачтовые сооружения</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Преимущества работы с нами:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Экспертиза выполняется строго в срок — это подтверждено многолетней практикой с крупнейшими операторами.</li>
              <li>Мы являемся действующим подрядчиком UMS, UzMobile, Telecon Engineering, Asia Wireless Group, INTERCONNECT, Towers RB Construction и других компаний.</li>
              <li>Гарантируем официальную регистрацию всех заключений в «Shaffof Qurilish».</li>
            </ul>
          `,
          iconName: 'FileCheck' as const,
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
          detailImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
        },
        {
          id: '2',
          title: 'Проектирование и Строительство ВОЛС',
          description: 'Разработка проектно-сметной документации и последующее строительство волоконно-оптических линий связи (ВОЛС) любой сложности.',
          fullDescription: `
            <p class="mb-4">FALCON TELECOM EXPERT специализируется на проектировании, строительстве и сдаче под ключ современных оптических линий связи — от городских и магистральных трасс до корпоративных и ведомственных сетей.</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Что включает проектирование ВОЛС:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Анализ трассы и исходных данных, выбор оптимального маршрута.</li>
              <li>Инженерная проработка кабельной инфраструктуры.</li>
              <li>Разработка схемы размещения муфт, колодцев, оптических распределительных пунктов.</li>
              <li>Проектирование подвесных, канализационных и подземных линий связи.</li>
              <li>Определение типов кабелей, спецификаций и материалов.</li>
              <li>Составление проектно-сметной документации (ПСД).</li>
              <li>Проектирование ТПП (трубопроводных переходов) и сопутствующих инженерных решений.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Строительство ВОЛС:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Земляные работы: траншеи, ГНБ, укладка кабельной канализации.</li>
              <li>Монтаж оптического кабеля (подвес, подземная линия, колодцы).</li>
              <li>Установка муфт, стоек, оптических кроссов.</li>
              <li>Ввод в эксплуатацию и тестирование (OTDR, лабораторные измерения).</li>
              <li>Сдача исполнительной документации.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Наши проекты:</h4>
            <p class="mb-2 text-gray-700">Мы закрыли проекты от уровня городской инфраструктуры до стратегических транспортных узлов:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
              <li>Аэропорт «Ташкент-Восточный»</li>
              <li>Проекты ONE-NET, ME'MOR STUDIO, URBAN NEW PROJECT</li>
              <li>ВОЛС для систем фото- и видеофиксации ПДД по Ташкентской области</li>
              <li>ВОЛС для административных и государственных объектов</li>
              <li>ВОЛС для солнечных электростанций и бизнес-центров</li>
              <li>Магистральные линии Алмалык–Ангрен–Гулистан</li>
            </ul>
          `,
          iconName: 'Network' as const,
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
          detailImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
        },
        {
          id: '3',
          title: 'Инженерные Изыскания и Консультации',
          description: 'Деятельность в области инженерных изысканий и предоставление технических консультаций, обеспечивающих оптимальные решения для ваших проектов.',
          fullDescription: `
            <p class="mb-4">FALCON TELECOM EXPERT проводит полный спектр инженерных изысканий для объектов связи, строительства и реконструкции.</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Виды инженерных изысканий:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Топографические исследования, съемка местности.</li>
              <li>Геодезические измерения существующей инфраструктуры.</li>
              <li>Трассировка подземных коммуникаций.</li>
              <li>Предпроектный анализ технического состояния сооружений.</li>
              <li>Исследование маршрутов для будущих ВОЛС или РРЛ.</li>
              <li>Оценка возможностей подключения к энергосетям и телеком-узлам.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Технические консультации:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Подбор оптимальных инженерных решений для проектов строительства.</li>
              <li>Сопровождение заказчика на всех этапах — от концепции до реализации.</li>
              <li>Консультации по стоимости, срокам, выбору материалов, оптимизации проекта.</li>
              <li>Технадзор и авторский надзор по желанию заказчика.</li>
            </ul>
          `,
          iconName: 'HardHat' as const,
          imageUrl: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg',
          detailImageUrl: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg'
        },
        {
          id: '4',
          title: 'Строительство и архитектурное проектирование домов',
          description: 'Комплексное архитектурное проектирование и строительство жилых домов и зданий, обеспечивающее надежность, эстетику и функциональность.',
          fullDescription: `
            <p class="mb-4">Несмотря на телеком-специализацию, компания также выполняет работы в области гражданского строительства.</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Что включает архитектурное проектирование:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Разработка архитектурной концепции здания.</li>
              <li>Планировочные решения, визуализация, 3D-модели.</li>
              <li>Проектирование инженерных сетей (электрика, вентиляция, водоснабжение).</li>
              <li>Генеральный план и благоустройство территории.</li>
              <li>Проектирование несущих конструкций зданий (КЖ и КМ).</li>
              <li>Разработка ПСД и рабочей документации.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Строительство:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Строительство частных и коммерческих объектов «под ключ».</li>
              <li>Возведение монолитных, кирпичных и каркасных зданий.</li>
              <li>Внутренние инженерные сети и отделочные работы.</li>
              <li>Контроль качества, соблюдение СНИПов и строительных регламентов.</li>
            </ul>
            <p class="font-semibold text-falcon-700">
              Компания применяется тот же уровень инженерной экспертизы, что и в телеком-проектах — точность, скорость, контроль качества и полная прозрачность.
            </p>
          `,
          iconName: 'Building' as const,
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
          detailImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
        }
      ]
    },

    // PROJECTS PAGE
    projects: {
      headerTitle: "Наши Проекты",
      headerSub: "Опыт работы с ведущими компаниями Узбекистана",
      table1Title: "Клиенты по экспертизе проектно-сметной документации",
      table2Title: "Проектирование ВОЛС и другие проекты",
      colPeriod: "Период",
      colContract: "Договор / Дата",
      colClient: "Заказчик",
      colWork: "Наименование работ",
      footerNote: "* Представленная информация отражает ключевые договора и проекты компании за период с 2021 по 2025 год.",
      list: [
        // Expertise
        { ...commonProjects.exp1, id: 'exp-1', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'С 2021 года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp2, id: 'exp-2', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. по 2023г\nс 2023г. по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp3, id: 'exp-3', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp4, id: 'exp-4', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. по 2023г\nс 2022г. по 2023г\nс 2024г. по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp5, id: 'exp-5', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2023г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp6, id: 'exp-6', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. по 2023г\nс 2022г. по 2024г\nс 2024г. по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp7, id: 'exp-7', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2023г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp8, id: 'exp-8', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp9, id: 'exp-9', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2024г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp10, id: 'exp-10', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        { ...commonProjects.exp11, id: 'exp-11', category: 'EXPERTISE', name: 'Экспертиза проектно-сметной документации', period: 'с 2022г. года по сегодняшний день', note: 'Экспертизы проектно-сметной документации выдаются своевременно' },
        
        // Design
        { ...commonProjects.des2, id: 'des-2', category: 'DESIGN', name: 'Разработка проектно-сметной документации по организации ВОЛС (Строительство современного аэропортового комплекса гражданской (деловой) авиации на базе аэродрома “Ташкент-Восточный”)', period: '', note: '' },
        { ...commonProjects.des3, id: 'des-3', category: 'DESIGN', name: 'Разработка проектно-сметной документации по организации ВОЛС от АТС-244 до серверных помещений государственных органов и учреждений', period: '', note: '' },
        { ...commonProjects.des4, id: 'des-4', category: 'DESIGN', name: '1. Строительство ВОЛС и ТПП от существующего колодца №753 по ул.Заркайнар до проектируемого колодца по ул.Сагбон\n2. Строительство ВОЛС и ТПП от существующего колодца №753 по ул.Заркайнар до ул.Тарих', period: '', note: 'Организация туристической улицы' },
        { ...commonProjects.des5, id: 'des-5', category: 'DESIGN', name: 'Реконструкция двухэтажного здания в территории автогаража Управления по обеспечению специализированным автотранспортом ГМУ при АП РУз', period: '', note: 'для переноса автотранспортного парка УОГР и ОМ АП РУз' },
        { ...commonProjects.des6, id: 'des-6', category: 'DESIGN', name: 'Строительство ВОЛС от ОРШ 278-10 по ул. Гулханий Ипакчилик, (на территории НИИ Шелка) организация туристической улицы', period: '', note: '' },
        { ...commonProjects.des7, id: 'des-7', category: 'DESIGN', name: 'Строительство ВОЛС от ОРШ 295-01 по ул. Билол Низом, Юкори Чирчик, «Каноат» строительство высотных зданий', period: '', note: '' },
        { ...commonProjects.des8, id: 'des-8', category: 'DESIGN', name: 'Оказание услуг по разработке исполнительной документации:\n1. МКЛС "Алмалык АТС-2/3 – Ангрен АТС-3" и "Алмалык – Бука – Пскент – Гулистан"\n2. Магистральная ВОЛС "Термез-Джаркурган" и "Джаркурган - Кумкурган"', period: '', note: '' },
        { ...commonProjects.des9, id: 'des-9', category: 'DESIGN', name: 'Разработка проектно-сметной документации солнечной фотоэлектрической установки для продовольственного оптового рынка «КУЙЛЮК УЛГУРЖИ БОЗОР»', period: '', note: '' },
        { ...commonProjects.des10, id: 'des-10', category: 'DESIGN', name: 'Строительство ВОЛС для Камер Фото-видео фиксации правил дорожного движения (г. Чирчик и Ташкентская область)', period: '', note: '' },
        { ...commonProjects.des11, id: 'des-11', category: 'DESIGN', name: 'Реконструкция и оснащение I и III корпусов комплекса зданий по адресу: ул.Ислама Каримова, 43', period: '', note: '' },
        { ...commonProjects.des12, id: 'des-12', category: 'DESIGN', name: '1. ПСД солнечной фотоэлектрической станции (50 кВт) на здании Шуртаннефтгаз\n2. ПСД солнечной установки (50 кВт) в Главном управлении ЦБ Ташкентской области', period: '', note: '' },
        { ...commonProjects.des13, id: 'des-13', category: 'DESIGN', name: 'Строительство ВОЛС для Камер Фото-видео фиксации правил дорожного движения по Республике Узбекистан', period: '', note: '' },
        { ...commonProjects.des14, id: 'des-14', category: 'DESIGN', name: 'Строительство ВОЛС для Камер Фото-видео фиксации правил дорожного движения по Республике Узбекистан', period: '', note: '' }
      ] as Project[]
    },

    // LICENSES PAGE
    licenses: {
      headerTitle: "Лицензии и Сертификаты",
      headerSub: "Официальная документация компании Falcon Telecom Expert"
    },

    // CONTACT PAGE
    contact: {
      headerTitle: "Контакты",
      headerSub: "Свяжитесь с нами для обсуждения вашего проекта",
      coordinatesTitle: "Наши координаты",
      addressLabel: "Адрес",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      hoursLabel: "Режим работы",
      hoursWeek: "Понедельник - Пятница: 9:00 - 18:00",
      hoursWeekend: "Суббота, Воскресенье: Выходной",
      formTitle: "Написать нам",
      nameLabel: "Ваше имя",
      namePlace: "Иван Иванов",
      emailPlace: "you@example.com",
      messageLabel: "Сообщение",
      messagePlace: "Опишите ваш запрос...",
      sendBtn: "Отправить",
      emailSubject: "Заявка с сайта Falcon Telecom Expert",
      emailBodyPrefix: "Имя"
    },

    // FOOTER
    footer: {
      desc: "Ваш надежный партнер в сфере телекоммуникаций, строительства ВОЛС и инженерных изысканий.",
      rights: "Все права защищены.",
      navTitle: "Навигация",
      contactTitle: "Контакты",
      days: "Пн-Пт"
    }
  },

  uz: {
    nav: [
      { label: 'Bosh sahifa', path: '/' },
      { label: 'Biz haqimizda', path: '/about' },
      { label: 'Xizmatlar', path: '/services' },
      { label: 'Loyihalar', path: '/projects' },
      { label: 'Litsenziyalar', path: '/licenses' },
      { label: 'Aloqa', path: '/contact' },
    ],
    companyDesc: "Telekommunikatsiya va AOCL (Aloqa optik kabel liniyalari) qurilishi sohasida professional yechimlar.",
    address: "Toshkent shahri, Mirzo Ulug'bek tumani, Navnihol 3-tor ko'chasi, 7-uy",
    
    // HOME PAGE
    home: {
      since: "2020 yildan beri",
      heroTitle: "Telekommunikatsiyadagi",
      heroTitleGradient: "Innovatsiyalar",
      heroDesc: "Falcon Telecom Expert — AOCL loyihalash, qurilish va hujjatlarni ekspertiza qilish bo'yicha ishonchli hamkoringiz. Biz kelajak aloqasini quramiz.",
      projectsBtn: "Bizning Loyihalar",
      contactBtn: "Biz bilan bog'lanish",
      stats: {
        years: "Yillik tajriba",
        projects: "Amalga oshirilgan loyihalar",
        partners: "Yirik hamkorlar",
        support: "Texnik yordam"
      },
      aboutTitle: "Kompaniya haqida",
      aboutHeading: "Muhandislik qidiruvlari sohasida yetakchilar",
      aboutText1: "Falcon Telecom Expert kompaniyasi 2020-yilda tashkil etilgan. Biz telekommunikatsiya sohasida to'liq xizmatlar ko'rsatishga ixtisoslashganmiz: loyiha-smeta hujjatlarini ishlab chiqishdan tortib murakkab optik tolali tarmoqlarni qurishgacha.",
      aboutText2: "Bizning mijozlarimiz O'zbekistonning eng yirik aloqa operatorlari, jumladan UMS (Mobiuz) va Uzbektelecom. Biz xalqaro standartlarga mos sifatni kafolatlaymiz.",
      moreAbout: "Biz haqimizda batafsil",
      solutionsTitle: "Bizning Yechimlar",
      solutionsSub: "Har qanday murakkablikdagi loyihalarni amalga oshirishga kompleks yondashuv",
      learnMore: "Batafsil",
      ctaTitle: "Loyihani boshlashga tayyormisiz?",
      ctaDesc: "Konsultatsiya olish va ish narxini hisoblash uchun mutaxassislarimiz bilan bog'laning.",
      ctaBtn: "Ariza qoldirish"
    },

    // ABOUT PAGE
    about: {
      headerTitle: "Kompaniya haqida",
      headerSub: "Muvaffaqiyat tarixi va hamkorlarimiz",
      heroTitle: "O'zbekiston telekommunikatsiya kelajagini quramiz",
      formationTitle: "Bizning tashkil topishimiz",
      formationText1: "Bizning jamiyatimiz unchalik ko'p vaqt mavjud emas, u 2020 yilda tashkil etilgan, ammo shunga qaramay, u o'zini professional sifatida namoyon etdi va O'zbekiston telekommunikatsiya xizmatlari bozorida bir qator yaxshi sharhlarga ega.",
      formationText2: "Biz ishlarning to'liq tsikliga ixtisoslashganmiz: muhandislik qidiruvlari va loyihalashdan tortib qurilish va texnik konsaltinggacha.",
      formationText3: "Kompaniyamiz mamlakat aloqa infratuzilmasini rivojlantirishda faol ishtirok etib, yetakchi davlat va xususiy operatorlar bilan hamkorlik qiladi. Biz yuqori sifatli ijro va barcha me'yoriy talablarga rioya qilishni kafolatlaymiz.",
      stats: {
        sinceTitle: "2020 yildan beri",
        sinceDesc: "Bozorda muvaffaqiyatli faoliyat",
        partnersTitle: "10+ Hamkorlar",
        partnersDesc: "Yetakchilar bilan uzoq muddatli shartnomalar",
        shaffofTitle: "Shaffof Qurilish",
        shaffofDesc: "Yagona ekspertlar reyestriga kiritilgan"
      },
      partnersTitle: "Bizning Hamkorlar va Mijozlar",
      partnersDesc: "O'z loyihalarini bizga ishonib topshirgan kompaniyalar",
      genPartners: "Bosh Hamkorlar",
      otherPartners: "Bizning doimiy hamkorlarimiz"
    },

    // SERVICES PAGE
    services: {
      headerTitle: "Bizning Xizmatlar",
      headerSub: "Telekom uchun kompleks yechimlar",
      readMore: "Batafsil",
      close: "Yopish",
      list: [
        {
          id: '1',
          title: 'Loyiha-Smeta Hujjatlarini (LSH) Ekspertiza qilish',
          description: 'Buyurtmachi talablari va O\'zbekiston Respublikasi me\'yoriy hujjatlariga qat\'iy rioya qilgan holda loyiha-smeta hujjatlarini malakali ekspertizadan o\'tkazish.',
          fullDescription: `
            <p class="mb-4">"FALCON TELECOM EXPERT" MChJ telekommunikatsiya obyektlari, infratuzilma loyihalari, shuningdek, fuqarolik va sanoat qurilishi obyektlari uchun LSH (Loyiha-Smeta Hujjatlari) ni kompleks ekspertizadan o'tkazish bo'yicha ko'p yillik amaliy tajribaga ega.</p>
            <p class="mb-6">Biz hujjatlarni to'liq ekspert baholash tsiklini amalga oshiramiz, jumladan:</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">LSH ekspertizasi nimani o'z ichiga oladi:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>O'zbekiston Respublikasi texnik talablari va qurilish normalariga muvofiqligi.</li>
              <li>Loyihaning barcha bo'limlari bo'yicha muhandislik yechimlarining to'g'riligini tekshirish.</li>
              <li>Smeta qiymatini, xaridlarning asosliligini va hisob-kitob materiallarini tahlil qilish.</li>
              <li>Ekologik, energetik, texnologik standartlarga muvofiqligini tekshirish.</li>
              <li>Loyihadagi xatarlar, potentsial nomuvofiqliklar va mumkin bo'lgan xatolarni audit qilish.</li>
              <li>"Shaffof Qurilish" reyestriga kiritilgan holda rasmiy ekspert xulosasini berish.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Qaysi bo'limlarni tekshiramiz:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-1 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <li>TB – temir-beton konstruksiyalar</li>
              <li>MK – metall konstruksiyalar</li>
              <li>AQ – arxitektura-qurilish yechimlari</li>
              <li>ET – elektr ta'minoti</li>
              <li>TY – texnologik yechimlar</li>
              <li>AM – atrof-muhitni muhofaza qilish</li>
              <li>YN – yoritish tizimlari</li>
              <li>IV – isitish va ventilyatsiya</li>
              <li>YXS – yong'in xavfsizligi tizimlari</li>
              <li>EY – elektr yoritish</li>
              <li>SM – smeta hujjatlari</li>
              <li>Telekom-seksiyalar: RRL, AOCL, baza stantsiyalari, antenna-mastali inshootlar</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Biz bilan ishlashning afzalliklari:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Ekspertiza qat'iy belgilangan muddatda amalga oshiriladi — bu yirik operatorlar bilan ko'p yillik amaliyot bilan tasdiqlangan.</li>
              <li>Biz UMS, UzMobile, Telecon Engineering, Asia Wireless Group, INTERCONNECT, Towers RB Construction va boshqa kompaniyalarning amaldagi pudratchisimiz.</li>
              <li>Barcha xulosalarning "Shaffof Qurilish" tizimida rasmiy ro'yxatdan o'tkazilishini kafolatlaymiz.</li>
            </ul>
          `,
          iconName: 'FileCheck' as const,
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
          detailImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
        },
        {
          id: '2',
          title: 'AOCL Loyihalash va Qurilish',
          description: 'Har qanday murakkablikdagi aloqa optik kabel liniyalarini (AOCL) loyihalash, smeta hujjatlarini ishlab chiqish va keyinchalik qurish.',
          fullDescription: `
            <p class="mb-4">FALCON TELECOM EXPERT zamonaviy optik aloqa liniyalarini — shahar va magistral trassalardan tortib korporativ va idoraviy tarmoqlargacha loyihalash, qurish va "kalitini topshirish"ga ixtisoslashgan.</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">AOCL loyihalash nimani o'z ichiga oladi:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Trassa va boshlang'ich ma'lumotlarni tahlil qilish, optimal marshrutni tanlash.</li>
              <li>Kabel infratuzilmasini muhandislik jihatidan ishlab chiqish.</li>
              <li>Muftalar, quduqlar, optik taqsimlash punktlarini joylashtirish sxemasini ishlab chiqish.</li>
              <li>Havo, kanalizatsiya va yer osti aloqa liniyalarini loyihalash.</li>
              <li>Kabel turlari, spetsifikatsiyalar va materiallarni aniqlash.</li>
              <li>Loyiha-smeta hujjatlarini (LSH) tuzish.</li>
              <li>Quvur o'tkazgichlarini (QO') va yondosh muhandislik yechimlarini loyihalash.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">AOCL qurilishi:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Yer ishlari: transheyalar, gorizontal yo'naltirilgan burg'ulash (GYB), kabel kanalizatsiyasini yotqizish.</li>
              <li>Optik kabelni montaj qilish (havo, yer osti liniyasi, quduqlar).</li>
              <li>Muftalar, stoykalar, optik krosslarni o'rnatish.</li>
              <li>Foydalanishga topshirish va test sinovlari (OTDR, laboratoriya o'lchovlari).</li>
              <li>Ijro hujjatlarini topshirish.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Bizning loyihalar:</h4>
            <p class="mb-2 text-gray-700">Biz shahar infratuzilmasi darajasidan strategik transport tugunlarigacha bo'lgan loyihalarni amalga oshirdik:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
              <li>"Toshkent-Sharqiy" aeroporti</li>
              <li>ONE-NET, ME'MOR STUDIO, URBAN NEW PROJECT loyihalari</li>
              <li>Toshkent viloyati bo'yicha YHQ buzilishlarini foto va video qayd etish tizimlari uchun AOCL</li>
              <li>Ma'muriy va davlat obyektlari uchun AOCL</li>
              <li>Quyosh elektr stantsiyalari va biznes markazlari uchun AOCL</li>
              <li>Olmaliq–Angren–Guliston magistral liniyalari</li>
            </ul>
          `,
          iconName: 'Network' as const,
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
          detailImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
        },
        {
          id: '3',
          title: 'Muhandislik Qidiruvlari va Konsultatsiyalar',
          description: 'Loyihalaringiz uchun optimal yechimlarni ta\'minlaydigan muhandislik qidiruvlari sohasidagi faoliyat va texnik maslahatlar berish.',
          fullDescription: `
            <p class="mb-4">FALCON TELECOM EXPERT aloqa, qurilish va rekonstruksiya obyektlari uchun to'liq hajmdagi muhandislik qidiruvlarini o'tkazadi.</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Muhandislik qidiruvlarining turlari:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Topografik tadqiqotlar, joyni suratga olish.</li>
              <li>Mavjud infratuzilmaning geodezik o'lchovlari.</li>
              <li>Yer osti kommunikatsiyalarini trassirovka qilish.</li>
              <li>Inshootlarning texnik holatini loyihadan oldingi tahlil qilish.</li>
              <li>Bo'lajak AOCL yoki RRL uchun marshrutlarni o'rganish.</li>
              <li>Elektr tarmoqlari va telekom tugunlariga ulanish imkoniyatlarini baholash.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Texnik konsultatsiyalar:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Qurilish loyihalari uchun optimal muhandislik yechimlarini tanlash.</li>
              <li>Buyurtmachini barcha bosqichlarda — kontseptsiyadan amalga oshirishgacha kuzatib borish.</li>
              <li>Narx, muddatlar, materiallarni tanlash, loyihani optimallashtirish bo'yicha maslahatlar.</li>
              <li>Buyurtmachining xohishiga ko'ra texnik nazorat va mualliflik nazorati.</li>
            </ul>
          `,
          iconName: 'HardHat' as const,
          imageUrl: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg',
          detailImageUrl: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg'
        },
        {
          id: '4',
          title: 'Uylarni qurish va me\'moriy loyihalash',
          description: 'Ishonchlilik, estetika va funksionallikni ta\'minlaydigan turar-joy binolari va inshootlarini kompleks me\'moriy loyihalash va qurish.',
          fullDescription: `
            <p class="mb-4">Telekom-ixtisoslashuviga qaramay, kompaniya fuqarolik qurilishi sohasida ham ishlarni amalga oshiradi.</p>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Me'moriy loyihalash nimani o'z ichiga oladi:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Binoning me'moriy konseptsiyasini ishlab chiqish.</li>
              <li>Rejalashtirish yechimlari, vizualizatsiya, 3D-modellar.</li>
              <li>Muhandislik tarmoqlarini loyihalash (elektr, ventilyatsiya, suv ta'minoti).</li>
              <li>Bosh reja va hududni obodonlashtirish.</li>
              <li>Binolarning yuk ko'taruvchi konstruksiyalarini loyihalash (TB va MK).</li>
              <li>LSH va ishchi hujjatlarni ishlab chiqish.</li>
            </ul>
            <h4 class="text-lg font-bold text-falcon-900 mb-3">Qurilish:</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Xususiy va tijorat obyektlarini "kalitini topshirish" asosida qurish.</li>
              <li>Monolit, g'ishtli va karkasli binolarni barpo etish.</li>
              <li>Ichki muhandislik tarmoqlari va pardozlash ishlari.</li>
              <li>Sifat nazorati, QMQ va qurilish reglamentlariga rioya qilish.</li>
            </ul>
            <p class="font-semibold text-falcon-700">
              Kompaniya telekom-loyihalardagi kabi muhandislik ekspertizasi darajasini qo'llaydi — aniqlik, tezlik, sifat nazorati va to'liq shaffoflik.
            </p>
          `,
          iconName: 'Building' as const,
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
          detailImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
        }
      ]
    },

    // PROJECTS PAGE
    projects: {
      headerTitle: "Bizning Loyihalar",
      headerSub: "O'zbekistonning yetakchi kompaniyalari bilan ishlash tajribasi",
      table1Title: "Loyiha-smeta hujjatlarini ekspertiza qilish bo'yicha mijozlar",
      table2Title: "AOCL loyihalash va boshqa loyihalar",
      colPeriod: "Davr",
      colContract: "Shartnoma / Sana",
      colClient: "Buyurtmachi",
      colWork: "Ishlarning nomi",
      footerNote: "* Taqdim etilgan ma'lumotlar kompaniyaning 2021 yildan 2025 yilgacha bo'lgan davrdagi asosiy shartnomalari va loyihalarini aks ettiradi.",
      list: [
        // Expertise (Reuse common data, translate fields)
        { ...commonProjects.exp1, id: 'exp-1', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2021 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp2, id: 'exp-2', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan 2023 yilgacha\n2023 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp3, id: 'exp-3', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp4, id: 'exp-4', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan 2023 yilgacha\n2022 yildan 2023 yilgacha\n2024 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp5, id: 'exp-5', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2023 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp6, id: 'exp-6', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan 2023 yilgacha\n2022 yildan 2024 yilgacha\n2024 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp7, id: 'exp-7', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2023 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp8, id: 'exp-8', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp9, id: 'exp-9', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2024 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp10, id: 'exp-10', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },
        { ...commonProjects.exp11, id: 'exp-11', category: 'EXPERTISE', name: 'Loyiha-smeta hujjatlari ekspertizasi', period: '2022 yildan bugungi kungacha', note: 'Loyiha-smeta hujjatlari ekspertizalari o\'z vaqtida beriladi' },

        // Design (Reuse common data, translate fields)
        { id: 'des-2', category: 'DESIGN', name: 'AOCL tashkil etish bo\'yicha loyiha-smeta hujjatlarini ishlab chiqish ("Toshkent-Sharqiy" aerodromi bazasida fuqarolik aviatsiyasining zamonaviy aeroport majmuasini qurish)', client: commonProjects.des2.client, contract: commonProjects.des2.contract, period: '', note: '' },
        { id: 'des-3', category: 'DESIGN', name: 'ATS-244 dan davlat organlari va muassasalarining server xonalarigacha AOCL tashkil etish bo\'yicha loyiha-smeta hujjatlarini ishlab chiqish', client: commonProjects.des3.client, contract: commonProjects.des3.contract, period: '', note: '' },
        { id: 'des-4', category: 'DESIGN', name: '1. Zarkaynar ko\'chasidagi 753-sonli mavjud quduqdan Sag\'bon ko\'chasidagi loyihalashtirilayotgan quduqqacha AOCL va TPP qurilishi\n2. Zarkaynar ko\'chasidagi 753-sonli mavjud quduqdan Tarix ko\'chasigacha AOCL va TPP qurilishi', client: commonProjects.des4.client, contract: commonProjects.des4.contract, period: '', note: 'Turistik ko\'chani tashkil etish' },
        { id: 'des-5', category: 'DESIGN', name: 'O\'zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi GMBning ixtisoslashtirilgan avtotransport bilan ta\'minlash boshqarmasi avtogaraji hududidagi ikki qavatli binoni rekonstruksiya qilish', client: commonProjects.des5.client, contract: commonProjects.des5.contract, period: '', note: 'GMB va OM AP RUz avtotransport parkini ko\'chirish uchun' },
        { id: 'des-6', category: 'DESIGN', name: 'Gulxaniy Ipakchilik ko\'chasi bo\'ylab ORSH 278-10 dan (Ipakchilik ilmiy-tadqiqot instituti hududida) AOCL qurilishi, turistik ko\'chani tashkil etish', client: commonProjects.des6.client, contract: commonProjects.des6.contract, period: '', note: '' },
        { id: 'des-7', category: 'DESIGN', name: 'Bilol Nizom ko\'chasi, Yuqori Chirchiq, "Qanoat" bo\'ylab ORSH 295-01 dan AOCL qurilishi, ko\'p qavatli binolar qurilishi', client: commonProjects.des7.client, contract: commonProjects.des7.contract, period: '', note: '' },
        { id: 'des-8', category: 'DESIGN', name: 'Ijro hujjatlarini ishlab chiqish bo\'yicha xizmatlar ko\'rsatish:\n1. MAKL "Olmaliq ATS-2/3 – Angren ATS-3" va "Olmaliq – Bo\'ka – Piskent – Guliston"\n2. "Termiz-Jarqo\'rg\'on" va "Jarqo\'rg\'on - Qumqo\'rg\'on" magistral AOCL', client: commonProjects.des8.client, contract: commonProjects.des8.contract, period: '', note: '' },
        { id: 'des-9', category: 'DESIGN', name: '"QO\'YLIQ ULGURJI BOZOR" oziq-ovqat ulgurji bozori uchun quyosh fotoelektr stantsiyasining loyiha-smeta hujjatlarini ishlab chiqish', client: commonProjects.des9.client, contract: commonProjects.des9.contract, period: '', note: '' },
        { id: 'des-10', category: 'DESIGN', name: 'Yo\'l harakati qoidalari buzilishlarini foto-video qayd etish kameralari uchun AOCL qurilishi (Chirchiq sh. va Toshkent viloyati)', client: commonProjects.des10.client, contract: commonProjects.des10.contract, period: '', note: '' },
        { id: 'des-11', category: 'DESIGN', name: 'Islom Karimov ko\'chasi, 43-uy manzilida joylashgan binolar majmuasining I va III korpuslarini rekonstruksiya qilish va jihozlash', client: commonProjects.des11.client, contract: commonProjects.des11.contract, period: '', note: '' },
        { id: 'des-12', category: 'DESIGN', name: '1. Sho\'rtanneftgaz binosida quyosh fotoelektr stantsiyasining (50 kVt) LSH\n2. Toshkent viloyati Markaziy banki Bosh boshqarmasida quyosh qurilmasining (50 kVt) LSH', client: commonProjects.des12.client, contract: commonProjects.des12.contract, period: '', note: '' },
        { id: 'des-13', category: 'DESIGN', name: 'O\'zbekiston Respublikasi bo\'yicha Yo\'l harakati qoidalari buzilishlarini foto-video qayd etish kameralari uchun AOCL qurilishi', client: commonProjects.des13.client, contract: commonProjects.des13.contract, period: '', note: '' },
        { id: 'des-14', category: 'DESIGN', name: 'O\'zbekiston Respublikasi bo\'yicha Yo\'l harakati qoidalari buzilishlarini foto-video qayd etish kameralari uchun AOCL qurilishi', client: commonProjects.des14.client, contract: commonProjects.des14.contract, period: '', note: '' }
      ] as Project[]
    },
    
    // LICENSES PAGE
    licenses: {
      headerTitle: "Litsenziyalar va Sertifikatlar",
      headerSub: "Falcon Telecom Expert kompaniyasining rasmiy hujjatlari"
    },

    // CONTACT PAGE
    contact: {
      headerTitle: "Aloqa",
      headerSub: "Loyihangizni muhokama qilish uchun biz bilan bog'laning",
      coordinatesTitle: "Bizning manzillar",
      addressLabel: "Manzil",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      hoursLabel: "Ish vaqti",
      hoursWeek: "Dushanba - Juma: 9:00 - 18:00",
      hoursWeekend: "Shanba, Yakshanba: Dam olish kuni",
      formTitle: "Bizga yozing",
      nameLabel: "Ismingiz",
      namePlace: "Ism Familiya",
      emailPlace: "you@example.com",
      messageLabel: "Xabar",
      messagePlace: "So'rovingizni yozing...",
      sendBtn: "Yuborish",
      emailSubject: "Falcon Telecom Expert saytidan ariza",
      emailBodyPrefix: "Ism"
    },

    // FOOTER
    footer: {
      desc: "Telekommunikatsiya, AOCL qurilishi va muhandislik qidiruvlari sohasida ishonchli hamkoringiz.",
      rights: "Barcha huquqlar himoyalangan.",
      navTitle: "Navigatsiya",
      contactTitle: "Aloqa",
      days: "Du-Ju"
    }
  }
};

export const SERVICES = TRANSLATIONS.ru.services.list;
export const ABOUT_TEXT = `
${TRANSLATIONS.ru.about.formationText1}
${TRANSLATIONS.ru.about.formationText2}
${TRANSLATIONS.ru.about.formationText3}
`;
