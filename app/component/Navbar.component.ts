import {Component} from "angular2/core";

@Component({
  selector: "top-nav",
  templateUrl: "./app/component/Navbar.html"
})

export class NavbarComponent {

  navLink: Array<string>;

  constructor() {
    this.navLink = ["Home", "About", "Project"];
  }
}
