/**
 * Demo mode switch for tucsonhandyman.pro.
 *
 * Tucson Handyman Pro is no longer taking jobs. The site stays up as a live
 * demo and test bed for TradeKernel.
 *
 * DEMO_MODE = true
 *   - Shows a "demo site" banner on every page
 *   - Replaces the $99 Stripe booking flow with a demo notice (no payment form loads)
 *   - Keeps the contact form working for testing, but labels it as a demo
 *
 * DEMO_MODE = false
 *   - Restores the original behaviour (banner off, real booking flow, original contact copy)
 */
export const DEMO_MODE = true;

// Height of the banner in pixels. The header and page content are pushed down by this much.
export const DEMO_BANNER_HEIGHT = 36;

// Where the banner links to. Confirm this is the right address.
export const TRADEKERNEL_URL = "https://tradekernel.pro";
