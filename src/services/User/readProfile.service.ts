import { Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entitie";
import { AppDataSource } from "../../data-source";
import { TUser } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schemas";

const readProfileService = async (idUser: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: idUser } });

  const userReturn = userSchemaResponse.parse(user);

  return userReturn;
};

export { readProfileService };
