# VNBA Website

Official website for Vietnam Basketball Academy.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is configured to deploy to GitHub Pages automatically whenever code is pushed to the main branch.

### Manual Deployment

If you need to deploy manually, you can use:

```bash
npm run build   # Build the static site
npm run deploy  # Deploy to GitHub Pages
```

## GitHub Pages Configuration

The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

To set up GitHub Pages:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select:
   - Source: "GitHub Actions"

## Custom Domain (Optional)

To use a custom domain:

1. Update the `.github/CNAME` file with your domain
2. Configure your DNS settings to point to GitHub Pages
3. In your repository settings under Pages, add your custom domain

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
