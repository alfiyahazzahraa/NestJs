import { UsersService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
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
    findOne(id: string): Promise<{
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        memberId: number;
        createdAt: Date;
        id: number;
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        memberId: number;
        createdAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
