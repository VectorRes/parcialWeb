import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { LoginProveedorDto } from './dto/loginProveedor-dto';
import { UseGuards } from '@nestjs/common';
import { ProveedorJwtAuthGuard } from 'src/guards/guards';
import { OwnProveedorDataGuard } from './guard/ownProveedorData.guard';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Post()
  create(@Body() createProveedorDto: CreateProveedorDto) {
    return this.proveedorService.create(createProveedorDto);
  }

  @Get()
  findAll() {
    return this.proveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedorService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(ProveedorJwtAuthGuard, OwnProveedorDataGuard)
  update(@Param('id') id: string, @Body() updateProveedorDto: UpdateProveedorDto) {
    return this.proveedorService.update(id, updateProveedorDto);
  }


  @Post('login')
  login(@Body() loginProveedorDto: LoginProveedorDto) {
    return this.proveedorService.login(loginProveedorDto);
  }
}
