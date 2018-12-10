import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { SharedModule } from './../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NewRoutingModule,
    SharedModule
  ],
  declarations: [NewComponent]
})
export class NewModule { }
