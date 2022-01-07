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
  purchaseInfo?: {
    name: string;
    email: string;
    phoneNumber: number;
    address: string;
};
}