import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailScreenComponent } from './movie-detail-screen.component';

describe('MovieDetailScreenComponent', () => {
  let component: MovieDetailScreenComponent;
  let fixture: ComponentFixture<MovieDetailScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
