import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MiniAppModule } from './miniapp/miniapp.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(MiniAppModule)
    .catch((err) => console.error(err));
};

export { mount };
