"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  Send,
  Bot,
  User,
  Briefcase,
  Sparkles,
  Calendar,
  MessageSquare,
  ArrowRight,
  Minus,
  Phone,
  DollarSign,
  CheckCircle,
  Globe,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { spaceGrotesk, inter } from "@/app/util/constants";

// --- EXPANDED TYPES FROM ORIGINAL LOGIC ---
interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "services" | "portfolio" | "pricing";
}

interface UserInfo {
  name: string;
  business: string;
  industry?: string;
  budget?: string;
}

export default function EddyAI() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Advanced State Machine
  const [conversationStage, setConversationStage] = useState<
    "asking_name" | "asking_business" | "general"
  >("asking_name");

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    business: "",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Initial Welcome
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateAiResponse(
        "Identity verified. Welcome to EBCom Intelligence. I am Eddy, your strategic interface. May I start by asking for your name?",
      );
    }
  }, [isOpen]);

  const simulateAiResponse = async (
    text: string,
    type: Message["type"] = "text",
  ) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      sender: "ai",
      timestamp: new Date(),
      type,
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = async (overrideText?: string) => {
    const textToSend = overrideText || inputText;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // --- LOGIC GATEWAY ---
    if (conversationStage === "asking_name") {
      setUserInfo((prev) => ({ ...prev, name: textToSend }));
      setConversationStage("asking_business");
      simulateAiResponse(
        `Pleasure to meet you, ${textToSend}. Which organization or project are we representing today?`,
      );
    } else if (conversationStage === "asking_business") {
      setUserInfo((prev) => ({ ...prev, business: textToSend }));
      setConversationStage("general");
      simulateAiResponse(
        `System initialized for ${textToSend}. How can EBCom Technologies assist you today? You may inquire about our Engineering Services, Portfolio, or proceed to Schedule a Consultation.`,
      );
    } else {
      const input = textToSend.toLowerCase();

      if (input.includes("service") || input.includes("what do you do")) {
        simulateAiResponse(
          "We specialize in High-Performance Software Engineering, Enterprise AI Integration, and Sovereign Brand Design.",
          "services",
        );
      } else if (input.includes("portfolio") || input.includes("work")) {
        simulateAiResponse(
          "Our portfolio includes Tier-1 Fintech solutions, Scalable E-commerce architectures, and Bespoke Internal Tooling.",
          "portfolio",
        );
      } else if (input.includes("price") || input.includes("cost")) {
        simulateAiResponse(
          "Our engagements are value-based. Digital builds typically start at $2,500, while enterprise consulting is quoted per-sprint.",
          "pricing",
        );
      } else if (
        input.includes("book") ||
        input.includes("schedule") ||
        input.includes("start now")
      ) {
        simulateAiResponse(
          "Initiating secure scheduling protocol... Redirecting you now.",
        );
        setTimeout(() => router.push("/schedule"), 1500);
      } else {
        simulateAiResponse(
          "I've logged your query. Our systems are optimized for scale—would you like to speak directly with a consultant?",
        );
      }
    }
  };

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[999] bg-[#2c3639] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-[#a27b5b]/30"
      >
        <Cpu size={24} className={isTyping ? "animate-spin" : ""} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#a27b5b] rounded-full animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={`fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[420px] md:h-[650px] bg-[#F9F8F6] z-[1000] flex flex-col shadow-2xl border border-black/10 md:rounded-2xl overflow-hidden ${inter.className}`}
          >
            {/* Sovereign Header */}
            <div className="bg-[#2c3639] p-6 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#a27b5b]/10 blur-3xl -mr-16 -mt-16" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#a27b5b] rounded-xl flex items-center justify-center shadow-lg shadow-black/20">
                  <Bot size={24} className="text-[#2c3639]" />
                </div>
                <div>
                  <h3
                    className={`${spaceGrotesk.className} text-sm font-bold uppercase tracking-[0.2em]`}
                  >
                    Eddy <span className="text-[#a27b5b]">AI</span>
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[9px] opacity-50 uppercase font-black tracking-widest">
                      Lvl 4 Intelligence
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('/grid-light.svg')] bg-repeat"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] ${msg.sender === "ai" ? "w-full" : ""}`}
                  >
                    <div
                      className={`p-4 ${
                        msg.sender === "ai"
                          ? "bg-white border border-black/5 text-[#2c3639] rounded-2xl rounded-tl-none shadow-sm"
                          : "bg-[#2c3639] text-white rounded-2xl rounded-tr-none ml-auto w-fit"
                      }`}
                    >
                      <p className="text-xs leading-relaxed">{msg.text}</p>

                      {/* Interactive In-Chat Modules (From your original logic) */}
                      {msg.type === "services" && (
                        <div className="grid grid-cols-1 gap-2 mt-4">
                          {[
                            "Web Architecture",
                            "AI Automation",
                            "UI/UX Mastery",
                          ].map((s) => (
                            <div
                              key={s}
                              className="flex items-center gap-2 p-2 bg-black/5 rounded-lg text-[10px] font-bold"
                            >
                              <ShieldCheck
                                size={12}
                                className="text-[#a27b5b]"
                              />{" "}
                              {s}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[8px] opacity-30 mt-2 block uppercase font-black tracking-widest px-1">
                      {msg.sender === "ai" ? "Eddy" : userInfo.name || "Client"}{" "}
                      •{" "}
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-black/5 p-4 rounded-xl shadow-sm">
                    <div className="flex gap-1.5">
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-1.5 h-1.5 bg-[#a27b5b] rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: 0.2,
                        }}
                        className="w-1.5 h-1.5 bg-[#a27b5b] rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: 0.4,
                        }}
                        className="w-1.5 h-1.5 bg-[#a27b5b] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sovereign Quick Actions */}
            <div className="px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar bg-white/80 backdrop-blur-md border-t border-black/5">
              {[
                {
                  label: "Book Consultation",
                  icon: Calendar,
                  color: "bg-[#a27b5b] text-[#2c3639]",
                  action: () => router.push("/schedule"),
                },
                {
                  label: "View Portfolio",
                  icon: Briefcase,
                  color: "bg-black/5 text-[#2c3639]",
                  action: () => handleSendMessage("Show me your portfolio"),
                },
                {
                  label: "Pricing",
                  icon: DollarSign,
                  color: "bg-black/5 text-[#2c3639]",
                  action: () => handleSendMessage("What are your rates?"),
                },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${btn.color}`}
                >
                  <btn.icon size={12} />
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Input Station */}
            <div className="p-6 bg-white border-t border-black/10">
              <div className="relative flex items-center bg-black/5 rounded-2xl border border-transparent focus-within:border-[#a27b5b]/30 focus-within:bg-white transition-all shadow-inner">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder={
                    conversationStage === "asking_name"
                      ? "Identity required..."
                      : "Communicate with Eddy..."
                  }
                  className="w-full bg-transparent px-6 py-5 text-xs outline-none font-medium text-[#2c3639]"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className="absolute right-3 p-3 bg-[#2c3639] text-[#dcd7c9] rounded-xl disabled:opacity-20 hover:bg-[#a27b5b] hover:text-[#2c3639] transition-all"
                >
                  <Send size={16} />
                </button>
              </div>

              <div className="flex justify-between items-center mt-4 px-1">
                <p className="text-[7px] opacity-30 font-black uppercase tracking-[0.3em]">
                  Encrypted Session
                </p>
                <div className="flex items-center gap-2 opacity-30">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  <div className="w-1 h-1 bg-black rounded-full" />
                  <span className="text-[7px] font-black uppercase tracking-widest">
                    EBCOM INTEL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
