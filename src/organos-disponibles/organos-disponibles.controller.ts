import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganosDisponiblesService } from './organos-disponibles.service';
import { CreateOrganosDisponibleDto } from './dto/create-organos-disponible.dto';
import { UpdateOrganosDisponibleDto } from './dto/update-organos-disponible.dto';
import { getProveedor } from 'src/proveedor/decorators/getProveedor.decorator';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';
import { ProveedorJwtAuthGuard } from 'src/guards/guards';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('organos-disponibles') // Grupo de endpoints para 'organos-disponibles'
@Controller('organos-disponibles')
export class OrganosDisponiblesController {
  constructor(private readonly organosDisponiblesService: OrganosDisponiblesService) {}

  @ApiOperation({ summary: 'Crear un nuevo órgano disponible' })
  @ApiBearerAuth() // Indica que se requiere autenticación con JWT
  @ApiResponse({ status: 201, description: 'El órgano ha sido creado con éxito.' })
  @UseGuards(ProveedorJwtAuthGuard)
  @Post()
  create(@Body() createOrganosDisponibleDto: CreateOrganosDisponibleDto, @getProveedor() proveedor: Proveedor) {
    return this.organosDisponiblesService.create(createOrganosDisponibleDto, proveedor);
  }

  @ApiOperation({ summary: 'Obtener todos los órganos disponibles' })
  @ApiResponse({ status: 200, description: 'Lista de todos los órganos disponibles.' })
  @Get()
  findAll() {
    return this.organosDisponiblesService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un órgano disponible por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del órgano solicitado.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organosDisponiblesService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un órgano disponible por ID' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'El órgano ha sido actualizado con éxito.' })
  @UseGuards(ProveedorJwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganosDisponibleDto: UpdateOrganosDisponibleDto) {
    return this.organosDisponiblesService.update(id, updateOrganosDisponibleDto);
  }

  @ApiOperation({ summary: 'Eliminar un órgano disponible por ID' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'El órgano ha sido eliminado con éxito.' })
  @UseGuards(ProveedorJwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organosDisponiblesService.remove(id);
  }
}
