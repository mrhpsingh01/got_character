import React from 'react';

class Item extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            clicks : 0,
            clicksLeft : 100
        }
    }


    clickMe(){
        this.setState({
            clicks : this.state.clicks + 1,
            clicksLeft : this.state.clicksLeft - 1,
        })
    }
    
    render(){
        return(
            <div>
                <h1 onClick={() => this.clickMe()}>
                    HEllo {this.props.name}
                </h1>
                <span>{this.state.clicks} Clicks was Registered and {this.state.clicksLeft} to go.</span>
            </div>
        )
    }
}

export default Item;