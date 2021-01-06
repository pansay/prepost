<script>
  import FileSaver from 'file-saver';
  import showdown from 'showdown';
  import prettyUrl from './lib/pretty-url.js';
  import prettyFilename from './lib/prettyFilename.js';

  const selectRichText = (elementId) => {
    const node = document.getElementById(elementId);
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
    return node;
  }

  const convertMarkdown = (markdownString) => {
    return showDownConverter.makeHtml(markdownString);
  }

  const getFirstLine = (text) => {
    let index = text.indexOf("\n");
    if (index === -1) index = undefined;
    return text.substring(0, index);
  }

  const copyOnClick = (text) => {
    document.execCommand('copy');
    alert(`Copied\n\n${text}\n\nto clipboard!`);
  }

  const copyFilenameToClipboard = () => {
    const element = document.getElementById('filename');
    element.select();
    copyOnClick(element.value);
  }

  const copyMarkdownToClipboard = () => {
    const element = document.getElementById('markdown');
    element.select();
    copyOnClick(element.value);
  }

  const copySourceHTMLToClipboard = () => {
    const element = document.getElementById('sourceHTML');
    element.select();
    copyOnClick(element.value);
  }

  const copyRenderedHTMLToClipboard = () => {
    // this one is different as it's not textarea
    const element = selectRichText('renderedHTML');
    copyOnClick('rendered\n\n' + element.innerHTML);
  }

  const saveFileMarkdown = (fileContent, fileName) => {
    var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName); // .md file
  }

  const saveFileHTML = (fileContent, fileName) => {
    var blob = new Blob([fileContent], {type: "text/html;charset=utf-8"});
    FileSaver.saveAs(blob, fileName); // .partial.html file
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
  $: prettyFilenameHTML = prettyFilename(prettyUrlFromTitle, isoDate, 'partial.html');

  let html = '';
  $: html = convertMarkdown(text);

</script>

<main>

  <div class="columns">

    <div class="column">
      <label>Markdown text input<br>(title is first line)</label>
      <textarea
        bind:value={text}
        id="markdown" />
      <p>
        <button
          on:click={copyMarkdownToClipboard}>
          copy Mardown text to clipboard
        </button>
      </p>
    </div>

    <div class="column">
      <label>HTML<br>code output</label>
      <textarea
        bind:value={html}
        id="sourceHTML" />

      <p>
        <button
          on:click={copySourceHTMLToClipboard}>
          copy HTML source to clipboard
        </button>
      </p>
    </div>

    <div class="column">
      <label>HTML<br>rendered output</label>
      <div
        id="renderedHTML"
        class="rendered">
        {@html html}
      </div>
      <p>
        <button
          on:click={copyRenderedHTMLToClipboard}>
          copy rendered HTML to clipboard
        </button>
      </p>
    </div>

    <div class="column">
      <label>post date<br>(default today): </label><input type="date" bind:value={isoDate}>

      <label>title: </label><input bind:value={title}>

      <label>pretty-url: </label><input bind:value={prettyUrlFromTitle}>

      <label>filename: </label>
      <input
        type="text"
        id="filename"
        bind:value={prettyFilenameMarkdown}>

      <p>
        <button
          on:click={copyFilenameToClipboard}>
          copy filename to clipboard
        </button>
      </p>

      <p>
        <button
          on:click={saveFileMarkdown(text, prettyFilenameMarkdown)}>
          save Markdown file
        </button>
        <button
          on:click={saveFileHTML(html, prettyFilenameHTML)}>
          save HTML (partial)
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
