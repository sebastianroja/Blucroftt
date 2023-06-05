import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FugaListPage } from './fuga-list.page';

describe('FugaListPage', () => {
  let component: FugaListPage;
  let fixture: ComponentFixture<FugaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FugaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
