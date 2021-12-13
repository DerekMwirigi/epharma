import axios from 'axios';
import { auth, user } from '../const/URLEndpoints';
import { User } from "../models/Users"

export const UserTasks = {
    profile: (accesstoken) => {
        return axios.get(`${user.profile}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${accesstoken}`,
            },
        });
    },

}