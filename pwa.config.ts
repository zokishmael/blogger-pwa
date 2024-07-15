import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Lawu 22 News',
  shortName: 'Lawu 22',
  description: ' Situs Informasi Kabar Papua Selatan',
  direction: 'auto',
  language: 'id-ID',
  backgroundColor: '#ff3200',
  themeColor: '#ff3200',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'undefined',
} satisfies Config;
