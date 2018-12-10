import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { SharedModule } from './../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,
    SharedModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
