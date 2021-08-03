import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Colors from './components/Colors';
import axios from 'axios'


class AllDataAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            showData:false
        }
    }

    componentDidMount = async() => {
        const resultData = await axios.get(`${process.env.REACT_APP_SERVER}/getData`)

        this.setState({
            data:resultData.data,
            showData:true
        })
    }

    addToFav = async(data) => {
        await axios.post(`${process.env.REACT_APP_SERVER}/addToFav`, data)
    }

    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                {
                    this.state.showData &&
                    this.state.data.map((item,index)=>{
                        return(
                            <Colors
                            color={item}
                            index={index}
                            addToFav={this.addToFav}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
