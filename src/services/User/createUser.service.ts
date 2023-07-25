import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interface";
import { Repository } from "typeorm";
import { userSchemaResponse } from "../../schemas/user.schemas";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { email: data.email },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  const newUser = userRepository.create(data);
  await userRepository.save(newUser);

  const newUserSchema = userSchemaResponse.parse(newUser);

  return newUserSchema;
};
export { createUserService };
