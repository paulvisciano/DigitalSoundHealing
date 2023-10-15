import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.musicalRealms',
  appName: 'musical-realms',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
