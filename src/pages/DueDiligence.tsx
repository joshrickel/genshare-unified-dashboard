import React from 'react';
import {
  Typography,
  Box,
  Container,
  Paper,
  CircularProgress,
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import {
  Assessment,
  OpenInNew,
} from '@mui/icons-material';
import { serviceConfig } from '@/config/services';


export const DueDiligence: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleOpenPortal = () => {
    if (serviceConfig.dueDiligencePortalUrl) {
      window.open(serviceConfig.dueDiligencePortalUrl, '_blank');
    } else {
      console.warn('Due Diligence Portal URL not configured');
    }
  };

  return (
    <Container maxWidth="xl" sx={{ height: 'calc(100vh - 120px)' }}>
      <Box mb={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            <Assessment color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h4" component="h1" gutterBottom>
              Due Diligence
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Access the due diligence portal and manage processes through integrated tools.
        </Typography>

        {/* Quick Access Card */}
        <Card elevation={0} sx={{ mb: 3, border: '1px solid #e9ecef' }}>
          <CardContent sx={{ py: 2 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" fontWeight={600}>
                  Due Diligence Portal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access the main portal for deal management, document review, and collaboration.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  endIcon={<OpenInNew />}
                  onClick={handleOpenPortal}
                  disabled={!serviceConfig.dueDiligencePortalUrl}
                >
                  Open Portal
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {!serviceConfig.dueDiligencePortalUrl && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            Due Diligence Portal URL not configured. Please set the VITE_DUE_DILIGENCE_PORTAL_URL environment variable.
          </Alert>
        )}
      </Box>

      {/* Management Interface Section */}
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        Management Interface
      </Typography>
      
      <Paper
        elevation={0}
        sx={{
          height: 'calc(100% - 180px)',
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
              Loading Due Diligence Management...
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
          className="airtable-embed"
          src="https://airtable.com/embed/appc7SdySCQlOBEnK/shrD2Vw714Ps4Ig8i"
          title="Due Diligence Management - Airtable"
          width="100%"
          height="100%"
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            display: hasError ? 'none' : 'block',
          }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </Paper>
    </Container>
  );
};
