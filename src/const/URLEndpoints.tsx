import { env } from "./env";

const base_url_local = 'http://192.168.1.104:8000/api/v1/';
const base_url_staging = '';
const base_url_production = '';

const urls = {
    'local': base_url_local,
    'staging': base_url_staging,
    'prodiction': base_url_production
};

export const base_url = function () { return urls[env] };
// balances (rider)
export const auth = {
    sign_in: base_url() + 'token/'
};
// user
export const user = {
    profile: base_url() + 'profile/'
};

// pharmacies
export const pharmacy = {
    list: base_url() + 'pharmacy/list/',
    details: base_url() + 'pharmacy/details/'
};

// help
export const help = {
    index: 'https://gorest.co.in/public-api/users'
};

