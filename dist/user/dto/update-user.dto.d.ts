import { UserRole } from "@prisma/client";
export declare class UpdateUserDto {
    password?: string;
    role?: UserRole;
}
