const teamMembers = [
  {
    name: "Jyothika Meduri",
    role: "Full Stack Developer",
    bio: "Focused on building smart, scalable AI-powered web apps with a passion for combining creativity and technology.",
    linkedin: "https://www.linkedin.com/in/jyothikameduri/",
    github: "https://github.com/jyothikameduri",
    image: "/images/jyothika.jpg",
  },
  {
    name: "B.V.Vyshnavi",
    role: "Frontend Developer / Collaborator",
    bio: "Dedicated to crafting clean UI/UX and making user interactions smooth and engaging.",
    linkedin: "https://www.linkedin.com/in/vyshnavi13/",
    github: "https://github.com/Vyshnavi1322",
    image: "/images/vyshnavi.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-10 px-6 text-gray-800">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        About This Project
      </h1>

      {/* Project Description */}
      <div className="max-w-4xl mx-auto  rounded-2xl p-6 mb-10 text-center">
        <p className="text-gray-700 text-lg">
          <strong>AI Lyrics Generator</strong> is an emotional AI-based lyrics
          generator that transforms your feelings into beautifully crafted song
          lyrics. You simply select a mood — and the app generates a
          personalized song just for you. It's like journaling with melodies!
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2"> How We Built It</h3>
        <p className="text-gray-700">
          We used <strong>React.js</strong> and <strong>Tailwind CSS</strong>{" "}
          for the frontend, ensuring a clean and responsive UI. The backend is
          built using <strong>Express.js</strong> and communicates with the{" "}
          <strong>Groq LLaMA3 API</strong> to generate lyrics using natural
          language prompts. We added animated backgrounds for each mood to
          enhance the emotional connection and make the experience immersive.
        </p>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Meet the Developers 👩‍💻
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl  max-w-xs w-full text-center hover:scale-105 transition"
          >
            {console.log(member.image)}
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-purple-600">{member.role}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
