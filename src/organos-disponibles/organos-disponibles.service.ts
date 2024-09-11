import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganosDisponibleDto } from './dto/create-organos-disponible.dto';
import { UpdateOrganosDisponibleDto } from './dto/update-organos-disponible.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganosDisponible } from './entities/organos-disponible.entity';
import { Repository } from 'typeorm';
import { ClienteService } from 'src/cliente/cliente.service';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';

@Injectable()
export class OrganosDisponiblesService {
  constructor(@InjectRepository(OrganosDisponible) private readonly organosDisponibleRepository: Repository<OrganosDisponible>,
  private readonly clienteService: ClienteService){}
  async create(createOrganosDisponibleDto: CreateOrganosDisponibleDto, proveedor: Proveedor) {
    const organo= await this.organosDisponibleRepository.create(createOrganosDisponibleDto);
    await this.organosDisponibleRepository.save({...organo,proveedor});
    return organo;
  }

  async findAll() {
    const organo= await this.organosDisponibleRepository.find();
    return organo;
  }

  async findOne(id: string) {
    const organo= await this.organosDisponibleRepository.findOneBy({id:id});
    if(!organo){
      throw new NotFoundException("Organo no encontrado")
    }
    return organo;
  }

  async update(id: string, updateOrganosDisponibleDto: UpdateOrganosDisponibleDto) {
    const organo= await this.organosDisponibleRepository.preload({id:id, ...updateOrganosDisponibleDto});
    if(!organo){
      throw new NotFoundException("Organo no encontrado")
    }
    await this.organosDisponibleRepository.save(organo);
    return organo;
  }

  async remove(id: string) {
    const organo= await this.organosDisponibleRepository.delete({id:id});
    return organo;
  }
  
  
  
}
