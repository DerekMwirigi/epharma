import axios from 'axios';
import { pharmacy } from '../const/URLEndpoints';

export const PharmacyTasks = {
    list: (longitude: string, latitude: string, distance: string, query: string) => {
        return axios.get(`${pharmacy.list}`, {
            params: {
                longitude: longitude,
                latitude: latitude,
                distance: distance,
                query: query
            },
            headers: {
                'Cache-Control': 'no-cache',
                // 'Authorization': `Bearer ${accesstoken}`
            },
        });
    },
}