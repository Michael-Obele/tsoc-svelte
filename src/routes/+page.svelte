<script>
	export let data;
</script>

<div class="container mx-auto rounded-lg bg-white px-4 py-4 shadow-md dark:bg-gray-800">
	<main class="mb-8">
		<h1 class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
			Welcome to TSoC's Demo App (built with Sveltekit)
		</h1>
		<p class="text-lg text-gray-700 dark:text-gray-300">
			Embark on a journey to discover the Timechain Summer of Code (TSoC) initiative, dedicated to
			building a robust BSV developer network.
		</p>
	</main>

	<section class="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
		<h2 class="mb-2 text-2xl font-semibold text-blue-500 dark:text-blue-300">About TSoC</h2>
		<p class="text-gray-700 dark:text-gray-300">
			TSoC is committed to nurturing a dynamic BSV developer community. Through education,
			mentorship, and open-source collaboration, we uphold Satoshi's Bitcoin vision.
		</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold text-blue-500 dark:text-blue-300">Join Us!</h2>
		<p class="mb-4 text-gray-700 dark:text-gray-300">
			Participate in our demo app by contributing names to our growing database. Your involvement
			helps shape the future of BSV development.
		</p>
		<button
			class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
			>Add Name</button
		>
	</section>
</div>

{#if data.users.length > 0}
	{#each data.users as item (item.id)}
		<div
			class="mb-4 flex flex-col items-center border-b border-gray-200 last:border-b-0 dark:border-gray-700 md:flex-row"
		>
			<div class="text-lg font-bold text-blue-600 dark:text-blue-400">{item.id}</div>
			<div class="ml-2 text-gray-700 dark:text-gray-300">{item.name}</div>
		</div>
	{/each}
{:else}
	<h3 class="text-gray-700 dark:text-gray-300">No users to display</h3>
{/if}
