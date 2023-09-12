import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { SplashScreen } from '@capacitor/splash-screen';

CapacitorUpdater.addListener('appReady', () => {
  // Hide splash
  SplashScreen.hide()
})


// import { Dialog } from '@capacitor/dialog';

// CapacitorUpdater.addListener('updateAvailable', async (res) => {
//   try {
//     await Dialog.alert({
//       title: 'Update Available',
//       message: `Version ${res.bundle.version} is available. The app will update now`,
//     })
//     CapacitorUpdater.set(res.bundle)
//   }
//   catch (error) {
//     console.log(error)
//   }
// });

CapacitorUpdater.notifyAppReady();


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
