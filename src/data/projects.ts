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
    repoUrl: 'https://github.com/CyborkSpider/investechDevelopment.git',
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
    repoUrl: 'https://github.com/CyborkSpider/attendance_system.git',
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
];
