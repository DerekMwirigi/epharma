import { Session } from "../models/Users";

export const SESION: Session = {
    status: false,
    user: {}
};

export const USER_ROLES = {
    "10": {
        "label": "Users"
    }
};

// require("help.png");

const place_holder_url = '';

export const USER_ACTION_OPTIONS = {
    "USERS": [
        { id: 10, label: 'Help', icon: '', screen: 'HelpIndex' },
    ]
}