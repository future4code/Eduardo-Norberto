import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("Primeiro teste", () => {
    checaPalindromo();
  });
  it("Testa se a palavra é Palíndromo", () => {
    
    const frase = "reviver"
    
    const result = checaPalindromo(frase);

    expect(result).toHaveLength(7)
    
  });

});
