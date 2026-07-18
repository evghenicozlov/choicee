import { Component } from '@angular/core';
import { PreviewList } from '@shared/components/preview-list/preview-list';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-main-page',
  imports: [TopBanner, PreviewList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  readonly previews = [
    '/images/previews/preview-en-iphone-1.jpg',
    '/images/previews/preview-en-iphone-2.jpg',
    '/images/previews/preview-en-iphone-3.jpg',
    '/images/previews/preview-en-iphone-4.jpg',
    '/images/previews/preview-en-iphone-5.jpg',
    '/images/previews/preview-en-iphone-6.jpg',
    '/images/previews/preview-en-iphone-7.jpg',
  ];
}
