import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FugaListPage } from './fuga-list.page';

const routes: Routes = [
  {
    path: '',
    component: FugaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FugaListPageRoutingModule {}
