import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumSubscriptionPagePageRoutingModule } from './premium-subscription-page-routing.module';

import { PremiumSubscriptionPagePage } from './premium-subscription-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumSubscriptionPagePageRoutingModule
  ],
  declarations: [PremiumSubscriptionPagePage]
})
export class PremiumSubscriptionPagePageModule {}
