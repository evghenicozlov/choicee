import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  imports: [],
  templateUrl: './menu-button.html',
  styleUrl: './menu-button.scss',
})
export class MenuButton {
  open = input.required<boolean>();

  onClick = output<void>();

  handleClick(): void {
    console.log('handleClick');
    this.onClick.emit();
  }
}
