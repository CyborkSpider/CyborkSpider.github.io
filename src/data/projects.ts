export type Project = {
  slug: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  tags: string[];
  year?: string;
  visibility: 'public' | 'private';
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'investech-development',
    title: {
      ar: 'Investech Development',
      en: 'Investech Development',
    },
    description: {
      ar: 'مشروع قيد التطوير. سيتم إضافة تفاصيل أكثر قريبًا.',
      en: 'Project under active development. More details coming soon.',
    },
    tags: ['Under Development'],
    visibility: 'private',
  },
  {
    slug: 'attendance-system',
    title: {
      ar: 'Attendance System',
      en: 'Attendance System',
    },
    description: {
      ar: 'نظام حضور/إدارة متعدد المستأجرين (Multi-tenant). سيتم إضافة تفاصيل أكثر قريبًا.',
      en: 'Multi-tenant attendance/management system. More details coming soon.',
    },
    tags: ['Django', 'Multi-tenant'],
    visibility: 'private',
  },
  {
    slug: 'hotel-reservation',
    title: {
      ar: 'Hotel Reservation (C++)',
      en: 'Hotel Reservation (C++)',
    },
    description: {
      ar: 'تطبيق Console لإدارة حجوزات فندق بـ OOP مع حفظ/تحميل CSV ودعم البحث والإلغاء وتوفر الغرف بالتواريخ.',
      en: 'Console hotel booking app in OOP with CSV persistence, search/cancel, and date-based availability.',
    },
    tags: ['C++', 'OOP', 'CLI'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Hotel-Reservation',
  },
  {
    slug: 'barcelona-fc',
    title: {
      ar: 'Barcelona FC',
      en: 'Barcelona FC',
    },
    description: {
      ar: 'مشروع واجهة/قالب مرتبط بـ Barcelona FC.',
      en: 'A Barcelona FC related template/project.',
    },
    tags: ['Template', 'Web'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Barcelona-FC',
  },
  {
    slug: 'pharmacies-company-template',
    title: {
      ar: 'Pharmacies Company Template',
      en: 'Pharmacies Company Template',
    },
    description: {
      ar: 'قالب/واجهة لشركة صيدليات.',
      en: 'A pharmacies company template.',
    },
    tags: ['Template', 'Web'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Pharmacies-Company-Template',
  },
  {
    slug: 'restaurant-template',
    title: {
      ar: 'Restaurant Template',
      en: 'Restaurant Template',
    },
    description: {
      ar: 'قالب/واجهة لمطعم.',
      en: 'A restaurant website template.',
    },
    tags: ['Template', 'Web'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Restaurant-Template',
  },
  {
    slug: 'tech-school-template',
    title: {
      ar: 'Tech School Template',
      en: 'Tech School Template',
    },
    description: {
      ar: 'قالب/واجهة لموقع مدرسة/أكاديمية تقنية.',
      en: 'A tech school/academy website template.',
    },
    tags: ['Template', 'Web'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Tech-School-Template',
  },
  {
    slug: 'voice-reader',
    title: {
      ar: 'Voice Reader',
      en: 'Voice Reader',
    },
    description: {
      ar: 'أداة/تطبيق لقراءة النصوص بالصوت.',
      en: 'A tool/app for reading text with voice.',
    },
    tags: ['App', 'Tool'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Voice_Reader',
  },
  {
    slug: 'its-summit',
    title: {
      ar: "It's Summit",
      en: "It's Summit",
    },
    description: {
      ar: 'مشروع ويب/قالب لفعالية أو مؤتمر.',
      en: 'A web project/template for an event or summit.',
    },
    tags: ['Web', 'Template'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/It-s-summit',
  },
  {
    slug: 'stealth-attack',
    title: {
      ar: 'Stealth Attack',
      en: 'Stealth Attack',
    },
    description: {
      ar: 'مشروع مرتبط بأدوات/سكربتات (Stealth Attack).',
      en: 'A project related to tools/scripts (Stealth Attack).',
    },
    tags: ['Tools'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Stealth_Attack',
  },
  {
    slug: 'stealth-auto',
    title: {
      ar: 'Stealth Auto',
      en: 'Stealth Auto',
    },
    description: {
      ar: 'مشروع مرتبط بالأتمتة/الأدوات (Stealth Auto).',
      en: 'A project related to automation/tools (Stealth Auto).',
    },
    tags: ['Tools', 'Automation'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Stealth_Auto',
  },
  {
    slug: 'anonymus-kali',
    title: {
      ar: 'Anonymus Kali',
      en: 'Anonymus Kali',
    },
    description: {
      ar: 'مشروع/محتوى متعلق بـ Kali Linux.',
      en: 'A project/content related to Kali Linux.',
    },
    tags: ['Linux', 'Kali'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Anonymus_Kali',
  },
];
