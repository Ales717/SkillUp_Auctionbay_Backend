import { IsOptional, IsEmail, IsNotEmpty, Matches } from "class-validator"
import { Match } from "decorators/match.decorator"

export class CreateUpdateBidDto {
    @IsOptional()
    amount?: number

    @IsOptional()
    date?: Date

    @IsOptional()
    user_id?: string

    @IsOptional()
    item_id?: string
}