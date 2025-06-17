const AnaliseDeDados = require("../src/analiseDeDados");

beforeEach(() => {
    analise = new AnaliseDeDados()
  });

  test("Adiciona dados e lança erro quando os dados não são um array", () => {
    expect(() => {
      analise.adicionarDados(2);
    }).toThrow('Os dados devem ser um array.');
  });

  test("Adiciona dados", () => {
    analise.adicionarDados([2,3]);
    expect(analise.dados).toEqual([2,3]);
  });

  test("Limpar dados", () => {
    analise.adicionarDados([2,3]);
    analise.limparDados()

    expect(analise.dados).toEqual([]);
  });

  test("Ordenar dados", () => {
    analise.adicionarDados([3,2,5]);
    const ordenados = analise.ordenarDados()

    expect(ordenados).toEqual([2,3,5]);
  });

  test("calcular Media vazio", () => {
    expect(analise.calcularMedia()).toEqual(null);
  });

  test("calcular Media", () => {
    analise.adicionarDados([2,2,5]);
    expect(analise.calcularMedia()).toEqual(3);
  });

  test("calcular Mediana vazio", () => {
    expect(analise.calcularMediana()).toEqual(null);
});

test("calcular Mediana - lista com número ímpar de elementos", () => {
    analise.adicionarDados([2, 5, 1]);
    expect(analise.calcularMediana()).toEqual(2);
});

test("calcular Mediana - lista com número par de elementos", () => {
    analise.adicionarDados([1, 2, 3, 4]);
    expect(analise.calcularMediana()).toEqual(2.5);
});

  test("calcular Moda vazio", () => {
    expect(analise.calcularModa()).toEqual(null);
  });

  test("calcular Moda", () => {
    analise.adicionarDados([2,2,5]);
    expect(analise.calcularModa()).toEqual([2]);
  });

  test("Frequência maxima", () => {
    analise.adicionarDados([2,2,5,3,3,3]);
    expect(analise.calcularModa()).toEqual([3]);
  });

  test("Calcular variância null", () => {
    expect(analise.calcularVariancia()).toEqual(null);
  });

  test("Calcular variância", () => {
    analise.adicionarDados([7, 3]);
    expect(analise.calcularVariancia()).toEqual(4);
  });

  test("Calcular desvio padrão - lista vazia", () => {
    expect(analise.calcularDesvioPadrao()).toEqual(null);
});

test("Calcular desvio padrão", () => {
    analise.adicionarDados([7, 3]);
    expect(analise.calcularDesvioPadrao()).toEqual(2);
});
  
test("Encontrar mínimo - lista vazia", () => {
    expect(analise.encontrarMinimo()).toEqual(null);
});

test("Encontrar máximo - lista vazia", () => {
    expect(analise.encontrarMaximo()).toEqual(null);
});

test("Encontrar mínimo", () => {
    analise.adicionarDados([7, 3, 5, 1]);
    expect(analise.encontrarMinimo()).toEqual(1);
});

test("Encontrar máximo", () => {
    analise.adicionarDados([7, 3, 5, 1]);
    expect(analise.encontrarMaximo()).toEqual(7);
});
  
  test("Normalizar dados - todos os valores iguais", () => {
    analise.adicionarDados([5, 5, 5]);
    expect(analise.normalizarDados()).toEqual([0, 0, 0]);
  });
  
  test("Normalizar dados - valores diferentes", () => {
    analise.adicionarDados([4, 2, 3, 1]);
    expect(analise.normalizarDados()).toEqual([1, 0.3333333333333333, 0.6666666666666666, 0]);
  });
  
  test("Calcular percentil", () => {
    analise.adicionarDados([7, 3, 5, 1]);
    expect(analise.calcularPercentil(50)).toEqual(4);
  });
  
  test("Calcular soma", () => {
    analise.adicionarDados([7, 3, 5, 1]);
    expect(analise.calcularSoma()).toEqual(16);
  });
  
  test("Calcular produto", () => {
    analise.adicionarDados([7, 3, 5, 1]);
    expect(analise.calcularProduto()).toEqual(105);
  });
  
  test("Calcular amplitude", () => {
    analise.adicionarDados([7, 3, 5, 1]);
    expect(analise.calcularAmplitude()).toEqual(6);
  });
  
  test("Calcular coeficiente de variação", () => {
    analise.adicionarDados([7, 3]);
    expect(analise.calcularCoeficienteVariacao()).toEqual(40);
  });
  
  test("Remover outliers", () => {
    analise.adicionarDados([1, 2, 3, 4, 100]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([1, 2, 3, 4]);
  });
  
  test("Calcular correlação - entrada inválida (outroConjunto não é um array)", () => {
    expect(analise.calcularCorrelacao("invalid")).toEqual(null);
});

test("Calcular correlação - entrada inválida (tamanhos diferentes)", () => {
    analise.adicionarDados([1, 2, 3]);
    expect(analise.calcularCorrelacao([1, 2])).toEqual(null);
});

test("Calcular correlação - dados constantes em um dos conjuntos", () => {
    analise.adicionarDados([1, 1, 1]);
    const outroConjunto = [2, 2, 2]; 
    expect(analise.calcularCorrelacao(outroConjunto)).toEqual(null);
});