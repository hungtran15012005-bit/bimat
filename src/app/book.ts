import { Injectable, signal } from '@angular/core';
import { BookModel } from './models';
import { MOCK_BOOKS } from './mock-books';

@Injectable({
    providedIn: 'root',
})
export class Book {
    private readonly books = signal<BookModel[]>(MOCK_BOOKS);
    readonly allBooks = this.books.asReadonly();

    getBookById(id: number): BookModel | undefined {
        return this.books().find((book) => book.id === id);
    }

    // Thêm phương thức này để bật/tắt yêu thích
    toggleFavorite(id: number): void {
        this.books.update((currentBooks) =>
            currentBooks.map((book) =>
                book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
            )
        );
    }
}