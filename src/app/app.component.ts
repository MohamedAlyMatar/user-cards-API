import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected to styleUrls
  imports: [UsersListComponent],
  providers: [HttpClientModule], // Add UsersListComponent here
})
export class AppComponent {
  title = 'user-cards';
}
