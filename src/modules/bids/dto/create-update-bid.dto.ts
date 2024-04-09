import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsEmail, IsNotEmpty, Matches } from "class-validator"
import { Match } from "decorators/match.decorator"

export class CreateUpdateBidDto {
    @ApiProperty({ required: false })
    @IsOptional()
    amount?: number

    @ApiProperty({ required: false })
    @IsOptional()
    date?: Date

    @ApiProperty({ required: false })
    @IsOptional()
    user_id?: string

    @ApiProperty({ required: false })
    @IsOptional()
    item_id?: string
}