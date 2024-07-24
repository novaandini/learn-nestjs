import { Bind, Controller, Get, Param } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cats.interface";
import { promises } from "fs";
import { SubscribableOrPromise } from "rxjs";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get('create')
    create() {
        return 'Membuat data kucing baru'
    }

    @Get(':id')
    catsNumber(@Param() params: any): string {
        return `Menampilkan kucing ke-${params.id}`;
    }
}