import { Injectable } from '@nestjs/common';
import { CreateRelocalizacionDto } from './dto/create-relocalizacion.dto';
import { UpdateRelocalizacionDto } from './dto/update-relocalizacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Relocalizacion } from './entities/relocalizacion.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class RelocalizacionService {
  constructor(@InjectRepository(Relocalizacion) private readonly relocalizacionRepository: Repository<Relocalizacion>){}
  async create(createRelocalizacionDto: CreateRelocalizacionDto) {
    const relocalizacion= await this.relocalizacionRepository.create(createRelocalizacionDto);
    await this.relocalizacionRepository.save(relocalizacion);
    return relocalizacion;
  }

  async findAll() {
    const relocalizacion= await this.relocalizacionRepository.find();
    return relocalizacion;
  }

  async findOne(id: string) {
    const relocalizacion= await this.relocalizacionRepository.findOneBy({id:id});
    if(!relocalizacion){
      throw new NotFoundException("Organo no encontrado")
    }
    return relocalizacion;
  }

  async update(id: string, updateRelocalizacionDto: UpdateRelocalizacionDto) {
    const relocalizacion= await this.relocalizacionRepository.preload({id:id, ...updateRelocalizacionDto});
    if(!relocalizacion){
      throw new NotFoundException("Organo no encontrado")
    }
    this.relocalizacionRepository.save(relocalizacion);
    return relocalizacion;
  }

  async remove(id: string) {
    const relocalizacion= await this.relocalizacionRepository.delete({id:id});
    return relocalizacion;
  }
}
