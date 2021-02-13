import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Products)
		private readonly productRepository: Repository<Products>,
	) {}

	findOneById(id: string): Promise<Products> {
		return this.productRepository.findOne(id);
	}

	findAll() {
		return this.productRepository.find();
	}

	findUser(username, password): any {
		console.log(username, password)
		return this.productRepository.find({
			where: {
				login: username,
				password: password,
			},
		});
	}

	// async findOne(username: string): Promise<User | undefined> {
	//   return this.users.find(user => user.username === username);
	// }
}
