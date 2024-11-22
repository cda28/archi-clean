import { UserService } from "./domain/services/UserService"
import { UserRepository } from "./infrastructures/repository/UserRepository";


const userS = new UserService( new UserRepository );


console.log(userS.getUsersAdult())