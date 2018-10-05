import { Router } from '@angular/router';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import * as typer from 'typer-js';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('frameWrapper')
  private iframe: ElementRef;
  private isAlive: boolean;

  constructor(private router: Router) {}

  public ngAfterViewInit(): void {
    this.isAlive = true;
    this.autoscrollFrame();
    typer('h1', 90)
      .cursor({ color: 'white', blink: 'soft' })
      .line({ container: '.not-found' });
  }

  private autoscrollFrame(): void {
    if (this.iframe) {
      this.iframe.nativeElement.scrollBy(0, 1);
    }
    if (this.isAlive) {
      window.setTimeout(this.autoscrollFrame.bind(this), 100);
    }
  }

  public ngOnDestroy(): void {
    this.isAlive = false;
  }

  public handleBackClicked(): void {
    this.router.navigate(['/']);
  }
}
