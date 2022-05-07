<script lang="ts">
    import type {PopularMovieData} from "../typing";
	// svelte-ignore unused-export-let
    export let popular: PopularMovieData; 
    
</script>

<h3>PopMovies</h3>
<div>
    {#each popular as movie }
        {movie}
    {/each}
</div>

