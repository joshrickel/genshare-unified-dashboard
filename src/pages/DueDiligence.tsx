import React from 'react';
import {
  Typography,
  Box,
  Container,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Assessment,
} from '@mui/icons-material';


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

  return (
    <Container maxWidth="xl" sx={{ height: 'calc(100vh - 120px)' }}>
      <Box mb={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <Assessment color="primary" sx={{ mr: 1, fontSize: 28 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Due Diligence Management
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Manage due diligence processes, track progress, and collaborate with stakeholders.
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
