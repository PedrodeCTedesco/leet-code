/** Dado um array de inteiros 'nums', retorne true se existir um triplo de índices (i, j, k)
 * de tal forma que i < j < k, e nums[i] < nums[j] < nums[k].
 * Se não existir, retornar false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
    let first = Infinity;
    let second = Infinity;

    for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }

    return false;
};

/**
 * O raciocínio é que temos que comparar os valores do array pensando em substituir um valor válido
 * para a invariante, e não pensando em acumular valores. Por isso, no último else, caso cheguemos
 * até ele isso significa que num > first && num > second
 * 
 * Complexidade de tempo: O(n)
 * Complexidade de espaço: O(1)
 */