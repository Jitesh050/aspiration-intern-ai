import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, MessageCircle, Globe, Zap, Target, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Chatbot-First Experience",
      description: "No lengthy forms - just natural conversation",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Voice + Regional Languages",
      description: "Speak in Hindi, English, Bengali, Tamil & more",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Matching",
      description: "Smart recommendations based on your potential",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Accessibility First",
      description: "Designed for rural & Tier II/III cities",
    },
  ];

  const matchTypes = [
    {
      icon: <Target className="h-5 w-5 text-success" />,
      title: "Best Fit",
      description: "Perfect for your current skills",
      color: "success",
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Skill Growth",
      description: "Level up your abilities",
      color: "primary",
    },
    {
      icon: <Star className="h-5 w-5 text-secondary" />,
      title: "Aspirational Pick",
      description: "Dream opportunity to reach for",
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-button">
              IB
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">InternBuddy</h1>
              <p className="text-xs text-muted-foreground">AI Career Guide</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-success/10 text-success border-success">
              <Globe className="h-3 w-3 mr-1" />
              भारत
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
              <Users className="h-3 w-3 mr-1" />
              10K+ Students
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-hero text-white shadow-button">
                🚀 Powered by Aspirational Intelligence
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your Perfect{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Internship
                </span>{" "}
                with AI
              </h1>
              <p className="text-lg text-muted-foreground">
                India's first voice-enabled, multilingual internship platform. 
                Chat naturally, get matched intelligently, and discover opportunities 
                that help you grow - not just what fits today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                <MessageCircle className="h-5 w-5" />
                Start Chatting
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Mic className="h-5 w-5" />
                Try Voice Input
              </Button>
            </div>

            {/* Language Support */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Available in:</span>
              {["🇮🇳 हिंदी", "English", "বাংলা", "தமிழ்", "తెలుగు", "ગુજરાતી"].map((lang) => (
                <Badge key={lang} variant="secondary" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Indian students using InternBuddy for internship search"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Feature Cards */}
            <Card className="absolute -left-6 top-20 p-4 bg-gradient-card shadow-card border-l-4 border-l-success">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">92% Match</p>
                  <p className="text-xs text-muted-foreground">Data Analyst</p>
                </div>
              </div>
            </Card>

            <Card className="absolute -right-6 bottom-20 p-4 bg-gradient-card shadow-card border-l-4 border-l-primary">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Mic className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Voice Active</p>
                  <p className="text-xs text-muted-foreground">हिंदी में बोलें</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-white shadow-button">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Aspirational Intelligence Section */}
        <div className="mt-20 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6">
            🧠 Aspirational Intelligence
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Not Just What You Can Do Today
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our AI doesn't just match your current skills. It understands your aspirations 
            and recommends internships that will help you grow into the professional you want to become.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {matchTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card border-l-4 border-l-primary">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 bg-${type.color}/10 rounded-full flex items-center justify-center`}>
                    {type.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;