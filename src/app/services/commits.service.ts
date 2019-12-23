import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GIT_API_URL, OWNER_NAME, REPO_NAME } from "../app.constants";
import { BehaviorSubject } from "rxjs";
import { switchMap, map, shareReplay } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class CommitsService {
  private getCommitsHistory$ = new BehaviorSubject<boolean>(false);

  commitHistory$ = this.getCommitsHistory$.pipe(
    switchMap(() => {
      return this.http.get(GIT_API_URL + OWNER_NAME + "/" + REPO_NAME + "/commits");
    }),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  refreshCommits() {
    this.getCommitsHistory$.next(true);
  }

 
}
