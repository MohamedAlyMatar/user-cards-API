import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserInfo } from '../user.interface';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports: [CommonModule],
})
export class UsersListComponent implements OnInit {

  users: UserInfo[] = [];
  isLoading = true; // Add a loading state

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.dataService.getData()
      .pipe(
        finalize(() => this.isLoading = false), // Set loading to false when done
        catchError(() => {
          this.isLoading = false; // Handle error and stop loading
          return of([]); // Return empty array on error
        })
      )
      .subscribe((users: UserInfo[]) => {
        this.users = users;
      });
  }
}
