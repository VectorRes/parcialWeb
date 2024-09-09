import { IsObject } from "class-validator";
import { Cliente } from "src/cliente/entities/cliente.entity";

export class anadirClienteDto{
    @IsObject()
    cliente: Cliente;
}