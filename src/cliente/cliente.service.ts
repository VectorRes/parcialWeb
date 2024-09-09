import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>){}
  async create(createClienteDto: CreateClienteDto) {
    const cliente= await this.clienteRepository.create(createClienteDto);
    await this.clienteRepository.save(cliente);
    return cliente;
  }

  async findAll() {
    const cliente= await this.clienteRepository.find();
    return cliente;
  }

  async findOne(id: string) {
    const cliente= await this.clienteRepository.findOneBy({id: id});
    if(!cliente){
      throw new NotFoundException("No se ha encontrado al cliente")
    }
    return cliente;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const cliente= await this.clienteRepository.preload({id: id, ...updateClienteDto})
    if(!cliente){
      throw new NotFoundException("No se ha encontrado al cliente")
    }
    await this.clienteRepository.save(cliente);
    return cliente
  }

  async remove(id: string) {
    const cliente= await this.clienteRepository.delete({id: id});
    return cliente;
  }
}
