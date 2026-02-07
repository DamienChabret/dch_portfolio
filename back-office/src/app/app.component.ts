import {Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotificationContainerComponent } from '@components/notifications/notificationContainer/notificationContainer.component';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ { provide: LOCALE_ID, useValue: "fr-FR" }],
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NotificationContainerComponent,
  ],
  template: `
    <app-header></app-header>
      <div class="page-wrapper">
        <div class="content-padding">
          <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
      <app-notification-container></app-notification-container>
  `,
  styleUrl: '../assets/styles.scss',
  // styles: [
  //   `
  //     .page-wrapper {
  //       display: flex;
  //       flex-direction: column;
  //       min-height: 100vh;
  //       overflow-x: hidden;
  //     }

  //     .content-padding {
  //       flex: 1;
  //       margin-right: 5%;
  //       margin-left: 5%;
  //     }

  //     .route-title {
        
  //     }
  //   `,
  // ],
})
export class AppComponent {}
