import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-angular-part',
  templateUrl: './angular-part.component.html',
  styleUrls: ['./angular-part.component.scss'],
})
export class AngularComponent implements OnInit {
  public data: any[] = [];
  public movies: any[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.loadMovies();
  }

  loadData(): void {
    this.dataService.fetchData('books').subscribe({
      next: (data) => {
        this.data = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  deleteItem(index: number): void {
    this.dataService.deleteData('books', index).subscribe({
      next: (response) => {
        this.data = this.data.filter((_: any, idx: number) => idx !== index);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error deleting the item:', error);
      },
    });
  }

  deleteAll(): void {
    this.dataService.deleteAllData('books').subscribe({
      next: (response) => {
        this.data = [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error deleting all data:', error);
      },
    });
  }

  loadMovies(): void {
    this.movies = JSON.parse(localStorage.getItem('movies') || '[]');
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(this.movies));
    this.cdr.detectChanges();
  }

  deleteAllMovies(): void {
    localStorage.removeItem('movies');
    this.movies = [];
    this.cdr.detectChanges();
  }
}
