# J.A.R.V.I.S (Just A Rather Very Intelligent System) 🤖✨

<div align="center">
  <img src="https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python" alt="Python Version"/>
  <img src="https://img.shields.io/badge/FastAPI-0.103.2-00a393?style=for-the-badge&logo=fastapi" alt="FastAPI"/>
  <img src="https://img.shields.io/badge/Neo4j-Graph_DB-008CC1?style=for-the-badge&logo=neo4j" alt="Neo4j"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Memory-4169E1?style=for-the-badge&logo=postgresql" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Ollama-Local_LLM-white?style=for-the-badge" alt="Ollama"/>
</div>

---

## 🌟 English Overview

**J.A.R.V.I.S** is a highly advanced, locally-hosted AI assistant inspired by Iron Man's HUD. It is designed to act as your personal AI OS, integrating multiple intelligent modules to handle memory, reasoning, voice interaction, and multimedia analysis, entirely locally.

### 🚀 Key Features
- **Iron Man HUD UI**: A spectacular, futuristic frontend featuring an interactive orb, animated particles, real-time gauges, and live terminal logging.
- **Local LLM Integration**: Powered by Ollama (`qwen2.5` for chat, `qwen3:1.7b` for reasoning). 100% private and runs on your hardware.
- **Live Talk Mode (Voice)**: Seamless voice-to-voice interaction. Uses `Whisper` for fast STT (Speech-to-Text) and `Edge-TTS` for natural-sounding text-to-speech.
- **Vision & Video Analysis**: Upload images or videos directly to the chat! Uses ffmpeg to extract video frames and audio, transcribing the audio and analyzing the visual frames using the `moondream` vision model.
- **Advanced Graph Memory**: Integrates **Neo4j** for a persistent Knowledge Graph, mapping entities, relationships, and context over long-term conversations (GraphRAG).
- **Relational Memory Engine**: Uses **PostgreSQL** + pgvector to store short-term and semantic memory embeddings.
- **Multi-Agent Architecture**: Includes specific roles like `chat`, `brain`, and `coder`, dynamically routed based on the task.

### 🛠️ Architecture
- **Backend**: FastAPI (Python)
- **Frontend**: Vanilla HTML/JS/CSS (No frameworks, pure performance)
- **Databases**: Neo4j (Graph), PostgreSQL (Vectors & Meta), ChromaDB (Vector store fallback)

---

## 🌟 نظرة عامة (عربي)

**جارفيس (J.A.R.V.I.S)** هو مساعد ذكاء اصطناعي محلي متطور مستوحى من واجهة "آيرون مان". تم تصميمه ليعمل كنظام تشغيل شخصي ذكي، يدمج بين الذاكرة طويلة المدى، والتفكير المنطقي، والتفاعل الصوتي، وتحليل الصور والفيديوهات، وكل ذلك يعمل محلياً بالكامل على جهازك للحفاظ على خصوصيتك.

### 🚀 أهم المميزات
- **واجهة مستقبلية (Iron Man HUD)**: واجهة مستخدم مذهلة تضم "القلب التفاعلي" (Orb)، تأثيرات بصرية، ونافذة تيرمينال حية لمتابعة العمليات.
- **نماذج ذكاء اصطناعي محلية**: مدعوم بـ Ollama (مثل `qwen2.5` للمحادثات و `qwen3:1.7b` للتفكير). خصوصية 100% بدون الاعتماد على سيرفرات خارجية.
- **المحادثة الصوتية الحية (Live Talk)**: تحدث مع جارفيس بصوتك وسيرد عليك بصوته! يستخدم `Whisper` لتحويل الصوت لنص و `Edge-TTS` لنطق النصوص ببراعة.
- **تحليل الرؤية والفيديو**: يمكنك رفع صور أو فيديوهات في الشات! النظام يقوم باستخراج اللقطات والصوت من الفيديو، ويقرأ محتواه باستخدام نموذج `moondream` المخصص للرؤية.
- **ذاكرة معرفية متطورة (Graph Memory)**: يستخدم **Neo4j** كقاعدة بيانات شبكية (Graph DB) لربط المعلومات واستنتاج العلاقات وتذكر التفاصيل على المدى الطويل (GraphRAG).
- **ذاكرة العلاقات**: يستخدم **PostgreSQL** لحفظ سجلات المحادثات واسترجاع المعلومات بناءً على التشابه المعنوي.
- **تعدد الوكلاء (Multi-Agent)**: يمتلك النظام عقولاً متعددة، فهناك عقل للمحادثة، وعقل للتفكير العميق، وعقل لكتابة الأكواد البرمجية.

---

## ⚙️ Installation & Setup (طريقة التشغيل)

### Prerequisites (المتطلبات)
1. Python 3.12+
2. [Ollama](https://ollama.com/) (with models: `qwen2.5`, `moondream`, `nomic-embed-text`)
3. PostgreSQL (running locally)
4. Neo4j (running locally on bolt://localhost:7687)
5. FFmpeg (installed and added to system PATH)

### Quick Start (تشغيل سريع)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/J.A.R.V.I.S.git
   cd J.A.R.V.I.S
   ```

2. **Setup Virtual Environment:**
   ```bash
   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   # source .venv/bin/activate  # Linux/Mac
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment Variables:**
   Create a `.env` file in the root directory and configure your database credentials (Postgres, Neo4j, etc.).

5. **Start the System:**
   ```bash
   .\start.ps1
   ```
   *Or manually start the FastAPI server:*
   ```bash
   python -m uvicorn "jarvis.app:create_app" --factory --host 127.0.0.1 --port 8000
   ```

6. **Access the Interface:**
   Open your browser and navigate to `http://127.0.0.1:8000`

---

## 📜 License
This project is licensed under the MIT License.
