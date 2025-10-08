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
