import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'aaron-capgo.io.ionic.starter',
  appName: 'aaron-capgo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorUpdater: {
      directUpdate: true,
    }
  }
};

export default config;
