export type ExperienceItem = {
  company: string;
  title: {
    ar: string;
    en: string;
  };
  employmentType?: {
    ar: string;
    en: string;
  };
  start: string;
  end: {
    ar: string;
    en: string;
  };
  location?: {
    ar: string;
    en: string;
  };
  workMode?: {
    ar: string;
    en: string;
  };
  summary?: {
    ar: string;
    en: string;
  };
  bullets?: {
    ar: string;
    en: string;
  }[];
  tags?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Odoo (EMEA)',
    title: {
      ar: 'Odoo Developer Intern',
      en: 'Odoo Developer Intern',
    },
    employmentType: {
      ar: 'تدريب',
      en: 'Internship',
    },
    start: 'Aug 2026',
    end: {
      ar: 'Sep 2026',
      en: 'Sep 2026',
    },
    location: {
      ar: 'عن بُعد',
      en: 'Remote',
    },
    workMode: {
      ar: 'عن بُعد',
      en: 'Remote',
    },
    bullets: [
      {
        ar: 'اكتسبت خبرة عملية في تطوير Odoo ERP، وتخصيص سير العمل وتحسينه باستخدام Python.',
        en: 'Gained hands-on experience in Odoo ERP development, customizing and optimizing business workflows using Python.',
      },
      {
        ar: 'ساعدت في تطوير وصيانة وحدات Odoo، مما عزّز وظائف النظام وتجربة المستخدم.',
        en: 'Assisted in developing and maintaining Odoo modules, enhancing system functionality and user experience.',
      },
    ],
    tags: ['Odoo', 'Python', 'ERP', 'Module Development'],
  },
  {
    company: 'Self-Employed',
    title: {
      ar: 'Programming Instructor',
      en: 'Programming Instructor',
    },
    employmentType: {
      ar: 'دوام جزئي',
      en: 'Part-time',
    },
    start: 'Nov 2023',
    end: {
      ar: 'حتى الآن',
      en: 'Present',
    },
    location: {
      ar: 'مصر',
      en: 'Egypt',
    },
    workMode: {
      ar: 'هجين',
      en: 'Hybrid',
    },
    bullets: [
      {
        ar: 'تقديم تعليم شامل وإرشاد للطلاب في مجالات تطوير الواجهة الأمامية والخلفية واختبار الاختراق.',
        en: 'Deliver comprehensive instruction and mentorship to students in Front-End development, Back-End development, and Penetration Testing.',
      },
    ],
    tags: ['Teaching', 'Mentoring'],
  },
  {
    company: 'YLY - Ministry of Youth and Sports',
    title: {
      ar: 'Planner (Volunteer)',
      en: 'Planner (Volunteer)',
    },
    employmentType: {
      ar: 'دوام جزئي',
      en: 'Part-time',
    },
    start: 'Jul 2025',
    end: {
      ar: 'Jul 2026',
      en: 'Jul 2026',
    },
    location: {
      ar: 'الغربية، مصر',
      en: 'Al Gharbiyah, Egypt',
    },
    workMode: {
      ar: 'هجين',
      en: 'Hybrid',
    },
    bullets: [
      {
        ar: 'خططت ونسّقت مبادرات وفعاليات شبابية، مع إثبات مهارات قوية في العمل الجماعي والتواصل متعدد الوظائف وتنظيم المشاريع.',
        en: 'Planned and coordinated youth initiatives and events, demonstrating strong teamwork, cross-functional communication, and project organization.',
      },
    ],
    tags: ['Teamwork', 'Communication', 'Project Planning'],
  },
  {
    company: 'Outlier',
    title: {
      ar: 'Python Programmer',
      en: 'Python Programmer',
    },
    employmentType: {
      ar: 'دوام جزئي',
      en: 'Part-time',
    },
    start: 'Nov 2024',
    end: {
      ar: 'Jan 2025',
      en: 'Jan 2025',
    },
    location: {
      ar: 'عن بُعد',
      en: 'Remote',
    },
    workMode: {
      ar: 'عن بُعد',
      en: 'Remote',
    },
    bullets: [
      {
        ar: 'حسّنت استجابات نماذج الذكاء الاصطناعي في Python لتحسين دقة المخرجات ومنطقها وجودتها.',
        en: 'Enhanced AI model responses generated in the Python programming language to improve output accuracy, logic, and code quality.',
      },
      {
        ar: 'رصدت وأصلحت أخطاء في مقاطع كود معقدة لضمان الأداء الأمثل والالتزام بمعايير تطوير البرمجيات.',
        en: 'Troubleshot and debugged complex code snippets to ensure optimal performance and adherence to software development standards.',
      },
    ],
    tags: ['Python', 'AI Training', 'Troubleshooting'],
  },
];
