import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/HeroSection";
import ChatBot from "@/components/ChatBot";
import RecommendationDashboard from "@/components/RecommendationDashboard";
import { MessageCircle, Target, BookOpen } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Navigation */}
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
          <div className="max-w-7xl mx-auto px-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted/50">
              <TabsTrigger value="hero" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Results
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Content */}
        <TabsContent value="hero" className="m-0">
          <HeroSection />
          <div className="text-center py-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => setActiveTab("chat")}
              className="animate-pulse"
            >
              <MessageCircle className="h-5 w-5" />
              Start Your Journey
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="chat" className="m-0 p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Let's Find Your Perfect Internship
              </h2>
              <p className="text-muted-foreground">
                I'll ask you a few questions to understand your skills, interests, and career goals. 
                You can type or use voice input in any language you're comfortable with.
              </p>
            </div>
            <ChatBot />
            <div className="text-center">
              <Button 
                variant="secondary" 
                onClick={() => setActiveTab("recommendations")}
                className="mt-4"
              >
                View Sample Recommendations
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="m-0 p-6">
          <RecommendationDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
