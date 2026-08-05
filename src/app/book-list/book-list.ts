import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  private readonly bookService = inject(Book);

  protected readonly searchTerm = signal<string>('');

  protected readonly filteredBooks = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.bookService.allBooks();
    }
    return this.bookService.allBooks().filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
    );
  });
}