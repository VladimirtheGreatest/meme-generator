import React, {Component} from "react"


class Generator extends Component {
    constructor() {
        super()
        this.state = {   // initial state, no text, initial image, empty array to receive data from API
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
     componentDidMount() {   //mounting component, fetching image from the api
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })  // changing state
            })
    }
    
       handleChange(event) {    //handling any changes to the input
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

render() {
        return (
             <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}




export default MemeGenerator
