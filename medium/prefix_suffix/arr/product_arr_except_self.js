/**
 * Dado um array `nums`, onde cada posição contém um número inteiro,
 * o objetivo é retornar um novo array `result` tal que:
 *
 * result[i] = produto de todos os elementos de `nums`
 * exceto o elemento na posição `i`.
 *
 * Restrições importantes:
 * - Não é permitido usar divisão
 * - O algoritmo deve rodar em tempo linear
 */

/**
 * Tipo de problema:
 * - Prefix / Suffix Accumulation
 * - Produto acumulado
 * - Programação dinâmica implícita (estado acumulado)
 *
 * Modelo mental:
 * Em vez de calcular o produto total e dividir, decompomos o problema em:
 * - produto de todos os elementos à esquerda de `i`
 * - produto de todos os elementos à direita de `i`
 *
 * O resultado final em cada posição é a multiplicação desses dois valores.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const n = nums.length;

    // Array de saída inicializado com 1 (elemento neutro da multiplicação)
    const result = new Array(n).fill(1);

    /**
     * Passo 1 — Prefix products
     * prefix guarda o produto de todos os elementos antes do índice atual.
     *
     * Invariante:
     * antes da iteração i:
     * prefix = nums[0] * nums[1] * ... * nums[i - 1]
     */
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    /**
     * Passo 2 — Suffix products
     * suffix guarda o produto de todos os elementos depois do índice atual.
     *
     * Invariante:
     * antes da iteração i:
     * suffix = nums[i + 1] * nums[i + 2] * ... * nums[n - 1]
     *
     * Multiplicamos o valor já armazenado (prefix) pelo suffix.
     */
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};

/**
 * Por que essa solução funciona?
 *
 * Para cada posição i:
 * - No primeiro loop, result[i] recebe o produto de todos os elementos à esquerda
 * - No segundo loop, result[i] é multiplicado pelo produto de todos os elementos à direita
 *
 * Assim, result[i] = (produto à esquerda de i) * (produto à direita de i)
 * exatamente o que o problema pede.
 */

/**
 * Complexidade de tempo: O(n)
 * - Dois loops lineares independentes
 *
 * Complexidade de espaço: O(1) extra
 * - O array de saída não conta como espaço extra
 * - Apenas duas variáveis auxiliares (prefix e suffix)
 */
