import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCoffeshopEventDto {

    @IsNotEmpty()
    @IsString()
    fellepo: string;

    @IsNotEmpty()
    @IsDate()
    kezdesi_ido: Date;

    @IsNotEmpty()
    @IsInt()
    idotartam: number;

    @IsBoolean()
    elmarad: boolean;
}
