export const addWordAfterNumber = (number: number | null, word: string) => {
    if (!number) {
      return 'Неизвестно';
    }
    if (number < 0) {
      return 'Неизвестно';
    }
  
    let result = number + ' ' + word;
  
    if (number % 10 === 1 && number % 100 !== 11) {
      result += 'о';
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      result += 'а';
    }
  
    return result;
  }