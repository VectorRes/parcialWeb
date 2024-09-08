import { IsObject, IsString, MinLength } from "class-validator";
import { Cliente } from "src/cliente/entities/cliente.entity";

export class CreateRelocalizacionDto {

    @IsString()
    @MinLength(3)
    detalles: string;

    @IsString()
    estado: string;

    @IsObject()
    cliente: Cliente;

}
