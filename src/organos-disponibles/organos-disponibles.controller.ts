import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganosDisponiblesService } from './organos-disponibles.service';
import { CreateOrganosDisponibleDto } from './dto/create-organos-disponible.dto';
import { UpdateOrganosDisponibleDto } from './dto/update-organos-disponible.dto';
import { getProveedor } from 'src/proveedor/decorators/getProveedor.decorator';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';
import { AuthGuard } from '@nestjs/passport';
import { ProveedorJwtAuthGuard } from 'src/guards/guards';
import { OwnProveedorDataGuard } from 'src/proveedor/guard/ownProveedorData.guard';

@Controller('organos-disponibles')
export class OrganosDisponiblesController {
  constructor(private readonly organosDisponiblesService: OrganosDisponiblesService) {}

  @Post()
  @UseGuards(ProveedorJwtAuthGuard)
  create(@Body() createOrganosDisponibleDto: CreateOrganosDisponibleDto, @getProveedor() proveedor: Proveedor) {
    return this.organosDisponiblesService.create(createOrganosDisponibleDto, proveedor);
  }

  @Get()
  findAll() {
    return this.organosDisponiblesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organosDisponiblesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(ProveedorJwtAuthGuard)
  update(@Param('id') id: string, @Body() updateOrganosDisponibleDto: UpdateOrganosDisponibleDto) {
    return this.organosDisponiblesService.update(id, updateOrganosDisponibleDto);
  }

  @Delete(':id')
  @UseGuards(ProveedorJwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.organosDisponiblesService.remove(id);
  }

}
