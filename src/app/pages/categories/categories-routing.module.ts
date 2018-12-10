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
		loadChildren: './../categories/list/list.module#ListModule'
	}, {
		path: 'new',
		loadChildren: './../categories/new/new.module#NewModule'
	}, {
		path: 'edit',
		redirectTo: 'list',
		pathMatch: 'full'
	}, {
		path: 'edit/:id',
		loadChildren: './../categories/edit/edit.module#EditModule'
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
