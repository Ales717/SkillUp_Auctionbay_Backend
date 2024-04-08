import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bid } from 'entities/bid.entity';
import { AbstractService } from 'modules/common/abstract.service';
import { Repository } from 'typeorm';
import { CreateUpdateBidDto } from './dto/create-update-bid.dto';
import Logging from 'library/Logging';

@Injectable()
export class BidsService extends AbstractService {
    constructor(@InjectRepository(Bid) private readonly bidRepository: Repository<Bid>) {
        super(bidRepository)
    }

    async create(createBidDto: CreateUpdateBidDto): Promise<Bid> {
        try {
            const bid = this.bidRepository.create({ ...createBidDto, user: { id: createBidDto.user_id }, item: { id: createBidDto.item_id } })
            return this.bidRepository.save(bid)
        } catch (error) {
            Logging.error(error)
            throw new BadRequestException('Something went wrong while creating a new bid.')
        }
    }

    async update(bidId: string, updateBidDto: CreateUpdateBidDto): Promise<Bid> {
        const bid = (await this.findById(bidId)) as Bid
        const { amount, date, user_id, item_id, ...data } = updateBidDto
        try {
            bid.amount = amount
            bid.date = date
            bid.user = { ...bid.user, id: user_id }
            bid.item = { ...bid.item, id: item_id }
            return this.bidRepository.save(bid)
        } catch (error) {
            Logging.error(error)
            throw new InternalServerErrorException('Something went wrong while updating the bid.')
        }
    }
}
