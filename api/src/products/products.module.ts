import { Module, Injectable } from '@nestjs/common';
import InjectRepository, {TypeOrmModule} from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    providers: [ProductService],
    exports: [ProductService],
    controllers: [ProductController],
})
export class ProductsModule {}
