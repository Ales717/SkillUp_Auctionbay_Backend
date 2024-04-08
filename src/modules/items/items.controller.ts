import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UploadedFile, UseInterceptors, } from '@nestjs/common';
import { ItemsService } from './items.service';
import { PeginatedResult } from 'interfaces/peginated-result.interface';
import { Item } from 'entities/item.entity';
import { CreateUpdateItemDto } from './dto/create-update-item.dto';
import { isFileExtensionSafe, removeFile, saveImageToStorage } from 'helpers/imageStorage';
import { FileInterceptor } from '@nestjs/platform-express'
import { join } from 'path';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query('page') page: number): Promise<PeginatedResult> {
        return this.itemsService.paginate(page)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: string): Promise<Item> {
        return this.itemsService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createItemDto: CreateUpdateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto)
    }

    @Post('upload/:id')
    @UseInterceptors(FileInterceptor('image', saveImageToStorage))
    @HttpCode(HttpStatus.CREATED)
    async upload(@UploadedFile() file: Express.Multer.File, @Param('id') itemId: string): Promise<Item> {
        const filename = file?.filename

        if (!filename) throw new BadRequestException('File must be a png, jpg/jpeg')

        const imagesFolderPath = join(process.cwd(), 'files')
        const fullImagePath = join(imagesFolderPath + '/' + file.filename)
        if (await isFileExtensionSafe(fullImagePath)) {
            return this.itemsService.updateItemImage(itemId, filename)
        }
        removeFile(fullImagePath)
        throw new BadRequestException('File content does not match extension!')
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: string, @Body() updateItemDto: CreateUpdateItemDto): Promise<Item> {
        return this.itemsService.update(id, updateItemDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: string): Promise<Item> {
        return this.itemsService.remove(id)
    }

}
