import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  TrendingUp, TrendingDown, Activity, Target, 
  Sparkles, CheckCircle, Save, Play
} from 'lucide-react';

export const ChartBuilder = () => {
  const [pattern, setPattern] = useState('ascending-triangle');
  const [duration, setDuration] = useState(6);
  const [volatility, setVolatility] = useState(30);
  const [budget, setBudget] = useState('500');

  const patterns = [
    {
      id: 'ascending-triangle',
      name: 'Ascending Triangle',
      emoji: '📐',
      signal: 'Bullish Continuation',
      difficulty: 'Medium',
      success: '72%',
      description: 'Higher lows with resistance level'
    },
    {
      id: 'cup-handle',
      name: 'Cup & Handle',
      emoji: '☕',
      signal: 'Strong Bullish',
      difficulty: 'Hard',
      success: '78%',
      description: 'Classic accumulation pattern'
    },
    {
      id: 'bull-flag',
      name: 'Bull Flag',
      emoji: '🚩',
      signal: 'Bullish',
      difficulty: 'Easy',
      success: '68%',
      description: 'Sharp rise then consolidation'
    },
    {
      id: 'w-bottom',
      name: 'W Bottom (Double)',
      emoji: 'W',
      signal: 'Reversal Up',
      difficulty: 'Medium',
      success: '70%',
      description: 'Two equal lows forming support'
    },
    {
      id: 'wedge-rising',
      name: 'Rising Wedge',
      emoji: '📊',
      signal: 'Caution',
      difficulty: 'Hard',
      success: '65%',
      description: 'Converging trendlines upward'
    },
    {
      id: 'breakout-consolidation',
      name: 'Breakout Setup',
      emoji: '💥',
      signal: 'Explosive',
      difficulty: 'Medium',
      success: '75%',
      description: 'Tight range before breakout'
    }
  ];

  const selectedPattern = patterns.find(p => p.id === pattern);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-black flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl">📊</span>
          <span>Chart Builder</span>
          <Badge variant="outline" className="text-purple-500 border-purple-500">
            Pattern Artist
          </Badge>
        </h2>
        <p className="text-muted-foreground">
          Create recognizable technical patterns that traders love to see
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: Pattern Selection */}
        <div className="space-y-6">
          <Card className="p-6">
            <Label className="text-base font-semibold mb-4 block">Select Pattern</Label>
            <div className="grid gap-3">
              {patterns.map((p) => (
                <Button
                  key={p.id}
                  variant={pattern === p.id ? 'default' : 'outline'}
                  className={`h-auto justify-start p-4 ${pattern === p.id ? 'bg-purple-500 hover:bg-purple-600' : ''}`}
                  onClick={() => setPattern(p.id)}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-3xl">{p.emoji}</span>
                    <div className="flex-1 text-left">
                      <div className="font-bold">{p.name}</div>
                      <div className="text-xs opacity-80">{p.signal}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {p.success} Win
                      </Badge>
                      <span className="text-xs opacity-80">{p.difficulty}</span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </Card>

          {/* Pattern Details */}
          {selectedPattern && (
            <Card className="p-6 bg-purple-500/5 border-purple-500/30">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">{selectedPattern.emoji}</span>
                {selectedPattern.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Signal Type:</span>
                  <span className="font-semibold text-purple-500">{selectedPattern.signal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <span className="font-semibold">{selectedPattern.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span className="font-semibold text-emerald-500">{selectedPattern.success}</span>
                </div>
                <p className="text-muted-foreground mt-3 pt-3 border-t border-border">
                  {selectedPattern.description}
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Right: Configuration */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Pattern Configuration</h3>
            <div className="space-y-6">
              <div>
                <Label>Duration: {duration} hours</Label>
                <Slider
                  value={[duration]}
                  onValueChange={(val) => setDuration(val[0])}
                  min={2}
                  max={24}
                  step={1}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  How long to build this pattern
                </p>
              </div>

              <div>
                <Label>Volatility: {volatility}%</Label>
                <Slider
                  value={[volatility]}
                  onValueChange={(val) => setVolatility(val[0])}
                  min={10}
                  max={100}
                  step={5}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Price movement intensity
                </p>
              </div>

              <div>
                <Label htmlFor="budget-chart">Total Budget (USD)</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="budget-chart"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Preview */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Pattern Preview</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-16 h-16 mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-muted-foreground">
                  Visual pattern preview
                </p>
              </div>
            </div>
          </Card>

          {/* Estimated Stats */}
          <Card className="p-6 bg-purple-500/5 border-purple-500/30">
            <h3 className="text-lg font-bold mb-4">Estimated Results</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Trades:</span>
                <span className="font-semibold">~{Math.floor(duration * 8)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Trade Size:</span>
                <span className="font-semibold">${(parseFloat(budget) / (duration * 8)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pattern Completion:</span>
                <span className="font-semibold text-purple-500">{duration}h</span>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button size="lg" className="w-full bg-purple-500 hover:bg-purple-600">
              <Play className="w-5 h-5 mr-2" />
              Build This Pattern
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              <Save className="w-5 h-5 mr-2" />
              Save Configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};