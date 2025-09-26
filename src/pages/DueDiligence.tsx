import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Container,
  Alert,
} from '@mui/material';
import {
  Assessment,
  Settings,
  OpenInNew,
} from '@mui/icons-material';
import { serviceConfig } from '@/config/services';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  onNavigate: (url: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  url,
  onNavigate,
}) => {
  const handleClick = () => {
    onNavigate(url);
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-1px)',
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" mb={2}>
          {icon}
          <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          endIcon={<OpenInNew />}
          onClick={handleClick}
        >
          Launch Service
        </Button>
      </CardActions>
    </Card>
  );
};

export const DueDiligence: React.FC = () => {
  const handleNavigateToService = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('Service URL not configured');
    }
  };

  const services = [
    {
      title: 'Due Diligence Portal',
      description: 'Access the main due diligence portal with comprehensive deal management, document review, and collaboration tools.',
      icon: <Assessment color="primary" />,
      url: serviceConfig.dueDiligencePortalUrl,
    },
    {
      title: 'Portal Management',
      description: 'Manage portal settings, user access, workflow configurations, and administrative functions.',
      icon: <Settings color="primary" />,
      url: serviceConfig.airtablePortalMgmtUrl,
    },
  ];

  const missingUrls = services.filter(service => !service.url);

  return (
    <Container maxWidth="xl">
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Due Diligence
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Access comprehensive due diligence tools and portal management systems. 
          Manage deals, review documents, and collaborate with stakeholders through integrated platforms.
        </Typography>
      </Box>

      {missingUrls.length > 0 && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          Some services are not configured. Missing URLs for: {missingUrls.map(s => s.title).join(', ')}.
          Please check your environment variables.
        </Alert>
      )}

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={6} key={service.title}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              url={service.url}
              onNavigate={handleNavigateToService}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
