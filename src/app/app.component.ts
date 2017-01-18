import {
  AfterViewInit,
  Component,
  HostBinding,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { SohoApplicationMenuComponent } from '@infor/sohoxi-angular';
import { ArgumentHelper } from '@infor/sohoxi-angular';
import { HeaderDynamicDemoRefService } from './header/header-dynamic-demo-ref.service';

@Component({
  selector: 'body', // tslint:disable-line
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ HeaderDynamicDemoRefService ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SohoApplicationMenuComponent) applicationMenu: SohoApplicationMenuComponent;

  @HostBinding('class.no-scroll') get isNoScroll() { return true; }

  constructor() {
    // @todo Set the locale here, to ensure all the values are setup.
    Locale.set('en-US');
  }

  ngAfterViewInit() {
    ArgumentHelper.checkInputNotNull('AppComponent', 'applicationMenu', this.applicationMenu);

    // A list of jQuery elements which trigger the openning and closing of the
    // application menu.
    this.applicationMenu.triggers = ['.application-menu-trigger'];
  }
}
