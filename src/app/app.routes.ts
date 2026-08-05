import { Routes } from '@angular/router';
import { BookList } from './book-list/book-list';
import { BookDetail } from './book-detail/book-detail';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: 'books', component: BookList },
    { path: 'books/:id', component: BookDetail },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '**', component: NotFound },
];