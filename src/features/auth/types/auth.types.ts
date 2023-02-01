export type Permission = 'products.read' | 'products.create' | 'products.update' | 'products.delete'

export enum Role {
	Public = 'Public',
	Viewer = 'Viewer',
	Contributor = 'Contributor',
	Administrator = 'Administrator',
}

export interface AuthUser {
	name: string
	permissions: Permission[]
	role: Role
}
