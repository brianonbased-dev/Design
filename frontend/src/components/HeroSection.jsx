import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in-up flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Powered by $BRIAN</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              <span className="text-foreground">Make Your Token</span>{' '}
              <span className="gradient-text text-glow-green">Trend on DeFi</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Infinitus helps tokens gain visibility across DeFi platforms. Create buying pressure with Baby Buys, build credibility with professional charts, and earn yield by locking liquidity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in-up animate-delay-200">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 font-bold text-base sm:text-lg tracking-wide px-8 py-6 sm:py-7 animate-pulse-glow transition-transform w-full sm:w-auto"
              >
                START PROMOTING - FREE TRIAL
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold text-base sm:text-lg px-8 py-6 sm:py-7 transition-all w-full sm:w-auto"
              >
                View Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3 pt-4 text-base text-muted-foreground animate-fade-in-up animate-delay-300">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>2,000+ Tokens Promoted</span>
              </div>
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative animate-fade-in-up animate-delay-100">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <video 
                src="https://customer-assets.emergentagent.com/job_designer-handoff/artifacts/ed1fcxn7_lv_0_20251005233322.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};