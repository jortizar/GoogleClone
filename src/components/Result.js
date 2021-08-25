import React from 'react';
import './Result.css'

class Result extends React.Component{
    render(){
        const results = this.props.data
        return(
            <div className = 'result'>
                {results.map((element,i) => {
                   return<div className='result' key={i}>
                       <a href={element.url}>{element.url}</a>
                       <h1>{element.title}</h1>
                       <p>
                           {element.body}
                       </p>
                        <p>
                            {element.visitCount}
                        </p>
                   </div> 
                })}
            </div>
        )
    }
}

export default Result; 