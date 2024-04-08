import { Body, Controller, Get, HttpCode, HttpStatus, Param, Query, Post, Patch, Delete } from '@nestjs/common';
import { BidsService } from './bids.service';
import { PeginatedResult } from 'interfaces/peginated-result.interface';
import { Bid } from 'entities/bid.entity';
import { CreateUpdateBidDto } from './dto/create-update-bid.dto';

@Controller('bids')
export class BidsController {
    constructor(private readonly bidsService: BidsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query('page') page: number): Promise<PeginatedResult> {
        return this.bidsService.paginate(page)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: string): Promise<Bid> {
        return this.bidsService.findById(id)
    }

    @Get('user/:user_id')
    @HttpCode(HttpStatus.OK)
    async findByUserId(@Param('user_id') user_id: string): Promise<Bid[]> {
        const condition = { user: { id: user_id } }
        return this.bidsService.findBy(condition);
    }

    @Get('item/:item_id')
    @HttpCode(HttpStatus.OK)
    async findByItemId(@Param('item_id') item_id: string): Promise<Bid[]> {
        const condition = { item: { id: item_id } }
        return this.bidsService.findBy(condition);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createBidDto: CreateUpdateBidDto): Promise<Bid> {
        return this.bidsService.create(createBidDto)
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: string, @Body() updateBidDto: CreateUpdateBidDto): Promise<Bid> {
        return this.bidsService.update(id, updateBidDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: string): Promise<Bid> {
        return this.bidsService.remove(id)
    }
}
