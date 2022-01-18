import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    CardModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent
  ]
})
export class ComponentsModule {
}
