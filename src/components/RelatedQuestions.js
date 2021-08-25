import React from 'react';

class RelatedQuestions extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>
                        Related Questions
                    </h1>
                </div>
                {this.props.data.map((element) => (
                    <div>
                        <h3>
                            {element.body}
                            <hr></hr>
                        </h3>
                    </div>
                ))}

            </div>
        )
    }
    
    
}

export default RelatedQuestions