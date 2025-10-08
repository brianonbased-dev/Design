import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const UIShowcase = () => {
  const components = [
    {
      category: "Landing Page",
      items: [
        { name: "Navigation", path: "components/Navigation.jsx", description: "Main nav bar with mobile menu" },
        { name: "HeroSection", path: "components/HeroSection.jsx", description: "Hero banner with gradient text" },
        { name: "TrustBar", path: "components/TrustBar.jsx", description: "Partner logos display" },
        { name: "SocialProof", path: "components/SocialProof.jsx", description: "Testimonials carousel" },
        { name: "Features", path: "components/Features.jsx", description: "Feature cards showcase" },
        { name: "HowItWorks", path: "components/HowItWorks.jsx", description: "Step-by-step guide" },
        { name: "FinalCTA", path: "components/FinalCTA.jsx", description: "Bottom conversion section" },
        { name: "Footer", path: "components/Footer.jsx", description: "Site footer with links" },
        { name: "StickyFooterCTA", path: "components/StickyFooterCTA.jsx", description: "Sticky bottom banner" }
      ]
    },
    {
      category: "Dashboard Tools",
      items: [
        { name: "HeroSection", path: "components/bot-tools/HeroSection.jsx", description: "Dashboard header with stats" },
        { name: "BabyBuysEnhanced", path: "components/bot-tools/BabyBuysEnhanced.jsx", description: "Baby Buys tool (8 styles)" },
        { name: "ChartBuilder", path: "components/bot-tools/ChartBuilder.jsx", description: "Chart pattern builder (6 patterns)" },
        { name: "GasSavvy", path: "components/bot-tools/GasSavvy.jsx", description: "Gas optimization (3 modes)" },
        { name: "Pooling", path: "components/bot-tools/Pooling.jsx", description: "Community pooling (3 pools)" }
      ]
    },
    {
      category: "Pages",
      items: [
        { name: "LandingPage", path: "App.js", description: "Complete marketing page", route: "/" },
        { name: "BotToolsDashboard", path: "pages/BotToolsDashboard.jsx", description: "Main dashboard with 4 tools", route: "/dashboard" },
        { name: "BabyBuysCalculator", path: "pages/BabyBuysCalculator.jsx", description: "Standalone calculator", route: "/baby-buys" }
      ]
    }
  ];

  const designTokens = {
    colors: [
      { name: "Primary", value: "142.1 76.2% 36.3%", hex: "#10b981", desc: "Emerald green" },
      { name: "Background", value: "222.2 84% 4.9%", hex: "#0a0f1a", desc: "Dark background" },
      { name: "Foreground", value: "210 40% 98%", hex: "#f8fafc", desc: "White text" },
      { name: "Secondary", value: "217.2 32.6% 17.5%", hex: "#1e293b", desc: "Dark blue" },
      { name: "Accent", value: "217.2 32.6% 17.5%", hex: "#1e293b", desc: "Accent blue" }
    ],
    files: [
      { name: "index.css", path: "src/index.css", description: "Global styles & color tokens" },
      { name: "tailwind.config.js", path: "tailwind.config.js", description: "Tailwind configuration" },
      { name: "App.css", path: "src/App.css", description: "App-specific styles" }
    ]
  };

  const stats = {
    components: 40,
    pages: 3,
    routes: 3,
    shadcnComponents: 30,
    linesOfCode: 5000
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                🎨 Infinitus <span className="text-primary">UI Showcase</span>
              </h1>
              <p className="text-muted-foreground">Complete component library and design system</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => window.open('/UI_COMPLETE_GUIDE.md', '_blank')}>
                📚 Full Guide
              </Button>
              <Button onClick={() => window.location.href = '/'}>
                🏠 Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{stats.components}+</div>
              <div className="text-sm text-muted-foreground mt-1">Components</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{stats.pages}</div>
              <div className="text-sm text-muted-foreground mt-1">Pages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{stats.shadcnComponents}+</div>
              <div className="text-sm text-muted-foreground mt-1">UI Components</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{stats.routes}</div>
              <div className="text-sm text-muted-foreground mt-1">Routes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{(stats.linesOfCode / 1000).toFixed(1)}K+</div>
              <div className="text-sm text-muted-foreground mt-1">Lines of Code</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🚀 Quick Access</CardTitle>
            <CardDescription>Download and documentation links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-semibold mb-1">Complete Package</div>
                <div className="text-sm text-muted-foreground mb-3">
                  Exported UI in /app/ui-export/
                </div>
                <code className="text-xs bg-background px-2 py-1 rounded">
                  infinitus-ui-*.zip
                </code>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold mb-1">Documentation</div>
                <div className="text-sm text-muted-foreground mb-3">
                  50+ pages of detailed docs
                </div>
                <code className="text-xs bg-background px-2 py-1 rounded">
                  UI_COMPLETE_GUIDE.md
                </code>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-semibold mb-1">Design System</div>
                <div className="text-sm text-muted-foreground mb-3">
                  HSL tokens & Tailwind config
                </div>
                <code className="text-xs bg-background px-2 py-1 rounded">
                  src/index.css
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Components by Category */}
        {components.map((category, idx) => (
          <Card key={idx} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category.category}
                <Badge variant="secondary">{category.items.length} components</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div className="flex items-start justify-between gap-4 py-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm font-semibold text-primary">
                            {item.name}
                          </span>
                          {item.route && (
                            <Badge variant="outline" className="text-xs">
                              {item.route}
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">{item.description}</div>
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {item.path}
                        </code>
                      </div>
                      {item.route && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.location.href = item.route}
                        >
                          View →
                        </Button>
                      )}
                    </div>
                    {itemIdx < category.items.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Design System */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>🎨 Design System</CardTitle>
            <CardDescription>HSL color tokens and configuration files</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Colors */}
              <div>
                <h3 className="font-semibold mb-3">Color Palette (HSL)</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {designTokens.colors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                      <div 
                        className="w-12 h-12 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{color.name}</div>
                        <div className="text-xs text-muted-foreground">{color.desc}</div>
                        <code className="text-xs bg-background px-1 py-0.5 rounded">
                          {color.value}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Files */}
              <div>
                <h3 className="font-semibold mb-3">Configuration Files</h3>
                <div className="space-y-2">
                  {designTokens.files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                      <div>
                        <div className="font-mono text-sm font-semibold">{file.name}</div>
                        <div className="text-xs text-muted-foreground">{file.description}</div>
                      </div>
                      <code className="text-xs bg-background px-2 py-1 rounded">
                        {file.path}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Installation Guide */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>🚀 Installation Guide</CardTitle>
            <CardDescription>How to use the exported UI package</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  Export the UI
                </div>
                <div className="ml-8 bg-muted/50 rounded-lg p-3">
                  <code className="text-sm">cd /app && ./export-ui.sh</code>
                  <div className="text-xs text-muted-foreground mt-2">
                    Creates a complete package in /app/ui-export/
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Extract & Install
                </div>
                <div className="ml-8 bg-muted/50 rounded-lg p-3 space-y-2">
                  <code className="text-sm block">unzip infinitus-ui-*.zip</code>
                  <code className="text-sm block">cd infinitus-ui-*</code>
                  <code className="text-sm block">yarn install</code>
                  <div className="text-xs text-muted-foreground mt-2">
                    Or run ./install.sh for automated setup
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                  Configure & Run
                </div>
                <div className="ml-8 bg-muted/50 rounded-lg p-3 space-y-2">
                  <code className="text-sm block">cp .env.example .env</code>
                  <code className="text-sm block"># Edit .env with your backend URL</code>
                  <code className="text-sm block">yarn start</code>
                  <div className="text-xs text-muted-foreground mt-2">
                    App will run on http://localhost:3000
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>✨ Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "🎨", title: "Beautiful Design", desc: "Dark theme with emerald accents" },
                { icon: "📱", title: "Fully Responsive", desc: "Mobile-first, 375px to 1920px+" },
                { icon: "⚡", title: "Performance", desc: "Optimized bundle, lazy loading" },
                { icon: "♿", title: "Accessible", desc: "WCAG AA compliant" },
                { icon: "🔧", title: "Customizable", desc: "Design tokens, easy theming" },
                { icon: "📚", title: "Well Documented", desc: "50+ pages of guides" },
                { icon: "🚀", title: "Production Ready", desc: "Best practices, clean code" },
                { icon: "🧩", title: "Modular", desc: "Reusable components" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <div className="font-semibold mb-1">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-2">
            Built with React 19, Tailwind CSS, and shadcn/ui
          </p>
          <p className="text-sm text-muted-foreground">
            For complete documentation, see <code className="bg-muted px-2 py-1 rounded">UI_COMPLETE_GUIDE.md</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIShowcase;
