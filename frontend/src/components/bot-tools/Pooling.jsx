import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Users, Zap, Clock, TrendingDown, Shield, 
  CheckCircle, Info, Target, Activity
} from 'lucide-react';

export const Pooling = () => {
  const [poolType, setPoolType] = useState('public');
  const [contribution, setContribution] = useState('100');
  const [activePool, setActivePool] = useState(null);

  const pools = [
    {
      id: 1,
      name: 'Main Public Pool',
      participants: 47,
      avgGas: '0.8 Gwei',
      savings: '95%',
      nextBatch: '12 mins',
      minContribution: '$50',
      status: 'active',
      emoji: '🌊'
    },
    {
      id: 2,
      name: 'Speed Pool',
      participants: 23,
      avgGas: '1.2 Gwei',
      savings: '89%',
      nextBatch: '5 mins',
      minContribution: '$100',
      status: 'active',
      emoji: '⚡'
    },
    {
      id: 3,
      name: 'Whale Pool',
      participants: 8,
      avgGas: '0.6 Gwei',
      savings: '97%',
      nextBatch: '30 mins',
      minContribution: '$1,000',
      status: 'active',
      emoji: '🐋'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-black flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl">🤝</span>
          <span>Pooling</span>
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Community Savings
          </Badge>
        </h2>
        <p className="text-muted-foreground">
          Join forces with others to batch transactions and save 95% on gas
        </p>
      </div>

      {/* How It Works */}
      <Alert className="bg-blue-500/10 border-blue-500/30">
        <Info className="w-4 h-4 text-blue-500" />
        <AlertDescription>
          <strong>How Pooling Works:</strong> Multiple users' transactions are bundled together into a single batch. 
          Everyone pays a tiny fraction of the gas cost. Win-win-win! 🎉
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: Available Pools */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Active Community Pools</h3>
            <div className="space-y-3">
              {pools.map((pool) => (
                <Card 
                  key={pool.id}
                  className={`p-4 cursor-pointer transition-all hover:border-blue-500 ${
                    activePool === pool.id ? 'border-blue-500 bg-blue-500/5' : ''
                  }`}
                  onClick={() => setActivePool(pool.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{pool.emoji}</span>
                      <div>
                        <div className="font-bold">{pool.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {pool.participants} participants
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-emerald-500">
                      {pool.savings} saved
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Avg Gas:</span>
                      <span className="ml-1 font-semibold">{pool.avgGas}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Next Batch:</span>
                      <span className="ml-1 font-semibold">{pool.nextBatch}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Min:</span>
                      <span className="ml-1 font-semibold">{pool.minContribution}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-6 bg-blue-500/5 border-blue-500/30">
            <h3 className="text-lg font-bold mb-4">Why Pool Together?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold">95% Gas Savings</div>
                  <div className="text-sm text-muted-foreground">
                    Split one gas fee among many users
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold">Same Security</div>
                  <div className="text-sm text-muted-foreground">
                    Your funds stay in your wallet
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <div className="font-semibold">Community First</div>
                  <div className="text-sm text-muted-foreground">
                    Everyone wins together
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: Join Pool */}
        <div className="space-y-6">
          {activePool ? (
            <>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Join Pool</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contribution">Your Contribution (USD)</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="contribution"
                        type="number"
                        value={contribution}
                        onChange={(e) => setContribution(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Min: {pools.find(p => p.id === activePool)?.minContribution}
                    </p>
                  </div>

                  <Alert className="bg-emerald-500/10 border-emerald-500/30">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <AlertDescription className="text-xs">
                      <strong>Your Savings:</strong> ${(parseFloat(contribution) * 0.95).toFixed(2)} saved on gas fees
                    </AlertDescription>
                  </Alert>
                </div>
              </Card>

              {/* Pool Details */}
              <Card className="p-6 bg-blue-500/5 border-blue-500/30">
                <h3 className="text-lg font-bold mb-4">Pool Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Size:</span>
                    <span className="font-semibold">
                      {pools.find(p => p.id === activePool)?.participants} users
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Batch In:</span>
                    <span className="font-semibold text-blue-500">
                      {pools.find(p => p.id === activePool)?.nextBatch}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Gas Cost:</span>
                    <span className="font-semibold">
                      {pools.find(p => p.id === activePool)?.avgGas}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your Gas Share:</span>
                    <span className="font-semibold text-emerald-500">
                      ~$0.{Math.floor(parseFloat(contribution) * 0.05).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Live Activity */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  Live Pool Activity
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">User #42 joined</span>
                    <span className="font-semibold">2 mins ago</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Batch executed</span>
                    <span className="font-semibold text-emerald-500">5 mins ago</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">User #38 joined</span>
                    <span className="font-semibold">8 mins ago</span>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600">
                  <Users className="w-5 h-5 mr-2" />
                  Join Pool Now
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Target className="w-5 h-5 mr-2" />
                  Create Private Pool
                </Button>
              </div>
            </>
          ) : (
            <Card className="p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-bold mb-2">Select a Pool</h3>
              <p className="text-sm text-muted-foreground">
                Choose a pool from the left to see details and join
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Stats Banner */}
      <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border-blue-500/30">
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-black text-blue-500">$2.4M+</div>
            <div className="text-sm text-muted-foreground">Total Gas Saved</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-500">12,847</div>
            <div className="text-sm text-muted-foreground">Pooled Transactions</div>
          </div>
          <div>
            <div className="text-3xl font-black text-purple-500">95.2%</div>
            <div className="text-sm text-muted-foreground">Avg Savings Rate</div>
          </div>
        </div>
      </Card>
    </div>
  );
};