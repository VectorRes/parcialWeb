import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { LoginClienteDto } from './dto/loginCliente-dto';
import { ClienteJwtAuthGuard, ProveedorJwtAuthGuard } from 'src/guards/guards';
import { OwnClienteDataGuard } from './guard/ownClienteData.guard';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  @UseGuards(ProveedorJwtAuthGuard)
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @UseGuards(ProveedorJwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id);
  }

  @UseGuards(ClienteJwtAuthGuard, OwnClienteDataGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }

  @Post('login')
  login(@Body() loginClienteDto: LoginClienteDto) {
    return this.clienteService.login(loginClienteDto);
  }

}
