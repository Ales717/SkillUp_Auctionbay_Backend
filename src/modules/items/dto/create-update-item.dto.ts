import { IsOptional, IsEmail, IsNotEmpty, Matches } from "class-validator"
import { Match } from "decorators/match.decorator"

export class CreateUpdateItemDto {
    @IsNotEmpty()
    title: string

    @IsOptional()
    description?: string

    @IsOptional()
    starting_price: number

    @IsOptional()
    end_date: Date

    @IsOptional()
    image?: string

    /* @IsNotEmpty()
    user_id: string */
}