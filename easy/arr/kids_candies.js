/**
 * Dado um array `candies`, onde cada posição representa a quantidade de doces
 * que uma criança possui, e um número `extraCandies` que pode ser dado a qualquer
 * criança individualmente, o objetivo é determinar, para cada criança, se ao
 * receber todos os doces extras ela passaria a ter uma quantidade de doces maior
 * ou igual à maior quantidade existente no array original.
 *
 * A função retorna um array de booleanos, onde cada posição indica se a criança
 * correspondente pode ou não alcançar o maior número de doces.
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    let greatestCandieNumber = candies[0];
    const result = new Array(candies.length);

    for (let i = 1; i < candies.length; i += 1) {
        if (candies[i] > greatestCandieNumber) {
            greatestCandieNumber = candies[i];
        }
    }

    for (let i = 0; i < candies.length; i++) {
        result[i] = candies[i] + extraCandies >= greatestCandieNumber;
    }

    return result;
};

/**
 * Complexidade de espaço: O(n)
 * Complexidade de tempo: O(n)
 */