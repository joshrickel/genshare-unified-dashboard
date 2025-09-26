import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/config/theme';
import { AppLayout } from '@/components/AppLayout';
import { DealSourcing } from '@/pages/DealSourcing';
import { AcquisitionPipeline } from '@/pages/AcquisitionPipeline';
import { DueDiligence } from '@/pages/DueDiligence';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
};

export default App;