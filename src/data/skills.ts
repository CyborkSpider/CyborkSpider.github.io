export type Skill = {
  label: string;
  icon?: string;
};

export type SkillGroup = {
  key: 'frontend' | 'backend' | 'database' | 'tools';
  title: {
    ar: string;
    en: string;
  };
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend',
    title: {
      ar: 'الواجهة الأمامية',
      en: 'Frontend',
    },
    skills: [
      { label: 'HTML', icon: 'html' },
      { label: 'CSS', icon: 'css' },
      { label: 'Bootstrap', icon: 'bootstrap' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Astro', icon: 'astro' },
      { label: 'TailwindCSS', icon: 'tailwind' },
      { label: 'Photoshop', icon: 'photoshop' },
    ],
  },
  {
    key: 'backend',
    title: {
      ar: 'الخلفية',
      en: 'Backend',
    },
    skills: [
      { label: 'Python', icon: 'python' },
      { label: 'Django', icon: 'django' },
      { label: 'Bash Scripts', icon: 'bash' },
      { label: 'C++', icon: 'cpp' },
    ],
  },
  {
    key: 'database',
    title: {
      ar: 'قواعد البيانات',
      en: 'Database',
    },
    skills: [
      { label: 'SQLite', icon: 'sqlite' },
      { label: 'PostgreSQL', icon: 'postgres' },
    ],
  },
  {
    key: 'tools',
    title: {
      ar: 'أدوات',
      en: 'Tools',
    },
    skills: [{ label: 'Git/GitHub', icon: 'git' }],
  },
];
