# Setup Guide for Your Portfolio Website

## Method 1: Download Individual Files (Recommended)

Since you want the code on your local machine, here's the easiest approach:

### Step 1: Create Project Folder
Create a new folder on your computer called `aaryan-portfolio` (or any name you prefer).

### Step 2: Copy File Structure
Create the following folder structure:

```
aaryan-portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
├── server/
├── shared/
└── (root files)
```

### Step 3: Get All Files
You'll need to copy the content of these files from this Replit project:

**Root Files:**
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `components.json` - shadcn/ui configuration
- `drizzle.config.ts` - Database configuration

**Client Files:**
- `client/index.html`
- `client/src/main.tsx`
- `client/src/App.tsx`
- `client/src/index.css`
- `client/src/pages/portfolio.tsx`
- `client/src/pages/not-found.tsx`
- All component files in `client/src/components/`
- All hook files in `client/src/hooks/`
- All utility files in `client/src/lib/`

**Server Files:**
- `server/index.ts`
- `server/routes.ts`
- `server/storage.ts`
- `server/vite.ts`

**Shared Files:**
- `shared/schema.ts`

### Step 4: Install Dependencies
After copying all files, run:
```bash
cd aaryan-portfolio
npm install
```

### Step 5: Start Development
```bash
npm run dev
```

## Method 2: GitHub Repository (Alternative)

If you have a GitHub account, I can guide you to:
1. Create a new repository
2. Upload all the files
3. Clone it to your local machine

## Method 3: Download as ZIP

Unfortunately, Replit doesn't have a direct "download as ZIP" feature, but you can:
1. Use the file explorer to select all files
2. Copy the content manually
3. Or use the GitHub method above

## What You'll Get

This portfolio website includes:
- ✅ Modern dark theme design
- ✅ Your name in the header (Aaryan Dharmadhikari)
- ✅ Hero section with photo background
- ✅ About section with experience and education
- ✅ Skills section (Tech + Data skills, no levels)
- ✅ Projects showcase
- ✅ Contact form
- ✅ Footer navigation menu
- ✅ Fully responsive design
- ✅ Working backend API

## Next Steps After Setup

1. **Replace placeholder content** with your real information
2. **Add your own photo** by updating the image URL in hero-section.tsx
3. **Update contact details** in contact-section.tsx
4. **Customize projects** in projects-section.tsx
5. **Modify experience/education** in about-section.tsx

## Need Help?

If you run into any issues during setup:
1. Make sure Node.js 18+ is installed
2. Check that all files copied correctly
3. Verify the folder structure matches exactly
4. Run `npm install` in the project root directory

Would you like me to help you with any specific part of getting this set up on your local machine?