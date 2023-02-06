import React from 'react'

export default function WordLetters(props) {

    return (
        <div id='wordLettersContainer'>
            {
                props.word.map((letter, index) => {
                    return (
                        <div key={index} className='wordLettersWrite'>
                            {
                                props.letters.map((element)=>{
                                    if(letter === element){
                                        return(
                                            letter
                                        )
                                    }
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )

}
