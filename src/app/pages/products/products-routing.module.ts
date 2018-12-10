import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	children: [{
		path: '',
		redirectTo: 'list',
		pathMatch: 'full'
	}, {
		path: 'list',
		loadChildren: './../products/list/list.module#ListModule'
	}, {
		path: 'new',
		loadChildren: './../products/new/new.module#NewModule'
	}, {
		path: 'edit',
		redirectTo: 'list',
		pathMatch: 'full'
	}, {
		path: 'edit/:id',
		loadChildren: './../products/edit/edit.module#EditModule'
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
