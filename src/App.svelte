<script lang="typescript">
 import { cities } from './data/index'
 import City from './components/City.svelte'
</script>

<style>
 main {
  text-align: center;
  padding: 1em;
  max-width: 90%;
  margin: 0 auto;
 }

 @media (min-width: 640px) {
  main {
   max-width: 1127px;
   margin-left: auto !important;
   margin-right: auto !important;
  }
 }
</style>

<main>
 {#each cities as city (city.name)}
  <City {...city} />
 {/each}
</main>
