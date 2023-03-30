import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export interface QueryParams {
    param1: string;
    param2: string;
    offset: number;
    limit: number;
}
export declare class CoffeesController {
    private readonly coffesService;
    constructor(coffesService: CoffeesService);
    findAll(paginationQuery: PaginationQueryDto): Promise<import("./entities/coffee.entity").Coffee[]>;
    findOne(id: number): Promise<import("./entities/coffee.entity").Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<import("./entities/coffee.entity").Coffee>;
    update(id: number, updateCoffeeDto: UpdateCoffeeDto): Promise<import("./entities/coffee.entity").Coffee>;
    remove(id: number): Promise<void>;
}
