import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;
  beforeEach(() => {
    service = new LoadingService();
    window.requestAnimationFrame = (cb: Function) => cb();
  });

  it('should be created', () => {
    service = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });

  it('deve setar o loading para true', () => {
    service.showLoading();
    expect(service.loading).toBeTruthy();
  });

  it('deve setar o loading para false', () => {
    service.hideLoading();
    expect(service.loading).toBeFalsy();
  });
});
