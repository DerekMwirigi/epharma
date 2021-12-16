export interface Category { name?, }

export interface User { uname?, pword?, first_name?, last_name?, phone?, status?, email?, role?, }

export interface Session { status?: boolean, user?: User, timestamp?}
