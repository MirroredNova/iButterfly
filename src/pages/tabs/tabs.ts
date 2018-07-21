import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { WheelPage } from '../wheel/wheel';
import { CutePage } from '../cute/cute';
import { ItemsPage } from '../items/items';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = WheelPage;
  tab4Root = CutePage;
  tab5Root = ItemsPage;

  constructor() {

  }
}
