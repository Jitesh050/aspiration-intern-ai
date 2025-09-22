import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InternshipCard from "./InternshipCard";
import { BookOpen, ArrowRight } from "lucide-react";

const RecommendationDashboard = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "bestFit" | "skillGrowth" | "aspirational">("all");

  const mockInternships = [
    {
      id: "1",
      title: "Data Analysis Intern",
      company: "TechCorp India",
      location: "Mumbai",
      duration: "3 months",
      matchPercentage: 92,
      matchReason: "Perfect match for your Excel and Python skills",
      type: "bestFit" as const,
      skills: ["Excel", "Python", "Data Analysis"],
      stipend: "15,000",
      isRemote: false,
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Bangalore",
      duration: "6 months",
      matchPercentage: 75,
      matchReason: "Great opportunity to learn React and Node.js",
      type: "skillGrowth" as const,
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      stipend: "25,000",
      isRemote: true,
    },
    {
      id: "3",
      title: "AI Research Intern",
      company: "DeepTech Labs",
      location: "Hyderabad",
      duration: "4 months",
      matchPercentage: 65,
      matchReason: "Ambitious pick - ML expertise at top research lab",
      type: "aspirational" as const,
      skills: ["Machine Learning", "Python", "TensorFlow", "Research"],
      stipend: "30,000",
      isRemote: false,
    },
  ];

  const filteredInternships = activeFilter === "all" 
    ? mockInternships 
    : mockInternships.filter(internship => internship.type === activeFilter);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Your Personalized Recommendations
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your conversation, here are internships tailored to your skills, 
          aspirations, and growth potential.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { key: "all", label: "All Recommendations", count: mockInternships.length },
          { key: "bestFit", label: "Best Fit", count: mockInternships.filter(i => i.type === "bestFit").length },
          { key: "skillGrowth", label: "Skill Growth", count: mockInternships.filter(i => i.type === "skillGrowth").length },
          { key: "aspirational", label: "Aspirational", count: mockInternships.filter(i => i.type === "aspirational").length },
        ].map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.key as any)}
            className="transition-bounce"
          >
            {filter.label}
            <Badge variant="secondary" className="ml-2">
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Internship Cards */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredInternships.map((internship) => (
          <InternshipCard key={internship.id} {...internship} />
        ))}
      </div>

      {/* Skill Development Section */}
      <Card className="p-8 bg-gradient-card shadow-card border-l-4 border-l-secondary">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-button">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Recommended Skills to Learn
          </h3>
          <p className="text-muted-foreground">
            Enhance your profile with these courses from SWAYAM & Skill India
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {["Advanced Excel", "Python for Beginners", "Digital Marketing", "UI/UX Design"].map((skill) => (
              <Badge key={skill} variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                {skill}
              </Badge>
            ))}
          </div>
          
          <Button variant="secondary" className="mt-4">
            View All Courses
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg">
          Apply to Selected Internships
        </Button>
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
          Refine My Preferences
        </Button>
      </div>
    </div>
  );
};

export default RecommendationDashboard;