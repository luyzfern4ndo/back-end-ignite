import { Specification } from '../../entities/Specification';
import {
  ICreateSpeceficationsDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ICreateSpeceficationsDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specifications);
  }

  findByName(name: string): Specification {
    const specifications = this.specifications.find(
      specification => specification.name === name,
    );

    return specifications;
  }
}

export { SpecificationsRepository };
