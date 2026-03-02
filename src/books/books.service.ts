import { Injectable, NotFoundException } from'@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  
  async create(dto: CreateBookDto) {
    return this.prisma.book.create({ data: dto });
}

async findAll() {
  return this.prisma.book.findMany({ orderBy: { id: 'asc' } });
}

async findOne(id: number) {
  const book = await this.prisma.book.findUnique({
    where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
}

async update(id: number, dto: UpdateBookDto) {
  await this.findOne(id);
  return this.prisma.book.update({
    where: { id },
    data: dto,
});
}

async remove(id: number) {
  await this.findOne(id);
  await this.prisma.book.delete({ where: { id } });
  return { message: `Book with id ${id} deleted` };
  }
}
// import { Injectable, NotFoundException } from
// '@nestjs/common';
// import { PrismaService } from '../Prisma/prisma.service';
// import { CreateBookDto } from '../dto/create-book.dto';
// import { UpdateBookDto } from '../dto/update-book.dto';

// @Injectable()
// export class BooksService {
//   constructor(private prisma: PrismaService) {}
  
//   async create(dto: CreateBookDto) {
//     return this.prisma.book.create({ data: dto });
// }

// async findAll() {
//   return this.prisma.book.findMany({ orderBy: { id:'asc' } });
// }

// async findOne(id: number) {
//   const book = await this.prisma.book.findUnique({
//     where: { id } });
//     if (!book) throw new NotFoundException('Book not found');
// return book;
// }

// async update(id: number, dto: UpdateBookDto) {
//   await this.findOne(id);
//   return this.prisma.book.update({
//     where: { id },
//     data: dto,
// });
// }

// async remove(id: number) {
//   await this.findOne(id);
//   await this.prisma.book.delete({ where: { id } });
//   return { message: `Book with id ${id} deleted` };
//   }
// }
// // import { Injectable,  NotFoundException } from '@nestjs/common';
// // import { Book } from './book.type'; 
// // import { CreateBookDto } from '../dto/create-book.dto'; 
// // import { UpdateBookDto } from '../dto/update-book.dto';
// // import { PrismaService } from '../Prisma/prisma.service';

// // @Injectable()
// // export class BooksService {
// //   constructor(private prisma: PrismaService) {}

// //   async create(dto: CreateBookDto) {
// //     return this.prisma.book.create({ data: dto })
// //   }

// //   async findAll() {
// //     return this.prisma.book.findMany({ orderBy: {id: 'asc'}})
// //   }

// //   async findOne(id: number) {
// //     const book = await this.prisma.book.findUnique({ where: { id }})
// //     if (!book) throw new NotFoundException ('Book not found')
// //       return book;
// //   }

// //   async update (id: number, dto: UpdateBookDto) {
// //     await this.findOne(id);
// //     return this.prisma.book.update({
// //       where: {id},
// //       data: dto,
// //     })
// //   }

// //   async remove (id: number) {
// //     await this.findOne(id);
// //     await this.prisma.book.delete({ where { id }}),
// //       return { message : `Book with id ${id} deleted`}
// //     }
// //   }
// //     private books: Book[] = []; 
// //     private nextId = 1; 

// //     create(dto: CreateBookDto): Book { 
// //     const book: Book = { id: this.nextId++, ...dto }; 
// //     this.books.push(book); 
// //     return book; 
// //   } 
 
// //   findAll(): Book[] { 
// //     return this.books;
// //   }

// //   findOne(id: number): Book { 
// //     const book = this.books.find(b => b.id === id); 
    
// //     if (!book) {
// //       throw new NotFoundException('Book not found');
// //     }
// //     return book; 
// // } 
// // update(id: number, dto: UpdateBookDto): Book { 
// // const book = this.findOne(id); 
// // const updated = { ...book, ...dto }; 
// // this.books = this.books.map(b => (b.id === id ? 
// // updated : b)); 
// // return updated; 
// // } 
// // remove(id: number) { 
// // this.findOne(id); 
// // this.books = this.books.filter(b => b.id !== id); 
// // return { message: `Book with id ${id} deleted` }; 
// // } 
// // }

// //   //healthCheck() {
// //     //return {
// //       //status: 'ok',
// //       //service: 'books',
// //     //};
// //   //}
  
// //     //getInfo(): object { 
// //     //return { 
// //       //message: 'Library API v1', 
// //       //feature: 'books', 
// //     //}
// //   //}