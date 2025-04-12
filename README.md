# MindScape-Gamified-Mental-Health-Support-Platform
MindScape is a browser-based platform designed to help users manage stress, anxiety, and burnout in an engaging and interactive manner. By blending **gamified Cognitive Behavioral Therapy (CBT)** modules, **AI-powered journaling**, and community-driven resources, it provides a holistic approach to mental well-being. The platform is ideal for students and working professionals seeking mental health support.

## 🌟 Key Features

### 1. **Gamified CBT Modules**
- Each level focuses on a specific emotion or issue (e.g., stress, imposter syndrome, or burnout).
- Users complete **puzzles**, **role-playing dialogues**, and **decision-making challenges** reflecting real-life scenarios.
- Interactive storytelling ensures an engaging and immersive experience.

### 2. **Daily Mood Tracker + AI Companion**
- Track your daily emotions and visualize your progress using graphs.
- Use the **AI-powered journaling companion** for empathetic and conversational reflections.
- Built using **OpenAI GPT** or **open-source NLP models**.

### 3. **Personalized Growth Tree**
- Progress is represented by a flourishing tree that grows based on completed modules and self-care activities.
- Encourages consistent engagement and self-care practices.

### 4. **Resource Hub & Community**
- Access curated articles, meditative audio tracks, and local therapist directories.
- Build a sense of connection through community features.

## 🛠️ Tech Stack
### **Frontend/Game**
- **Game Engines**: Unity (WebGL), Phaser.js, or Godot (HTML5 export).
- **UI**: HTML5, CSS3, and JavaScript.

### **Backend**
- **Framework**: Node.js with Express.
- **Database**: Firebase (for user data, mood tracking, etc.).

### **AI/NLP**
- **Models**: OpenAI GPT or open-source alternatives like Hugging Face or Cohere.

### **Hosting**
- **Platforms**: Vercel, Netlify, or Render for deployment.
- **Version Control**: GitHub for collaborative development.

## 🚀 Getting Started
### Prerequisites
- **Node.js** and **npm** installed on your local machine.
- **OpenAI API key** (or credentials for an open-source NLP model).

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/codebyjyotsna/mindscape.git
   cd mindscape
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key (or other API keys):
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key_here
     ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. **Access the platform**:
   Open your browser and go to `http://localhost:3000`.

## 📂 Project Structure
mindscape/
├── public/               # Static frontend files (HTML, CSS, JS)
│   ├── index.html        # Main HTML file
│   ├── styles.css        # Styling
│   └── app.js            # Frontend JavaScript
├── server.js             # Backend server (Node.js)
├── .env                  # Environment variables (API keys, etc.)
└── package.json          # Node.js dependencies and scripts

## 🧠 How It Works
1. **Gamified CBT**:
   - Levels are implemented as interactive mini-games using Phaser.js or Unity exported to WebGL.
   - The logic for puzzles and role-playing scenarios is built into the frontend engine.

2. **AI Companion**:
   - Journaling input is sent to the backend via REST API.
   - The backend integrates with OpenAI GPT (or alternatives) for conversational responses.

3. **Mood Tracker**:
   - Data is stored in Firebase and visualized using Chart.js in the frontend.

4. **Growth Tree**:
   - Progress is dynamically represented with animations in the frontend using libraries like Three.js or custom Unity assets.

## 🌍 Deployment
1. **Hosting**:
   - Deploy the frontend and backend to Vercel or Netlify:
     ```bash
     vercel deploy
     ```

2. **Environment Setup**:
   - Ensure environment variables are configured in the hosting platform.

