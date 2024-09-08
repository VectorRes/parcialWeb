import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrganosDisponible } from 'src/organos-disponibles/entities/organos-disponible.entity';

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    apodo: string;

    @Column()
    contacto: string;

    @OneToMany(() => OrganosDisponible, organosDisponibles => organosDisponibles.proveedor)
    organosDisponibles: OrganosDisponible[];
}