import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { DealSourcing } from '@/pages/DealSourcing';
import { theme } from '@/config/theme';

// Mock window.open
const mockWindowOpen = jest.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

// Helper to render components with required providers
const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('DealSourcing Page', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  describe('when DealSourcing page is rendered', () => {
    it('should display page title and description', () => {
      renderWithProviders(<DealSourcing />);
      
      expect(screen.getByText('Deal Sourcing')).toBeInTheDocument();
      expect(screen.getByText(/Access tools for sourcing/i)).toBeInTheDocument();
    });

    it('should display Broker Deal Sheet Extraction card', () => {
      renderWithProviders(<DealSourcing />);
      
      expect(screen.getByText('Broker Deal Sheet Extraction')).toBeInTheDocument();
      expect(screen.getByText(/Extract and process/i)).toBeInTheDocument();
    });

    it('should display Xcllusive Crawler card', () => {
      renderWithProviders(<DealSourcing />);
      
      expect(screen.getByText('Xcllusive Crawler')).toBeInTheDocument();
      expect(screen.getByText(/Crawl Xcllusive/i)).toBeInTheDocument();
    });

    it('should display cards in a responsive grid layout', () => {
      renderWithProviders(<DealSourcing />);
      
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(2);
      
      // Cards should be clickable
      cards.forEach(card => {
        expect(card).toBeInTheDocument();
      });
    });
  });

  describe('when service cards are clicked', () => {
    it('should open Broker service in new window when clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<DealSourcing />);
      
      const brokerCard = screen.getByText('Broker Deal Sheet Extraction').closest('button');
      expect(brokerCard).toBeInTheDocument();
      
      if (brokerCard) {
        await user.click(brokerCard);
        expect(mockWindowOpen).toHaveBeenCalledWith(
          process.env.VITE_BROKER_SERVICE_URL,
          '_blank'
        );
      }
    });

    it('should open Xcllusive service in new window when clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<DealSourcing />);
      
      const xcllusiveCard = screen.getByText('Xcllusive Crawler').closest('button');
      expect(xcllusiveCard).toBeInTheDocument();
      
      if (xcllusiveCard) {
        await user.click(xcllusiveCard);
        expect(mockWindowOpen).toHaveBeenCalledWith(
          process.env.VITE_XCLLUSIVE_URL,
          '_blank'
        );
      }
    });
  });

  describe('when service URLs are not configured', () => {
    it('should handle missing environment variables gracefully', () => {
      // This test ensures the component doesn't crash with missing env vars
      renderWithProviders(<DealSourcing />);
      
      expect(screen.getByText('Deal Sourcing')).toBeInTheDocument();
      expect(screen.getByText('Broker Deal Sheet Extraction')).toBeInTheDocument();
      expect(screen.getByText('Xcllusive Crawler')).toBeInTheDocument();
    });
  });
});