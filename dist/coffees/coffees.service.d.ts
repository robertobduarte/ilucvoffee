import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Flavor } from './entities/flavor.entity';
export declare class CoffeesService {
    private readonly coffeeRepository;
    private readonly flavorRepository;
    constructor(coffeeRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>);
    findAll(paginationQuery: any): Promise<Coffee[]>;
    findOne(id: number): Promise<Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
    update(id: number, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee>;
    remove(id: number): Promise<void>;
    private preloadFlavorByName;
}
