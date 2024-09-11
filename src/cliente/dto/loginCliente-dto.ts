import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';


export class LoginClienteDto {

    @IsString()
    @IsEmail()
    correoElectronico: string;

    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    contrasena: string;

}