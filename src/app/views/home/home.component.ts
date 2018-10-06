import { SocialDrawerItem } from '../../shared/components/social-drawer/social-drawer-item.model';
import { UtilService } from '../../shared/services/util/util.service';
import {
  Component,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import { fadeAnimation } from '../../shared/animations/fade-in.animation';
import * as typer from 'typer-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home.component.scss'],
  // Must be used due to typer
  // TODO: Write an angular version of typer
  encapsulation: ViewEncapsulation.None
})
export class HomeViewComponent implements AfterViewInit {
  public readonly socialDrawerItems: SocialDrawerItem[];
  private readonly cursor: any;
  public showTechnologies: boolean;

  constructor(private utils: UtilService, private cdr: ChangeDetectorRef) {
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
      .line({ container: '.name' })
      .pause(2000)
      .end(() => this.writeTitleAndTechnologies());
  }

  private writeTitleAndTechnologies(): void {
    // Force the re-render of the technologies heading because typer
    // messes with the DOM, erasing (not just hiding) the spans
    this.showTechnologies = false;
    this.cdr.detectChanges();
    this.showTechnologies = true;
    this.cdr.detectChanges();
    typer('.presentation h2', 90)
      .cursor(this.cursor)
      .line({ container: '.title' })
      .pause(2000)
      .continue({ container: '.dot' })
      .continue({ container: '.jscript' })
      .pause(1500)
      .back('empty', -21)
      .continue({ container: '.style' })
      .pause(1500)
      .back('empty', -21)
      .continue({ container: '.framework' })
      .pause(1500)
      .back('empty', -21)
      .continue({ container: '.markup' })
      .pause(2000)
      .back('empty', -21)
      .continue({ container: '.backend' })
      .pause(1500)
      .back('empty', -21)
      .continue({ container: '.db' })
      .pause(1500)
      .back('empty', -21)
      .continue({ container: '.devops' })
      .pause(2000)
      .back('empty', -21)
      .continue({ container: '.obs' })
      .pause(5000)
      .back('empty', -21)
      .empty()
      .end(() => this.writeTitleAndTechnologies());
  }
}
