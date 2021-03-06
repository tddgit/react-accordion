import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppRoot from './app.component';

@NgModule({
    bootstrap: [AppRoot],
    declarations: [AppRoot],
    imports: [BrowserModule],
})
class AppModule {}

export default AppModule;
