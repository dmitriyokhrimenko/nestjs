import { Post, Get, Controller } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {
    console.log('Product controller construct');
  }

  @Post('/admin/product/store')
  store() {
    console.log('trying to store a product');

    return this.productService.findAll();
  }
}
