import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { AppLayout } from '@/components/AppLayout';
import { theme } from '@/config/theme';

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

describe('AppLayout Component', () => {
  describe('when AppLayout is rendered', () => {
    it('should display the main navigation sidebar', () => {
      renderWithProviders(<AppLayout />);
      
      // Should have sidebar with navigation items
      expect(screen.getByText('Deal Sourcing')).toBeInTheDocument();
      expect(screen.getByText('Acquisition Pipeline')).toBeInTheDocument();
      expect(screen.getByText('Due Diligence')).toBeInTheDocument();
    });

    it('should display the top navigation bar', () => {
      renderWithProviders(<AppLayout />);
      
      // Should have app bar with title
      expect(screen.getByText('Genshare Unified Dashboard')).toBeInTheDocument();
    });

    it('should render main content area for nested routes', () => {
      renderWithProviders(<AppLayout />);
      
      // Should have main content area (where Outlet renders)
      const mainContent = screen.getByRole('main');
      expect(mainContent).toBeInTheDocument();
    });

    it('should apply Material-UI theme styling', () => {
      renderWithProviders(<AppLayout />);
      
      // Should have MUI components with theme styles
      const sidebar = screen.getByRole('navigation');
      expect(sidebar).toHaveClass('MuiDrawer-root');
    });
  });

  describe('when navigation items are clicked', () => {
    it('should handle deal sourcing navigation', async () => {
      renderWithProviders(<AppLayout />);
      
      const dealSourcingLink = screen.getByText('Deal Sourcing');
      expect(dealSourcingLink.closest('a')).toHaveAttribute('href', '/deal-sourcing');
    });

    it('should handle acquisition pipeline navigation', async () => {
      renderWithProviders(<AppLayout />);
      
      const pipelineLink = screen.getByText('Acquisition Pipeline');
      expect(pipelineLink.closest('a')).toHaveAttribute('href', '/acquisition-pipeline');
    });

    it('should handle due diligence navigation', async () => {
      renderWithProviders(<AppLayout />);
      
      const dueDiligenceLink = screen.getByText('Due Diligence');
      expect(dueDiligenceLink.closest('a')).toHaveAttribute('href', '/due-diligence');
    });
  });
});