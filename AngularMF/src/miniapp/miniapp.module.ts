import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiniAppComponent } from './miniapp.component';

@NgModule({
  declarations: [MiniAppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MiniAppComponent],
})
export class MiniAppModule {}
