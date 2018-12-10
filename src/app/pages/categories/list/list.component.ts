import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public categoryList:any = [];
	public loginUser;
	public deleteModalOpen = false;
	public selectedCategory = 0;

	constructor(private router: Router) { }

	ngOnInit() {
	  	let userData = localStorage.getItem('loginUser');
	  	if(userData){
	  		this.loginUser = JSON.parse(userData);
	  		if(this.loginUser.permissions.indexOf('category-list') > -1){
	  			let categoryList = localStorage.getItem('categoryList');
				if(categoryList){
					this.categoryList = JSON.parse(categoryList);
				}
	  		}else{
				this.router.navigate(['/']);
	  		}
	  	}else{
			this.router.navigate(['/']);
  		}
	}

	deleteCategory(index) {
		this.selectedCategory = index;
		this.deleteModalOpen = true;
	}


	deleteSubmit(){
		this.categoryList.splice(this.selectedCategory, 1);
		localStorage.removeItem('categoryList');
		localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
		this.closeModal();
	}

	closeModal() {
		this.deleteModalOpen = false;
	}
}
