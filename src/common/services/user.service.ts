import { User, IUser } from "../db/models/user.model";

export class UserService {
  async createUser(data: Partial<IUser>): Promise<IUser> {
    return await User.create(data);
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id);
  }
}
