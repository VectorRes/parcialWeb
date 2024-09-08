import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganosDisponible } from 'src/organos-disponibles/entities/organos-disponible.entity';

@Module({
  controllers: [ProveedorController],
  providers: [ProveedorService],
  imports: [TypeOrmModule.forFeature([OrganosDisponible])],
})
export class ProveedorModule {}
