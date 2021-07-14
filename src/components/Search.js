import React from 'react';
import './Search.css';
import Result from './Result'
import RelatedQuestions from './RelatedQuestions'
var result_content = [
    {
        'a' : 'https://www.cdc.gov › autism › facts',
        'h1' : 'What is Autism Spectrum Disorder?',
        'p' : 'Autism Spectrum Disorders (ASDs) are a group of developmental disabilities that can cause significant social, communication and behavioral challenges.'

    },
    {
        'a' : 'https://www.stanfordchildrens.org › topic',
        'h1' : 'Autism Spectrum Disorder - Stanford Children\'s Health',
        'p' : 'El trastorno del espectro autista (ASD, por sus siglas en inglés) es un problema que afecta el sistema nervioso de los niños durante sus primeros 3 años de vida​ ...'

    },
    {
        'a' : 'https://www.cdc.gov › autism › facts',
        'h1' : 'What is Autism Spectrum Disorder?',
        'p' : 'Autism Spectrum Disorders (ASDs) are a group of developmental disabilities that can cause significant social, communication and behavioral challenges.'

    },
    {
        'a' : 'https://www.cdc.gov › autism › facts',
        'h1' : 'What is Autism Spectrum Disorder?',
        'p' : 'Autism Spectrum Disorders (ASDs) are a group of developmental disabilities that can cause significant social, communication and behavioral challenges.'

    },
    {
        'a' : 'https://www.cdc.gov › autism › facts',
        'h1' : 'What is Autism Spectrum Disorder?',
        'p' : 'Autism Spectrum Disorders (ASDs) are a group of developmental disabilities that can cause significant social, communication and behavioral challenges.'

    }
    
]


export default class Search extends React.Component {
    // This is the class constructor where we defined the component's state
    constructor(){
        super();
        // This is the component's state
        this.state = {
            // apiResult will eventually contain the result from the call we make with fetch
            apiResult: {},
            count: 0
        }
    }

    // // This is a method from React.Component that runs when the component is mounted
    // componentDidMount() {
    //     // Here we make the API call
    //     fetch("https://swapi.dev/api/people/10")
    //     .then(result => result.json())
    //     .then(result => {
    //         console.log('This is the API response: ', result);
    //         this.setState({apiResult: result});
    //     })
    // }


    callAPI() {
        fetch("https://swapi.dev/api/people/10")
            .then(result => result.json())
            .then(result => {
                console.log('This is the API response: ', result);
                this.setState({apiResult: result});
            })
    }

    addOne(){
        this.setState({count: this.state.count + 1});
    }

    render() {
        this.callAPI();
        return(
            <div className='main_container'>
                <div className='nav_container'>
                    <nav>
                        <div className='nav_items'>
                            <div className='logo'>Logo</div>
                            <div className='Searchbar'>Searchbar</div>
                            <div className= 'Space'>Space</div>
                            <div className= 'Right_icons'>right icons</div>
                        </div>
                        <div className='links'>
                            links
                        </div>
                    </nav>
                </div>
                {/* ---------------------------------------------------------------------- */}
                <div className='body_left'>
                    <p>Name: {this.state.apiResult.name}</p>
                    <p>Gender: {this.state.apiResult.gender}</p>
                    <div>
                        <span>Count:</span>
                        <span>{this.state.count}</span>
                    </div>
                    <button onClick={() => this.addOne()}>Add 1</button>
                    <RelatedQuestions/>
                    {result_content.map((element) => (
                        <Result data= {element}/>
                    )
                        
                    )}
                </div>
                {/* ---------------------------------------------------------------------- */}
                <div className='body_right'>
                    right
                </div>
                {/* ---------------------------------------------------------------------- */}
                
            </div>

        )
    }
}