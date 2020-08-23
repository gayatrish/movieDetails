import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListScreenComponent } from './movie-list-screen.component';

describe('MovieListScreenComponent', () => {
  let component: MovieListScreenComponent;
  let fixture: ComponentFixture<MovieListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
