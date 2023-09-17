import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Dialog } from '@capacitor/dialog';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

CapacitorUpdater.addListener('updateAvailable', async (res) => {
  try {
    await Dialog.alert({
      title: 'Update Available111',
      message: `Version ${res.bundle.version} is available. The app will update now`,
    });
    CapacitorUpdater.set(res.bundle);
  } catch (error) {
    console.log(error);
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
