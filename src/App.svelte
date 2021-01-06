<script>
  import prettyUrl from './pretty-url.js';
  let name = '';
</script>

<main>
  <input bind:value={name}>
  <h1>{prettyUrl(name)}</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
