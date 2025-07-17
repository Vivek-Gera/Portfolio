# Development Setup

## Quick Start

### Option 1: Using Batch File (Windows)
```bash
dev.bat
```

### Option 2: Using PowerShell
```powershell
.\dev.ps1
```

### Option 3: Manual Commands
```bash
npm install
npm start
```

## Automatic Rebuild Commands

When you make changes to the code, use these commands:

### For Code Changes Only
```bash
npm start
```

### For Dependency Changes
```bash
npm run dev
```

### For Complete Clean Rebuild
```bash
npm run fresh
```

### For Package.json Changes
```bash
npm run rebuild
```

## Development Workflow

1. **Make code changes** in any `.tsx` or `.css` file
2. **Save the file** - React will automatically reload
3. **If you get errors**, run `npm run dev` to reinstall dependencies
4. **For major changes**, run `npm run fresh` for a clean rebuild

## Troubleshooting

### If you get Three.js errors:
```bash
npm run clean
npm start
```

### If you get module not found errors:
```bash
npm install
npm start
```

### If the server won't start:
```bash
npm run fresh
```

## File Structure

```
src/
├── components/          # All React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── DataUniverse.tsx
│   ├── SkillsMap.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceTimeline.tsx
│   ├── BlogSection.tsx
│   ├── YouTubeSection.tsx
│   └── ContactSection.tsx
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## Hot Reload

The development server includes hot reload, so most changes will automatically appear in your browser without needing to restart the server.

## Browser

The portfolio will open automatically at `http://localhost:3000` 