/**
 * Dada uma string `s`, inverte a ordem das vogais presentes na string,
 * mantendo todas as demais letras na mesma posição.
 *
 * As vogais consideradas são:
 * a, e, i, o, u (maiúsculas e minúsculas)
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  const arr = s.split('');

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }

    while (left < right && !vowels.has(arr[right])) {
      right--;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join('');
};

/**
 * Complexidade de espaço e tempo: O(n)
 * 
 * O problema é um modelo clássico de troca simétrica de elementos filtrados e, por isso, pode ser resolvido
 * pelo modelo mental de dois ponteiros.
 * Etapa 1: transformar a string em um array para que os elementos possam ser mutados;
 * Etapa 2: definição do Set com os conjuntos de valores possíveis;
 * Etapa 3: os ponteiros 'left' e 'right'. O ponteiro 'left' indica a próxima vogal da esquerda, e
 * o ponteiro 'right' indica a próxima vogal da direita.
 * Etapa 4: os dois while aninhados. O da esquerda diz "ignore tudo que não for vogal à esquerda", e 
 * o while da direita faz a mesma coisa, porém à direita.
 * Etapa 5: a troca acontece neste trecho:
 * [arr[left], arr[right]] = [arr[right], arr[left]];
 * E depois na Etapa 6 incrementamos e decrementamos os ponteiros para garantir que não entremos
 * em um loop infinito.
 */