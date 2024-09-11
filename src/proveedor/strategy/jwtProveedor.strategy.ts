import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwtProveedor.payload";
import { Proveedor } from "../entities/proveedor.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class JwtProveedorStrategy extends PassportStrategy(Strategy, 'jwt-proveedor'){
    constructor(
        @InjectRepository(Proveedor)
        private readonly proveedorRepository:Repository<Proveedor>
    ){
        super({
            secretOrKey:process.env.SECRET_PASSWORD,
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }
    async validate(payload:JwtPayload){
        const {correoElectronico}=payload;

        const proveedor=await this.proveedorRepository.findOneBy({correoElectronico});
        if(!proveedor){
            throw new BadRequestException("Unauthorized");
        }
        
        return proveedor;
    }
}