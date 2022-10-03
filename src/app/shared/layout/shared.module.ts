import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
// import { NavbarPipe } from './navbar/navbar.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
    // NavbarPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
