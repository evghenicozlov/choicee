import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewListItem } from './preview-list-item';

describe('PreviewListItem', () => {
  let component: PreviewListItem;
  let fixture: ComponentFixture<PreviewListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
