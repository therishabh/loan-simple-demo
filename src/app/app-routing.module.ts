import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [{
		path: '',
		component: AppComponent,
		children: [{
			path: '',
			loadChildren: './pages/login/login.module#LoginModule',
		}]
	},{
		path : '',
		component : LayoutComponent,
		children : [{
			path: 'product',
			loadChildren: './pages/products/products.module#ProductsModule',
			canActivate: [AuthGaurdService]
		},{
			path: 'category',
			loadChildren: './pages/categories/categories.module#CategoriesModule',
			canActivate: [AuthGaurdService]
		},{
			path: 'no-permission',
			loadChildren: './pages/no-permission/no-permission.module#NoPermissionModule',
			canActivate: [AuthGaurdService]
		}]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
