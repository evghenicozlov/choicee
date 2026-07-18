import { Component, ElementRef, input, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { MenuButton } from '../menu-button/menu-button';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, RouterLinkActive, MenuButton],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {
  routes = input<Routes>();
  @ViewChild('container')
  container!: ElementRef<HTMLDivElement>;

  @ViewChild('navList')
  navList!: ElementRef<HTMLUListElement>;

  @ViewChild('mobileList')
  mobileList?: ElementRef<HTMLUListElement>;

  readonly isOverflow = signal(false);
  readonly mobileListHeight = signal(0);
  // readonly menuOpen = signal(false);
  menuOpen = false;

  ngAfterViewInit() {
    const element = this.container.nativeElement;

    const checkOverflow = () => {
      this.isOverflow.set(
        this.navList.nativeElement.scrollWidth > this.container.nativeElement.clientWidth,
      );
      // console.log(this.mobileList.nativeElement.scrollHeight);
      if (this.mobileList) {
        this.mobileListHeight.set(this.mobileList.nativeElement.clientHeight);
      }
    };

    checkOverflow();

    const observer = new ResizeObserver(() => {
      checkOverflow();
    });

    observer.observe(element);
  }

  protected handleMenuClick() {
    console.log('handleMenuClick');
    // this.menuOpen.update((value) => !value);
    this.menuOpen = !this.menuOpen;
  }
}
