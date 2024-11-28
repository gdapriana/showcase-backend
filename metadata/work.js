export default function work() {
  const works = [
    {
      name: "News Clickbait Detector",
      tech: ["nextjs", "python", "flask", "tensorflow"],
      repositories: [
        "https://github.com/gdapriana/clickbait-detector-frontend",
        "https://github.com/gdapriana/clickbait-detector-backend"
      ],
      mode: "production",
      website: "https://clickbait-detector-frontend.vercel.app/",
      description: "An AI-powered application to analyze news headlines and determine if they are clickbait. It uses machine learning for accurate predictions."
    },
    {
      name: "Kelayakan Pinjaman",
      tech: ["nextjs", "python", "flask", "skfuzzy"],
      repositories: [
        "https://github.com/gdapriana/kelayakan-pinjaman-frontend",
        "https://github.com/gdapriana/kelayakan-pinjaman-backend"
      ],
      mode: "production",
      website: "https://kelayakan-pinjaman-frontend.vercel.app/",
      description: "A fuzzy logic-based system that evaluates user data to determine loan eligibility, providing an intuitive and data-driven decision process."
    }
  ];

  return JSON.stringify(works);
}