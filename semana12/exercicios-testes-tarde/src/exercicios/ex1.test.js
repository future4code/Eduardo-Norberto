import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  it("Testa a chamada da função", () => {
    anoBissexto();
  });

  it("Testa se o ano são multiplos de 400", ()=>{
    const ano = 1600
    
    const result = anoBissexto(ano)
    
    expect(result).toBe(true)
  })

  it("Testa se múltiplos de 4 e se não múltiplo de 100", ()=>{
    const ano = 2000
    
    const result = anoBissexto(ano)

    expect(result).toBe(true)
  });

  it("Testa que todos os demais ano não são bissexto", ()=>{
    const ano = 2001
    
    const result = anoBissexto(ano)

    expect(result).toBe(false)
  });
});
