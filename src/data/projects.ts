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
    slug: 'jarvis',
    title: {
      ar: 'J.A.R.V.I.S.',
      en: 'J.A.R.V.I.S.',
    },
    description: {
      ar: 'نظام ذكاء اصطناعي متعدد الوكلاء يعمل محلياً، مبني على رسم بياني للمعرفة يدمج Neo4j وPostgreSQL للاستعلام الذكي عن البيانات وتحليلها.',
      en: 'Local multi-agent AI system built on a knowledge graph integrating Neo4j and PostgreSQL for intelligent data querying and analysis.',
    },
    tags: ['Python', 'Neo4j', 'PostgreSQL', 'AI', 'Multi-agent'],
    year: '2026',
    visibility: 'private',
  },
  {
    slug: 'investech-development',
    title: {
      ar: 'Investech Development',
      en: 'Investech Development',
    },
    description: {
      ar: 'منصة استثمارية قيد التطوير النشط. تفاصيل إضافية قريبًا.',
      en: 'Investment platform under active development. More details coming soon.',
    },
    tags: ['Django', 'Python', 'Under Development'],
    visibility: 'private',
  },
  {
    slug: 'attendance-system',
    title: {
      ar: 'Attendance System',
      en: 'Attendance System',
    },
    description: {
      ar: 'تطبيق ويب متعدد المستأجرين (Multi-tenant) لإدارة الحضور والغياب، بعزل كامل للبيانات وتوجيه ديناميكي لقواعد البيانات.',
      en: 'Multi-tenant web application for attendance management with robust data isolation and dynamic database routing.',
    },
    tags: ['Django', 'Multi-tenant', 'PostgreSQL'],
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
      ar: 'مشروع مرتبط بأدوات/سكربتات اختبار الاختراق.',
      en: 'A penetration testing tools/scripts project.',
    },
    tags: ['Tools', 'Pentesting', 'Kali Linux'],
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
      ar: 'أداة أتمتة مرتبطة بأدوات اختبار الاختراق.',
      en: 'An automation tool related to penetration testing.',
    },
    tags: ['Tools', 'Automation', 'Python'],
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
      ar: 'مشروع/محتوى متعلق بـ Kali Linux وأدوات الأمن.',
      en: 'A project/content related to Kali Linux and security tools.',
    },
    tags: ['Linux', 'Kali', 'Security'],
    visibility: 'public',
    repoUrl: 'https://github.com/CyborkSpider/Anonymus_Kali',
  },
];
