import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/general/nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { HomeComponent } from './components/body/home/home.component';
import { AboutComponent } from './components/body/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ],


  providers: [
    // [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }],
    // [{ provide: DEFAULT_TIMEOUT, useValue: 36000000 }],
    // {
    //   provide: MatPaginatorIntl,
    //   useClass: MemberPagination
    // },
  ],
  bootstrap: [AppComponent],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
