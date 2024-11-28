export default function service() {
  const services = [
    {
      name: "Web Design",
      slug: "web-design",
      description: "Crafting responsive and modern websites."
    },
    {
      name: "UI/UX",
      slug: "ui-ux",
      description: "Designing intuitive and user-friendly interfaces."
    },
    {
      name: "Mobile Application",
      slug: "mobile-application",
      description: "Developing mobile apps for iOS and Android platforms."
    },
    {
      name: "User Research",
      slug: "user-research",
      description: "Understanding user needs through research."
    },
    {
      name: "3D Design",
      slug: "3d-design",
      description: "Creating immersive 3D models and visuals."
    },
    {
      name: "Game Development",
      slug: "game-development",
      description: "Building engaging and interactive games."
    }
  ];

  return JSON.stringify(services);
}