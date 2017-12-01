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



render(){

	return(
			<div style={container}>
			<img data-aos="fade-right"  data-aos-delay="1000" data-aos-duration="1800" style={imageStyle} src={"http://act-escoladeactores.com/files/thumb/252/200"} />
				<div style={footerTextBig} >  INÊS NOGUEIRA ᛫ </div>
				<div>  <a style={footerTextDesc} href="https://www.linkedin.com/in/in%C3%AAs-nogueira-7792a016/" >LinkedIn</a> </div>
				<div>  <a style={footerTextDesc} href="mailto:e.inesnogueira@gmail.com?Subject=Olá Inês!" >   e.inesnogueira@gmail.com  </a>  </div>
			</div>
		)
	}
}

const imageStyle ={
	height:"200px",
	backgroundPosition: "100px 5px",
	backgroundSize: "cover",
	overflow: "hidden",
	backgroundColor :"black",



}
const container ={
	display: "flex",
	alignItems :"center",
	flex:1,
	backgroundColor:"black",
	height:"200px",
	width:"100%",
	justifyContent:"center",
	alignContent:"center",
}

const footerTextBig = {
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 25,
	padding: 20 ,
	color:"white",
	fontSmooth: "2em",
}

const footerTextDesc = {
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 25,
	padding: 20 ,
	color:"gray",
	fontSmooth: "2em",
	textDecoration: "none",
}
