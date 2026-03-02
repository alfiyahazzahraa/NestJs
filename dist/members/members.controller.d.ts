import { MembersService } from './members.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    create(dto: CreateMemberDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        className: string;
    }>;
    findAll(): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        className: string;
    }[]>;
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        className: string;
    }>;
    update(id: string, dto: UpdateMemberDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        className: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
