function onKeyDown(e){
    if (e.key == "Enter") {
        cadastrarDespesas()
    }
}
class DespesaConta{
    constructor(valor, tipo, descricao){
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

const arrayDespConta = []

function cadastrarDespesas(){
    if (document.getElementById("valorDesp").value == "" || document.getElementById("seletor-despesa") == "" || document.getElementById("descricao").value == ""){
        alert("Preencha todos os campos. Por favor!")
    }else{
        const novaDespesa = new DespesaConta(valorDesp = document.getElementById("valorDesp").value, tipoDesp = document.getElementById("seletor-despesa").value, descDesp = document.getElementById("descricao").value)
        arrayDespConta.push(novaDespesa)
        let containerTotalDespesa = document.getElementById('total-despesa')
        containerTotalDespesa.innerHTML = ""
        for(let desp of arrayDespConta){
            containerTotalDespesa.innerHTML += "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"
        } 
    }   
}

function filtar(){
    let containerTipoDespesa = document.getElementById('lista-filtro')
    containerTipoDespesa.innerHTML = ""
    let respSeletor = document.getElementById("despesa-seletor").value
    let vMax = document.getElementById("valorMaximo").value
    let vMin = document.getElementById("valorMinimo").value
    switch(respSeletor){
        case 'casa':
            for(let desp of arrayDespConta){
                if  (desp.tipo === 'casa' && desp.valor >= vMin && desp.valor <= vMax){
                    const despesaCasa = arrayDespConta.filter((item, i, arr)=>{
                        return true
                    })
                    containerTipoDespesa.innerHTML +=  "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"    
                }
            }
            break
        case 'festa':
            for(let desp of arrayDespConta){
                 if  (desp.tipo === 'festa' && desp.valor >= vMin && desp.valor <= vMax){
                    const despesaFesta = arrayDespConta.filter((item, i, arr)=>{
                        return true
                    })
                    containerTipoDespesa.innerHTML +=  "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"    
                }
            }
            break
        case 'viagem':
            for(let desp of arrayDespConta){
                if  (desp.tipo === 'viagem' && desp.valor >= vMin && desp.valor <= vMax){
                    const despesaViagem = arrayDespConta.filter((item, i, arr)=>{
                        return true
                    })
                    containerTipoDespesa.innerHTML +=  "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"    
                }
            }
            break
        case 'alimentacao':
            for(let desp of arrayDespConta){
                if  (desp.tipo === 'alimentacao' && desp.valor >= vMin && desp.valor <= vMax){
                    const despesaAlimentacao = arrayDespConta.filter((item, i, arr)=>{
                        return true
                    })
                    containerTipoDespesa.innerHTML +=  "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"    
                }
            }
            break       
        case 'transporte':
            for(let desp of arrayDespConta){
                if  (desp.tipo === 'transporte' && desp.valor >= vMin && desp.valor <= vMax){
                    const despesaTransporte = arrayDespConta.filter((item, i, arr)=>{
                        return true
                    })
                    containerTipoDespesa.innerHTML +=  "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"    
                }
            }
            break   
        case 'outro':
            for(let desp of arrayDespConta){
                if  (desp.tipo === 'outro' && desp.valor >= vMin && desp.valor <= vMax){
                    const despesaOutro = arrayDespConta.filter((item, i, arr)=>{
                        return true
                    })
                    containerTipoDespesa.innerHTML +=  "<article id='espacoDesp'>"+"<p> Valor: "+ desp.valor + "</p>" + "<p> Tipo: " + desp.tipo +"</p>"+"<p> Descrição: "+desp.descricao+"</p>" +"</article>"    
                }
            }
            break                           
    }
}

apagarForm()

function apagarForm(){
    document.getElementById("valorDesp").value=''
    document.getElementById("seletor-despesa").value=''
    document.getElementById('descricao').value=''
    document.getElementById('despesa-seletor').value=''
    document.getElementById('valorMinimo').value=''
    document.getElementById('valorMaximo').value=''
}

