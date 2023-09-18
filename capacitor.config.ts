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
      // TODO: configure autoUpdate and directUpdate to reflect prod and dev env
      directUpdate: true,
    },
  },
};

export default config;
