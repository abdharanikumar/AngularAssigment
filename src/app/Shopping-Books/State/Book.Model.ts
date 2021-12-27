/* Defines the Book entity */
export interface Book {
    kind: string;
    totalItems: number;
    items: BookItem[];
}

export interface BookItem{
    id: string;
    volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    pageCount ?: number;
    language ?: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

