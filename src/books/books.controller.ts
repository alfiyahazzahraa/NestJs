import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common'; 
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger'; 
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; 
import { RolesGuard } from '../auth/guards/roles.guard'; 
import { Roles } from '../auth/decorators/roles.decorator'; 
import { UserRole } from '@prisma/client'; 

@ApiTags('Books') 
@ApiBearerAuth() 
@Controller('books') 
export class BooksController { 

@Get() 
@ApiOperation({ summary: 'Menampilkan seluruh data buku' }) findAll() { 
  return []; 
} 

@UseGuards(JwtAuthGuard, RolesGuard) 
@Roles(UserRole.ADMIN) 
@Post() 
@ApiOperation({ summary: 'Menambahkan buku (ADMIN only)' }) 
create(@Body() body: any) { 
  return body; 
  } 
}

// import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
// import { BooksService } from './books.service';
// import { CreateBookDto } from '../dto/create-book.dto';
// import { UpdateBookDto } from '../dto/update-book.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';
// import { UserRole } from '@prisma/client';

// @Controller('books')
// export class BooksController {
//   constructor(private readonly booksService: BooksService) {}

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles(UserRole.ADMIN)
//   @Post()
//   create(@Body() dto: CreateBookDto) {
//     return this.booksService.create(dto);
//   }

//   @Get()
//   findAll() {
//     return this.booksService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id', ParseIntPipe) id: number) {
//     return this.booksService.findOne(id);
//   }

//   @Put(':id')
//   update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() dto: UpdateBookDto,
//   ) {
//     return this.booksService.update(id, dto);
//   }

//   @Delete(':id')
//   remove(@Param('id', ParseIntPipe) id: number) {
//     return this.booksService.remove(id);
//   }
// }


// // import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'; 
// // import { BooksService } from './books.service'; 
// // import { CreateBookDto } from '../dto/create-book.dto'; 
// // import { UpdateBookDto } from '../dto/update-book.dto'; 
 
// // @Controller('books') 
// // export class BooksController { 
// //   constructor(private readonly booksService: BooksService) {} 
  
 
// //   @Post() 
// //   create(@Body() dto: CreateBookDto) { 
// //     return this.booksService.create(dto); 
// //   } 
 
// //   @Get() 
// //   findAll() { 
// //     return this.booksService.findAll(); 
// //   } 
 
// //   @Get(':id') 
// //   findOne(@Param('id', ParseIntPipe) id: number) { 
// //     return this.booksService.findOne(id); 
// //   } 
 
// //   @Put(':id') 
// //   update(@Param('id', ParseIntPipe) id: number, @Body() 
// // dto: UpdateBookDto) { 
// //     return this.booksService.update(id, dto); 
// //   } 
 
// //   @Delete(':id') 
// //   remove(@Param('id', ParseIntPipe) id: number) { 
// //     return this.booksService.remove(id); 
// //   } 
// // }
 
// //   //@Get('info') 
// //   //info() { 
// //     //return this.booksService.getInfo(); 
// //   //}
  
// //   //@Get() 
// // //findAll() { 
// // //return { message: 'Daftar buku (sementara)' }; 
// // //} 