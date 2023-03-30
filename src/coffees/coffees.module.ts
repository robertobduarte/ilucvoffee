import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Events } from './../events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Events])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
