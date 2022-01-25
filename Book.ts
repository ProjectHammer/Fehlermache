export default class Book {
    constructor(
        public title: string,
        public pages: number,
        public readPages: number,
    ) {}
    toString(): string {
        return `Book title: ${this.title}, pages: ${this.pages}, readPages: ${this.readPages},
        percentageRead: ${Math.floor(this.readPages / this.pages * 100) + '%'}`
    }
}