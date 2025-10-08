import React from 'react';
import { Card } from '@/components/ui/card';
import { UserPlus, Settings, TrendingUp } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: 'Connect Your Wallet',
      description: 'Link your crypto wallet in seconds. We support all major wallets including MetaMask, Trust Wallet, and more.',
      color: 'primary'
    },
    {
      step: 2,
      icon: Settings,
      title: 'Configure Your Strategy',
      description: 'Set your risk tolerance, trading pairs, and investment amount. Our AI will handle the rest based on your preferences.',
      color: 'accent'
    },
    {
      step: 3,
      icon: TrendingUp,
      title: 'Start Earning',
      description: 'Sit back and watch as Infinitus executes winning trades 24/7. Monitor your profits in real-time from the dashboard.',
      color: 'primary'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to profits in under 5 minutes.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Card className="bg-card border-border p-6 sm:p-8 text-center card-glow h-full flex flex-col">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary z-10">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-${item.color}/10 border border-${item.color}/30 rounded-2xl flex items-center justify-center mb-6 mt-4`}>
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${item.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>

                  {/* Arrow connector - desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-6 text-accent opacity-50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto animate-fade-in-up animate-delay-300">
          <Card className="bg-card border-border p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">5K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </Card>
          <Card className="bg-card border-border p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">$50M+</div>
            <div className="text-sm text-muted-foreground">Trading Volume</div>
          </Card>
          <Card className="bg-card border-border p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Auto Trading</div>
          </Card>
          <Card className="bg-card border-border p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">127%</div>
            <div className="text-sm text-muted-foreground">Avg. ROI</div>
          </Card>
        </div>
      </div>
    </section>
  );
};