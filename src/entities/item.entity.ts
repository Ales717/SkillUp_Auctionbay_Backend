import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Base } from './base.entity'
import { User } from './user.entity'

@Entity()
export class Item extends Base {
    @Column()
    title: string

    @Column({ nullable: true })
    description: string

    @Column({ nullable: true })
    starting_price: number

    @Column({ nullable: true })
    end_date: Date

    @Column({ nullable: true })
    image: string

    @ManyToOne(() => User, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'user_id' })
    user: User | null
}
