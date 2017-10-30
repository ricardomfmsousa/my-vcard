import {
  trigger, group, animateChild, animate, transition, style, query
} from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition('* => *', [
      group([
        query(':enter', [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 })),
          animateChild()
        ], { optional: true }),
        query(':leave', [
          animate('0.5s', style({ opacity: 0 })),
          animateChild()
        ], { optional: true })
      ])
    ]),
  ]);
