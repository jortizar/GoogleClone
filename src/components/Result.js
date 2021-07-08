import { Divider } from '@material-ui/core';
import React from 'react';


class Result extends React.Component{
    render(){

        return(
            <div className = 'result'>
                <div>
                    <a>
                        {this.props.data.a}
                    </a>
                </div>
                <div>
                    <h1>
                    {this.props.data.h1}
                    </h1>
                </div>
                <div>
                    <p>
                    {this.props.data.p}
                    </p>
                </div>

            </div>
        )
    }
}

export default Result; 