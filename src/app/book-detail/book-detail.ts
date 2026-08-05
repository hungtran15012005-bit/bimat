import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly bookService = inject(Book);

  protected readonly readingSpeed = signal<number>(10);

  protected readonly book = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.bookService.getBookById(id);
  });

  protected readonly chapterEstimates = computed(() => {
    const currentBook = this.book();
    if (!currentBook) {
      return [];
    }
    const speed = this.readingSpeed();
    return currentBook.chapters.map((chapter) => ({
      ...chapter,
      minutes: Math.round((chapter.pages / speed) * 60),
    }));
  });

  protected increaseSpeed(): void {
    this.readingSpeed.update((speed) => speed + 10);
  }

  protected decreaseSpeed(): void {
    this.readingSpeed.update((speed) => Math.max(10, speed - 10));
  }
  protected toggleFavorite(bookId: number): void {
    this.bookService.toggleFavorite(bookId);
  }
}