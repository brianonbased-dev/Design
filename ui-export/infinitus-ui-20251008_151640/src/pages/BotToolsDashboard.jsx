import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Baby, TrendingUp, Fuel, Users } from 'lucide-react';
import { HeroSection as BotHero } from '@/components/bot-tools/HeroSection';
import { BabyBuysEnhanced } from '@/components/bot-tools/BabyBuysEnhanced';
import { ChartBuilder } from '@/components/bot-tools/ChartBuilder';
import { GasSavvy } from '@/components/bot-tools/GasSavvy';
import { Pooling } from '@/components/bot-tools/Pooling';

export const BotToolsDashboard = () => {
  const [activeTab, setActiveTab] = useState('baby-buys');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <BotHero onFeatureSelect={setActiveTab} />

      {/* Main Tools Interface */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="baby-buys" className="flex items-center gap-2">
              <Baby className="w-4 h-4" />
              <span className="hidden sm:inline">Baby Buys</span>
            </TabsTrigger>
            <TabsTrigger value="chart-builder" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Chart Builder</span>
            </TabsTrigger>
            <TabsTrigger value="gas-savvy" className="flex items-center gap-2">
              <Fuel className="w-4 h-4" />
              <span className="hidden sm:inline">Gas Savvy</span>
            </TabsTrigger>
            <TabsTrigger value="pooling" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Pooling</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="baby-buys">
            <BabyBuysEnhanced />
          </TabsContent>

          <TabsContent value="chart-builder">
            <ChartBuilder />
          </TabsContent>

          <TabsContent value="gas-savvy">
            <GasSavvy />
          </TabsContent>

          <TabsContent value="pooling">
            <Pooling />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BotToolsDashboard;