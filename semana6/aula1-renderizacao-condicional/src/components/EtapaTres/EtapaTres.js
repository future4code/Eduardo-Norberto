import React from 'react';

class EtapaTres extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (

            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que não terminou um curso de graduação?</p>
                <input />
                <p>6. Você faz algum curso complementar?</p>
                    <section>
                        <option value='nenhum'>Nenhum</option>
                        <option value='tecnico'>Curso Técnico</option>
                        <option value='ingle'>Curso de Inglês</option>
                    </section>
            </div>

        );
    }
}

export default EtapaTres;