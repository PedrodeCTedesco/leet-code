/**
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
 * starting with word1. If a string is longer than the other, append the additional letters onto the 
 * end of the merged string. 
 * 
 * Return the merged string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

/** O raciocínio aqui:
 * a) identificar qual o tamanho máximo para a iteração do loop; se ambos forem iguais, então independente qual
 * a string que será usado como tamanho total;
 * b) como sempre temos o primeiro index da string formando um par {index_a, index_b} podemos obter esse par a
 * cada iteração; dessa forma, formamos a string merged
 */
const mergeAlternatelyV1 = (word1, word2) => {
    const length = word1.length > word2.length 
    ? word1.length 
    : word2.length

    let mergedStr = "";
    for (i = 0; i < length; i++) {
        let charWord1 = word1.charAt(i);
        let charWord2 = word2.charAt(i);
        mergedStr += charWord1.concat(charWord2);
    }

    return mergedStr;
}

const mergeAlternatelyV2 = (a, b) => {
  const maxLength = Math.max(a.length, b.length)
  let result = ''

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? '') + (b[i] ?? '')
  }

  return result
}

/**
 * Ambas performam O(n) e não apresentam diferenças significativas em tempo de execução para strings pequenas.
 * Apenas com strings muito longas poderíamos ter vantagem da versão 2 sobre a versão 1.
 *  */