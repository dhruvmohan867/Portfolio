import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      percentage: 95,
      icon: "💻",
      skills: ["React", "Node.js", "Express.js", "HTML/CSS", "JavaScript", "MongoDB"],
      color: "linear-gradient(135deg, #ec4899, #9333ea)"
    },
    {
      title: "Data Structures & Algorithms",
      percentage: 80,
      icon: "🗄️",
      skills: ["C++", "Java", "SQL", "Problem Solving", "LeetCode 500+"],
      color: "linear-gradient(135deg, #a855f7, #4f46e5)"
    },
    {
      title: "UI/UX Design",
      percentage: 90,
      icon: "🎨",
      skills: ["Bootstrap", "Tailwind CSS", "Responsive Design", "User Experience"],
      color: "linear-gradient(135deg, #6366f1, #ec4899)"
    },
    {
      title: "Competitive Programming",
      percentage: 85,
      icon: "🏆",
      skills: ["CodeChef", "Codeforces", "Algorithm Design", "Optimization"],
      color: "linear-gradient(135deg, #db2777, #a855f7)"
    }
  ];

  const technologies = [
    "C", "C++", "Java", "JavaScript", "React", "Node.js", "Express.js", 
    "MongoDB", "SQL", "HTML5", "CSS3", "Bootstrap", "Tailwind", "Git", "GitHub"
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 25%, #ff9999 50%, #3a3a3a 100%)'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-pink-300 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            I am a skilled web developer and competitive programmer with strong expertise in modern technologies. 
            My experience spans full-stack development, data structures & algorithms, and creating intuitive user interfaces. 
            I thrive in fast-paced, problem-solving environments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div 
                  className="p-4 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-2xl"
                  style={{ background: category.color }}
                >
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-3 mr-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${category.percentage}%`,
                          background: category.color
                        }}
                      ></div>
                    </div>
                    <span className="text-white font-semibold text-sm">{category.percentage}%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <span className="w-4 h-4 mr-2 text-pink-400 flex items-center justify-center">▶</span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 rounded-full text-white text-sm font-medium hover:from-pink-500/30 hover:to-purple-600/30 hover:border-pink-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">500+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Problems Solved</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">15+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Technologies</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">3+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
