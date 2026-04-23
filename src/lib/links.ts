// Asset prefix for static export with basePath. Mirrors next.config.mjs.
// Set DEPLOY_TARGET=gh-pages for the GitHub Pages preview URL build; leave
// unset (Cloudflare / root domain) for the production slateexit.com build.
export const ASSET_PREFIX =
  process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'gh-pages' ? '/slate-exit-mockup' : '';

// Placeholder destinations. Replace with real URLs when ready.
export const LINKS = {
  book: '#book-call',          // Cal.com / SavvyCal booking link goes here
  webinar: '#webinar',         // Stripe Payment Link for the $197 webinar goes here
  inquireIntensive: '#inquire-intensive',
  inquirePartnership: '#inquire-partnership',
  email: 'mailto:jim@slateexit.com',
  linkedin: 'https://www.linkedin.com/in/jim-coleman/',
};
