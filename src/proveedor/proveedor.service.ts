import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
  constructor(@InjectRepository(Proveedor) private readonly proveedorRepository: Repository<Proveedor>){}
  async create(createProveedorDto: CreateProveedorDto) {
    const proveedor= await this.proveedorRepository.create(createProveedorDto);
    await this.proveedorRepository.save(proveedor);
    return proveedor;
  }

  async findAll() {
    const proveedor= await this.proveedorRepository.find();
    return proveedor;
  }

  async findOne(id: string) {
    const proveedor= await this.proveedorRepository.findOneBy({id:id});
    if(!proveedor){
      throw new NotFoundException("No se ha encontrado al proveedor");
    }
    return proveedor;
  }

  async update(id: string, updateProveedorDto: UpdateProveedorDto) {
    const proveedor= await this.proveedorRepository.preload({id:id, ...updateProveedorDto});
    if(!proveedor){
      throw new NotFoundException("No se ha encontrado al proveedor");
    }
    await this.proveedorRepository.save(proveedor);
    return proveedor;
  }

  async remove(id: string) {
    const proveedor= await this.proveedorRepository.delete({id: id});
    return proveedor;
  }
}
