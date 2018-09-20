import { UtilService } from '../../shared/services/util/util.service';
import { Component, AfterViewInit } from '@angular/core';
import { fadeAnimation } from '../../shared/animations/fade-in.animation';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home.component.scss']
})
export class HomeViewComponent implements AfterViewInit {
  public isSocialVisible: boolean;

  constructor(public utils: UtilService) {}

  public ngAfterViewInit(): void {
    this.typeName();
  }

  private typeName(): void {
    const typed = new Typed('h1.name span', {
      strings: [`I'm <span>Ricardo</span> Sousa.`],
      typeSpeed: 70,
      backSpeed: 0,
      fadeOut: true,
      loop: false,
      onComplete: self => {
        window.setTimeout(() => {
          document.querySelectorAll('.typed-cursor')[0].remove();
          this.typePosition();
        }, 2000);
      }
    });
  }

  private typePosition(): void {
    const typed = new Typed('h2.position span', {
      strings: [`Frontend Developer`],
      typeSpeed: 70,
      backSpeed: 0,
      fadeOut: true,
      loop: false,
      onComplete: () =>
        window.setTimeout(() => {
          this.isSocialVisible = true;
        }, 2000)
    });
  }
}
