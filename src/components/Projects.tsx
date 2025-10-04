import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Genre Classification",
      description: "Machine learning model to classify movies into genres using natural language processing techniques. Implemented with Python and Scikit-Learn.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NLP"],
      github: "https://github.com/NaikAnanya",
      live: "#",
    },
    {
      title: "Credit Card Fraud Detection",
      description: "ML model to detect fraudulent credit card transactions using classification algorithms. Achieved high accuracy with real-world dataset.",
      technologies: ["Python", "Machine Learning", "Pandas", "Matplotlib"],
      github: "https://github.com/NaikAnanya",
      live: "#",
    },
    {
      title: "Interactive Web Portfolio",
      description: "Responsive portfolio website built with modern web technologies, featuring smooth animations and interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/NaikAnanya",
      live: "#",
    },
    {
      title: "Web Development Projects",
      description: "Collection of interactive web pages and components created during internships, showcasing various web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/NaikAnanya",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in web development and machine learning
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/20"
              >
                <div className="h-48 bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-primary-foreground px-6 text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
