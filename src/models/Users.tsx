export interface Category { name?, }

export interface User { username?, password?, name?, first_name?, last_name?, phone?, status?, access?, category?: Category, role?, }

export interface Session { status?: boolean, user?: User, timestamp?}
