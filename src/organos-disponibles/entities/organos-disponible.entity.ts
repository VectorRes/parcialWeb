import { Cliente } from "src/cliente/entities/cliente.entity";
import { Proveedor } from "src/proveedor/entities/proveedor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrganosDisponible {
    @PrimaryGeneratedColumn('uuid')
    id_organo: string;

    @Column({nullable:false})
    procedencia: string;

    @Column({nullable:false})
    tipoOrgano: string;

    @OneToOne(() => Cliente, cliente => cliente.organoDisponible)
    @JoinColumn({ name: 'id_cliente' })
    cliente: Cliente;

    @ManyToOne(() => Proveedor, proveedor => proveedor.organosDisponibles)
    @JoinColumn({ name: 'id_proveedor' })
    proveedor: Proveedor;
}
