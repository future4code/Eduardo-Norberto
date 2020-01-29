import { sorteiaNumero } from "./ex3";
import { isExportDeclaration } from "typescript";

describe("Sorteia Número", () => {
  it("Primeiro teste", () => {
    sorteiaNumero(1, 100);
  });

  it("Testa sorteio de número aleatorio", ()=>{
    
    console.log = jest.fn()

    const result = sorteiaNumero(1, 100)

    console.log(result) 
    
    expect(console.log).toHaveBeenCalledWith(result)
    
  })
});
