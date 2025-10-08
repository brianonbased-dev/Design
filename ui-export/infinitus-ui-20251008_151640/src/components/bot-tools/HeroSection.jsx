import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Baby, TrendingUp, Fuel, Users, Activity } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const HeroSection = ({ onFeatureSelect }) => {
  const [gasPrice, setGasPrice] = useState(null);
  const [stats, setStats] = useState({
    gasSaved: '$2.4M+',
    activeCampaigns: 147
  });

  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/gas/current`);
        setGasPrice(response.data);
      } catch (error) {
        console.error('Gas price error:', error);
      }
    };
    
    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  const getGasStatus = () => {
    if (!gasPrice) return { color: 'gray', status: 'Loading...', icon: '⚪' };
    const gwei = gasPrice.gasPrice;
    if (gwei < 0.5) return { color: 'emerald', status: 'Excellent!', icon: '🟢' };
    if (gwei < 1.5) return { color: 'yellow', status: 'Good', icon: '🟡' };
    return { color: 'red', status: 'High', icon: '🔴' };
  };

  const gasStatus = getGasStatus();

  const features = [
    {
      id: 'baby-buys',
      icon: Baby,
      emoji: '🍼',
      title: 'Baby Buys',
      subtitle: 'Volume Generation',
      color: 'emerald',
      description: 'Break large buys into strategic tiny purchases'
    },
    {
      id: 'chart-builder',
      icon: TrendingUp,
      emoji: '📊',
      title: 'Chart Builder',
      subtitle: 'Pattern Artist',
      color: 'purple',
      description: 'Create recognizable technical patterns'
    },
    {
      id: 'gas-savvy',
      icon: Fuel,
      emoji: '⛽',
      title: 'Gas Savvy',
      subtitle: 'AI Optimization',
      color: 'red',
      description: 'Save 60-90% on gas with AI timing'
    },
    {
      id: 'pooling',
      icon: Users,
      emoji: '🤝',
      title: 'Pooling',
      subtitle: 'Community Savings',
      color: 'blue',
      description: 'Batch transactions for 95% savings'
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-background to-muted/20 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">∞</span>
            <h1 className="text-4xl sm:text-5xl font-black">
              <span className="text-foreground">Infinitus</span>{' '}
              <span className="text-muted-foreground text-3xl sm:text-4xl">by Brian</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional DeFi Tools for Everyone ∞
          </p>
        </div>

        {/* Live Stats & Gas */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{stats.gasSaved}</div>
            <div className="text-sm text-muted-foreground">Total Gas Saved</div>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-accent mb-1">{stats.activeCampaigns}</div>
            <div className="text-sm text-muted-foreground">Active Campaigns</div>
          </Card>

          <Card className={`p-4 bg-${gasStatus.color}-500/10 border-${gasStatus.color}-500/30`}>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl">{gasStatus.icon}</span>
              <span className="text-2xl font-bold">{gasPrice?.gasPrice?.toFixed(3) || '--'}</span>
              <span className="text-sm text-muted-foreground">Gwei</span>
            </div>
            <div className={`text-sm font-semibold text-${gasStatus.color}-500`}>
              {gasStatus.status}
            </div>
          </Card>
        </div>

        {/* Feature Navigation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className={`p-6 cursor-pointer hover:border-${feature.color}-500 transition-all hover:scale-105 group`}
                onClick={() => onFeatureSelect(feature.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {feature.emoji}
                  </div>
                  <Icon className={`w-5 h-5 text-${feature.color}-500`} />
                </div>
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className={`text-sm text-${feature.color}-500 font-semibold mb-2`}>
                  {feature.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};