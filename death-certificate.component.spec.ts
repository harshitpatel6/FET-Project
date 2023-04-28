import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathCertificateComponent } from './death-certificate.component';

describe('DeathCertificateComponent', () => {
  let component: DeathCertificateComponent;
  let fixture: ComponentFixture<DeathCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
