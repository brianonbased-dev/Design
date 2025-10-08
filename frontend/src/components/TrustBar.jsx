import React from 'react';

export const TrustBar = () => {
  const partners = [
    { name: 'DexTools', logo: '📊' },
    { name: 'Uniswap', logo: '🦄' },
    { name: 'PancakeSwap', logo: '🥞' },
    { name: 'CoinGecko', logo: '🦎' },
    { name: 'DexScreener', logo: '📈' }
  ];

  return (
    <section className="py-12 sm:py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider">
            Trending on Top DeFi Platforms • Powered by $BRIAN
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-4xl sm:text-5xl">{partner.logo}</div>
              <span className="text-xs sm:text-sm text-muted-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};