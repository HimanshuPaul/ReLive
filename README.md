
# 🧠 Digital Psychological Intervention System (Prototype)

## Overview

This project is a **web-based mental health support platform for college students**, designed to provide **stigma-free, confidential, and culturally relevant psychological support**.

It allows students to:

* Take a **quick mental health screening questionnaire**.
* Receive **AI-guided feedback** based on their responses.
* Access **resources, peer support, and counselling booking**.
* Monitor their wellbeing over time (for research and analytics purposes).

The system also includes an **admin dashboard** to analyze anonymized data trends, helping institutions plan better interventions.

---

## Features

### 🌟 User-Facing

* **Clerk Authentication**: Secure sign-up/sign-in.
* **Demographics Form**: Capture age, course, and year of study.
* **Screening Questionnaire**: 16 initial questions, followed by 20 detailed questions if needed.
* **AI Sentiment Analysis**: Analyzes students’ paragraph inputs for emotional insights.
* **Tailored Suggestions**: Self-help tips for normal cases, counselling recommendation for moderate/severe cases.
* **Resource Hub**: Articles, videos, and audio resources in regional languages.
* **Peer Support Access**: Moderated student forum (prototype).

### 🛠 Admin / Analytics

* **Dashboard**: Shows aggregated severity counts, course-wise distribution, and sentiment analysis trends.
* **CSV Export**: Download anonymized student responses for offline analysis.
* **Real-time Monitoring**: Helps identify trends in student mental health.

---

## Tech Stack

* **Frontend**: React + Vite + TailwindCSS
* **Authentication**: Clerk
* **State Management**: React Hooks / Context API
* **Charts & Dashboard**: Recharts or Chart.js
* **AI Integration**: Hugging Face Sentiment Analysis (via API)
* **Data Storage**: Backend API storing data in CSV / Excel (or database later)
* **Deployment**: Vercel / Netlify for frontend, Render / Heroku for backend

---

## Project Structure (Frontend)

```
frontend/
│
├─ src/
│   ├─ assets/           # Images, icons, illustrations
│   ├─ components/       # Reusable UI components (Navbar, Footer, Cards)
│   ├─ pages/            # Main pages (Home, Questionnaire, Results, Dashboard, Resources)
│   ├─ context/          # React context for global state
│   ├─ hooks/            # Custom hooks (API calls, Clerk auth)
│   ├─ utils/            # Utility functions (scoring, sentiment analysis)
│   └─ App.jsx           # Main React app
│
├─ public/               # Static files
├─ vite.config.js         # Vite configuration
├─ package.json
└─ tailwind.config.js
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mental-health-prototype.git
cd mental-health-prototype
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Clerk

* Create a **Clerk account** and get your **frontend API keys**.
* Add `.env` file in root:

```
VITE_CLERK_FRONTEND_API=<your_frontend_api_key>
VITE_CLERK_PUBLISHABLE_KEY=<your_publishable_key>
```

### 4. Run the project locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## How to Use

1. **Sign up / Sign in** with your college account (via Clerk).
2. **Fill in demographics** (course, age, year).
3. **Take the screening questionnaire**.
4. If severity is moderate/severe, write a **short paragraph** about your feelings.
5. Receive **personalized suggestions** based on your score and sentiment analysis.
6. Admin users can **access the dashboard** to view anonymized data trends.

---

## Future Enhancements

* Mobile-friendly responsive design.
* Integration with a **real database** (PostgreSQL or MongoDB).
* Fully functional **peer support forum**.
* Multi-language support for **regional languages**.
* Email notifications for counselling appointments.
* AI-based **recommendation engine** for personalized resources.

---

## Contributing

* Fork the repository
* Create your feature branch
* Commit your changes (`git commit -m "Add feature"`)
* Push to your branch
* Open a pull request

---

## License

This project is **open-source**. You can use and modify it under the MIT License.

---

## Contact

**Project Lead**: ????
**Team Members**: Sidhant, Somen, Nikita, Sonali, Himanshu , Shilpi

For suggestions or issues, please open an issue on GitHub.

---


Do you want me to make that next?
