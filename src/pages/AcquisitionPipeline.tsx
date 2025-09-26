import React from 'react';
import {
  Typography,
  Box,
  Container,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Timeline } from '@mui/icons-material';
import { serviceConfig } from '@/config/services';

export const AcquisitionPipeline: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!serviceConfig.airtableFunnelUrl) {
    return (
      <Container maxWidth="xl">
        <Box mb={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <Timeline color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h4" component="h1" gutterBottom>
              Acquisition Pipeline
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" paragraph>
            Track and manage your property acquisition funnel with integrated workflow management.
          </Typography>
        </Box>

        <Alert severity="warning" sx={{ mt: 2 }}>
          Airtable Funnel URL not configured. Please set the VITE_AIRTABLE_FUNNEL_URL environment variable.
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ height: 'calc(100vh - 120px)' }}>
      <Box mb={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <Timeline color="primary" sx={{ mr: 1, fontSize: 28 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Acquisition Pipeline
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Track and manage your property acquisition funnel with integrated workflow management.
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          height: 'calc(100% - 120px)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid #e9ecef',
        }}
      >
        {isLoading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="200px"
          >
            <CircularProgress />
            <Typography variant="body2" sx={{ ml: 2 }}>
              Loading Acquisition Pipeline...
            </Typography>
          </Box>
        )}

        {hasError && (
          <Box p={4}>
            <Alert severity="error">
              Failed to load the Airtable embed. Please check your internet connection or contact support.
            </Alert>
          </Box>
        )}

        <iframe
          src={serviceConfig.airtableFunnelUrl}
          title="Acquisition Pipeline - Airtable"
          width="100%"
          height="100%"
          style={{
            border: 'none',
            display: hasError ? 'none' : 'block',
          }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="clipboard-read; clipboard-write"
        />
      </Paper>
    </Container>
  );
};