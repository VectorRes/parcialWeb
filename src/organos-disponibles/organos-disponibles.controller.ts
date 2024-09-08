import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganosDisponiblesService } from './organos-disponibles.service';
import { CreateOrganosDisponibleDto } from './dto/create-organos-disponible.dto';
import { UpdateOrganosDisponibleDto } from './dto/update-organos-disponible.dto';

@Controller('organos-disponibles')
export class OrganosDisponiblesController {
  constructor(private readonly organosDisponiblesService: OrganosDisponiblesService) {}

  @Post()
  create(@Body() createOrganosDisponibleDto: CreateOrganosDisponibleDto) {
    return this.organosDisponiblesService.create(createOrganosDisponibleDto);
  }

  @Get()
  findAll() {
    return this.organosDisponiblesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organosDisponiblesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganosDisponibleDto: UpdateOrganosDisponibleDto) {
    return this.organosDisponiblesService.update(+id, updateOrganosDisponibleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organosDisponiblesService.remove(+id);
  }
}
