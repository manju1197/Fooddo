import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineFood';
  storedPosts = []

  onPostAdded(event) {
    this.storedPosts.push(event);
  }
}
