import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPermissionComponent } from './no-permission.component';
import { NoPermissionRoutingModule } from './no-permission-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NoPermissionRoutingModule
  ],
  declarations: [NoPermissionComponent]
})
export class NoPermissionModule { }
