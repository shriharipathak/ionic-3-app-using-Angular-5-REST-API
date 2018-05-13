import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { AdduserPage } from "../adduser/adduser";

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AdduserPage;
  
  constructor() {
    console.log('tabs loaded.');
  }

}
