import { IsString, MinLength, IsObject, IsNumber } from "class-validator";
import { OrganosDisponible } from "src/organos-disponibles/entities/organos-disponible.entity";

export class CreateGarantiaDto {

    @IsString()
    @MinLength(3)
    descripcion: string;

    @IsNumber()
    periodoDeValidez: string;


}
