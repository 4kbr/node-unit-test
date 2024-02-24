import { UserRepository } from "./user-repository";

export class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  save(user: any) {
    this.userRepository.save(user);
  }

  findById(id: number) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
