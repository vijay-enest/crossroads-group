import { Component, OnInit } from "@angular/core";
import { CommitsService } from "src/app/services/commits.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [
    "Commiter Name",
    "Commiter Email",
    "Message",
    "Commit Date"
  ];
  loading = true;
  constructor(private commitService: CommitsService) {}

  ngOnInit() {
    this.getRepoCommitHistory();
  }

  private getRepoCommitHistory() {
    this.commitService.commitHistory$.subscribe(response => {
      this.loading = false;
      this.dataSource = response;
    });
  }

  refreshCommits() {
    this.loading = true;
    this.commitService.refreshCommits();
  }
}
