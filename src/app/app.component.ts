import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Mythology';
  showMessages = false;
  messagesButtonText = 'Show messages';

  toggleMessages(): void {
    this.showMessages = !this.showMessages;
    this.messagesButtonText = this.messagesButtonText.startsWith('S') ? 'Hide messages' : 'Show messages';
  }
}
