import { Module } from '@nestjs/common';
import { OrganosDisponiblesService } from './organos-disponibles.service';
import { OrganosDisponiblesController } from './organos-disponibles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';

@Module({
  controllers: [OrganosDisponiblesController],
  providers: [OrganosDisponiblesService],
  imports: [TypeOrmModule.forFeature([Cliente,Proveedor])],
})
export class OrganosDisponiblesModule {}
