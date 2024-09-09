import { IsEmpty, IsNumber, IsObject, IsString, MinLength } from "class-validator";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { Garantia } from "src/garantia/entities/garantia.entity";
import { Proveedor } from "src/proveedor/entities/proveedor.entity";

export class CreateOrganosDisponibleDto {
    @IsString()
    @MinLength(1)
    procedencia: string;

    @IsString()
    @MinLength(1)
    tipoOrgano : string;

    @IsNumber()
    precio: string
    
    @IsObject()
    @IsEmpty()
    cliente: Cliente;

    @IsObject()
    proveedor: Proveedor;

    @IsObject()
    garantia: Garantia;
}
