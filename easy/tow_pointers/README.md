# 1️⃣ Two Pointers (Dois Ponteiros)

## Ideia Central
Usar dois índices para percorrer uma estrutura de dados de forma inteligente, reduzindo a complexidade de O(n²) para O(n) ao evitar loops aninhados desnecessários.

## Objetivo
Resolver problemas que envolvem comparações, buscas ou transformações em arrays/strings de forma eficiente, mantendo uma invariante que guia o movimento dos ponteiros.

## Variações

### 🔹 Convergente (left → ← right)
- Ponteiros começam nas extremidades e se aproximam
- Útil para: busca em arrays ordenados, palíndromos, soma de pares

### 🔹 Mesmo Sentido (slow → fast)
- Ambos avançam da esquerda para direita, em velocidades diferentes
- Útil para: remover duplicatas, detectar ciclos, particionar arrays

### 🔹 Janela Deslizante (sliding window)
- Subclasse importante: janela de tamanho variável entre dois ponteiros
- Útil para: substring/subarray com condição, max/min em janela

## Quando Usar

✅ **Estruturas lineares**: Arrays, strings, listas encadeadas  
✅ **Arrays ordenados**: Aproveitar a ordem para decisões O(1)  
✅ **Operações in-place**: Modificar sem espaço extra  
✅ **Comparações simétricas**: Verificar propriedades dos extremos  
✅ **Particionamento**: Separar elementos por critério  

## Exemplos Clássicos

**Convergente:**
- Two Sum (array ordenado) → busca par que soma valor
- Valid Palindrome → comparar extremos
- Container With Most Water → maximizar área

**Mesmo Sentido:**
- Remove Duplicates from Sorted Array → slow marca posição válida
- Move Zeroes → fast busca não-zeros, slow insere
- Reverse Vowels of a String → swap apenas vogais

**Pattern de Reconhecimento:**
- "in-place" + array → considere two pointers
- "sorted array" + busca/par → convergente
- "remove/filter" + preservar ordem → slow/fast