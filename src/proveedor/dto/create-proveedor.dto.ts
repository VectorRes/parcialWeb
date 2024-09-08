import { IsString, MinLength } from "class-validator";

export class CreateProveedorDto {
    @IsString()
    @MinLength(1)
    apodo: string;

    @IsString()
    @MinLength(1)
    contacto: string;

}
