import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getAllProducts(): string {
    return 'Start building your api here . . . .';
  }

  createProduct(): void {
    console.log(' enter method to create a product . . .');
  }

  updateProduct(): void {
    console.log(' enter method to update a product . . .');
  }

  deleteProduct(): void {
    console.log(' enter method to delete a product . . .');
  }
}
