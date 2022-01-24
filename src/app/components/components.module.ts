import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {SelectButtonModule} from 'primeng/selectbutton';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarsComponent} from "./avatars/avatars.component";
import {VideoBannerComponent} from './video-banner/video-banner.component';
import {VimeModule} from "@vime/angular";
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AvatarsComponent,
    VideoBannerComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    CardModule,
    SelectButtonModule,
    AvatarModule,
    AvatarGroupModule,
    VimeModule,
    ButtonModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    AvatarsComponent,
    VideoBannerComponent
  ]
})
export class ComponentsModule {
}
