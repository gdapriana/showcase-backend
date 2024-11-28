export default function profile() {
  const now = new Date();
  const born = new Date("2003-04-08")
  const name = "Gede Apriana";
  const fullName = "I Komang Gede Apriana";
  const firstName = "Komang";
  const lastName = "Apriana";
  const age = now.getFullYear() - born.getFullYear();
  const profile = "https://lh3.googleusercontent.com/a/ACg8ocJv5Hn06WMGJPugcK2tMm9XrIPDSopUrUBlaBrt5wPFiraarNDKmA=s576-c-no";
  const phoneWA = "6281339486902";
  const address = "Bali, Id"
  const highlight = `Fullstack and Machine Learning Developer based in ${address}`;
  const about = "My name is I Komang Gede Apriana. Ever since my time in high school, I've found a profound interest in the realm of computers, with a specific focus on computer network engineering. Presently, I am fully engaged as a cohort in Dicoding, Frontend Backend program, enriching my skills and knowledge in this dynamic field. Alongside this, I am pursuing a degree in informatics at Udayana University, where I continue to explore and deepen my understanding of the vast world of computer science."
  const phone = "(+62) 813 3948 6902";
  const email = "gedeapriana36@gmail.com";
  const instagram = "gdaprianaa";
  const github = "gdapriana";
  const linkedin = "komang-apriana";
  const images = [
    "https://images.unsplash.com/photo-1732601471603-404af59bc450?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731223833744-7904a1bbeb6e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const cv = "https://drive.google.com/file/d/1yO3puA-Qqqko8UTIywSGiBUy_RyPpuhS/view?usp=drive_link";

  const socials = [
    { name: "Whatsapp", username: "gedeapriana", url: `https://wa.me/${phoneWA}`},
    { name: "Instagram", username: instagram, url: `https://www.instagram.com/${instagram}`},
    { name: "Linkedin", username: linkedin, url: `https://www.linkedin.com/in/${linkedin}`},
    { name: "Github", username: linkedin, url: `https://github.com/${github}`},
  ]

  const studies =  [
    { name: "Udayana University",
      logo: "https://upload.wikimedia.org/wikipedia/id/2/2d/Logo-unud-baru.png",
      from: new Date("2021-09-01"),
      until: new Date("2025-09-01"),
      target: "bachelor of computer science",
      status: "progress",
    },
    { name: "SMK N 1 Gianyar",
      logo: "https://gotra.sgp1.digitaloceanspaces.com/web-upload/1725972997-10-09-2024-MUbhIWQetjkYLm5cviP06JZFlz7y3K1q.webp",
      from: new Date("2018-09-01"),
      until: new Date("2021-09-01"),
      target: "Computer Systems Networking and Telecommunications",
      status: "finish",
    }
  ]

  const data = {
    name,
    fullName,
    firstName,
    lastName,
    highlight,
    about,
    phone,
    email,
    born,
    age,
    profile,
    images,
    socials,
    cv,
    studies
  }

  return JSON.stringify(data);
}
