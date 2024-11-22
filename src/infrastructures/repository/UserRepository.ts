import { UserRepositoryInterface } from "../../domain/ports/UserRepositoryInterface"
import { UserType } from "../../types/UserType"

// Un exemple d'adaptateur qui implémente l'interface UserRepositoryInterface
export class UserRepository implements UserRepositoryInterface {

    private users : UserType[] = [
        { "name": "Alice", "age": 25 },
        { "name": "Bob", "age": 15 },
        { "name": "Charlie", "age": 28 },
        { "name": "David", "age": 22 },
        { "name": "Eva", "age": 19 },
        { "name": "Frank", "age": 32 },
        { "name": "Grace", "age": 16 },
        { "name": "Hannah", "age": 16 },
        { "name": "Ian", "age": 27 },
        { "name": "Jack", "age": 30 }
      ];

      getUsers() :  UserType[] {

        return this.users
      }

}