import { IsDate, IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    documento: string;

    @IsString()
    @MinLength(1)
    tipoDocumento: string;

    @IsEmail()
    @MinLength(3)
    correoElectronico: string;

    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
        { message: 'contraseña muy debil' })
    contrasena: string;

    @IsDate()
    fechaNacimiento: Date;

    @IsString()
    @MinLength(3)
    pais:string;

}
