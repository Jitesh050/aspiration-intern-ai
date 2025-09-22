import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Star, Zap, Target } from "lucide-react";

interface InternshipCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  matchPercentage: number;
  matchReason: string;
  type: "bestFit" | "skillGrowth" | "aspirational";
  skills: string[];
  stipend?: string;
  isRemote?: boolean;
}

const InternshipCard = ({
  title,
  company,
  location,
  duration,
  matchPercentage,
  matchReason,
  type,
  skills,
  stipend,
  isRemote = false,
}: InternshipCardProps) => {
  const getTypeConfig = () => {
    switch (type) {
      case "bestFit":
        return {
          icon: <Target className="h-4 w-4" />,
          label: "Best Fit",
          color: "success",
          description: "Perfect match for your current skills",
        };
      case "skillGrowth":
        return {
          icon: <Zap className="h-4 w-4" />,
          label: "Skill Growth",
          color: "primary",
          description: "Level up your abilities",
        };
      case "aspirational":
        return {
          icon: <Star className="h-4 w-4" />,
          label: "Aspirational Pick",
          color: "secondary",
          description: "Dream opportunity to reach for",
        };
      default:
        return {
          icon: <Target className="h-4 w-4" />,
          label: "Recommended",
          color: "primary",
          description: "Good match",
        };
    }
  };

  const typeConfig = getTypeConfig();

  return (
    <Card className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-smooth border-l-4 border-l-primary">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge 
              variant="outline" 
              className={`bg-${typeConfig.color} text-${typeConfig.color}-foreground border-${typeConfig.color}`}
            >
              {typeConfig.icon}
              {typeConfig.label}
            </Badge>
            {stipend && (
              <Badge variant="secondary" className="bg-success/10 text-success">
                ₹{stipend}
              </Badge>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-tertiary font-medium">{company}</p>
        </div>
        <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-button">
          {company.charAt(0)}
        </div>
      </div>

      {/* Match Percentage */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Match Score</span>
          <span className="text-sm font-bold text-primary">{matchPercentage}%</span>
        </div>
        <Progress value={matchPercentage} className="h-2" />
        <p className="text-xs text-muted-foreground mt-1">{matchReason}</p>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{isRemote ? "Remote" : location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">Required Skills:</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button className="w-full shadow-button hover:shadow-glow transition-bounce">
        Apply Now
      </Button>
      
      {/* Type Description */}
      <p className="text-xs text-center text-muted-foreground mt-2">
        {typeConfig.description}
      </p>
    </Card>
  );
};

export default InternshipCard;