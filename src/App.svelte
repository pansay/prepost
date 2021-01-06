<script>
  import FileSaver from 'file-saver';
  import showdown from 'showdown';
  import prettyUrl from './lib/pretty-url.js';
  import prettyFilename from './lib/prettyFilename.js';

  const convertMarkdown = (markdownString) => {
    return showDownConverter.makeHtml(markdownString);
  }

  const copyOnClick = function() {
    this.select();
    document.execCommand('copy');
    alert(`Copied '${this.value}' to clipboard!`);
  }

  const saveFileMarkdown = function(fileContent, fileName) {
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName);
  }

  const saveFileHTML = function(fileContent, fileName) {
    var blob = new Blob([fileContent], {type: "text/html;charset=utf-8"});
    FileSaver.saveAs(blob, fileName);
  }

  const showDownConverter = new showdown.Converter();

  let title = '';
  let text = '';
  let isoDate = new Date().toISOString().substring(0, 10);

  let prettyUrlFromTitle = '';
  $: prettyUrlFromTitle = prettyUrl(title);

  let prettyFilenameMarkdown = '';
  $: prettyFilenameMarkdown = prettyFilename(prettyUrlFromTitle, isoDate, 'md');

  let prettyFilenameHTML = '';
  $: prettyFilenameHTML = prettyFilename(prettyUrlFromTitle, isoDate, 'html');

  let html = '';
  $: html = convertMarkdown(text);

</script>

<main>
  <h1>prePost</h1>

  <div>
    <label>markdown text input:</label><textarea bind:value={text}></textarea>
    <label>HTML code output:</label><textarea bind:value={html}></textarea>
    <label>rendered HTML output:</label><div>{@html html}</div>

  </div>

  <div>
    <label>date: </label><input type="date" bind:value={isoDate}>

    <label>title: </label><input bind:value={title}>

    <label>pretty-url: </label><input bind:value={prettyUrlFromTitle}>

    <label>filename: </label>
    <input
      type="text"
      bind:value={prettyFilenameMarkdown}
      on:click={copyOnClick}
      readonly>

    <button
      on:click={saveFileMarkdown(text, prettyFilenameMarkdown)}>save Markdown file</button>

    <button
      on:click={saveFileHTML(html, prettyFilenameHTML)}>save HTML file</button>
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
