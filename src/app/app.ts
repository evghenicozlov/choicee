import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  document = inject(DOCUMENT);

  ngOnInit(): void {
    this.document.documentElement.style.background =
      'linear-gradient(to right, #080A07 0%, #152F12 50%, #080A07 100%)';
  }
}
