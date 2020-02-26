import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
    constructor(private service: BooksService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getBook(params.id);
    }

    @Post()
    create(@Body() book: Book) {
        return this.service.createBook(book);
    }

    @Put()
    update(@Body() book: Book) {
        return this.service.updateBook(book);
    }

    @Delete(':id')
    deleteBook(@Param() params) {
        return this.service.deleteBook(params.id);
    }
}
