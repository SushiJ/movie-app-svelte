<script context="module" lang="ts">
	import type { Data } from '../typing';

	export async function load({ fetch }: Window) {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
		);

		const data: Data = await response.json();

		if (response.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script lang="ts">
	import PopularMovies from '../components/PopularMovies.svelte';
	import type { PopularMovieData } from '../typing';

	// svelte-ignore unused-export-let
	export let popular: PopularMovieData;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<section>
	<PopularMovies {popular} />
</section>
