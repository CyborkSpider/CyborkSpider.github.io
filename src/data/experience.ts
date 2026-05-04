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
      ar: 'حتى الآن',
      en: 'Present',
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
      ar: 'Youth Leading Youth',
      en: 'Youth Leading Youth',
    },
    tags: ['Teamwork', 'Communication'],
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
    company: 'Outlier',
    title: {
      ar: 'Programmer',
      en: 'Programmer',
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
    summary: {
      ar: 'تحسين استجابات الذكاء الاصطناعي في بايثون لزيادة الدقة وحل المشكلات.',
      en: 'Enhanced AI responses in Python to improve accuracy and troubleshooting.',
    },
    tags: ['Python', 'Troubleshooting'],
  },
];
