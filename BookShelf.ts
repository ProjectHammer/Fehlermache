import Book from './Book'

export default class BookShelf {
    constructor(private book: Book[]) {}

    toString(): string {
        return [
            '*** Start of BookShelf ***',
            '',
            `*** Having ${this.book.length} Books ***`,
            '',
            this.book.map(book => book.toString()).join("\n"),
            '',
            '*** End of BookShelf ***'
        ].join("\n")
    }
}