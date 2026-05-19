# GitHub Pages Deployment Guide

This project is now configured for automatic deployment to GitHub Pages.

## What Was Configured

### 1. **Next.js Configuration** (`next.config.ts`)
- Enabled static export with `output: "export"`
- Set `unoptimized: true` for images (GitHub Pages doesn't support Next.js image optimization)

### 2. **Package.json Scripts**
- Added `"export"` script that builds and exports static HTML
- The build process now generates a static site in the `out/` directory

### 3. **API Routes**
- Added `export const dynamic = "force-static"` to `/api/home/route.ts`
- This marks the API route as statically prerendered (required for static export)

### 4. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on every push to `main` branch
- Uses GitHub Pages permissions to upload artifacts
- Deploys to your GitHub Pages site

## Setup Instructions

### Step 1: Configure GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages` (will be auto-created by the workflow)
   - Folder: `/ (root)`
4. Click **Save**

### Step 2: Ensure Main Branch Protection (Optional)

If desired, add branch protection rules to `main`:
- Require status checks to pass before merging (lint and build must pass)

### Step 3: Push to Main Branch

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

The workflow will automatically:
- Run linting and tests
- Build the static site
- Deploy to GitHub Pages

### Step 4: Verify Deployment

1. Go to your repository's **Actions** tab on GitHub
2. Wait for the **"Deploy to GitHub Pages"** workflow to complete (should take ~2-3 minutes)
3. Once complete, visit: `https://username.github.io` to see your site live

## Important Notes

- **Static Export Only**: The site is now deployed as static HTML. All pages are pre-rendered.
- **API Routes**: The `/api/home` endpoint is available as a static JSON file at `https://username.github.io/api/home.json`
- **Build Artifacts**: The `out/` directory contains the static site and should not be committed to git
- **Deployment URL**: Your site will be available at `https://username.github.io`
- **Auto-refresh**: The site automatically deploys whenever you push to the `main` branch

## Troubleshooting

### Build fails with "route with output: export" error
- Ensure all dynamic routes/API handlers have `export const dynamic = "force-static"` or `export const revalidate = number`

### Site not updating after push
- Check the GitHub Actions workflow in the **Actions** tab to see if it completed successfully
- GitHub Pages can take a few minutes to publish changes

### Assets (images, CSS) not loading
- Check that images use the `unoptimized` property in `next.config.ts`
- Ensure all static assets are in the `public/` directory

## Customization

To deploy to a custom domain:
1. Add a `CNAME` file to the `public/` directory with your custom domain
2. Configure your domain's DNS records to point to GitHub Pages

For more info, see: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
