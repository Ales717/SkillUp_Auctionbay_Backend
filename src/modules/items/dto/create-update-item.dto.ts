import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsEmail, IsNotEmpty, Matches } from "class-validator"

export class CreateUpdateItemDto {
    @ApiProperty({ required: false })
    @IsOptional()
    title?: string

    @ApiProperty({ required: false })
    @IsOptional()
    description?: string

    @ApiProperty({ required: false })
    @IsOptional()
    starting_price?: number

    @ApiProperty({ required: false })
    @IsOptional()
    end_date?: Date

    @ApiProperty({ required: false })
    @IsOptional()
    image?: string

    @ApiProperty({ required: false })
    @IsOptional()
    user_id?: string
}