import company from "./company.js";

export default function experience() {
  const companies = company();
  const experiences = [
    {
      name: "Machine Learning Cohort",
      company: "bangkit-academy",
      description: "I participated in Machine Learning at Bangkit Academy, focusing on developing both technical and interpersonal skills. Engaging in the Capstone project, I applied practical Machine Learning knowledge, strengthening my understanding of real-world problem-solving.",
      from: new Date("2023-08-01"),
      until: new Date("2024-02-01"),
      type: "remote",
      media: ["https://www.linkedin.com/in/komang-apriana/overlay/experience/2243565573/multiple-media-viewer?profileId=ACoAADR34q4BNAqR7rBqYphypDDhomvf6HrziY4&treasuryMediaId=1713708044021&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bl6SoJpZ2QB2aP7b1wC58ag%3D%3D", "https://www.linkedin.com/in/komang-apriana/overlay/experience/2243565573/multiple-media-viewer?profileId=ACoAADR34q4BNAqR7rBqYphypDDhomvf6HrziY4&treasuryMediaId=1706614549580&type=IMAGE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByC3sOOFJTJy%2Bo1hxayYCbg%3D%3D"]
    },
    {
      name: "Frontend Backend Developer",
      company: "dicoding-academy",
      description: "I participated as a Frontend Backend Developer at Dicoding Academy from August 2023 to February 2024 in a remote role. During this time, I worked on both frontend and backend development, contributing to various projects and gaining hands-on experience in full-stack development.",
      from: new Date("2024-02-01"),
      until: new Date("2024-06-01"),
      type: "remote",
      media: ["https://www.linkedin.com/in/komang-apriana/overlay/1722094434859/single-media-viewer?type=DOCUMENT&profileId=ACoAADR34q4BNAqR7rBqYphypDDhomvf6HrziY4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByC3sOOFJTJy%2Bo1hxayYCbg%3D%3D"]
    },
    {
      name: "Frontend Developer",
      company: "jwc",
      description: "I collaborated with clients to create user-friendly websites, using Next.js for dynamic, responsive designs. I worked with the design team, conducted code reviews, and ensured high-quality performance.",
      from: new Date("2023-09-01"),
      until: new Date("2024-09-30"),
      type: "intership",
    },
    {
      name: "Data Entry Assistant",
      company: "jwc",
      description: "I ensured data accuracy by inputting information through cPanel, maintained data integrity, collaborated with teams to meet requirements, and compiled regular reports on data volume and quality for management.",
      from: new Date("2023-09-01"),
      until: new Date("2024-09-30"),
      type: "intership",
    }
  ]

  const enrichedExperiences = experiences.map(exp => {
    const company = companies.find(comp => comp.slug === exp.company);
    return {
      ...exp,
      company: company || {},
    };
  });

  return JSON.stringify(enrichedExperiences);
}