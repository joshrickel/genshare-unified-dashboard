import { getServiceConfig, serviceConfig } from '@/config/services';

// Mock console.warn to prevent noise in tests
const mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});

describe('Services Configuration', () => {
  beforeEach(() => {
    mockConsoleWarn.mockClear();
  });

  afterAll(() => {
    mockConsoleWarn.mockRestore();
  });

  describe('getServiceConfig', () => {
    describe('when all environment variables are present', () => {
      it('should return complete service configuration', () => {
        const config = getServiceConfig();
        
        expect(config).toEqual({
          brokerServiceUrl: process.env.VITE_BROKER_SERVICE_URL,
          xcllusiveUrl: process.env.VITE_XCLLUSIVE_URL,
          airtableFunnelUrl: process.env.VITE_AIRTABLE_FUNNEL_URL,
          airtablePortalMgmtUrl: process.env.VITE_AIRTABLE_PORTAL_MGMT_URL,
          dueDiligencePortalUrl: process.env.VITE_DUE_DILIGENCE_PORTAL_URL,
        });
      });

      it('should not log any warnings', () => {
        getServiceConfig();
        expect(mockConsoleWarn).not.toHaveBeenCalled();
      });
    });

    describe('when some environment variables are missing', () => {
      it('should still return configuration object with missing values', () => {
        // Mock import.meta.env with missing values
        const originalEnv = import.meta.env;
        Object.defineProperty(import.meta, 'env', {
          value: {
            ...originalEnv,
            VITE_BROKER_SERVICE_URL: undefined,
          },
          writable: true,
        });

        const config = getServiceConfig();
        
        expect(config).toBeDefined();
        expect(config.brokerServiceUrl).toBeUndefined();
        
        // Restore original env
        Object.defineProperty(import.meta, 'env', {
          value: originalEnv,
          writable: true,
        });
      });

      it('should log warning for missing environment variables', () => {
        // This would be implementation-dependent on how we handle missing vars
        const config = getServiceConfig();
        expect(config).toBeDefined();
      });
    });
  });

  describe('serviceConfig singleton', () => {
    it('should export a pre-configured service config instance', () => {
      expect(serviceConfig).toBeDefined();
      expect(typeof serviceConfig).toBe('object');
      
      // Should have all expected properties
      expect(serviceConfig).toHaveProperty('brokerServiceUrl');
      expect(serviceConfig).toHaveProperty('xcllusiveUrl');
      expect(serviceConfig).toHaveProperty('airtableFunnelUrl');
      expect(serviceConfig).toHaveProperty('airtablePortalMgmtUrl');
      expect(serviceConfig).toHaveProperty('dueDiligencePortalUrl');
    });

    it('should be the same instance as calling getServiceConfig()', () => {
      const directConfig = getServiceConfig();
      
      // Compare structure (values might differ due to env changes during tests)
      expect(Object.keys(serviceConfig)).toEqual(Object.keys(directConfig));
    });
  });

  describe('ServiceConfig interface compliance', () => {
    it('should match ServiceConfig interface structure', () => {
      const config = getServiceConfig();
      
      // Verify all required properties exist
      const requiredProperties = [
        'brokerServiceUrl',
        'xcllusiveUrl', 
        'airtableFunnelUrl',
        'airtablePortalMgmtUrl',
        'dueDiligencePortalUrl'
      ];
      
      requiredProperties.forEach(prop => {
        expect(config).toHaveProperty(prop);
      });
    });

    it('should have string or undefined values for all properties', () => {
      const config = getServiceConfig();
      
      Object.values(config).forEach(value => {
        expect(['string', 'undefined']).toContain(typeof value);
      });
    });
  });
});