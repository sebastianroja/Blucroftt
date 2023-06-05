import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiumSubscriptionPagePage } from './premium-subscription-page.page';

const routes: Routes = [
  {
    path: '',
    component: PremiumSubscriptionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiumSubscriptionPagePageRoutingModule {}
