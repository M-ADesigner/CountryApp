import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    TablaComponent,
  ],
  exports: [
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    TablaComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
