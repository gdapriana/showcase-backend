export default function blog() {
  const blogs = [
    {
      title: "5 Ways of Adaptability: How I Adapted at Bangkit Academy 2023",
      slug: "5-ways-of-adaptability-how-i-adapted-at-bangkit-academy-2023",
      description: "Hello, everyone. I am I Komang Gede Apriana, a participant of the Bangkit 2023 program. I am following the machine learning path, which is one of the three tracks offered by the program. I will describe how I adapted to five different ways of interacting, achieving, learning, working, and thinking throughout the program.",
      createdAt: new Date("2023-09-01"),
      readingTime: 5,
      body: `
      <h2 style="margin-left:2.4rem;">Interacting</h2>
      <p style="margin-left:2.4rem;">I had to communicate with my teammates, who came from different universities and provinces. We had to collaborate online using various tools such as Google Meet, Discord and GitHub. To adapt to these interactions, I learned how to use the tools properly, how to express my ideas clearly and respectfully, how to listen actively and ask questions, and how to give and receive constructive criticism.</p>
      <h2 style="margin-left:2.4rem;">Achieving</h2>
      <p style="margin-left:2.4rem;">I had to complete several online courses on the Coursera platform that covered topics such as Python programming, and many more. To adapt to these achievements, I learned how to manage my time effectively, how to set SMART goals (specific, measurable, achievable, relevant, and time-bound), how to monitor my progress and adjust my strategies accordingly, and how to celebrate my successes and learn from my failures.</p>
      <h2 style="margin-left:2.4rem;">Learning</h2>
      <p style="margin-left:2.4rem;">I had to learn about the latest technologies and trends in the field of machine learning, such as natural language processing, computer vision, deep learning models, and data pipelines. To adapt to this learning, I learned how to use various resources such as online courses, books, articles, videos, podcasts, and blogs. I also learned how to apply what I learned in practical projects that demonstrated my skills and knowledge.</p>
      <h2 style="margin-left:2.4rem;">Working</h2>
      <p style="margin-left:2.4rem;">I had to work with teammates who had different skill levels, interests, personalities, and preferences. We had to divide our tasks according to our strengths and weaknesses. To adapt to these workings, I learned how to use agile methodologies such as Scrum and Kanban that helped us organize our workflow and deliver value incrementally.</p>
      <h2 style="margin-left:2.4rem;">Thinking</h2>
      <p style="margin-left:2.4rem;">I had to think about the problem definition, data collection, data analysis, data preprocessing, model selection, model training, model evaluation, model deployment, and model maintenance. To adapt to these thinkings, I learned how to use frameworks such as CRISP-DM (Cross-Industry Standard Process for Data Mining) and OSEMN (Obtain-Scrub-Explore-Model-iNterpret) that helped me structure my data science process.</p>
      <hr>
      <p style="margin-left:2.4rem;">I am grateful for the opportunity to have participated in the Bangkit 2023 program. It has been a challenging but rewarding experience. I have learned a lot about machine learning, but more importantly, I have learned how to adapt to change and embrace new challenges. I am confident that these skills will help me succeed in my career and in life.</p> 
      `
    },
    {
      title: "How I Built My First App: Lessons from Developing ThousandTemples",
      slug: "how-i-built-my-first-app-lessons-from-developing-thousand-temples",
      description: "Discover how I created my first app, ThousandTemples, which showcases Bali's culture and destinations. Learn about the challenges I faced, the technologies I used, and the lessons I learned.",
      createdAt: new Date("2023-10-15"),
      readingTime: 7,
      body: `
      <h2 style="margin-left:2.4rem;">Inspiration</h2>
      <p style="margin-left:2.4rem;">ThousandTemples was born from my passion for Bali's culture and a desire to help tourists explore its wonders. I realized there was a gap in user-friendly apps that provided detailed cultural insights.</p>
      <h2 style="margin-left:2.4rem;">Challenges</h2>
      <p style="margin-left:2.4rem;">The biggest challenge was integrating diverse data sources, such as cultural histories, travel itineraries, and real-time weather updates, into one cohesive application. I also had to ensure the app worked offline for areas with poor internet connectivity.</p>
      <h2 style="margin-left:2.4rem;">Technologies Used</h2>
      <p style="margin-left:2.4rem;">I used Next.js for the frontend, Node.js for the backend, and Firebase for real-time database and authentication. For the UI, I integrated Shadcn components to create a responsive and visually appealing design.</p>
      <h2 style="margin-left:2.4rem;">Lessons Learned</h2>
      <p style="margin-left:2.4rem;">I learned the importance of user feedback, version control with GitHub, and adopting agile methodologies. The project taught me to stay adaptable and continuously improve based on user needs.</p>
      <p style="margin-left:2.4rem;">ThousandTemples has been an incredible learning journey. It solidified my love for software development and deepened my appreciation for Bali's rich heritage.</p>
    `
    },
    {
      title: "Breaking Down Clickbait: Behind the Scenes of My Clickbait Detector",
      slug: "breaking-down-clickbait-behind-the-scenes-of-my-clickbait-detector",
      description: "Explore the process of developing a clickbait detection system, including its technical implementation and the challenges faced during development.",
      createdAt: new Date("2023-11-10"),
      readingTime: 6,
      body: `
      <h2 style="margin-left:2.4rem;">Motivation</h2>
      <p style="margin-left:2.4rem;">Clickbait headlines have always intrigued me. I wanted to create a tool to help users identify misleading content and promote responsible media consumption.</p>
      <h2 style="margin-left:2.4rem;">Technical Implementation</h2>
      <p style="margin-left:2.4rem;">The backend is built with Python using an artificial neural network model. The model is trained on a dataset of news headlines, classified as clickbait or non-clickbait. The frontend, powered by Next.js and Shadcn UI, allows users to input headlines and get predictions.</p>
      <h2 style="margin-left:2.4rem;">Challenges</h2>
      <p style="margin-left:2.4rem;">One challenge was obtaining a labeled dataset for clickbait detection. I also had to fine-tune the ANN model to balance precision and recall while ensuring the app remained responsive.</p>
      <h2 style="margin-left:2.4rem;">Takeaways</h2>
      <p style="margin-left:2.4rem;">The project taught me about the complexities of natural language processing and the importance of user-centric design. It also highlighted the potential of technology in addressing real-world problems.</p>
      <p style="margin-left:2.4rem;">This project reinforced my belief that technology can empower individuals to make informed decisions, and I am excited to continue exploring its possibilities.</p>
    `
    }
  ];
  return JSON.stringify(blogs)
}