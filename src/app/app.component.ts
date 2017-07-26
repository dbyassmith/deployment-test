import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public people;
  title = 'app';
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.db.list(`people`).subscribe( (people) => {
      this.people = people;
    });
  }

}
