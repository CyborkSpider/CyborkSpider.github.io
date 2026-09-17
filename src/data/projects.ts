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
  image?: string; // path relative to /public, e.g. /projects/jarvis.png
  readme?: {
    ar: string;
    en: string;
  };
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
    image: '/projects/jarvis.png',
    readme: {
      ar: `<h3>نظرة عامة</h3>
<p><strong>جارفيس (J.A.R.V.I.S)</strong> هو مساعد ذكاء اصطناعي محلي متطور مستوحى من واجهة "آيرون مان". تم تصميمه ليعمل كنظام تشغيل شخصي ذكي، يدمج بين الذاكرة طويلة المدى، والتفكير المنطقي، والتفاعل الصوتي، وتحليل الصور والفيديوهات، وكل ذلك يعمل محلياً بالكامل على جهازك للحفاظ على خصوصيتك.</p>
<h3>أهم المميزات</h3>
<ul class="list-disc list-inside space-y-1">
<li><strong>واجهة مستقبلية (Iron Man HUD):</strong> واجهة مستخدم مذهلة تضم "القلب التفاعلي" (Orb)، تأثيرات بصرية، ونافذة تيرمينال حية لمتابعة العمليات.</li>
<li><strong>نماذج ذكاء اصطناعي محلية:</strong> مدعوم بـ Ollama (مثل qwen2.5 للمحادثات و qwen3:1.7b للتفكير). خصوصية 100% بدون الاعتماد على سيرفرات خارجية.</li>
<li><strong>المحادثة الصوتية الحية (Live Talk):</strong> تحدث مع جارفيس بصوتك وسيرد عليك بصوته! يستخدم Whisper لتحويل الصوت لنص و Edge-TTS لنطق النصوص ببراعة.</li>
<li><strong>تحليل الرؤية والفيديو:</strong> يمكنك رفع صور أو فيديوهات في الشات! النظام يقوم باستخراج اللقطات والصوت من الفيديو، ويقرأ محتواه باستخدام نموذج moondream المخصص للرؤية.</li>
<li><strong>ذاكرة معرفية متطورة (Graph Memory):</strong> يستخدم Neo4j كقاعدة بيانات شبكية (Graph DB) لربط المعلومات واستنتاج العلاقات وتذكر التفاصيل على المدى الطويل (GraphRAG).</li>
<li><strong>ذاكرة العلاقات:</strong> يستخدم PostgreSQL لحفظ سجلات المحادثات واسترجاع المعلومات بناءً على التشابه المعنوي.</li>
<li><strong>تعدد الوكلاء (Multi-Agent):</strong> يمتلك النظام عقولاً متعددة، فهناك عقل للمحادثة، وعقل للتفكير العميق، وعقل لكتابة الأكواد البرمجية.</li>
</ul>
<h3>الهيكلية والتصميم</h3>
<ul class="list-disc list-inside space-y-1">
<li>الخلفية (Backend): مبني باستخدام FastAPI و Python.</li>
<li>الواجهة (Frontend): Vanilla HTML/JS/CSS (بدون إطارات عمل لأداء فائق).</li>
<li>قواعد البيانات: Neo4j (Graph), PostgreSQL (Vectors & Meta), ChromaDB.</li>
</ul>`,
      en: `<h3>Overview</h3>
<p><strong>J.A.R.V.I.S</strong> is a highly advanced, locally-hosted AI assistant inspired by Iron Man's HUD. It is designed to act as your personal AI OS, integrating multiple intelligent modules to handle memory, reasoning, voice interaction, and multimedia analysis, entirely locally.</p>
<h3>Key Features</h3>
<ul class="list-disc list-inside space-y-1">
<li><strong>Iron Man HUD UI:</strong> A spectacular, futuristic frontend featuring an interactive orb, animated particles, real-time gauges, and live terminal logging.</li>
<li><strong>Local LLM Integration:</strong> Powered by Ollama (qwen2.5 for chat, qwen3:1.7b for reasoning). 100% private and runs on your hardware.</li>
<li><strong>Live Talk Mode (Voice):</strong> Seamless voice-to-voice interaction. Uses Whisper for fast STT (Speech-to-Text) and Edge-TTS for natural-sounding text-to-speech.</li>
<li><strong>Vision & Video Analysis:</strong> Upload images or videos directly to the chat! Uses ffmpeg to extract video frames and audio, transcribing the audio and analyzing the visual frames using the moondream vision model.</li>
<li><strong>Advanced Graph Memory:</strong> Integrates Neo4j for a persistent Knowledge Graph, mapping entities, relationships, and context over long-term conversations (GraphRAG).</li>
<li><strong>Relational Memory Engine:</strong> Uses PostgreSQL + pgvector to store short-term and semantic memory embeddings.</li>
<li><strong>Multi-Agent Architecture:</strong> Includes specific roles like chat, brain, and coder, dynamically routed based on the task.</li>
</ul>
<h3>Architecture</h3>
<ul class="list-disc list-inside space-y-1">
<li>Backend: FastAPI (Python)</li>
<li>Frontend: Vanilla HTML/JS/CSS (No frameworks, pure performance)</li>
<li>Databases: Neo4j (Graph), PostgreSQL (Vectors & Meta), ChromaDB (Vector store fallback)</li>
</ul>`
    }
  },
  {
    slug: 'attendance-system',
    title: {
      ar: 'CYBORK Management System',
      en: 'CYBORK Management System',
    },
    description: {
      ar: 'تطبيق ويب متعدد المستأجرين (Multi-tenant) لإدارة الحضور والغياب، بعزل كامل للبيانات وتوجيه ديناميكي لقواعد البيانات.',
      en: 'Multi-tenant web application for attendance management with robust data isolation and dynamic database routing.',
    },
    tags: ['Django', 'Multi-tenant', 'PostgreSQL'],
    year: '2025',
    visibility: 'private',
    image: '/projects/attendance_system.png',
    readme: {
      ar: `<h3>نظرة عامة</h3>
<p>نظام ويب متكامل لإدارة الموارد البشرية والمخزون والمحاسبة، مبني بإطار Django مع دعم ثنائي اللغة (عربي/إنجليزي) وواجهة متجاوبة للمحمول وسطح المكتب.</p>
<h3>المميزات الرئيسية</h3>
<ul class="list-disc list-inside space-y-1">
<li><strong>نظام الحضور والانصراف:</strong> تسجيل الحضور بالرقم، التحقق من الموقع الجغرافي (GPS)، تحديد نطاق الموقع وعناوين IP المسموح بها لكل فرع.</li>
<li><strong>إدارة المستخدمين والفروع:</strong> إدارة شاملة للموظفين والفروع بصلاحيات ونطاقات جغرافية منفصلة.</li>
<li><strong>نظام الرواتب المتقدم:</strong> حساب تلقائي للرواتب بناءً على سجلات الحضور، إدارة الساعات الإضافية، الخصومات والإضافات وإصدار كشوف الرواتب.</li>
<li><strong>نظام المخزون والمشتريات والمبيعات:</strong> إدارة المنتجات، أوامر الشراء والبيع، جرد المخزون، ومرتجعات البيع والشراء.</li>
<li><strong>نظام المحاسبة:</strong> تسجيل المبيعات والمصاريف، الضرائب، أهداف المستخدمين، وإدارة فواتير و صندوق العمليات (Cashbox).</li>
<li><strong>إدارة الأجهزة والأمان:</strong> تسجيل أجهزة معتمدة (Device Tokens)، تتبع سجلات الوصول، وسجلات التدقيق للتعديلات.</li>
<li><strong>الميزات الإضافية:</strong> نظام المساعد الذكي (AI Chat)، قاعدة بيانات المعرفة، تتبع المشاكل، ودعم كامل لتعدد المستأجرين (Multi-tenancy) لخدمة عملاء متعددين في نفس النظام.</li>
</ul>`,
      en: `<h3>Overview</h3>
<p>A comprehensive HR, Inventory, and Accounting web system built with Django, featuring bilingual support (English/Arabic) and a responsive design for mobile and desktop.</p>
<h3>Key Features</h3>
<ul class="list-disc list-inside space-y-1">
<li><strong>Attendance & Time Tracking:</strong> ID-based check-ins, GPS location verification, and IP address validation per branch.</li>
<li><strong>User & Branch Management:</strong> Comprehensive management of employees and branches with separate permissions and geographical scopes.</li>
<li><strong>Advanced Payroll System:</strong> Automated payroll calculation based on attendance records, handling overtime, deductions, bonuses, and payslip generation.</li>
<li><strong>Inventory, Purchases, and Sales:</strong> Product management, purchase/sales orders, inventory tracking, and return processing.</li>
<li><strong>Accounting System:</strong> Sales and expense tracking, tax management, user goals, and full cashbox management.</li>
<li><strong>Device Management & Security:</strong> Device tokens for authorized access, extensive access logging, and audit trails for modifications.</li>
<li><strong>Additional Features:</strong> AI Chat Assistant, Knowledge Base (FAQ), support issue tracking, and robust multi-tenancy to serve multiple clients on the same platform.</li>
</ul>`
    }
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
    slug: 'agency-management',
    title: {
      ar: 'Agency Management',
      en: 'Agency Management',
    },
    description: {
      ar: 'نظام إدارة وكالة متكامل يتيح إدارة العملاء والمشاريع والفرق. قيد التطوير.',
      en: 'Full-featured agency management system for handling clients, projects, and teams. Under development.',
    },
    tags: ['Python', 'Django', 'Management'],
    year: '2026',
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
