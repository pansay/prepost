<script>
  import FileSaver from 'file-saver';
  import showdown from 'showdown';
  import prettyUrl from './lib/pretty-url.js';
  import prettyFilename from './lib/prettyFilename.js';

  const convertMarkdown = (markdownString) => {
    return showDownConverter.makeHtml(markdownString);
  }

  const getFirstLine = (text) => {
    let index = text.indexOf("\n");
    if (index === -1) index = undefined;
    return text.substring(0, index);
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
  $: title = getFirstLine(text);

  let text = "Title with spaces\n===\n\nParagraph with *bold*";
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

  <div class="columns">

    <div class="column">
      <label>markdown text input<br>(title is first line)</label>
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
      <label>HTML<br>code output</label>
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
      <label>HTML<br>rendered output</label>
      <div class="rendered">{@html html}</div>
      <p>
        <button
          on:click={copyToClipboard(html)}>
          copy HTML source to clipboard
        </button>
      </p>
    </div>

    <div class="column">
      <label>post date: </label><input type="date" bind:value={isoDate}>

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

  </div>

</main>

<footer>
  <a href="https://github.com/pansay/prepost">
    source code and documentation on GitHub
  </a>
</footer>
