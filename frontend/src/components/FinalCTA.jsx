import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Limited $BRIAN Early Access</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Ready to <span className="gradient-text text-glow-green">Make Your Token Trend?</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join 2,000+ DeFi projects using Infinitus to gain visibility, build confidence, and grow their communities. Start promoting today—free trial included.
          </p>

          {/* Features list */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Free trial included</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Results in 24 hours</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 font-bold text-base sm:text-lg tracking-wide px-12 py-7 animate-pulse-glow transition-all text-center"
            >
              START PROMOTING NOW
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground pt-4">
            Powered by $BRIAN • Trusted by 2,000+ projects • $5M+ locked in pools
          </p>
        </div>
      </div>
    </section>
  );
};