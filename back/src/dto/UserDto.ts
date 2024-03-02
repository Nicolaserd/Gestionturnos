export default interface UserDto {
    id?:number;
    name: string;
    email: string;
    birthdate: string;
    nDni: number;
    credentialId?: number;
}