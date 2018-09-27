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
  public isSocialVisible: boolean;

  constructor(public utils: UtilService) {}

  public ngAfterViewInit(): void {
    const cursor = { color: 'white', blink: 'soft' };
    typer('.presentation h1', 90)
      .cursor(cursor)
      .line(`I'm <span>Ricardo</span> Sousa.`)
      .pause(2000)
      .end(true, () => {
        typer('.presentation h2', 90)
          .cursor(cursor)
          .line(`Frontend <span>Web</span> Developer`)
          .pause(2000)
          .run(() => (this.isSocialVisible = true));
      });
  }
}
