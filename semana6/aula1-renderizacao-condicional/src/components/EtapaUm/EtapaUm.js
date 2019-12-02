import React from 'react';

class EtapaUm extends React.Component {
    constructor(props) {
        super(props)


    }
    
    
    render() {
        return (

            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input />
                <p>3. Qual o seu email?</p>
                <input />
                <p>4. Qual o sua escolaridade?</p>
                    <section>
                        <option value='medio-incompleto'>Ensino Médio Incompleto</option>
                        <option value='medio-completo'>Ensino Médio Completo</option>
                        <option value='superior-incompleto'>Ensino Superior Incompleto</option>
                        <option value='superior-completo'>Ensino Médio Completo</option>
                    </section>
            </div>

        );
    }
}

export default EtapaUm;