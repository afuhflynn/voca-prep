# Voca-Prep — AI Voice-Powered Mock Interview Assistant

**Voca-Prep** is your personal AI-based interview coach. Developed by Afuh Flyine Tembeng ([@flyine](https://github.com/flyine)), it lets you generate realistic mock interviews, answer questions via voice, and get instant, detailed feedback to conquer your next job interview.

---

## 🚀 Features

* **AI Voice Interviews**: Engage in lifelike mock interviews powered by Vapi AI voice agents.
* **Custom Question Sets**: Tailor questions to any role, experience level, and tech stack.
* **Real-Time Feedback**: Scores on Communication, Technical Knowledge, Problem-Solving, Cultural Fit, and Confidence.
* **Transcript Analyzer**: Full interview transcripts with AI-driven annotations and improvement tips.
* **Interview History**: Dashboard to review past sessions, track progress, and identify weak spots.
* **Responsive Design**: Works seamlessly on desktop and mobile browsers.

---

## 📁 Project Structure

```
/voca-Prep
├── app/                    # Next.js App directory
├── components/             # Reusable UI components
├── features/               # Interview, feedback, and auth modules
├── lib/                    # Utilities, API handlers, Prisma setup
├── public/                 # Static assets (images, audio icons)
├── prisma/                 # Database schema and migrations
└── styles/                 # Tailwind CSS configuration and themes
```

---

## ⚙️ Quick Start

1. **Clone repository**

   ```bash
   git clone https://github.com/flyine/voca-Prep.git
   cd voca-Prep
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Environment Variables**
   Create a `.env.local` file in the root and add:

   ```env
   NEXT_PUBLIC_VAPI_WEB_TOKEN=
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=
   GOOGLE_GENERATIVE_AI_API_KEY=
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   DATABASE_URL=
   ```
4. **Run the app**

   ```bash
   npm run dev
   ```
5. **View**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Connect & Support

* GitHub: [@flyine](https://github.com/flyine)
* Twitter: [@flyine\_dev](https://twitter.com/flyine_dev)
* Email: [flyinetembeng@gmail.com](mailto:flyinetembeng@gmail.com)

Feel free to file issues or open PRs in the repo.

---

*Let’s make interview prep smarter and more human—one conversation at a time.*
