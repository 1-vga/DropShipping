export const makeBold = (strings: string, bold_index: number[][]) => {
  const sentences = strings?.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/gm);
  
  sentences?.forEach((sentence, i) => {
    const words = sentence.split(' ');
    const sentenceBoldIndexes = bold_index[i];

    if(sentenceBoldIndexes) {
      words.splice(sentenceBoldIndexes[0], 0, '<strong>');
      words.splice(sentenceBoldIndexes[1] + 1, 0, '</strong>');
    }      
    sentences[i] = words.join(' ');
  })

  return sentences?.join(' ');
}

export default function wasScrolled (el: Element, { offset = 0 } = {}) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  return elemTop + offset < window.innerHeight;
}

