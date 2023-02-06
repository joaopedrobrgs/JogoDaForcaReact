import React from 'react'

export default function Score(props) {

    return (
        <h2>
            Tentativas restantes: <span>{props.remainingAttempts}</span>
        </h2>
    )
}
