import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductGridListComponent } from './components/product-grid-list/product-grid-list.component';
import { ProductGridControlsComponent } from './components/product-grid-controls/product-grid-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    NewsletterComponent,
    ProductGridComponent,
    ProductGridListComponent,
    ProductGridControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
