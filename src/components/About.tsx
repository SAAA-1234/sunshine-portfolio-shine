import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const skills = {
    "Web Development": ["HTML", "CSS", "JavaScript"],
    "Programming": ["Java", "Python", "C"],
    "Databases": ["SQL", "MySQL"],
    "Technologies": ["Machine Learning", "Git"],
    "Soft Skills": ["Teamwork", "Communication", "Fast Learner"],
  };

  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "CodSoft",
      period: "July 2025 – August 2025",
      description: "Working on real-world ML projects including Movie Genre Classification and Credit Card Fraud Detection using Python, Scikit-Learn, Pandas, and Matplotlib.",
    },
    {
      title: "Web Development Intern",
      company: "TechnoHacks",
      period: "July 2025 – August 2025",
      description: "Built interactive web pages using HTML, CSS, and JavaScript.",
    },
    {
      title: "Web Development Intern",
      company: "BharatIntern",
      period: "January 2024 – February 2024",
      description: "Gained hands-on exposure to web development fundamentals and basic coding tasks.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Science student dedicated to learning and building innovative solutions
            </p>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
              <h4 className="text-xl font-semibold text-primary">Bachelor of Engineering – Computer Science</h4>
              <p className="text-foreground font-medium mt-2">Shri Madhwa Vadiraja Institute of Technology and Management</p>
              <p className="text-muted-foreground mt-1">Visvesvaraya Technological University (VTU)</p>
              <p className="text-sm text-muted-foreground mt-2">2022 – Present</p>
            </Card>
          </div>

          {/* Experience */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] border-primary/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <p className="text-foreground font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category} className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] border-primary/20">
                  <h4 className="text-lg font-semibold text-primary mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <Card className="p-6 bg-gradient-primary text-primary-foreground">
            <h4 className="text-xl font-semibold mb-4">Languages Known</h4>
            <p className="text-lg">English • Kannada • Hindi • Tulu • Marathi</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
