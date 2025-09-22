import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mic, Send, Volume2, Languages } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "नमस्ते! I'm your InternBuddy assistant. Let's find the perfect internship for you! What's your highest education level?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Great! What skills do you feel most confident in? (e.g., Excel, Communication, Programming, Design)",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    setIsVoiceActive(!isVoiceActive);
    // Voice input functionality would be implemented here
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card shadow-card">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-hero text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            🤖
          </div>
          <div>
            <h3 className="font-semibold">InternBuddy Assistant</h3>
            <p className="text-sm opacity-90">Your AI Career Guide</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Volume2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Languages className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg transition-smooth ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your answer or use voice input..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button
            variant={isVoiceActive ? "secondary" : "outline"}
            size="icon"
            onClick={handleVoiceInput}
            className="transition-bounce"
          >
            <Mic className={`h-4 w-4 ${isVoiceActive ? "text-destructive" : ""}`} />
          </Button>
          <Button onClick={handleSendMessage} className="shadow-button">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Language Support Indicator */}
        <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
          <span className="bg-muted px-2 py-1 rounded">🇮🇳 हिंदी</span>
          <span className="bg-muted px-2 py-1 rounded">English</span>
          <span className="bg-muted px-2 py-1 rounded">বাংলা</span>
          <span className="bg-muted px-2 py-1 rounded">தமிழ்</span>
        </div>
      </div>
    </Card>
  );
};

export default ChatBot;