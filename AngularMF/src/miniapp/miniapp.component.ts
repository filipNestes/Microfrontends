import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './miniapp.component.html',
  styleUrls: ['./miniapp.component.scss'],
})
export class MiniAppComponent implements OnInit, OnDestroy {
  title = 'angularMiniMf';
  messageFromReact = '';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    window.addEventListener(
      'fromReact',
      this.handleReactMessage as EventListener
    );
  }

  ngOnDestroy() {
    window.removeEventListener(
      'fromReact',
      this.handleReactMessage as EventListener
    );
  }

  handleReactMessage = (event: Event) => {
    const customEvent = event as CustomEvent;
    this.ngZone.run(() => {
      this.messageFromReact = customEvent.detail.message;
    });
  };
}
