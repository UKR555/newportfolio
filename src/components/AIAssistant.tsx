'use client';

import { useState } from 'react';
import { Bot, X, Send, Sparkles, User, CheckCircle } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: Hello! I am CH Udaya Kumar's AI Portfolio Assistant. Ask me about his experience at ParkNSecure, YOLOv8/OpenCV projects, Spring Boot backend skills, or availability for SDE & AI/ML roles!
    }
  ]);
  const [input, setInput] = useState('');

  const sampleQuestions = [
    "What is Uday's internship experience?",
    "What AI/ML frameworks does he know?",
    "Tell me about his Spring Boot projects."
  ];

  function handleSend(userText: string) {
    if (!userText.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMsgs);
    setInput('');

    // Generate intelligent AI response based on resume context
    setTimeout(() => {
      let reply = "Uday is a Computer Science graduate from GITAM ('26) specializing in AI/ML and Backend Engineering. He is proficient in Java, Spring Boot, Python, YOLOv8, OpenCV, and MySQL.";

      const query = userText.toLowerCase();
      if (query.includes('intern') || query.includes('parknsecure') || query.includes('experience')) {
        reply = "Uday completed an AI/ML Internship at ParkNSecure Private Limited (Mayâ€“June 2025). He architected an Automatic Number Plate Recognition (ANPR) system using fine-tuned YOLOv8 models, OpenCV frame routing, Tesseract OCR, and Spring Boot backend video ingestion.";
      } else if (query.includes('project') || query.includes('malpractice') || query.includes('yolo') || query.includes('opencv')) {
        reply = "His key AI project is the 'AI Malpractice & Cheating Detection System' built with YOLOv8-Pose, OpenCV 17-point skeletal tracking, and Django. He also built a Grocery Customer Churn Engine in Spring Boot using Weka ML.";
      } else if (query.includes('spring') || query.includes('java') || query.includes('backend') || query.includes('sde')) {
        reply = "For Backend SDE roles, Uday is expert in Java 11+, Spring Boot 2.7, Spring Data JPA, Hibernate, RESTful APIs, and MySQL. He built an E-Commerce monolithic platform with 10+ REST endpoints and strict 3-tier MVC architecture.";
      } else if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('phone')) {
        reply = You can reach Uday directly via email at  or by phone at . He is actively seeking SDE and AI/ML Engineer opportunities!;
      }

      setMessages([...newMsgs, { sender: 'ai', text: reply }]);
    }, 600);
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl hover:scale-110 transition-all flex items-center space-x-2 font-semibold text-sm group"
      >
        <Bot className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:inline">Ask AI Recruiter</span>
      </button>

      {/* Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end p-4 bg-black/50 backdrop-blur-sm">
          <div className="glass-card w-full max-w-md rounded-3xl shadow-2xl flex flex-col h-[520px] overflow-hidden border border-orange-500/30">
            {/* Drawer Header */}
            <div className="p-4 bg-orange-500 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm">Recruiter AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-orange-600 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={lex items-start space-x-2 }
                >
                  {m.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-1">
                      AI
                    </div>
                  )}
                  <div
                    className={p-3 rounded-2xl max-w-[80%] leading-relaxed }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Prompts */}
            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 overflow-x-auto text-[11px]">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask about Uday's skills or experience..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button
                onClick={() => handleSend(input)}
                className="p-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
