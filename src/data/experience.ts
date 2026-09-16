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
  summary: {
    ar: string;
    en: string;
  };
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
    summary: {
      ar: 'اكتسبت خبرة عملية في تطوير Odoo ERP، وتخصيص الوحدات وأتمتة العمليات التجارية باستخدام Python.',
      en: 'Gained hands-on experience in Odoo ERP development, module customization, and business process automation using Python.',
    },
    tags: ['Odoo', 'Python', 'ERP', 'Module Development'],
  },
  {
    company: 'Self-Employed',
    title: {
      ar: 'Instructor',
      en: 'Instructor',
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
    summary: {
      ar: 'مدرب برمجة للـ Front-End و Back-End و Pentesting.',
      en: 'Programming instructor for Front-End, Back-End and Pentesting.',
    },
    tags: ['Teaching', 'Mentoring'],
  },
  {
    company: 'YLY - Ministry of Youth and Sports',
    title: {
      ar: 'Planner',
      en: 'Planner',
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
    summary: {
      ar: 'تخطيط وتنسيق المبادرات الشبابية في إطار برنامج Youth Leading Youth.',
      en: 'Planned and coordinated youth initiatives and events within the Youth Leading Youth program.',
    },
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
    summary: {
      ar: 'تحسين استجابات نماذج الذكاء الاصطناعي في Python لزيادة الدقة والجودة وحل المشكلات البرمجية.',
      en: 'Enhanced AI model responses in Python to improve output accuracy, logic, and code quality.',
    },
    tags: ['Python', 'AI Training', 'Troubleshooting'],
  },
];
