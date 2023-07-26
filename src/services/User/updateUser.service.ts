import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/user.interface";
import { User } from "../../entities/users.entitie";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/user.schemas";

const updateUserService = async (
  data: Partial<TUserResponse>,
  userId: number
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser: User | null = await userRepository.findOneBy({ id: userId });

  const update = userRepository.create({
    ...findUser,
    ...data,
  });
  await userRepository.save(update);

  const userReturn = userSchemaResponse.parse(update);
  return userReturn;
};
export { updateUserService };
