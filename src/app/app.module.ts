import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConfigService} from "./config.service";
import {CinchyConfig, CinchyModule, CinchyService} from "@cinchy-co/angular-sdk";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "./components/components.module";
import {CdkScrollableModule, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {VimeModule} from "@vime/angular";


export function appLoadFactory(config: ConfigService) {
  return () => config.loadConfig().toPromise();
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CinchyModule.forRoot(),
    ComponentsModule,
    CdkScrollableModule,
    BrowserAnimationsModule,
    VimeModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appLoadFactory,
      deps: [ConfigService],
      multi: true
    },
    CinchyModule,
    CinchyService,
    {
      provide: CinchyConfig,
      useFactory: (config: ConfigService) => {
        return config.envConfig;
      },
      deps: [ConfigService]
    },
    {provide: 'BASE_URL', useFactory: getBaseUrl}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
