
import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo } from '../store/actions/numeros'

let counterUpdate = 0;

function Intervalo(props) {

    const min = props.numeros.min
    const max = props.numeros.max

    getCounterUpdate();

    return (
        <Card title="Intevalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mímino:</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly />
                </span>
            </div>

        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            if(counterUpdate && counterUpdate === 1){
                const action = alterarNumeroMinimo(novoNumero)
                dispatch(action)
            }else{
                getCounterUpdate(); 
            }
           
        }
    }
}

function getCounterUpdate() {
    return parseInt(counterUpdate === 0 ? counterUpdate = 1 : counterUpdate = 0);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)