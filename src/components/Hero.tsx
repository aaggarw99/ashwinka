"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Hi, I'm Ashwin";
  const roles = ["Engineer", "Cyclist", "Traveler"];

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText.length]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 1500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 gap-6 text-center">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-2">
          {typedText}
        </h1>
        <div 
          className={`w-1 h-12 bg-slate-900 transition-opacity duration-75 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ marginLeft: '8px' }}
        ></div>
      </div>
      <p className="text-lg md:text-2xl text-gray-700 max-w-xl mb-6">
        I'm a{" "}
        <span 
          className={`text-primary font-semibold min-w-[100px] inline-block transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {roles[currentRole]}
        </span>
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button asChild size="lg">
          <a href="/contact">Get In Touch</a>
        </Button>
      </div>
    </section>
  );
}
