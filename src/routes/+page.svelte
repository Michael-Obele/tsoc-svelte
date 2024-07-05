<script>
	import { enhance } from '$app/forms';
	import Button from '$ui/button/button.svelte';
	import Input from '$ui/input/input.svelte';
	export let data;
</script>

<div class="mx-auto min-h-screen bg-gray-900 py-4 text-white shadow-md md:px-32">
	<main class="mb-8">
		<h1 class="mb-2 text-center text-3xl font-bold text-blue-400">
			Welcome to TSoC's Demo App <br /> (built with Sveltekit)
		</h1>

		<p class="text-lg text-gray-300">
			Embark on a journey to discover the Timechain Summer of Code (TSoC) initiative, dedicated to
			building a robust BSV developer network.
		</p>
	</main>

	<section class="rounded-lg bg-gray-700 p-4">
		<h2 class="mb-2 text-2xl font-semibold text-blue-300">About TSoC</h2>

		<p class="text-gray-300">
			TSoC is committed to nurturing a dynamic BSV developer community. Through education,
			mentorship, and open-source collaboration, They uphold Satoshi's Bitcoin vision.
		</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold text-blue-300">Join Us!</h2>

		<p class="mb-4 text-gray-300">
			Participate in our demo app by contributing names to our growing database. Your involvement
			helps shape the future of BSV development.
		</p>

		<form
			action="?/add"
			use:enhance
			method="POST"
			class="flex w-full max-w-sm items-center space-x-2"
		>
			<Input class="text-white" type="text" name="name" placeholder="Enter you name" />
			<Button
				class="bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
				type="submit">Add Name</Button
			>
		</form>
	</section>

	<h3 class="my-7 text-center capitalize">A list of names.</h3>
	<div class="grid grid-cols-1 gap-4 text-white">
		<div class="grid grid-cols-3 gap-4 text-white">
			<div class="w-[100px]">S/N</div>
			<div>Name</div>
			<div></div>

			{#if data.users && data.users.length > 0}
				{#each data.users as item (item.id)}
					<div class="font-medium">{item.id}</div>
					<div>{item.name}</div>
					<form action="?/remove" use:enhance method="POST">
						<input type="hidden" value={item.name} name="name" />
						<Button
							formaction="?/remove"
							class="bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
							type="submit">Remove Name</Button
						>
					</form>
				{/each}
			{:else}
				<div class="font-bold">x</div>
				<div>No users to display</div>
				<div></div>
			{/if}
		</div>
	</div>
</div>
