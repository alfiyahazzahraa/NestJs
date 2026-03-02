import { PrismaService } from '../Prisma/prisma.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        username: string;
        role: import(".prisma/client").$Enums.UserRole;
        memberId: number;
        createdAt: Date;
        id: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        memberId: number;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        memberId: number;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, dto: UpdateUserDto): Promise<{
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        memberId: number;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
