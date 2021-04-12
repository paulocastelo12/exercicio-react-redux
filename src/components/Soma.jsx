
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

function Soma(props) {

    const min = props.numeros.min
    const max = props.numeros.max

    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max)}</strong>
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

export default connect (mapStateToProps)(Soma)