export interface Chapter {
    title: string;
    pages: number;
}

export interface BookModel {
    id: number;
    title: string;
    author: string;
    description: string;
    coverUrl: string;
    isFavorite: boolean;
    chapters: Chapter[];
}