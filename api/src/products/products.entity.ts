import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	vendor: string;

	@Column({
		type: 'float',
	})
	price: string;

	@Column({
		type: 'float',
	})
	oldPrice: string;

	@Column()
	quantity: number;

	@Column()
	slug: string;
}
