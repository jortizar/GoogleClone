import React from 'react';

var questions = [ '¿Qué es un select en html?', 
'¿Qué eventos se pueden utilizar en el objeto Select en javascript?',
'¿Qué es un dropdown html?']

class RelatedQuestions extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>
                        Preguntas relacionadas
                    </h1>
                </div>
                {questions.map((element) => (
                    <div>
                        <h3>
                            {element}
                            <hr></hr>
                        </h3>
                    </div>
                ))}

            </div>
        )
    }
    
    
}

export default RelatedQuestions