import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/config/theme';
import { AppLayout } from '@/components/AppLayout';
import { Login } from '@/components/Login';
import { DealSourcing } from '@/pages/DealSourcing';
import { AcquisitionPipeline } from '@/pages/AcquisitionPipeline';
import { DueDiligence } from '@/pages/DueDiligence';

const CORRECT_PASSWORD = 'Genshare2025!';
const AUTH_KEY = 'genshare_auth';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | undefined>();

  useEffect(() => {
    // Check if user is already authenticated
    const savedAuth = sessionStorage.getItem(AUTH_KEY);
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (password: string) => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError(undefined);
      // Save auth state in session storage (clears when browser closes)
      sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
      setAuthError('Invalid password. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} error={authError} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              {/* Redirect root to deal sourcing */}
              <Route index element={<Navigate to="/deal-sourcing" replace />} />
              
              {/* Main routes */}
              <Route path="deal-sourcing" element={<DealSourcing />} />
              <Route path="acquisition-pipeline" element={<AcquisitionPipeline />} />
              <Route path="due-diligence" element={<DueDiligence />} />
              
              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/deal-sourcing" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
};

export default App;