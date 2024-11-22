import { UserType  } from "../../types/UserType"

// UserRepositoryInterface est le "port", c'est l'interface qui définit ce que doit faire un adaptateur.
export interface UserRepositoryInterface {
    // Cette méthode fait partie du port, elle définit l'action de récupération des utilisateurs.
    getUsers: () => UserType[]
}