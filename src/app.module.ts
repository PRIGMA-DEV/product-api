import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product-controller/product.controller';
import { ProductService } from './services/product-service/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Product_entity } from './entities/product_entity';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hamid Azrine',
      database: 'store_database',
      entities: [Product_entity],
      synchronize: true,
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
