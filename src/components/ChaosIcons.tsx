// Minimal inline SVG icons representing the scattered, disconnected pieces
// of an unorganized business (email, spreadsheets, sticky notes, invoices,
// calls, contracts) - deliberately simple line-art so they read clearly at
// small size and recolor cleanly via `currentColor`.
export function IconEmail() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 12l18 15 18-15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSpreadsheet() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 18h36M6 30h36M18 6v36M30 6v36" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function IconSticky() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6h32v26l-10 10H8V6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M30 32v10l10-10H30z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M14 16h20M14 24h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconInvoice() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4h24v40l-4-3-4 3-4-3-4 3-4-3-4 3V4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 16h12M18 24h12M18 32h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCall() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 8c2 0 6 1 6 5 0 3-2 4-2 6s4 8 8 10 6 0 8-2 5 1 5 3-2 8-7 8C16 38 8 26 8 14c0-4 0-6 2-6z"
        stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8h36v22H18l-8 8V30H6V8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M14 16h20M14 22h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 14v10l8 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFolder() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12h13l4 5h19v21H6V12z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export const CHAOS_ICONS = [IconEmail, IconSpreadsheet, IconSticky, IconInvoice, IconCall, IconChat, IconClock, IconFolder];
