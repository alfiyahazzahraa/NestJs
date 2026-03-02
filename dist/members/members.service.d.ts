import { PrismaService } from '../Prisma/prisma.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';
export declare class MembersService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        className: string;
    }>;
    update(id: number, dto: UpdateMemberDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        className: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
