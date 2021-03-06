import { Component } from '@angular/core';
// @ts-ignore
import appRoot from './app.component.html';

// const appRoot = require('./app.component.html') as AppRootComponent;

@Component({
    selector: 'app-root-angular',
    styles: [],
    template: appRoot as string,
})
class AppRootComponent {
    message = 'Hello Angular';
}

export default AppRootComponent;
