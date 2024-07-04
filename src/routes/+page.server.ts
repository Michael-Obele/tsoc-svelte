import { db } from '$lib/database';
import { fail } from '@sveltejs/kit';
import type { Action } from 'svelte/action';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const getUsers = await db.user.findMany();
	console.log(getUsers);
	return {
		users: getUsers || null
	};
};

// export const actions = {
// 	add: async ({ request }) => {
// 		const data = await request.formData();
// 		const name = String(data.get('name'));
// 		const user = await db.user.findUnique({
// 			where: { name }
// 		});

// 		if (user) {
// 			return fail(400, { user: true });
// 		}

// 		const createUser = await db.user.create({
// 			data: {
// 				name
// 			}
// 		});
// 	}
// };
