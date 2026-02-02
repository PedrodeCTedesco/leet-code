/**
 * Dadas duas strings str1 e str2, retorne a maior string 'x' tal que:
 * - str1 = x repetida n times
 * - str2 = x repetida m times
 * 
 * Se não existir essa string, retorne "".
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

/**
 * RACIOCÍNIO DO PROBLEMA (GCD of Strings)
 *
 * Este problema não é resolvido comparando caractere por caractere.
 * O ponto central é entender a estrutura das strings.
 *
 * 1) CONDIÇÃO DE EXISTÊNCIA
 * ------------------------------------------------
 * Se duas strings possuem um divisor comum x, então concatená-las em
 * qualquer ordem deve produzir o mesmo resultado:
 *
 *   str1 + str2 === str2 + str1
 *
 * Isso acontece porque ambas são compostas pela repetição do mesmo bloco base.
 * Se essa igualdade não for verdadeira, não existe divisor comum.
 *
 * Exemplo válido:
 *   "ABAB" + "AB" === "AB" + "ABAB"
 *
 * Exemplo inválido:
 *   "ABC" + "AB" !== "AB" + "ABC"
 *
 *
 * 2) REDUÇÃO DO PROBLEMA A COMPRIMENTOS
 * ------------------------------------------------
 * Se existe uma string x que gera str1 e str2 por repetição, então:
 *
 *   length(str1) = k * length(x)
 *   length(str2) = m * length(x)
 *
 * Logo, o comprimento de x deve dividir ambos os comprimentos.
 * O maior comprimento possível de x é:
 *
 *   gcd(length(str1), length(str2))
 *
 * Aqui o problema deixa de ser sobre strings e passa a ser sobre matemática.
 *
 *
 * 3) USO DO ALGORITMO (TEOREMA) DE EUCLIDES
 * ------------------------------------------------
 * O algoritmo de Euclides é usado para calcular o Máximo Divisor Comum (MDC).
 * Ele é eficiente (O(log n)) e evita tentativas e erros.
 *
 * Uma vez obtido o MDC dos comprimentos, basta pegar o prefixo de str1
 * com esse tamanho. Esse prefixo é o divisor comum procurado.
 *
 *
 * COMPLEXIDADE
 * ------------------------------------------------
 * Tempo:
 *   - O(n) para a verificação de concatenação
 *   - O(log n) para o MDC
 *
 * Espaço:
 *   - O(1), desconsiderando a string de retorno
 */
const gcdOfStrings = (str1, str2) => {
    // Verifica se as strings compartilham o mesmo padrão base
    if (str1 + str2 !== str2 + str1) return "";

    // Algoritmo de Euclides para o MDC dos comprimentos
    const gcdLength = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    // Retorna o maior divisor comum possível
    return str1.slice(0, gcdLength(str1.length, str2.length));
};
