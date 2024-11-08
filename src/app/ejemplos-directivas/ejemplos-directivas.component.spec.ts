import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosDirectivasComponent } from './ejemplos-directivas.component';

describe('EjemplosDirectivasComponent', () => {
  let component: EjemplosDirectivasComponent;
  let fixture: ComponentFixture<EjemplosDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemplosDirectivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemplosDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
