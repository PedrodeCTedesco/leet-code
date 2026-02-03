/*
PROBLEMA: String Compression (LeetCode)

Dado um array de caracteres `chars`, devemos comprimi-lo **in-place** usando
o seguinte algoritmo:

- Percorremos o array da esquerda para a direita.
- Para cada grupo de caracteres **iguais e consecutivos**:

  1) Se o grupo tiver tamanho 1:
     - Escrevemos apenas o próprio caractere no array.

  2) Se o grupo tiver tamanho maior que 1:
     - Escrevemos o caractere
     - Em seguida, escrevemos os dígitos do tamanho do grupo
       (ex: 12 vira '1', '2').

RESTRIÇÕES IMPORTANTES:
- NÃO retornar uma nova string.
- A compressão deve ser feita no próprio array `chars`.
- Usar apenas **O(1) de espaço extra** (variáveis simples).
- O valor retornado é apenas o **novo comprimento válido** do array.
- Os elementos após esse comprimento podem ser ignorados.

IDEIA DO ALGORITMO (two pointers):
- Um ponteiro `read` percorre o array original.
- Um ponteiro `write` indica onde escrever no array comprimido.
- Para cada caractere:
  - Contamos quantas vezes ele se repete consecutivamente.
  - Escrevemos o caractere em `chars[write]`.
  - Se a contagem > 1, convertemos o número em string
    e escrevemos cada dígito separadamente.
- No final, `write` representa o novo tamanho do array.

COMPLEXIDADE:
- Tempo: O(n) → percorre o array uma única vez.
- Espaço: O(1) → apenas variáveis auxiliares, sem estruturas extras.
*/
