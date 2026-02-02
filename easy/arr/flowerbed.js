/**
 * Dado um array `flowerbed` contendo 0's e 1's, onde:
 * - 0 representa um canteiro vazio
 * - 1 representa um canteiro já plantado
 *
 * e um número inteiro `n`, que indica quantas novas flores desejamos plantar,
 * o objetivo é verificar se é possível plantar `n` flores adicionais sem violar
 * a regra de que não podem existir flores em posições adjacentes.
 *
 * A estratégia consiste em:
 * 1) Adicionar sentinelas (1) no início e no fim do array
 * 2) Contar sequências contínuas de 0's entre 1's
 * 3) Para cada sequência, calcular quantas flores cabem usando:
 *    floor((zeros - 1) / 2)
 * 4) Somar o total e comparar com `n`
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) return true;

  if (flowerbed.length === 1) {
    return flowerbed[0] === 0 && n <= 1;
  }

  let zeros = 0;
  let totalFlowers = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      zeros++;
    } else {
      if (zeros > 0) {
        if (i - zeros === 0) {
          totalFlowers += Math.floor(zeros / 2);
        } else {
          totalFlowers += Math.floor((zeros - 1) / 2);
        }
        zeros = 0;
      }
    }
  }

  if (zeros > 0) {
    if (zeros === flowerbed.length) {
        totalFlowers += Math.ceil(zeros / 2);
    } else {
        totalFlowers += Math.floor(zeros / 2);
    }
  }

  return totalFlowers >= n;
};


/**
 * Complexidade de tempo: O(n)
 * Complexidade de espaço: O(1)
 */