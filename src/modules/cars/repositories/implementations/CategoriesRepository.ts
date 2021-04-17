import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  // Definimos o tipo de acesso (público ou privado)
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
    // const category = new Category();

    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });

    // this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // SELECT * FROM categories WHERE name = "name" LIMIT 1
    const category = await this.repository.findOne({ name });

    // const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
