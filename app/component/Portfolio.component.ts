import {Component, OnInit} from "angular2/core";
import {NavbarComponent} from "./Navbar.component";
import {Http, HTTP_PROVIDERS} from "angular2/http";

declare var jQuery: any;

@Component({
  selector: "portfolio",
  templateUrl: "./app/component/Portfolio.html",
  directives: [NavbarComponent],
  viewProviders: [HTTP_PROVIDERS]
})

export class PortfolioComponent {

  projectData: Array<Object> = [];

  constructor(private http: Http) {
    this.getProject();
  }

  getProject() {
    this.http.get("./app/data/project.json")
      .map(res => res.json())
      .subscribe(
        res => {
          console.log(res);
          this.projectData = res;
        },
        error => console.log(error),
        () => console.log("done grabbing data")
      )
  }
}
