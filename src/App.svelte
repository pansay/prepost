<script>
  import FileSaver from 'file-saver';
  import showdown from 'showdown';
  import prettyUrl from './lib/pretty-url.js';
  import prettyFilename from './lib/prettyFilename.js';

  const convertMarkdown = (markdownString) => {
    return showDownConverter.makeHtml(markdownString);
  }

  const copyOnClick = (element) => {
    element.select();
    document.execCommand('copy');
    alert(`Copied '${element.value}' to clipboard!`);
  }

  const copyFilenameToClipboard = () => {
    const element = document.getElementById('filename');
    copyOnClick(element);
  }

  const saveFileMarkdown = (fileContent, fileName) => {
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName);
  }

  const saveFileHTML = (fileContent, fileName) => {
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
    <label>post date: </label><input type="date" bind:value={isoDate}>
  </div>

  <div class="columns">

    <div class="column">
      <label>markdown text input</label>
      <textarea bind:value={text}></textarea>
      <p>
        <button
          on:click={saveFileMarkdown(text, prettyFilenameMarkdown)}>
          save Markdown file
        </button>
        <button
          on:click={copyToClipboard(html)}>
          copy Mardown text to clipboard
        </button>
      </p>
    </div>

    <div class="column">
      <label>HTML code output</label>
      <textarea bind:value={html}></textarea>

      <p>
        <button
          on:click={saveFileHTML(html, prettyFilenameHTML)}>
          save HTML file
        </button>
        <button
          on:click={copyToClipboard(html)}>
          copy HTML source to clipboard
        </button>
      </p>
    </div>

    <div class="column">
      <label>rendered HTML output</label>
      <div class="rendered">{@html html}</div>
      <p>
        <button
          on:click={copyToClipboard(html)}>
          copy HTML source to clipboard
        </button>
      </p>
    </div>

  </div>

  <div>

    <label>title: </label><input bind:value={title}>

    <label>pretty-url: </label><input bind:value={prettyUrlFromTitle}>

    <label>filename: </label>
    <input
      type="text"
      id="filename"
      bind:value={prettyFilenameMarkdown}
      readonly>

    <p>
      <button
        on:click={copyFilenameToClipboard}>
        copy filename to clipboard
      </button>
    </p>

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
    margin: 0 auto;
    width: 800px;
  }

  .columns {
    clear: both;
    float: left;
    width: 100%;
    height: 95%;
    margin: 40px 0 0 0;
  }

  .column {
    float: left;
    width: 30%;
    height: 400px;
    margin-right: 5%;
  }

  .column:last-child {
    margin-right: 0;
  }

  textarea {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    font-size: .75em;
  }

  .rendered {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    overflow: scroll;
    font-size: .75em;
  }
</style>
