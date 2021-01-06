<script>
  import prettyUrl from './pretty-url.js';
  import prettyFilename from './prettyFilename.js';
  let title = '';
  let isoDate = new Date().toISOString().substring(0, 10);

  let prettyUrlFromTitle = '';
  $: prettyUrlFromTitle = prettyUrl(title)

  let prettyFilenameFromTitleAndDate = '';
  $: prettyFilenameFromTitleAndDate = prettyFilename(prettyUrlFromTitle, isoDate)
</script>

<main>
  <h1>prePost</h1>
  <div>
    <label>date: </label><input type="date" bind:value={isoDate}>
    <label>title: </label><input bind:value={title}>
    <label>pretty-url: </label><input bind:value={prettyUrlFromTitle}>
    <label>filename: </label><input type="text" bind:value={prettyFilenameFromTitleAndDate} disabled>
  </div>
</main>

<footer>
  <a href="https://github.com/pansay/prepost">
    source code and documentation on GitHub
  </a>
</footer>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
