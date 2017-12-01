
import React, { Component } from 'react';
var AOS = null;


export default class Tile extends React.Component  {

constructor(){
	super();
	this.state= {
		hover: false
	}
}

componentDidMount(){
this.AOS = require("aos");
this.AOS.init();
}


    hoverOn(){
      this.setState({ hover: true });

    }
    hoverOff(){
      this.setState({ hover: false });
    }

	contentWithMouseOn(){

		return (

		<div  style={container} >
			<img style={bgImg} src={ this.props.pic }/>
			<div style={tileTitle_hover}> {this.props.title}  </div>
			<div style={tileDescription_hover}> {this.props.description}  </div>
		</div>

		)}


	contentWithMouseOff(){
		return (
			<div  style={container}   >
			<div style={tileTitle}> {this.props.title}  </div>
			<div style={tileDescription}> {this.props.description}  </div>
		</div>

		)}


render(){

	return(
			<div style={{	background:"#ffffff url(../static/gif_birds-black) no-repeat center center"}} onMouseEnter={this.hoverOn.bind(this)}  onMouseLeave={this.hoverOff.bind(this)}  >
			{(this.state.hover)? this.contentWithMouseOn()  :  this.contentWithMouseOff() }
			</div>
		)
	}
}


const container = {
	height:"400px",
	width:"400px",
	backgroundColor :"white",
	overflow: "hidden",



}
const bgImg = {
	height:"400px",
	backgroundPosition: "-300px 5px",
	backgroundSize: "cover",
	overflow: "hidden",
	backgroundColor :"black",


}

const tileTitle = {
	position: 'absolute',
	top:"10%",
	left:"50%",
	marginLeft:"-140px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 30,
	padding: 20 ,
	color:"black",
	fontSmooth: "2em",
	textAlign: "center",
}


const tileDescription = {
	position: 'absolute',
	top:"50%",
	left:"35%",
	marginLeft:"-100px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 15,
	padding: 20 ,
	color:"black",
	fontSmooth: "2em",
	textAlign: "center",
}

const tileTitle_hover = {
	position: 'absolute',
	top:"5%",
	left:"50%",
	marginLeft:"-150px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 40,
	padding: 20 ,
	color:"white",
	fontSmooth: "2em",
	textAlign: "center",
}


const tileDescription_hover = {
	position: 'absolute',
	top:"50%",
	left:"35%",
	marginLeft:"-100px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 25,
	padding: 20 ,
	color:"white",
	fontSmooth: "2em",
	textAlign: "center",
}
