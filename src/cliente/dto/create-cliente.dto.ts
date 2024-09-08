import { IsDate, IsString, MinLength } from "class-validator";

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

    @IsString()
    @MinLength(1)
    afeccion: string;

    @IsDate()
    fechaNacimiento: Date;

}
