<script lang="ts">
	import { cities } from "./data/index";
	import City from "./components/City.svelte";

	export let name: string;
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	{#each cities as city (city.name)}
		<City {...city} />
	{/each}
</main>
