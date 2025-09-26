/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BROKER_SERVICE_URL: string
  readonly VITE_XCLLUSIVE_URL: string
  readonly VITE_AIRTABLE_FUNNEL_URL: string
  readonly VITE_AIRTABLE_PORTAL_MGMT_URL: string
  readonly VITE_DUE_DILIGENCE_PORTAL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}