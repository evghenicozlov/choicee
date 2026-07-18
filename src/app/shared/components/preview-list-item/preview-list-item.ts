import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-preview-list-item',
  imports: [],
  templateUrl: './preview-list-item.html',
  styleUrl: './preview-list-item.scss',
})
export class PreviewListItem {
  readonly src = input.required<string>();

  readonly leftEnable = input<boolean>(false);
  readonly rightEnable = input<boolean>(false);

  readonly onLeftClick = output<void>();
  readonly onRightClick = output<void>();

  readonly currentSrc = signal('');
  readonly nextSrc = signal('');

  readonly transitioning = signal(false);

  constructor() {
    effect(() => {
      const src = this.src();

      if (!this.currentSrc()) {
        this.currentSrc.set(src);
      } else if (this.currentSrc() !== src) {
        this.nextSrc.set(src);
      }
    });
  }

  handleNextImageLoaded() {
    this.transitioning.set(true);
  }

  handleTransitionEnd() {
    this.currentSrc.set(this.nextSrc());
    // this.nextSrc.set('');
    this.transitioning.set(false);
  }

  handleLeftClick() {
    this.onLeftClick.emit();
  }

  handleRightClick() {
    this.onRightClick.emit();
  }
}
