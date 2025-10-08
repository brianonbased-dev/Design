import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';

export const StickyFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px and if not dismissed
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-foreground text-sm sm:text-base mb-1">
                Ready to start trading smarter?
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Join 5,000+ traders using AI automation
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-wide whitespace-nowrap animate-pulse-glow shrink-0"
            >
              <Send className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Launch Bot Now</span>
              <span className="sm:hidden">Launch</span>
            </Button>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="text-muted-foreground hover:text-foreground transition-colors p-2 shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};