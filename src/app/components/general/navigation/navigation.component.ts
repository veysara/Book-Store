import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  displayMenuItems: MenuItem[] = [];


  constructor(
		
  ) {
  
  }
  
  ngOnInit(): void {
    this.getMenuItems();
  }
  
  private traverseMenuItems(menuItems: MenuItem[]) {
    return menuItems.filter(item => {
      if (item.children) {
        item.children = this.traverseMenuItems(item.children);
      }
      return true; //show all menus
    });
  }
    
  getMenuItems(){
    const menuItems = [
      {
        title: "hello sara",
        routerLink: '/home',
        icon: 'dashboard',
        root: "dashboard",
        roles: []
      },
    ]
    this.displayMenuItems = this.traverseMenuItems(menuItems);
  }
}


export interface MenuItem {
	title: string; // Title to be displayed
	exact?: boolean; // Highlight when active or not
	routerLink?: string; // Link to redirect when click
	children?: MenuItem[]; // Children of the menu
	roles?: string[]; // Allowed roles for the menu
	icon?: string; // Icon to be displayed
	expanded?: boolean; // Show children or not
	root?: string
}