import { Component, computed, input, signal } from '@angular/core';
import { PreviewListItem } from '../preview-list-item/preview-list-item';

@Component({
  selector: 'app-preview-list',
  imports: [PreviewListItem],
  templateUrl: './preview-list.html',
  styleUrl: './preview-list.scss',
})
export class PreviewList {
  readonly images = input.required<string[]>();

  readonly index = signal<number>(0);
  readonly imagesLength = computed(() => this.images().length);

  handleLeftClick() {
    this.index.update((value) => (value + this.imagesLength() - 1) % this.imagesLength());
  }

  handleRightClick() {
    this.index.update((value) => (value + 1) % this.imagesLength());
  }
}
