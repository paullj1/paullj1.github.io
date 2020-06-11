import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

const slideUp = [
     query(':enter, :leave', 
          style({ position: 'absolute',  height: '100%', width: '100%'}), 
          { optional: true }),
     group([
          query(':enter', [
              style({ transform: 'translateY(100%)' }), 
              animate('0.25s ease-out', 
              style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
              style({ transform: 'translateY(0%)' }),
              animate('0.25s ease-out', 
              style({ transform: 'translateY(-100%)' }))
              ], { optional: true }),
      ])
]

const slideDown = [
     query(':enter, :leave', 
          style({ position: 'absolute', height: '100%', width: '100%'}), 
          { optional: true }),        
     group([
          query(':enter',[
              style({ transform: 'translateY(-100%)' }),
              animate('0.25s ease-out', 
              style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
              style({ transform:   'translateY(0%)'}),
              animate('0.25s ease-out', 
              style({ transform: 'translateY(100%)' }))
          ], { optional: true }),
     ])
]

export const slideInAnimation = trigger('routeAnimations', [
  transition('Profile => *', slideUp),
  transition('Experience => Profile', slideDown),
  transition('Experience => *', slideUp),
  transition('Projects => Experience', slideDown),
  transition('Projects => Profile', slideDown),
  transition('Projects => *', slideUp),
  transition('Skills => Publications', slideUp),
  transition('Skills => About', slideUp),
  transition('Skills => *', slideDown),
  transition('Publications => About', slideUp),
  transition('Publications => *', slideDown),
  transition('About => *', slideDown)
]);
