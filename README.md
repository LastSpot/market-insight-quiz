# Market Insight Quiz

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)

A full-stack Next.js 15 application that tests users' knowledge of financial market insights through interactive quizzes powered by Google's Gemini AI.

## 📑 Overview

Market Insight Quiz generates real-time financial market questions across various domains (equities, commodities, economic indicators, etc.) and evaluates user responses for accuracy and comprehensiveness. The application utilizes Google's Gemini AI to create challenging questions and provide detailed feedback on user answers.

## ✨ Features

- **AI-Powered Questions**: Dynamic generation of finance-related questions by Google Gemini
- **Real-time Evaluation**: Immediate scoring and feedback on user responses
- **Interactive UI**: Clean, responsive interface with typing animations
- **Mobile Responsive**: Fully functional on devices of all sizes
- **Multiple Question Types**: True/false, short answer, fill-in-the-blank, and numerical questions
- **Topic Variety**: Questions span commodities, equities, currencies, economic indicators, and more
- **Educational Tool**: Learn about markets through detailed feedback

## 🧠 How It Works

1. When the page loads, Gemini generates a market-related question based on random parameters
2. User reads the question and enters their analysis in the response box
3. Upon submission, the AI evaluates the answer for:
   - Factual accuracy (60%)
   - Completeness (20%)
   - Clarity and relevance (20%)
4. Detailed feedback is presented with a score and explanation
5. User can request a new question to continue learning

## 🛠️ Technology Stack

- **Frontend**: React 19, Next.js 15, Tailwind CSS 4
- **AI Integration**: Google Gemini 2.0 Flash
- **UI Components**: Custom MagicUI components with animations
- **Styling**: Tailwind with custom animations
- **Type Safety**: TypeScript throughout the codebase
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Google API key for Gemini access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/market-insight-quiz.git
cd market-insight-quiz
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

The question generator can be customized by modifying the parameters in `src/lib/data.ts`:

- Categories: commodities, equities, currencies, etc.
- Tones: playful, serious, puzzling, etc.
- Formats: true/false, short answer, fill in the blank, etc.
- Timeframes: today, this week, month, year-to-date, etc.
- Regions: United States, Europe, Asia, etc.

## 📱 Mobile Responsiveness

The application is designed to be fully responsive across all device sizes:
- Adaptive layouts for mobile, tablet, and desktop
- Optimized text sizes and spacing
- Touch-friendly interface elements

## 🔮 Future Enhancements

- User accounts and score tracking
- Historical question archive
- Difficulty levels
- Competitive leaderboards
- Specialized topic sections

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Google Gemini for AI capabilities
- Next.js team for the robust framework
- Tailwind CSS for styling utilities