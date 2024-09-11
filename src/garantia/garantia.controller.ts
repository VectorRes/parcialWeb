import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GarantiaService } from './garantia.service';
import { CreateGarantiaDto } from './dto/create-garantia.dto';
import { UpdateGarantiaDto } from './dto/update-garantia.dto';
import { UseGuards } from '@nestjs/common';
import { ProveedorJwtAuthGuard } from 'src/guards/guards';

@Controller('garantia')
export class GarantiaController {
  constructor(private readonly garantiaService: GarantiaService) {}

  @Post()
  @UseGuards(ProveedorJwtAuthGuard)
  create(@Body() createGarantiaDto: CreateGarantiaDto) {
    return this.garantiaService.create(createGarantiaDto);
  }

  @Get()
  findAll() {
    return this.garantiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.garantiaService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(ProveedorJwtAuthGuard)
  update(@Param('id') id: string, @Body() updateGarantiaDto: UpdateGarantiaDto) {
    return this.garantiaService.update(id, updateGarantiaDto);
  }

  @Delete(':id')
  @UseGuards(ProveedorJwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.garantiaService.remove(id);
  }
}
