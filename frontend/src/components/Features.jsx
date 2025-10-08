import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, BarChart3, Wallet, ArrowRight } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Baby Buys',
      description: 'Automatically execute small, strategic trades to test market conditions before committing larger positions. Minimize risk while maximizing opportunities.',
      benefits: ['Risk Mitigation', 'Smart Entry Points', 'Automated Testing'],
      color: 'primary'
    },
    {
      icon: BarChart3,
      title: 'Chart Builder',
      description: 'Visualize your trading data with powerful, customizable charts. Track performance, analyze trends, and make data-driven decisions in real-time.',
      benefits: ['Real-time Analytics', 'Custom Indicators', 'Performance Tracking'],
      color: 'accent'
    },
    {
      icon: Wallet,
      title: 'Smart Pooling',
      description: 'Optimize liquidity provision across multiple DeFi protocols. Our AI finds the best yield opportunities and automatically rebalances your positions.',
      benefits: ['Yield Optimization', 'Auto Rebalancing', 'Multi-Protocol Support'],
      color: 'primary'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Powerful Features for <span className="gradient-text">Smart Trading</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate and optimize your crypto trading strategy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border p-6 sm:p-8 card-glow group animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-${feature.color}/10 border border-${feature.color}/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 text-${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}`}></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className={`mt-auto text-${feature.color} hover:bg-${feature.color}/10 justify-start px-0 group/btn`}
                >
                  Try This Feature
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up animate-delay-300">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 font-bold text-base sm:text-lg tracking-wide px-8 py-6 sm:py-7 transition-transform"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};