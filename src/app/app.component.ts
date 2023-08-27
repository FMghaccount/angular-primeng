import { ProductService } from './services/product.service';
import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private productService: ProductService // private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }
}

// this.translateService.setDefaultLang('en');

// translate(lang: string) {
//   this.translateService.use(lang);
//   this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
// }
// this.primengConfig.setTranslation({
//   accept: 'Accept',
//   reject: 'Cancel',
//   //translations
// });
//   this.primengConfig.filterMatchModeOptions = {
//     text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
//     numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
//     date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
// };
