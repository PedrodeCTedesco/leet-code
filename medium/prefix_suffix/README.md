# 📊 Prefix/Suffix (Produtos/Somas Acumuladas)

## Ideia Central
Pré-processar um array acumulando valores da esquerda para direita (prefix) e/ou da direita para esquerda (suffix), permitindo consultas ou cálculos em O(1) ou O(n) total.

## Objetivo
Transformar problemas que naturalmente seriam O(n²) em O(n) ao evitar recalcular agregações repetidamente. A técnica "memoriza" resultados parciais para responder queries ou construir soluções eficientemente.

## Variações

### 🔹 Prefix Sum (Soma Acumulada)
- `prefix[i]` = soma de todos elementos de `0` até `i`
- Útil para: range sum queries, subarray sums

### 🔹 Prefix Product (Produto Acumulado)
- `prefix[i]` = produto de todos elementos de `0` até `i`
- Útil para: product except self, multiplicações em range

### 🔹 Suffix (Direita → Esquerda)
- Mesma ideia, mas processando do final para o início
- Útil para: combinar com prefix, próximo maior/menor à direita

### 🔹 Bidirectional (Prefix + Suffix)
- Combina ambas as direções para capturar contexto completo
- Útil para: "tudo exceto elemento atual", max/min à esquerda e direita

## Quando Usar

✅ **Range queries**: Soma/produto em subarray sem recalcular  
✅ **Agregações parciais**: Precisar de valores acumulados à esquerda/direita  
✅ **Evitar divisão**: Produto de todos exceto um elemento  
✅ **Subarray problems**: Encontrar subarrays com propriedades específicas  
✅ **Janelas deslizantes**: Quando tamanho fixo permite otimização  

## Exemplos Clássicos

**Prefix Sum:**
- Range Sum Query → `sum(i, j) = prefix[j] - prefix[i-1]`
- Subarray Sum Equals K → usar HashMap com prefix sums
- Running Sum of 1d Array → construir prefix array

**Prefix Product:**
- Product of Array Except Self → prefix × suffix sem divisão
- Maximum Product Subarray → rastrear max/min acumulados

**Bidirectional:**
- Trapping Rain Water → max à esquerda e à direita de cada posição
- Candy → distribuição baseada em vizinhos à esquerda e direita

**Pattern de Reconhecimento:**
- "range sum/product" → prefix sum/product
- "except self" ou "excluding current" → prefix + suffix
- "subarray with sum X" → prefix sum + HashMap
- "água entre barras" ou "vales e picos" → bidirectional

## Complexidade

- **Tempo**: O(n) para construir, O(1) para queries (ou O(n) se processar todo array)
- **Espaço**: O(n) para arrays auxiliares (pode otimizar para O(1) em alguns casos)