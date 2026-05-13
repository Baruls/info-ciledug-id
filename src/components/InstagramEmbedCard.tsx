"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: (element?: HTMLElement) => void;
      };
    };
  }
}

interface InstagramEmbedCardProps {
  url: string;
  title: string;
  category?: string;
  description?: string;
  date?: string;
  hashtags?: string[];
  index?: number;
}

export default function InstagramEmbedCard({
  url,
  title,
  category,
  description,
  date,
  hashtags = [],
  index = 0,
}: InstagramEmbedCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Extract reel ID from URL
  const getReelId = (u: string) => {
    const match = u.match(/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const reelId = getReelId(url);
  const blockquoteRef = useRef<HTMLQuoteElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load Instagram script once
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.instgrm) {
          window.instgrm.Embeds.process(blockquoteRef.current!);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (blockquoteRef.current) {
      observer.observe(blockquoteRef.current);
    }

    return () => observer.disconnect();
  }, [mounted, url]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="instagram-embed-wrapper group mx-auto max-w-[350px] sm:max-w-none"
    >
      {/* Embed Container with Crop */}
      <div 
        className="relative overflow-hidden bg-white rounded-xl shadow-sm border border-slate-100" 
        style={{ 
          height: "480px",
        }}
      >
        <div className="absolute top-[-60px] left-[-1px] right-[-1px]">
          <blockquote
            ref={blockquoteRef}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{ 
              width: "calc(100% + 2px)",
              border: "none",
              margin: "0",
              padding: "0"
            }}
          >
            {/* Professional Skeleton while waiting for script to process in-view */}
            <div className="flex flex-col items-center justify-center h-[550px] bg-slate-50">
               <div className="w-10 h-10 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin shadow-sm" />
               <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                 Menyiapkan Konten...
               </p>
            </div>
          </blockquote>
        </div>
        
        {/* White mask to hide bottom artifacts and show description */}
        <div className="absolute bottom-0 left-0 right-0 min-h-[100px] bg-white z-10 border-t border-slate-100 p-4 flex flex-col justify-between">
          <p className="text-sm text-slate-700 leading-relaxed font-medium line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-end justify-between mt-2">
            {/* Hashtags as small pills */}
            <div className="flex flex-wrap gap-1.5">
              {hashtags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 rounded-md bg-blue-50 text-[9px] font-bold text-blue-600 border border-blue-100 uppercase tracking-tighter"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Date */}
            {date && (
              <div className="flex items-center gap-1 shrink-0">
                <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {date}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
