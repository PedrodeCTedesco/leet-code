# 🎯 Greedy (Algoritmo Guloso)

## Ideia Central
Fazer a escolha **localmente ótima** em cada passo, esperando que essas escolhas levem a uma solução **globalmente ótima**. O algoritmo "nunca olha para trás" — uma vez feita a escolha, ela não é revertida.

## Objetivo
Resolver problemas de otimização de forma eficiente (geralmente O(n) ou O(n log n)) ao tomar decisões imediatas baseadas em critérios locais, evitando explorar todas as possibilidades como em backtracking ou programação dinâmica.

## Características

### ✅ Quando Greedy Funciona
- **Propriedade da escolha gulosa**: A escolha localmente ótima leva ao ótimo global
- **Subestrutura ótima**: Solução ótima contém soluções ótimas de subproblemas
- **Não há necessidade de reconsiderar**: Decisões passadas não são revisitadas

### ❌ Quando Greedy Falha
- Problemas onde escolha local pode impedir solução global
- Quando é necessário "voltar atrás" (usar backtracking ou DP)
- Exemplo clássico: Problema da Mochila 0/1 (precisa de DP)

## Estrutura Típica

```javascript
function greedy(items) {
    // 1. Ordenar por critério guloso
    items.sort((a, b) => criterioGuloso(a, b));
    
    // 2. Iterar e fazer escolhas locais
    let resultado = inicial;
    for (let item of items) {
        if (podePegar(item)) {
            resultado += pegar(item);  // Escolha irreversível
        }
    }
    
    return resultado;
}
```

## Padrões de Reconhecimento

🔍 **Palavras-chave no enunciado:**
- "maximize/minimize"
- "earliest/latest"
- "fewest/most"
- "optimal selection"
- "scheduling/interval"

🔍 **Sinais de que Greedy pode funcionar:**
- Ordenação resolve grande parte do problema
- Escolha óbvia a cada passo
- Não há dependências complexas entre escolhas
- Prova matemática de que local → global

## Casos de Uso Comuns

### 1️⃣ **Problemas de Intervalos/Agendamento**
- **Activity Selection**: Escolher máximo de atividades não-sobrepostas
  - *Critério*: Ordena por fim mais cedo, escolhe se não conflita
- **Meeting Rooms**: Mínimo de salas necessárias
  - *Critério*: Ordena por início, aloca sala disponível
- **Merge Intervals**: Combinar intervalos sobrepostos
  - *Critério*: Ordena por início, mescla se sobrepõe

### 2️⃣ **Problemas de Moedas/Troco**
- **Coin Change (sistemas canônicos)**: Mínimo de moedas para troco
  - *Critério*: Sempre escolhe maior moeda possível
  - ⚠️ **Só funciona com sistemas canônicos** (USD, EUR, BRL)

### 3️⃣ **Problemas de Fila/Ordem**
- **Jump Game**: Pode alcançar o final do array?
  - *Critério*: Sempre pula o máximo possível
- **Gas Station**: Encontrar ponto de partida para circuito
  - *Critério*: Começa onde tanque não fica negativo

### 4️⃣ **Problemas de String/Array**
- **Remove K Digits**: Menor número removendo K dígitos
  - *Critério*: Remove primeiro dígito onde próximo é menor
- **Partition Labels**: Particionar string em máximo de partes únicas
  - *Critério*: Estende partição até último índice de cada char

### 5️⃣ **Grafos (casos especiais)**
- **Dijkstra**: Caminho mais curto (pesos não-negativos)
  - *Critério*: Sempre expande vértice mais próximo
- **Prim/Kruskal**: Árvore geradora mínima
  - *Critério*: Sempre adiciona aresta de menor peso válida

## Exemplos Clássicos

### ✅ Greedy Funciona

**Jump Game II** (mínimo de pulos):
```javascript
const jump = (nums) => {
    let jumps = 0, currentEnd = 0, farthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        
        if (i === currentEnd) {  // Fim do alcance atual
            jumps++;
            currentEnd = farthest;  // Escolha gulosa: pula pro mais longe
        }
    }
    return jumps;
};
```

**Best Time to Buy and Sell Stock II**:
```javascript
const maxProfit = (prices) => {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        // Escolha gulosa: captura toda subida
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};
```

### ❌ Greedy Falha

**Coin Change (sistema não-canônico)**:
```
Moedas: [1, 3, 4], Alvo: 6
Greedy: 4 + 1 + 1 = 3 moedas ❌
Ótimo:  3 + 3 = 2 moedas ✓
→ Precisa de Dynamic Programming
```

## Estratégias de Ordenação Comuns

| Problema | Critério de Ordenação |
|----------|----------------------|
| Intervalos não-sobrepostos | Por fim (end time) crescente |
| Alocar salas | Por início (start time) crescente |
| Fração máxima da mochila | Por valor/peso decrescente |
| Huffman Coding | Por frequência crescente |
| Agrupar números próximos | Por valor crescente |

## Complexidade Típica

- **Ordenação**: O(n log n)
- **Iteração + escolhas**: O(n)
- **Total**: **O(n log n)** na maioria dos casos

## Como Validar se Greedy Funciona?

1. **Intuição**: A escolha óbvia a cada passo faz sentido?
2. **Prova por contradição**: Assumir que escolha gulosa não está na solução ótima leva a contradição?
3. **Teste com contraexemplos**: Encontra caso onde greedy falha?
4. **Comparar com força bruta**: Em casos pequenos, greedy = ótimo?

## Diferença de Outras Técnicas

| Técnica | Característica |
|---------|----------------|
| **Greedy** | Escolha local irreversível, sem revisitar |
| **Dynamic Programming** | Explora todas possibilidades, memoriza subproblemas |
| **Backtracking** | Explora com possibilidade de voltar atrás |
| **Divide & Conquer** | Quebra problema, resolve partes, combina |

## ⚠️ Armadilhas Comuns

1. **Assumir que greedy sempre funciona** → Sempre validar com prova ou contraexemplos
2. **Escolher critério errado** → Ex: ordenar intervalos por início quando deveria ser por fim
3. **Não considerar casos especiais** → Ex: arrays vazios, um único elemento
4. **Confundir com DP** → Se precisa guardar estados anteriores, provavelmente é DP

## 🎯 Resumo

Greedy é poderoso quando:
- ✅ Escolha local óbvia + prova de otimalidade
- ✅ Ordenação resolve estrutura do problema
- ✅ Não precisa reconsiderar decisões

Greedy **NÃO** funciona quando:
- ❌ Escolha local pode bloquear solução global
- ❌ Depende de estados futuros desconhecidos
- ❌ Requer explorar múltiplas possibilidades