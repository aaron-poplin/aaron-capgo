import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'aaron-capgo.io.ionic.starter',
  appName: 'aaron-capgo',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    CapacitorUpdater: {
      autoUpdate: true,
      directUpdate: true,
    },
  },
};

export default config;
