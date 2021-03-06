import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './components/app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err: Error) => {
        console.log(err);
    });
