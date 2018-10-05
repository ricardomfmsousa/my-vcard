import { SocialDrawerItem } from '../../shared/components/social-drawer/social-drawer-item.model';
import { UtilService } from '../../shared/services/util/util.service';
import { Component, AfterViewInit } from '@angular/core';
import { fadeAnimation } from '../../shared/animations/fade-in.animation';
import * as typer from 'typer-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home.component.scss']
})
export class HomeViewComponent implements AfterViewInit {
  public readonly socialDrawerItems: SocialDrawerItem[];
  private readonly cursor: any;

  constructor(private utils: UtilService) {
    this.socialDrawerItems = [
      {
        title: 'Github',
        icon: 'fab fa-github',
        action: 'https://github.com/ricardomfmsousa/'
      },
      {
        title: 'LinkedIn',
        icon: 'fab fa-linkedin',
        action: 'https://linkedin.com/in/ricardomfmsousa/'
      },
      {
        title: 'Strava',
        icon: 'fab fa-strava',
        action: 'https://www.strava.com/athletes/ricardomfmsousa/'
      },
      {
        title: 'Send E-mail...',
        icon: 'fas fa-envelope',
        action: () => this.utils.openMailTo()
      }
    ].map(s => new SocialDrawerItem(s.title, s.icon, s.action));

    this.cursor = { color: 'white', blink: 'soft' };
  }

  public ngAfterViewInit(): void {
    typer('.presentation h1', 90)
      .cursor(this.cursor)
      .line(`I'm <span>Ricardo</span> Sousa.`)
      .pause(2000)
      .end(() => this.writeTitleAndTechnologies());
  }

  private writeTitleAndTechnologies(): void {
    typer('.presentation h2', 90)
      .cursor(this.cursor)
      .line(`<span>Software</span> Developer`)
      .pause(2000)
      .continue(`<span><strong> &sdot; </strong></span>`)
      .continue(`<strong>Javascript <span>/</span> Typescript</strong>`)
      .pause(1500)
      .back('empty', -21)
      .continue(`<strong>LESS <span>/</span> SCSS <span>/</span> CSS</strong>`)
      .pause(1500)
      .back('empty', -21)
      .continue(
        `<strong>Angular <span>/</span> React <span>/</span> Vue</strong>`
      )
      .pause(1500)
      .back('empty', -21)
      .continue(
        `<strong>HTML <span>/</span> XML <span>/</span>` +
          ` YML <span>/</span> Markdown</strong>`
      )
      .pause(2000)
      .back('empty', -21)
      .continue(
        `<strong>NodeJS <span>/</span> PHP <span>/</span> Java</strong>`
      )
      .pause(1500)
      .back('empty', -21)
      .continue(`<strong>MySQL <span>/</span> MongoDB</strong>`)
      .pause(1500)
      .back('empty', -21)
      .continue(`<strong>Shell script <span>/</span> Docker</strong>`)
      .pause(2000)
      .back('empty', -21)
      .continue(`<strong><span>WEB</span> technologies passionate!</strong>`)
      .pause(5000)
      .back('empty', -21)
      .empty()
      .end(() => this.writeTitleAndTechnologies());
  }
}
