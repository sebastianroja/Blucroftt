import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumSubscriptionPagePage } from './premium-subscription-page.page';

describe('PremiumSubscriptionPagePage', () => {
  let component: PremiumSubscriptionPagePage;
  let fixture: ComponentFixture<PremiumSubscriptionPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PremiumSubscriptionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
