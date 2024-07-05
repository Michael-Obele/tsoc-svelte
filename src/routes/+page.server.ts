import { db } from '$lib/database';
import { fail } from '@sveltejs/kit';
import type { Action } from 'svelte/action';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const getUsers = await db.user.findMany();
		return {
			users: getUsers
		};
	} catch (error) {
		console.dir(error);
		console.warn(error);
	}
};

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const name = String(data.get('name'));
		console.log('Adding: ', name);

		const existingUser = await db.user.findUnique({
			where: { name }
		});

		if (existingUser) {
			return fail(400, { user: true });
		}

		const createUser = await db.user.create({
			data: {
				name: name
			}
		});
		return createUser;
	},
	remove: async ({ request }) => {
		const data = await request.formData();
		const name = String(data.get('name'));
		console.log('Removing: ', name);

		const createUser = await db.user.delete({
			where: {
				name: name
			}
		});
		return createUser;
	}
};
