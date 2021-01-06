const prettyFilename= (title, isoDate, ending) => {
  return `${isoDate}_${title}.${ending}`;
}

export default prettyFilename;
