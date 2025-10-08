import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Fuel, Brain, Clock, TrendingDown, Zap, 
  CheckCircle, Bell, Target
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const GasSavvy = () => {
  const [mode, setMode] = useState('ai-optimal');
  const [targetGas, setTargetGas] = useState('0.5');
  const [priority, setPriority] = useState('balanced');
  const [gasData, setGasData] = useState(null);

  useEffect(() => {
    const fetchGasData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/gas/current`);
        setGasData(response.data);
      } catch (error) {
        console.error('Gas data error:', error);
      }
    };
    
    fetchGasData();
    const interval = setInterval(fetchGasData, 15000);
    return () => clearInterval(interval);
  }, []);

  const modes = [
    {
      id: 'ai-optimal',
      name: 'AI Optimal',
      emoji: '🤖',
      savings: '60-90%',
      speed: 'Smart',
      description: 'AI learns patterns and picks perfect timing'
    },
    {
      id: 'scheduled',
      name: 'Scheduled',
      emoji: '⏰',
      savings: '40-70%',
      speed: 'Predictable',
      description: 'Execute during specific low-gas windows'
    },
    {
      id: 'threshold',
      name: 'Threshold',
      emoji: '🎯',
      savings: '30-60%',
      speed: 'Variable',
      description: 'Wait until gas drops below your target'
    }
  ];

  const priorities = [
    { id: 'speed', name: 'Speed First', emoji: '⚡', wait: '< 1h' },
    { id: 'balanced', name: 'Balanced', emoji: '⚖️', wait: '1-4h' },
    { id: 'savings', name: 'Max Savings', emoji: '💰', wait: '4-12h' }
  ];

  const selectedMode = modes.find(m => m.id === mode);
  const selectedPriority = priorities.find(p => p.id === priority);

  const getGasStatus = () => {
    if (!gasData) return { color: 'gray', level: 'Unknown', icon: '⚪' };
    const gwei = gasData.gasPrice;
    if (gwei < 0.5) return { color: 'emerald', level: 'EXCELLENT', icon: '🟢', savings: '90%' };
    if (gwei < 1.5) return { color: 'yellow', level: 'GOOD', icon: '🟡', savings: '60%' };
    if (gwei < 3.0) return { color: 'orange', level: 'MODERATE', icon: '🟠', savings: '30%' };
    return { color: 'red', level: 'HIGH', icon: '🔴', savings: '0%' };
  };

  const status = getGasStatus();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-black flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl">⛽</span>
          <span>Gas Savvy</span>
          <Badge variant="outline" className="text-red-500 border-red-500">
            AI Optimization
          </Badge>
        </h2>
        <p className="text-muted-foreground">
          Save 60-90% on gas fees with AI-powered timing
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: Configuration */}
        <div className="space-y-6">
          {/* Current Gas Status */}
          <Card className={`p-6 bg-${status.color}-500/10 border-${status.color}-500/30`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Current Network Gas</h3>
              <span className="text-2xl">{status.icon}</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black">{gasData?.gasPrice?.toFixed(3) || '--'}</span>
              <span className="text-xl text-muted-foreground">Gwei</span>
            </div>
            <div className={`text-sm font-semibold text-${status.color}-500 mb-3`}>
              {status.level} - Potential Savings: {status.savings}
            </div>
            <p className="text-xs text-muted-foreground">
              Updates every 15 seconds • Live monitoring
            </p>
          </Card>

          {/* Mode Selection */}
          <Card className="p-6">
            <Label className="text-base font-semibold mb-4 block">Optimization Mode</Label>
            <div className="grid gap-3">
              {modes.map((m) => (
                <Button
                  key={m.id}
                  variant={mode === m.id ? 'default' : 'outline'}
                  className={`h-auto justify-start p-4 ${mode === m.id ? 'bg-red-500 hover:bg-red-600' : ''}`}
                  onClick={() => setMode(m.id)}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-3xl">{m.emoji}</span>
                    <div className="flex-1 text-left">
                      <div className="font-bold">{m.name}</div>
                      <div className="text-xs opacity-80">{m.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-500">{m.savings}</div>
                      <div className="text-xs opacity-80">{m.speed}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </Card>

          {/* Priority Setting */}
          <Card className="p-6">
            <Label className="text-base font-semibold mb-4 block">Priority Level</Label>
            <div className="grid grid-cols-3 gap-3">
              {priorities.map((p) => (
                <Button
                  key={p.id}
                  variant={priority === p.id ? 'default' : 'outline'}
                  className={`h-auto flex-col p-4 ${priority === p.id ? 'bg-red-500 hover:bg-red-600' : ''}`}
                  onClick={() => setPriority(p.id)}
                >
                  <span className="text-2xl mb-2">{p.emoji}</span>
                  <span className="text-xs font-bold">{p.name}</span>
                  <span className="text-xs opacity-80 mt-1">{p.wait}</span>
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Results & Actions */}
        <div className="space-y-6">
          {/* AI Prediction */}
          <Card className="p-6 bg-red-500/5 border-red-500/30">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-red-500" />
              AI Prediction
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Next Low Gas Window</div>
                <div className="text-2xl font-bold text-red-500">
                  {selectedPriority?.id === 'speed' ? '30 mins' : selectedPriority?.id === 'balanced' ? '2 hours' : '6 hours'}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-background rounded-lg">
                  <div className="text-xs text-muted-foreground">Predicted Gas</div>
                  <div className="text-lg font-bold text-emerald-500">0.3 Gwei</div>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <div className="text-xs text-muted-foreground">Est. Savings</div>
                  <div className="text-lg font-bold text-emerald-500">
                    {selectedMode?.savings?.split('-')[1] || '90%'}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Historical Patterns */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">24h Gas Pattern</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingDown className="w-16 h-16 mx-auto mb-2 text-red-500" />
                <p className="text-sm text-muted-foreground">
                  Historical gas chart
                </p>
              </div>
            </div>
          </Card>

          {/* Saved Amount */}
          <Card className="p-6 bg-emerald-500/5 border-emerald-500/30">
            <h3 className="text-lg font-bold mb-4">Your Total Savings</h3>
            <div className="text-4xl font-black text-emerald-500 mb-2">$12,847</div>
            <p className="text-sm text-muted-foreground">
              Saved across 247 transactions this month
            </p>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button size="lg" className="w-full bg-red-500 hover:bg-red-600">
              <Zap className="w-5 h-5 mr-2" />
              Enable Auto Gas Optimization
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              <Bell className="w-5 h-5 mr-2" />
              Alert When Gas Drops
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};