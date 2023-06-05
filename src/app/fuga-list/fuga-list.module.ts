import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FugaListPageRoutingModule } from './fuga-list-routing.module';

import { FugaListPage } from './fuga-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FugaListPageRoutingModule
  ],
  declarations: [FugaListPage]
})
export class FugaListPageModule {}
