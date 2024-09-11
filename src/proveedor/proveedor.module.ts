import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { JwtProveedorStrategy } from './strategy/jwtProveedor.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ProveedorController],
  providers: [ProveedorService, JwtProveedorStrategy],
  imports: [TypeOrmModule.forFeature([Proveedor]),
  PassportModule.register({defaultStrategy: 'jwt'}),
  JwtModule.registerAsync({
    imports:[],
    inject:[],
    useFactory: async()=>{
      return {
        secret: process.env.SECRET_PASSWORD,
        signOptions: {expiresIn: '1h'}
      }
    }
  }
  )],
  exports: [PassportModule, JwtModule,JwtProveedorStrategy,TypeOrmModule]
})
export class ProveedorModule {}
