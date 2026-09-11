# Kalil, registro de operação

Arquivo de ida e volta entre o Claude do celular e o Claude do Code. Toda alteração feita
na conta de anúncios pelo celular entra aqui, no topo, com data e hora de Brasília. O Code
lê este arquivo e incorpora na memória da conta.

Formato de cada entrada:

```
## AAAA-MM-DD HH:MM
- o que mudou, onde, e por quê
- [ ] ainda não incorporado na memória
```

Quem escreve marca `[ ]`. Quando o Code incorporar, ele troca para `[x]`.

---

## 2026-09-11 13:00
- Arquivo criado. Nada a incorporar ainda.
- [x] incorporado
