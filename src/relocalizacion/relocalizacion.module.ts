import { Module } from '@nestjs/common';
import { RelocalizacionService } from './relocalizacion.service';
import { RelocalizacionController } from './relocalizacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relocalizacion } from './entities/relocalizacion.entity';

@Module({
  controllers: [RelocalizacionController],
  providers: [RelocalizacionService],
  imports: [TypeOrmModule.forFeature([Relocalizacion])]
})
export class RelocalizacionModule {}
