import React, { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Zap, 
  Leaf, 
  Bot, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  TrendingUp,
  Clock,
  Fuel,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const BabyBuysCalculator = () => {
  // State
  const [mode, setMode] = useState('auto');
  const [perBuyUSD, setPerBuyUSD] = useState('1.00');
  const [totalBudgetUSD, setTotalBudgetUSD] = useState('1000');
  const [calculation, setCalculation] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(true);
  const [ethPrice, setEthPrice] = useState(3000);

  // Fetch calculation
  const fetchCalculation = useCallback(async () => {
    if (!perBuyUSD || !totalBudgetUSD) return;
    
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/babybuy/calculate-funding`, {
        perBuyUSD: parseFloat(perBuyUSD),
        totalBudgetUSD: parseFloat(totalBudgetUSD),
        ethPriceUSD: ethPrice,
        mode: mode
      });
      setCalculation(response.data.calculation);
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setLoading(false);
    }
  }, [perBuyUSD, totalBudgetUSD, ethPrice, mode]);

  // Fetch gas price
  const fetchGasPrice = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/gas/current`);
      setGasPrice(response.data);
    } catch (error) {
      console.error('Gas price error:', error);
    }
  }, []);

  // Debounced calculation
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCalculation();
    }, 500);
    return () => clearTimeout(timer);
  }, [perBuyUSD, totalBudgetUSD, mode, fetchCalculation]);

  // Gas price polling
  useEffect(() => {
    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 30000);
    return () => clearInterval(interval);
  }, [fetchGasPrice]);

  // Auto mode detection
  useEffect(() => {
    if (mode === 'auto' && perBuyUSD) {
      const amount = parseFloat(perBuyUSD);
      if (amount < 0.10) {
        setMode('ultra-micro');
      } else {
        setMode('economical');
      }
    }
  }, [perBuyUSD, mode]);

  const getModeIcon = (m) => {
    switch(m) {
      case 'economical': return <Leaf className="w-5 h-5" />;
      case 'ultra-micro': return <Zap className="w-5 h-5" />;
      default: return <Bot className="w-5 h-5" />;
    }
  };

  const getModeColor = (m) => {
    switch(m) {
      case 'economical': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30';
      case 'ultra-micro': return 'text-amber-500 bg-amber-500/10 border-amber-500/30';
      default: return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
    }
  };

  const getGasStatus = () => {
    if (!gasPrice) return { color: 'gray', status: 'Loading...', icon: '⚪' };
    const gwei = gasPrice.gasPrice;
    if (gwei < 0.5) return { color: 'emerald', status: 'EXCELLENT', icon: '🟢' };
    if (gwei < 1.5) return { color: 'yellow', status: 'GOOD', icon: '🟡' };
    return { color: 'red', status: 'HIGH', icon: '🔴' };
  };

  const gasStatus = getGasStatus();

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-foreground mb-2">
            Baby Buys <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-muted-foreground">
            Calculate your funding needs with real-time gas prices and smart bundling
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Inputs */}
          <div className="space-y-6">
            {/* Mode Selector */}
            <Card className="p-6">
              <Label className="text-base font-semibold mb-4 block">Select Mode</Label>
              <Tabs value={mode} onValueChange={setMode}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="economical" className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Economical
                  </TabsTrigger>
                  <TabsTrigger value="ultra-micro" className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Ultra-Micro
                  </TabsTrigger>
                  <TabsTrigger value="auto" className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Auto
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="mt-4 p-3 rounded-lg bg-muted">
                <div className="flex items-start gap-2">
                  {getModeIcon(calculation?.mode || mode)}
                  <div className="text-sm">
                    {mode === 'economical' && (
                      <>
                        <p className="font-semibold text-emerald-500">💚 Recommended</p>
                        <p className="text-muted-foreground">Gas: 4-25% • Best for most users</p>
                      </>
                    )}
                    {mode === 'ultra-micro' && (
                      <>
                        <p className="font-semibold text-amber-500">⚡ Advanced</p>
                        <p className="text-muted-foreground">Gas: 50-1000% • For tiny buys</p>
                      </>
                    )}
                    {mode === 'auto' && (
                      <>
                        <p className="font-semibold text-blue-500">🤖 Default</p>
                        <p className="text-muted-foreground">Smart detection based on amount</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            {/* Inputs */}
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="perBuy">Per Buy Amount (USD)</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="perBuy"
                      type="number"
                      step="0.001"
                      min="0.001"
                      max="10"
                      value={perBuyUSD}
                      onChange={(e) => setPerBuyUSD(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Range: $0.001 - $10.00</p>
                </div>

                <div>
                  <Label htmlFor="budget">Total Budget (USD)</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="budget"
                      type="number"
                      step="10"
                      min="10"
                      value={totalBudgetUSD}
                      onChange={(e) => setTotalBudgetUSD(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Minimum: $10</p>
                </div>
              </div>
            </Card>

            {/* Gas Indicator */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-${gasStatus.color}-500/10 flex items-center justify-center text-2xl`}>
                    {gasStatus.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gas Price</p>
                    <p className="text-2xl font-bold">{gasPrice?.gasPrice?.toFixed(4) || '--'} Gwei</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold text-${gasStatus.color}-500`}>{gasStatus.status}</p>
                  <p className="text-xs text-muted-foreground">Updates every 30s</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            {/* Cost Breakdown */}
            <Card className="p-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => setShowBreakdown(!showBreakdown)}
              >
                <h3 className="text-lg font-bold">Cost Breakdown</h3>
                {showBreakdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>

              {showBreakdown && calculation && (
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Buy Amount</span>
                    <span className="font-semibold">${calculation.costs?.buyAmount?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Fuel className="w-4 h-4" /> Gas
                    </span>
                    <span className="font-semibold">${calculation.costs?.gas?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-1">
                      🔷 BRIAN Fee (10%)
                      <Info className="w-3 h-3 cursor-help" title="Hardcoded in contract" />
                    </span>
                    <span className="font-semibold text-amber-500">${calculation.costs?.brianFee?.toFixed(2) || '0.00'}</span>
                  </div>
                  <Alert className="bg-amber-500/10 border-amber-500/30">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <AlertDescription className="text-xs">
                      BRIAN fee is ON TOP of buy amount (hardcoded in contract)
                    </AlertDescription>
                  </Alert>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Shield className="w-4 h-4" /> Reserve
                    </span>
                    <span className="font-semibold">${calculation.funding?.reserve?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="flex justify-between py-3 pt-4 border-t-2 border-primary">
                    <span className="font-bold text-lg">Total Required</span>
                    <span className="font-bold text-2xl text-primary">
                      ${calculation.funding?.minRequired?.toFixed(2) || '0.00'}
                    </span>
                  </div>
                </div>
              )}

              {!calculation && (
                <div className="text-center py-8 text-muted-foreground">
                  <Info className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Enter amounts to see breakdown</p>
                </div>
              )}
            </Card>

            {/* Bundling Strategy */}
            {calculation?.bundling && (
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Bundling Strategy</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mode</span>
                    <span className={`font-semibold ${getModeColor(calculation.mode)}`}>
                      {calculation.mode === 'economical' ? '💚 Economical' : '⚡ Ultra-Micro'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Buys per TX</span>
                    <span className="font-semibold">{calculation.bundling.buysPerTx}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total TXs</span>
                    <span className="font-semibold">{calculation.bundling.txCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Time Estimate
                    </span>
                    <span className="font-semibold">~{Math.ceil(calculation.bundling.txCount / 5)}h</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Warnings */}
            {calculation?.warnings && calculation.warnings.length > 0 && (
              <div className="space-y-2">
                {calculation.warnings.map((warning, idx) => (
                  <Alert key={idx} className={`${
                    warning.level === 'critical' ? 'bg-red-500/10 border-red-500/30' :
                    warning.level === 'warning' ? 'bg-amber-500/10 border-amber-500/30' :
                    'bg-blue-500/10 border-blue-500/30'
                  }`}>
                    <AlertCircle className="w-4 h-4" />
                    <AlertDescription>{warning.message}</AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            {/* Recommendations */}
            {calculation?.recommendations && calculation.recommendations.length > 0 && (
              <Card className="p-6 bg-primary/5 border-primary/30">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-semibold">Recommendations</h4>
                    {calculation.recommendations.map((rec, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{rec.message}</p>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <Button 
                size="lg" 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!calculation?.viability?.viable || loading}
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Start Job
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Adjust Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyBuysCalculator;