import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Slider } from '@/components/ui/slider';
import { 
  Leaf, Zap, Bot, AlertCircle, CheckCircle, Info, 
  TrendingUp, Clock, Fuel, Shield, ChevronDown, ChevronUp,
  Sparkles, Target, Activity
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const BabyBuysEnhanced = () => {
  const [mode, setMode] = useState('auto');
  const [style, setStyle] = useState('hybrid');
  const [tokenAddress, setTokenAddress] = useState('');
  const [perBuyUSD, setPerBuyUSD] = useState('1.00');
  const [totalBudgetUSD, setTotalBudgetUSD] = useState('1000');
  const [parallelWallets, setParallelWallets] = useState(1);
  const [calculation, setCalculation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(true);

  const buyingStyles = [
    {
      id: 'instant',
      name: 'Instant',
      emoji: '⚡',
      speed: 'Extreme',
      description: 'All buys executed immediately',
      duration: '< 1 min',
      pattern: 'All at once',
      recommended: false
    },
    {
      id: 'lightning',
      name: 'Lightning',
      emoji: '🌩️',
      speed: 'Very Fast',
      description: 'Rapid-fire execution',
      duration: '5-15 mins',
      pattern: 'Burst pattern',
      recommended: false
    },
    {
      id: 'smash-fast',
      name: 'Smash Fast',
      emoji: '💥',
      speed: 'Fast',
      description: 'Aggressive but measured',
      duration: '30-60 mins',
      pattern: 'Strong bursts',
      recommended: false
    },
    {
      id: 'hybrid',
      name: 'Hybrid',
      emoji: '🎯',
      speed: 'Balanced',
      description: 'Mix of fast and steady',
      duration: '2-4 hours',
      pattern: 'Varied timing',
      recommended: true
    },
    {
      id: 'gradual',
      name: 'Gradual',
      emoji: '📈',
      speed: 'Steady',
      description: 'Consistent distribution',
      duration: '6-12 hours',
      pattern: 'Even spread',
      recommended: false
    },
    {
      id: 'intro-fast',
      name: 'Intro Fast',
      emoji: '🚀',
      speed: 'Front-loaded',
      description: 'Strong start, then slow',
      duration: '4-8 hours',
      pattern: '70% fast, 30% slow',
      recommended: false
    },
    {
      id: 'intro-slow',
      name: 'Intro Slow',
      emoji: '🐢',
      speed: 'Back-loaded',
      description: 'Slow start, strong finish',
      duration: '4-8 hours',
      pattern: '30% slow, 70% fast',
      recommended: false
    },
    {
      id: 'economy',
      name: 'Economy',
      emoji: '💚',
      speed: 'Slow',
      description: 'Gas-optimized timing',
      duration: '12-24 hours',
      pattern: 'Low-gas periods only',
      recommended: false
    }
  ];

  const selectedStyle = buyingStyles.find(s => s.id === style);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-black flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl">🍼</span>
          <span>Baby Buys</span>
          <Badge variant="outline" className="text-emerald-500 border-emerald-500">
            Volume Generation
          </Badge>
        </h2>
        <p className="text-muted-foreground">
          Break large purchases into strategic tiny buys to minimize impact
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Mode Selector */}
          <Card className="p-6">
            <Label className="text-base font-semibold mb-4 block">Execution Mode</Label>
            <Tabs value={mode} onValueChange={setMode}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="economical" className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  <span className="hidden sm:inline">Economical</span>
                </TabsTrigger>
                <TabsTrigger value="ultra-micro" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="hidden sm:inline">Ultra-Micro</span>
                </TabsTrigger>
                <TabsTrigger value="auto" className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span className="hidden sm:inline">Auto</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>

          {/* Buying Style Selector */}
          <Card className="p-6">
            <Label className="text-base font-semibold mb-4 block">Buying Style</Label>
            <div className="grid grid-cols-2 gap-3">
              {buyingStyles.map((s) => (
                <Button
                  key={s.id}
                  variant={style === s.id ? 'default' : 'outline'}
                  className={`h-auto flex-col items-start p-4 ${style === s.id ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`}
                  onClick={() => setStyle(s.id)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="font-bold">{s.name}</span>
                    {s.recommended && (
                      <Badge variant="secondary" className="text-xs">Best</Badge>
                    )}
                  </div>
                  <span className="text-xs opacity-80">{s.speed}</span>
                </Button>
              ))}
            </div>
            
            {selectedStyle && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="ml-2 font-semibold">{selectedStyle.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Pattern:</span>
                    <span className="ml-2 font-semibold">{selectedStyle.pattern}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{selectedStyle.description}</p>
              </div>
            )}
          </Card>

          {/* Input Form */}
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="token">Token Address</Label>
                <Input
                  id="token"
                  placeholder="0x..."
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="perBuy">Per Buy Amount (USD)</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="perBuy"
                    type="number"
                    step="0.001"
                    value={perBuyUSD}
                    onChange={(e) => setPerBuyUSD(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Total Budget (USD)</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="budget"
                    type="number"
                    step="10"
                    value={totalBudgetUSD}
                    onChange={(e) => setTotalBudgetUSD(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <Label>Parallel Wallets: {parallelWallets}</Label>
                <Slider
                  value={[parallelWallets]}
                  onValueChange={(val) => setParallelWallets(val[0])}
                  min={1}
                  max={10}
                  step={1}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  More wallets = faster execution
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Cost Breakdown */}
          <Card className="p-6">
            <div className="flex items-center justify-between cursor-pointer mb-4" onClick={() => setShowBreakdown(!showBreakdown)}>
              <h3 className="text-lg font-bold">Complete Cost Breakdown</h3>
              {showBreakdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>

            {showBreakdown && (
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Buy Amount</span>
                  <span className="font-semibold">${totalBudgetUSD || '0.00'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Fuel className="w-4 h-4" /> Network Gas
                  </span>
                  <span className="font-semibold">~$15.00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground flex items-center gap-1">
                    🔷 $BRIAN Fee (10%)
                  </span>
                  <span className="font-semibold text-amber-500">
                    ${(parseFloat(totalBudgetUSD || 0) * 0.1).toFixed(2)}
                  </span>
                </div>
                <Alert className="bg-amber-500/10 border-amber-500/30 my-3">
                  <Info className="w-4 h-4 text-amber-500" />
                  <AlertDescription className="text-xs">
                    $BRIAN fee is ON TOP (hardcoded in contract)
                  </AlertDescription>
                </Alert>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Shield className="w-4 h-4" /> Reserve (5%)
                  </span>
                  <span className="font-semibold">
                    ${((parseFloat(totalBudgetUSD || 0) * 1.1 + 15) * 0.05).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between py-3 pt-4 border-t-2 border-emerald-500">
                  <span className="font-bold text-lg">Total Needed</span>
                  <span className="font-bold text-2xl text-emerald-500">
                    ${((parseFloat(totalBudgetUSD || 0) * 1.1 + 15) * 1.05).toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </Card>

          {/* Campaign Preview */}
          <Card className="p-6 bg-emerald-500/5 border-emerald-500/30">
            <h3 className="text-lg font-bold mb-4">Campaign Preview</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Buys</span>
                <span className="font-semibold">
                  {Math.floor(parseFloat(totalBudgetUSD || 0) / parseFloat(perBuyUSD || 1))}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Style</span>
                <span className="font-semibold">{selectedStyle?.emoji} {selectedStyle?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-semibold">{selectedStyle?.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Parallel Wallets</span>
                <span className="font-semibold">{parallelWallets}</span>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              Start Baby Buy Campaign
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              <Activity className="w-5 h-5 mr-2" />
              Calculate Exact Costs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};