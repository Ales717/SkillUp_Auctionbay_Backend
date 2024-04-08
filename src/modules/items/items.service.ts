import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Item } from 'entities/item.entity'
import { AbstractService } from 'modules/common/abstract.service'
import { Repository } from 'typeorm'
import { CreateUpdateItemDto } from './dto/create-update-item.dto'
import Logging from 'library/Logging'

@Injectable()
export class ItemsService extends AbstractService {
    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {
        super(itemRepository)
    }

    async create(createItemDto: CreateUpdateItemDto): Promise<Item> {
        try {
            const item = this.itemRepository.create({ ...createItemDto, user: { id: createItemDto.user_id } })
            return this.itemRepository.save(item)
        } catch (error) {
            Logging.error(error)
            throw new BadRequestException('Something went wrong while creating a new item.')
        }
    }

    async update(itemId: string, updateItemDto: CreateUpdateItemDto): Promise<Item> {
        const item = (await this.findById(itemId)) as Item
        const { title, description, starting_price, end_date, image, user_id, ...data } = updateItemDto
        try {
            item.title = title
            item.description = description
            item.starting_price = starting_price
            item.end_date = end_date
            item.image = image
            item.user = { ...item.user, id: user_id }
            return this.itemRepository.save(item)
        } catch (error) {
            Logging.error(error)
            throw new InternalServerErrorException('Something went wrong while updating the item.')
        }
    }

    async updateItemImage(id: string, image: string): Promise<Item> {
        const item = await this.findById(id)
        return this.update(item.id, { ...item, image })
    }

}
