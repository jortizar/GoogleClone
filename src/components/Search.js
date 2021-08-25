import React from 'react';
import './Search.css';
import Result from './Result'
import RelatedQuestions from './RelatedQuestions'
import SideResults from './SideResults'
import logo from '../assets/img/logo.png'
import SearchBox from './SearchBox'
import { VscSettingsGear } from "react-icons/vsc";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { AiOutlineBook } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { FiMoreVertical } from "react-icons/fi";



export default class Search extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }
    componentDidMount(){
        fetch('https://ushop-gcp.uc.r.appspot.com/api/search/react')
            .then(result => result.json())
                .then(result => {
                    this.setState({
                        isLoaded:true,
                        data: result
                    })
                },
                (error) =>{
                    this.setState({
                        isLoaded: true,
                        error : error
                    })
                })
    }

    render(){
        const {error,isLoaded,data} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return(
                <div className='main_container'>
                    <div className='nav_container'>
                        <nav>
                            <div className='nav_items'>
                                <div className='logo'>
                                    <img src={logo} alt="Google logo"  height="60em"/>
                                </div>

                                <div className='Searchbar'>
                                    <SearchBox/>
                                </div>
                                <div className= 'Space'></div>
                                <div className= 'Right_icons'>
                                    <VscSettingsGear size='1.5em'/>
                                    <BsFillGrid3X3GapFill size='1.5em' />
                                    <CgProfile size='1.5em'/>
                                </div>
                            </div>
                            <div className='links'>
                                <div className='link_item'>
                                    <BiSearchAlt2/>
                                    <p>
                                        All
                                    </p>
                                </div>
                                <div className='link_item'>
                                    <BsImage/>
                                    <p>
                                        Images
                                    </p>
                                </div>
                                <div className='link_item'>
                                    <RiVideoLine/>
                                    <p>
                                        Videos
                                    </p>
                                </div>
                                <div className='link_item'>
                                    <AiOutlineBook/>
                                    <p>
                                        Books
                                    </p>
                                </div>
                                <div className='link_item'>
                                    <SiGooglemaps/>
                                    <p>
                                       Maps
                                    </p>
                                </div>
                                <div className='link_item'>
                                    <FiMoreVertical/>
                                    <p>
                                        More
                                    </p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* ---------------------------------------------------------------------- */}
                    <div className='body_left'>
                        <RelatedQuestions data = {data.commonQuestions}/>
                        <Result data = {data.results}/>
                    </div>
                    {/* ---------------------------------------------------------------------- */}
                    <div className='body_right'>
                        <SideResults data = {data.results}/>
                    </div>
                    {/* ---------------------------------------------------------------------- */}
                    
                </div>
    
            )
        }
    }
}