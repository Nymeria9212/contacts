import { Repository } from "typeorm";
import { User } from "../../entities/users.entitie";
import { AppDataSource } from "../../data-source";

const deleteUserService = async (userId: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser: User | null = await userRepository.findOneBy({ id: userId });

  await userRepository.remove(findUser!);
};

export { deleteUserService };
