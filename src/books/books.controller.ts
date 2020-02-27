import { Controller, Post, Body, Get, Put, Delete, Param, Req, HttpStatus, Res} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
    constructor(private service: BooksService) { }

    @Get('/findAllBooks')
    get() {
        return this.service.getBooks();
    }

    @Get('/detailBook/:id')
    getBook(@Param() params) {
        return this.service.getBook(params.id);
    }
    // public async book(@Param() params, @Res() res: any): Promise<any> {
    //     try {
    //     const book: object = await this.service.getBook(params.id);
    //     return res.status(HttpStatus.OK).json(book);
    //     } catch (error) {
    //     return res.status(400).json({
    //         status: 'error',
    //         message: 'Invalid book.',
    //         });
    //     }
    // }

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
