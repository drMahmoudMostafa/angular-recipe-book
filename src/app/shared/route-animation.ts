import {
  transition,
  animate,
  style,
  trigger,
  keyframes
} from '@angular/animations';
export const RouteAnimations =
  trigger('routeAnimation', [
    transition(':enter', [
      style({
        transform: 'scale(.3 , .3)'
      }),
          animate('150ms cubic-bezier(.37,.49,.81,.37)')
    ]),
    transition(':leave', animate('300ms cubic-bezier(.63,.77,.9,.64)', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(70%)',
        offset: 0.7
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)',
        offset: 1.0
      })
    ])))
  ]);
