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
} from '@mui/material';
import {
  Description,
  Search,
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
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
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

export const DealSourcing: React.FC = () => {
  const handleNavigateToService = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('Service URL not configured');
    }
  };

  const services = [
    {
      title: 'Broker Deal Sheet Extraction',
      description: 'Extract and process broker deal sheets, automatically parsing property information and financial data.',
      icon: <Description color="primary" />,
      url: serviceConfig.brokerServiceUrl,
    },
    {
      title: 'Xcllusive Crawler',
      description: 'Crawl Xcllusive property listings to gather comprehensive market data and property information.',
      icon: <Search color="primary" />,
      url: serviceConfig.xcllusiveUrl,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Deal Sourcing
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Access tools for sourcing and analyzing potential property deals. 
          These services help you gather market data, extract information from broker materials, 
          and identify investment opportunities.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
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