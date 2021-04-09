import { Specification } from '../model/Specification';

interface ICreateSpeceficationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpeceficationsDTO): void;

  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpeceficationsDTO };
