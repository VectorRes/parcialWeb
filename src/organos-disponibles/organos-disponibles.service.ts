import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganosDisponibleDto } from './dto/create-organos-disponible.dto';
import { UpdateOrganosDisponibleDto } from './dto/update-organos-disponible.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganosDisponible } from './entities/organos-disponible.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { anadirClienteDto } from './dto/anadirCliente.dto';

@Injectable()
export class OrganosDisponiblesService {
  constructor(@InjectRepository(OrganosDisponible) private readonly organosDisponibleRepository: Repository<OrganosDisponible>){}
  async create(createOrganosDisponibleDto: CreateOrganosDisponibleDto) {
    const organo= await this.organosDisponibleRepository.create(createOrganosDisponibleDto);
    await this.organosDisponibleRepository.save(organo);
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

  async agregarCliente(anadirClienteDto: anadirClienteDto, id :string){
    const organo = await this.organosDisponibleRepository.preload({id:id,... anadirClienteDto})
    if(!organo){
      throw new NotFoundException("Organo no encontrado")
    }
    this.organosDisponibleRepository.save(organo);
    return organo;
  }
}
