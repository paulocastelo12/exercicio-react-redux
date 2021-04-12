
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

function Sorteio(props) {

    const min = props.numeros.min
    const max = props.numeros.max
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    
    return (
        <Card title="Sorteio de um Números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
            
        </Card>
    )
}

function mapStateToProps(state) {
    return{
        numeros: state.numeros
    }
}


export default connect (mapStateToProps)(Sorteio)