/**
 * BookingModal.tsx
 *
 * Wraps SafeAtHomeBooking in a modal triggered by the
 * "Schedule an Assessment" button.
 *
 * Usage:
 *   <BookingModal />
 *
 * Add VITE_STRIPE_PUBLISHABLE_KEY to your .env (and Cloudflare Pages env vars).
 */

import { useState, useEffect } from 'react';
import SafeAtHomeBooking from './SafeAtHomeBooking';
import './SafeAtHomeBooking.css';
import './BookingModal.css';
import { DEMO_MODE } from '../app/demoMode';

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string;

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <button className="sah-trigger-btn" onClick={() => setOpen(true)}>
        {DEMO_MODE ? 'Schedule an Assessment (Demo)' : 'Schedule an Assessment'}
      </button>

      {open && (
        <div className="sah-modal-overlay" onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="sah-modal" role="dialog" aria-modal="true" aria-label="Schedule a Safe at Home Assessment">
            <div className="sah-modal-header">
              <div>
                <h2>Safe at Home Assessment</h2>
                <p>{DEMO_MODE ? 'Demo of the booking flow' : '2.5-hour home safety evaluation · $99'}</p>
              </div>
              <button className="sah-modal-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            <div className="sah-modal-body">
              {DEMO_MODE ? (
                <div style={{ padding: '24px 8px', lineHeight: 1.6 }}>
                  <p style={{ fontWeight: 600, marginBottom: 8 }}>
                    This is a demo. Tucson Handyman Pro is no longer taking jobs.
                  </p>
                  <p>
                    No appointments are being scheduled and no payments are being collected on this site.
                    The booking flow here shows what TradeKernel can do for a trades business.
                  </p>
                </div>
              ) : (
                <SafeAtHomeBooking stripePublishableKey={STRIPE_KEY} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
