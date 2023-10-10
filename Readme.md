# Calculadora de Partidas Ranqueadas - Desafio Dio

## Objetivo

O objetivo deste projeto é criar uma calculadora de partidas ranqueadas que determina o nível de um jogador com base na quantidade de vitórias e derrotas. A calculadora deve usar variáveis, operadores, estruturas de decisões, laços de repetição e funções.

## Funcionalidades

- Crie uma função que recebe como parâmetros a quantidade de vitórias e derrotas de um jogador.
- Calcule o saldo de partidas ranqueadas usando a fórmula: saldo = vitórias - derrotas.
- Determine o nível do jogador com base nas seguintes condições:
  - Se vitórias for menor do que 10, o nível é "Ferro".
  - Se vitórias estiver entre 11 e 20, o nível é "Bronze".
  - Se vitórias estiver entre 21 e 50, o nível é "Prata".
  - Se vitórias estiver entre 51 e 80, o nível é "Ouro".
  - Se vitórias estiver entre 81 e 90, o nível é "Diamante".
  - Se vitórias estiver entre 91 e 100, o nível é "Lendário".
  - Se vitórias for maior ou igual a 101, o nível é "Imortal".
- Exiba uma mensagem com o saldo de vitórias e o nível do jogador no formato:
  "O Herói tem um saldo de **{saldoVitorias}** e está no nível de **{nivel}**."

## Como Usar

1. Chame a função `calcularNivel(vitorias, derrotas)` passando a quantidade de vitórias e derrotas como argumentos.
2. A função calculará o saldo de vitórias e determinará o nível do jogador.
3. A mensagem com o saldo e o nível será exibida no console.

Exemplo de uso:

```javascript
const vitorias = 60;
const derrotas = 20;
calcularNivel(vitorias, derrotas);
