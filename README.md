# VNBA Website

Official website for Vietnam Basketball Academy.

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is configured to deploy automatically to vnba.edu.vn whenever code is pushed to the master branch.

### CI/CD Pipeline

The deployment is handled by GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

The pipeline performs the following steps:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the static site
5. Deploys to the production server using rsync
6. Verifies the deployment

## Project Structure

- `src/app`: Contains all page components using Next.js App Router
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and shared code
- `public`: Static assets like images and fonts

## Technology Stack

- **Framework**: Next.js 15.3
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Actions → Static Export → Custom VPS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
