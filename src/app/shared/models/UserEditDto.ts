import { UserBaseDto } from "./UserBaseDto";


export interface UserEditDto extends UserBaseDto {
    currentPassword: string;
    newPassword: string;
    roles: string[];
    stores: number[];
}
