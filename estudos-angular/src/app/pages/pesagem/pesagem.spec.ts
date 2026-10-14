import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pesagem } from './pesagem';

describe('Pesagem', () => {
  let component: Pesagem;
  let fixture: ComponentFixture<Pesagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pesagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pesagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
