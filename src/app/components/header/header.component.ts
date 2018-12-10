import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

	public userData;
	constructor(private router: Router) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
		if(userData){
			this.userData = JSON.parse(userData);
		}
	}

	logout() {
		localStorage.removeItem('loginUser');
		this.router.navigate(['/']);
	}

}
