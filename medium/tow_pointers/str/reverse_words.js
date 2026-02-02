/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    const arr = s
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ');

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join(' ')
};

/**
 * Implementação do modelo mental de dois ponteiros.
 * Etapa 1: normalizar a string, e torná-la um array para mutabilidade;
 * Etapa 2: definição dos ponteiros à esquerda e à direta;
 * Etapa 3: realização da reversão das palavras.
 * Etapa 4: retorno
 */
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
