import { UserBaseDto } from "./UserBaseDto";


export interface UserDto extends UserBaseDto {
    isLockedOut: boolean;
    roles: string[];
    stores: number[];
}
