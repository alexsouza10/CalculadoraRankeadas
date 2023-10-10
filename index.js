const calcularNivel = (vitorias, derrotas) => {
  const saldoVitorias = vitorias - derrotas;

  const niveis = {
    Iron: { min: 0, max: 9 },
    Bronze: { min: 10, max: 20 },
    Silver: { min: 21, max: 50 },
    Gold: { min: 51, max: 80 },
    Diamante: { min: 81, max: 90 },
    Legendary: { min: 91, max: 100 },
    Immortal: { min: 101, max: Infinity },
  };

  let nivel = "Desconhecido";

  for (const key in niveis) {
    const intervalo = niveis[key];
    if (vitorias >= intervalo.min && vitorias <= intervalo.max) {
      nivel = key;
      break;
    }
  }

  console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
};

// Exemplo de uso da função
const vitorias = 60;
const derrotas = 20;
calcularNivel(vitorias, derrotas);
