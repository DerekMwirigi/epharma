import axios from 'axios';
import { auth } from '../const/URLEndpoints';
import { User } from "../models/Users"

export const AuthTasks = {
    signIn: (user: User) => {        
        return axios.post(`${auth.sign_in}`, JSON.stringify(user), {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    },

}