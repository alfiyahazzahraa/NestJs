import {Controller, Get,Post,Body,Param, Put, Delete,} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  //  CREATE MEMBER
  @Post()
  create(@Body() dto: CreateMemberDto) {
    return this.membersService.create(dto);
  }

  // GET ALL MEMBERS
  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  // GET MEMBER BY ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  // UPDATE MEMBER
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMemberDto,
  ) {
    return this.membersService.update(+id, dto);
  }

  // DELETE MEMBER
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}