import { TestBed } from '@angular/core/testing';
import { BasePageComponent } from './base.page';


describe('BasePage', () => {
  let basePage: BasePageComponent;

  it('should create', () => {
    expect(basePage).toBeTruthy();
  });

  it('should check if mobile view', () => {
    basePage.checkIfMobile();
    expect(basePage.isMobileView).toBe(true || false);
  });

  it('should call checkIfMobile on window resize', () => {
    const event = new Event('resize');
    basePage.onResize(event);
    expect(basePage.checkIfMobile).toHaveBeenCalledTimes(1);
  });
});
