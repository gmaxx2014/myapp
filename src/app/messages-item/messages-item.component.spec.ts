import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesItemComponent } from './messages-item.component';

describe('MessagesItemComponent', () => {
  let component: MessagesItemComponent;
  let fixture: ComponentFixture<MessagesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
