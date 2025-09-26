/**
 * Service configuration and environment variable handling
 * All external service URLs and configuration are centralized here
 */

export interface ServiceConfig {
  brokerServiceUrl: string;
  xcllusiveUrl: string;
  airtableFunnelUrl: string;
  airtablePortalMgmtUrl: string;
  dueDiligencePortalUrl: string;
}

/**
 * Get service configuration from environment variables
 * Throws error if required environment variables are missing
 */
export const getServiceConfig = (): ServiceConfig => {
  const config = {
    brokerServiceUrl: import.meta.env.VITE_BROKER_SERVICE_URL,
    xcllusiveUrl: import.meta.env.VITE_XCLLUSIVE_URL,
    airtableFunnelUrl: import.meta.env.VITE_AIRTABLE_FUNNEL_URL,
    airtablePortalMgmtUrl: import.meta.env.VITE_AIRTABLE_PORTAL_MGMT_URL,
    dueDiligencePortalUrl: import.meta.env.VITE_DUE_DILIGENCE_PORTAL_URL,
  };

  // Validate that all required environment variables are present
  const missingVars = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.warn(`Missing environment variables: ${missingVars.join(', ')}`);
  }

  return config;
};

// Export singleton instance
export const serviceConfig = getServiceConfig();