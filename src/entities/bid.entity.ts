import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Base } from './base.entity'
import { User } from './user.entity'
import { Item } from './item.entity'

@Entity()
export class Bid extends Base {
    @Column({ nullable: true })
    amount: number

    @Column({ nullable: true })
    date: Date

    @ManyToOne(() => User, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'user_id' })
    user: User | null

    @ManyToOne(() => Item, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'item_id' })
    item: Item | null
}
