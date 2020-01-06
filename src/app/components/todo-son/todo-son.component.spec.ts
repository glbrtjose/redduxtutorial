import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSonComponent } from './todo-son.component';

describe('TodoSonComponent', () => {
  let component: TodoSonComponent;
  let fixture: ComponentFixture<TodoSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
