import { Cliente } from "src/cliente/entities/cliente.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Relocalizacion {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    detalles: string;
    
    @Column()
    estado: string;

    @ManyToOne(() => Cliente, cliente => cliente.relocalizaciones)
    @JoinColumn({name: 'cliente_id'})
    cliente: Cliente;

}
