#!/bin/bash

# Infinitus UI Export Script
# This script creates a complete package of the UI code

echo "🎨 Infinitus UI Export Tool"
echo "=========================="
echo ""

# Define output directory
OUTPUT_DIR="/app/ui-export"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
EXPORT_NAME="infinitus-ui-${TIMESTAMP}"
EXPORT_PATH="${OUTPUT_DIR}/${EXPORT_NAME}"

# Create export directory
mkdir -p "${EXPORT_PATH}"

echo "📦 Creating UI export package..."
echo ""

# Copy frontend source code
echo "✓ Copying source code..."
cp -r /app/frontend/src "${EXPORT_PATH}/"
cp -r /app/frontend/public "${EXPORT_PATH}/"

# Copy configuration files
echo "✓ Copying configuration files..."
cp /app/frontend/package.json "${EXPORT_PATH}/"
cp /app/frontend/tailwind.config.js "${EXPORT_PATH}/"
cp /app/frontend/postcss.config.js "${EXPORT_PATH}/"
cp /app/frontend/craco.config.js "${EXPORT_PATH}/"
cp /app/frontend/jsconfig.json "${EXPORT_PATH}/"
cp /app/frontend/components.json "${EXPORT_PATH}/"
cp /app/frontend/.env "${EXPORT_PATH}/.env.example"

# Copy documentation
echo "✓ Copying documentation..."
cp /app/UI_COMPLETE_GUIDE.md "${EXPORT_PATH}/"
cp /app/∞.V5_COMPLETE.md "${EXPORT_PATH}/DESIGN_PHILOSOPHY.md" 2>/dev/null || true

# Create README for the export
cat > "${EXPORT_PATH}/README.md" << 'EOF'
# Infinitus UI - Complete Package

This package contains the complete UI code for the Infinitus DeFi platform.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.x
- Yarn >= 1.22.x

### Installation

```bash
# 1. Install dependencies
yarn install

# 2. Configure environment
cp .env.example .env
# Edit .env and set REACT_APP_BACKEND_URL

# 3. Start development server
yarn start
```

The app will be available at http://localhost:3000

## 📦 What's Included

```
infinitus-ui/
├── src/                      # Source code
│   ├── components/           # React components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities
│   ├── App.js               # Main app
│   └── index.css            # Global styles
├── public/                   # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── UI_COMPLETE_GUIDE.md     # Complete UI documentation
└── README.md                # This file
```

## 🎨 Key Features

- **Landing Page**: Complete marketing page with hero, features, testimonials
- **Dashboard**: 4 professional DeFi tools (Baby Buys, Chart Builder, Gas Savvy, Pooling)
- **Design System**: HSL-based tokens, dark theme, emerald accents
- **Responsive**: Mobile-first design (375px to 1920px+)
- **Components**: 30+ shadcn/ui components
- **Animations**: Smooth transitions and micro-interactions

## 📚 Documentation

See `UI_COMPLETE_GUIDE.md` for comprehensive documentation including:
- Component library
- Design tokens
- Usage examples
- Best practices
- Troubleshooting

## 🛠️ Available Scripts

```bash
yarn start      # Start development server
yarn build      # Build for production
yarn test       # Run tests
```

## 🎯 Routes

