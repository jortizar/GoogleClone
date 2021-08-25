import React from 'react'
import './SideResults.css'

export default class SideResults extends React.Component{
    render(){
        const data = this.props.data
        return(
            <div>
                {data.map((element,i) => {
                  if(i == 2){
                  return<div className='side_results'>
                    <div className='images_container'>
                    {element.imageUrlList.map(element =>{
                        return<div className='image'><img src={element}/></div>
                    })}
                    </div>
                    <div className='result_body'>
                        <h1>{element.title}</h1>
                        <p>{element.body}</p>
                        <div className='subtitle'>
                        <h3>Written in: </h3><p>{element.writtenIn}</p>
                        </div>
                        <div className='subtitle'>
                        <h3>Platform: </h3><p>{element.platform}</p>
                        </div>
                        <div className='subtitle'>
                        <h3>Platform: </h3><p>{element.stableRelease}</p>
                        </div>
                    </div>
                </div>
                  } 
                })}
            </div>    
        )
    }
}