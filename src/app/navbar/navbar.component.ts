import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  title = 'Fin Overflow';

  @Input() hiddenCheck: boolean;

  // // Hide if current page is Login screen
  // isHidden() {
  //   alert("Checking hidden: " + this.hiddenCheck);
  //   return this.hiddenCheck;
  // }
}
