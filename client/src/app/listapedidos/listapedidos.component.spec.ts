import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapedidosComponent } from './listapedidos.component';

describe('ListapedidosComponent', () => {
  let component: ListapedidosComponent;
  let fixture: ComponentFixture<ListapedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
