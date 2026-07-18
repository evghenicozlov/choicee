import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewList } from './preview-list';

describe('PreviewList', () => {
  let component: PreviewList;
  let fixture: ComponentFixture<PreviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewList],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
