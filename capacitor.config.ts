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
      // privateKey: process.env['CAPGO_KEY'],
      autoUpdate: true,
      directUpdate: true,
      // version: "0.0.7"
    }
  }
};

export default config;
