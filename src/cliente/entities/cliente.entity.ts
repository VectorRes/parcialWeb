import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganosDisponible } from "src/organos-disponibles/entities/organos-disponible.entity";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false})
    nombre: string;

    @Column({nullable:false})
    documento: string;

    @Column({nullable:false})
    tipoDocumento: string;

    @Column({nullable:false})
    afeccion: string;

    @Column({type: Date, nullable:false})
    fechaNacimiento: Date;

    @OneToOne(() => OrganosDisponible, organo => organo.cliente)
    organoDisponible: OrganosDisponible;
}
