
import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

function Media(props){

    const min = props.numeros.min
    const max = props.numeros.max

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min+max)/2}</strong>
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

export default connect (mapStateToProps)(Media)