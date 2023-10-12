const wordsToCheckEng = [
  'a', 'as', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'and', 'or', 'of', 'the'
];

const wordsToCheckRus = [
  "а", "в", "и", "с", "для", "или", "да", "либо", "ибо", "ли", "же", "зато", "то", "что", "как",
  "чем", "чему", "чего", "от", "до", "по", "из", "у", "на", "о", "об", "обо",
  "под", "за", "над", "к", "ко", "бы",
];

const wordsToCheck = new Set([...wordsToCheckRus, ...wordsToCheckEng])

export const formatText = (text: string | undefined, containerWidth: number, letterWidth: number): string => {
  console.log(containerWidth)
  if (!text) return '';

  const words = text.split(' ');
  let currLine = '';
  let formattedText = '';

  for (let i = 0; i < words.length; i++) {
    const currWord = words[i]
    const currLineWidth = currLine.length * letterWidth
    const currWordWidth = currWord.length * letterWidth

    if (!wordsToCheck.has(currWord.toLowerCase()) || i === words.length - 1) {
      if (currLineWidth + currWordWidth + letterWidth <= containerWidth) {
        currLine += currWord + ' '
      } else {
        formattedText += currLine + '</br>'
        currLine = currWord + ' '
      }
    } else {
      const nextWord = words[i + 1]
      const nextWordWidth = nextWord.length * letterWidth

      if (i !== words.length - 2 && wordsToCheck.has(nextWord.toLowerCase())) {
        const nextNextWord = words[i + 2]
        const nextNextWordWidth = nextNextWord.length * letterWidth

        if (currLineWidth + currWordWidth + nextWordWidth + nextNextWordWidth + letterWidth * 3 <= containerWidth) {
          currLine += currWord + ' '
        } else {
          formattedText += currLine + '</br>'
          currLine = currWord + ' '
        }
      } else {
        if (currLineWidth + currWordWidth + nextWordWidth + letterWidth * 2 <= containerWidth) {
          currLine += currWord + ' '
        } else {
          formattedText += currLine + '</br>'
          currLine = currWord + ' '
        }
      }
    }
  }

  if (currLine !== '') {
    formattedText += currLine
  }

  return formattedText
};
