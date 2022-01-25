import Book from './Book';
import BookShelf from './BookShelf';

console.table(
    new BookShelf([
        new Book('Angular', 160, 22),
        new Book('React', 180, 23),
        new Book('TypeScript', 170, 22),
    ])
        .toString()
)