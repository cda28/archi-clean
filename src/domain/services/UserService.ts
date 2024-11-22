import { UserType } from "../../types/UserType";

import { UserRepositoryInterface } from "../ports/UserRepositoryInterface";


export class UserService {
    
    private repository : UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface ){
        this.repository = userRepository
    }

    getUsersAdult(): UserType[]{

        const users : UserType[]  =  this.repository.getUsers()

        const u :  UserType[] = []
        for(const user of users){
            if(user.age > 18) u.push(user)
        }

        return u
    }
}