- `/` - Landing page
- `/dashboard` - Bot tools dashboard
- `/baby-buys` - Baby Buys calculator

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
WDS_SOCKET_PORT=443
```

### Backend API Endpoints

The UI expects these endpoints:

- `GET /api/` - Health check
- `GET /api/gas/current` - Current gas price
- `POST /api/babybuy/calculate-funding` - Baby buy calculations

## 🎨 Design Tokens

The design uses HSL color tokens defined in `src/index.css`:

```css
--background: 222.2 84% 4.9%        /* Dark background */
--foreground: 210 40% 98%           /* White text */
--primary: 142.1 76.2% 36.3%        /* Emerald green */
```

See `UI_COMPLETE_GUIDE.md` for complete color palette.

## 📱 Responsive Breakpoints

```
sm: 640px   (Mobile landscape)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
```

## 🤝 Contributing

This is a complete UI package. Customize as needed for your project.

## 📄 License

See main project license.

---

**Built with React 19, Tailwind CSS, and shadcn/ui**

For detailed documentation, see UI_COMPLETE_GUIDE.md
EOF

# Create component index
echo "✓ Creating component index..."
cat > "${EXPORT_PATH}/COMPONENTS_INDEX.md" << 'EOF'
# Component Index

## Landing Page Components

- `Navigation.jsx` - Main navigation bar
- `HeroSection.jsx` - Hero banner with CTA
- `TrustBar.jsx` - Partner logos
- `SocialProof.jsx` - Testimonials carousel
- `Features.jsx` - Feature cards
- `HowItWorks.jsx` - Step-by-step guide
- `FinalCTA.jsx` - Bottom conversion section
- `Footer.jsx` - Site footer
- `StickyFooterCTA.jsx` - Sticky bottom banner

## Dashboard Components

- `bot-tools/HeroSection.jsx` - Dashboard header
- `bot-tools/BabyBuysEnhanced.jsx` - Baby Buys tool
- `bot-tools/ChartBuilder.jsx` - Chart pattern builder
- `bot-tools/GasSavvy.jsx` - Gas optimization tool
- `bot-tools/Pooling.jsx` - Community pooling

## Pages

- `pages/BotToolsDashboard.jsx` - Main dashboard
- `pages/BabyBuysCalculator.jsx` - Baby Buys standalone

## UI Components (shadcn/ui)

Over 30 reusable components in `components/ui/`:
- button, card, slider, tabs, dialog, dropdown-menu, etc.

See UI_COMPLETE_GUIDE.md for detailed documentation.
EOF

# Create installation script
cat > "${EXPORT_PATH}/install.sh" << 'EOF'
#!/bin/bash

echo "🚀 Installing Infinitus UI"
echo "========================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 16.x"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version is too old. Please install Node.js >= 16.x"
    exit 1
fi

echo "✓ Node.js $(node -v) detected"

# Check Yarn
if ! command -v yarn &> /dev/null; then
    echo "⚠️  Yarn is not installed. Installing yarn..."
    npm install -g yarn
fi

echo "✓ Yarn $(yarn -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "Next steps:"
    echo "1. Configure environment: cp .env.example .env"
    echo "2. Edit .env file with your backend URL"
    echo "3. Start dev server: yarn start"
    echo ""
else
    echo "❌ Installation failed"
    exit 1
fi
EOF

chmod +x "${EXPORT_PATH}/install.sh"

# Create zip archive
echo "✓ Creating zip archive..."
cd "${OUTPUT_DIR}"
zip -r "${EXPORT_NAME}.zip" "${EXPORT_NAME}" > /dev/null 2>&1

# Show summary
echo ""
echo "✅ Export complete!"
echo ""
echo "📂 Location: ${OUTPUT_DIR}"
echo ""
echo "Files created:"
echo "  📁 ${EXPORT_NAME}/ (directory)"
echo "  📦 ${EXPORT_NAME}.zip (archive)"
echo ""
echo "📊 Package contents:"
echo "  - Source code (src/, public/)"
echo "  - Configuration files"
echo "  - Complete documentation"
echo "  - Installation scripts"
echo ""
echo "To use the export:"
echo "  1. Extract: unzip ${EXPORT_NAME}.zip"
echo "  2. Navigate: cd ${EXPORT_NAME}"
echo "  3. Install: ./install.sh (or yarn install)"
echo "  4. Configure: cp .env.example .env"
echo "  5. Start: yarn start"
echo ""
echo "📄 See README.md and UI_COMPLETE_GUIDE.md for documentation"
echo ""

# Create a simple index file
cat > "${OUTPUT_DIR}/INDEX.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infinitus UI Export</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #fff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        .container {
            max-width: 800px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 3rem;
            backdrop-filter: blur(10px);
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .subtitle {
            color: #94a3b8;
            margin-bottom: 2rem;
            font-size: 1.125rem;
        }
        .section {
            margin: 2rem 0;
        }
        .section h2 {
            color: #10b981;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        .file-list {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.5rem;
            padding: 1.5rem;
        }
        .file-item {
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .file-item:last-child { border-bottom: none; }
        .file-icon { color: #10b981; margin-right: 0.5rem; }
        .steps {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid #10b981;
            border-radius: 0.5rem;
            padding: 1.5rem;
        }
        .step {
            margin: 0.75rem 0;
            padding-left: 2rem;
            position: relative;
        }
        .step::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
        code {
            background: rgba(0, 0, 0, 0.5);
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: 'Courier New', monospace;
            color: #10b981;
        }
        .footer {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            color: #64748b;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Infinitus UI Export</h1>
        <div class="subtitle">Complete UI package ready to use</div>
        
        <div class="section">
            <h2>📦 What's Included</h2>
            <div class="file-list">
                <div class="file-item">
                    <span class="file-icon">📁</span>
                    <strong>Source Code</strong> - Complete React application
                </div>
                <div class="file-item">
                    <span class="file-icon">📄</span>
                    <strong>Documentation</strong> - UI_COMPLETE_GUIDE.md
                </div>
                <div class="file-item">
                    <span class="file-icon">⚙️</span>
                    <strong>Configuration</strong> - Tailwind, PostCSS, package.json
                </div>
                <div class="file-item">
                    <span class="file-icon">🚀</span>
                    <strong>Scripts</strong> - Installation and setup scripts
                </div>
            </div>
        </div>

        <div class="section">
            <h2>🚀 Quick Start</h2>
            <div class="steps">
                <div class="step">Extract the zip file</div>
                <div class="step">Run <code>./install.sh</code> or <code>yarn install</code></div>
                <div class="step">Configure <code>.env</code> file</div>
                <div class="step">Start with <code>yarn start</code></div>
            </div>
        </div>

        <div class="section">
            <h2>🎯 Features</h2>
            <div class="file-list">
                <div class="file-item">✓ Landing Page with marketing content</div>
                <div class="file-item">✓ Dashboard with 4 professional tools</div>
                <div class="file-item">✓ 30+ shadcn/ui components</div>
                <div class="file-item">✓ Fully responsive design</div>
                <div class="file-item">✓ Dark theme with emerald accents</div>
                <div class="file-item">✓ Production-ready code</div>
            </div>
        </div>

        <div class="footer">
            Built with React 19, Tailwind CSS, and shadcn/ui<br>
            See README.md for complete documentation
        </div>
    </div>
</body>
</html>
EOF

echo "🌐 Created visual index: ${OUTPUT_DIR}/INDEX.html"
echo ""
