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
