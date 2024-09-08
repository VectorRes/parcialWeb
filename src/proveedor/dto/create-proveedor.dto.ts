import { IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateProveedorDto {
    @IsString()
    @MinLength(3)
    nombre: string;

    @IsString()
    @MinLength(3)
    contacto: string;

    @IsString()
    @MinLength(3)
    localizacion: string;

    @IsEmail()
    correoElectronico: string;

    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        { message: 'contraseña muy debil' })
    contrasena: string;

}
