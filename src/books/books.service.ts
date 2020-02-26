import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/book.entity';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) { }

    async getBooks(): Promise<Book[]> {
        return await this.booksRepository.find();
    }

    // tslint:disable-next-line:variable-name
    async getBook(_id: number): Promise<Book[]> {
        return await this.booksRepository.find({
            select: ['nameBook', 'aboutBook', 'isActive'],
            // tslint:disable-next-line:object-literal-key-quotes
            where: [{ 'id': _id }],
        });
    }

    async createBook(book: BookDto): Promise<Book> {
        const newBook = new Book();
        Object.keys(book).forEach((key) => {
        newBook[key] = book[key];
        });
        return await this.booksRepository.save(newBook);
    }

    async updateBook(book: Book) {
        this.booksRepository.save(book);
    }

    async deleteBook(book: Book) {
        this.booksRepository.delete(book);
    }
}
