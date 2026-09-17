export type EducationItem = {
  school: string;
  degree: {
    ar: string;
    en: string;
  };
  field: {
    ar: string;
    en: string;
  };
  start: string;
  end: string;
  status: {
    ar: string;
    en: string;
  };
  tags?: string[];
};

export const education: EducationItem[] = [
  {
    school: 'Tanta University',
    degree: {
      ar: 'بكالوريوس',
      en: "B.Sc.",
    },
    field: {
      ar: 'في الذكاء الاصطناعي وتحليل البيانات',
      en: 'in Artificial Intelligence & Data Analysis',
    },
    start: 'Oct 2025',
    end: 'Jun 2029',
    status: {
      ar: 'المعدل التراكمي: 2.9',
      en: 'Cumulative GPA: 2.9',
    },
  },
];
