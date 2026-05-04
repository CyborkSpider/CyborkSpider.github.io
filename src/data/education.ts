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
      en: "Bachelor's",
    },
    field: {
      ar: 'ذكاء اصطناعي وتحليل بيانات (FCI - BAI)',
      en: 'AI & Data Analysis (FCI - BAI)',
    },
    start: 'Oct 2025',
    end: 'Jun 2029',
    status: {
      ar: 'طالب (قيد الدراسة)',
      en: 'Student (In progress)',
    },
    tags: ['English', 'Programming'],
  },
];
