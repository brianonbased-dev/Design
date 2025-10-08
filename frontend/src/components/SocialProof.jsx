import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Alex Chen',
      location: 'Singapore',
      image: 'https://i.pravatar.cc/150?img=33',
      quote: 'Infinitus has transformed my trading strategy. The AI makes decisions faster and smarter than I ever could.',
      result: '+$47,000 in 3 months',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      location: 'New York, USA',
      image: 'https://i.pravatar.cc/150?img=45',
      quote: 'I was skeptical at first, but the results speak for themselves. Best trading decision I ever made.',
      result: '+$82,000 in 6 months',
      rating: 5
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      location: 'London, UK',
      image: 'https://i.pravatar.cc/150?img=12',
      quote: 'The 24/7 automation means I never miss an opportunity. It is like having a professional trader working for me around the clock.',
      result: '+$63,000 in 4 months',
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: '✓', text: 'Verified Secure', color: 'primary' },
    { icon: '🔒', text: 'Bank-Level Encryption', color: 'accent' },
    { icon: '✓', text: 'Audited Smart Contracts', color: 'primary' },
    { icon: '⚡', text: 'Lightning Fast Execution', color: 'accent' }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Trusted by <span className="gradient-text">5,000+ Traders</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real traders, real results. See what our community is saying.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <Card className="bg-card border-border p-6 sm:p-8 lg:p-10 card-glow">
                    <div className="flex flex-col items-center text-center space-y-6">
                      {/* Avatar with glow */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-primary object-cover"
                        />
                      </div>

                      {/* Stars */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Name and Location */}
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>

                      {/* Result */}
                      <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2">
                        <span className="text-primary font-bold text-lg">{testimonial.result}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 border-accent text-accent hover:bg-accent/10"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 border-accent text-accent hover:bg-accent/10"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in-up animate-delay-200">
          {trustBadges.map((badge, index) => (
            <Card 
              key={index}
              className={`bg-card border-${badge.color}/30 p-4 sm:p-6 text-center hover:border-${badge.color} transition-colors`}
            >
              <div className={`text-3xl sm:text-4xl mb-2 text-${badge.color}`}>{badge.icon}</div>
              <div className="text-sm sm:text-base font-semibold text-foreground">{badge.text}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};