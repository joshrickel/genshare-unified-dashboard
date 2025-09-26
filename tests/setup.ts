import '@testing-library/jest-dom';

// Mock window.open for testing
Object.defineProperty(window, 'open', {
  writable: true,
  value: jest.fn(),
});

// Mock environment variables
process.env = {
  ...process.env,
  VITE_BROKER_SERVICE_URL: 'http://localhost:3001',
  VITE_XCLLUSIVE_URL: 'http://localhost:3002', 
  VITE_AIRTABLE_FUNNEL_URL: 'https://airtable.com/embed/funnel',
  VITE_AIRTABLE_PORTAL_MGMT_URL: 'https://airtable.com/embed/portal',
  VITE_DUE_DILIGENCE_PORTAL_URL: 'https://dd-portal.vercel.app',
};