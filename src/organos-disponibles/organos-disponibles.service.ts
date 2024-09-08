import { Injectable } from '@nestjs/common';
import { CreateOrganosDisponibleDto } from './dto/create-organos-disponible.dto';
import { UpdateOrganosDisponibleDto } from './dto/update-organos-disponible.dto';

@Injectable()
export class OrganosDisponiblesService {
  create(createOrganosDisponibleDto: CreateOrganosDisponibleDto) {
    return 'This action adds a new organosDisponible';
  }

  findAll() {
    return `This action returns all organosDisponibles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organosDisponible`;
  }

  update(id: number, updateOrganosDisponibleDto: UpdateOrganosDisponibleDto) {
    return `This action updates a #${id} organosDisponible`;
  }

  remove(id: number) {
    return `This action removes a #${id} organosDisponible`;
  }
}
