
import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Tile from '../components/Tile';
import Head from 'next/head';
import Bottom from "../components/bottom"
var AOS = null; //mounted on "ComponentDidMount()" to be only used on Client Side"
import ClimbingBoxLoader from "react-spinners";
import YouTube from 'react-youtube';


const inesImg = "../static/inesBW.jpg";
const panoImg= "../static/pano.jpg";
const imageTest  ="http://fillmurray.com/g/700/500";
const image2 = "../static/forest1.jpg";
const image3 = "../static/drone-bleu.png";

export default class test extends React.Component  {

	constructor() {
		super();
		this.state ={
allContentLoaded:false,

		}

  }

componentDidMount(){
AOS = require("aos");
AOS.init();

this.setState({
allContentLoaded:true

})

}

render(){
/*
	AOS.init({
  duration: 1200,
})
*/

  return(
  		<div >

			<Head>
				<link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Over+the+Rainbow" rel="stylesheet"/>
				<link href="../static/aos.css" rel="stylesheet" />
			</Head>

			<style jsx global>{`
	      body {
	        background: #fff;
	        margin:0;
					padding:0;
	      }
	    `}</style>

{/*
			<Parallax bgImage={panoImg} bgStyle={mainPic} blur={{min: -5,max:5}} strength={500}>
			  <div style={{height: 800}} >

			</div>
			</Parallax> */}
		 <Parallax bgImage={inesImg} bgStyle={mainPic} blur={{min: -5,max:5}} strength={-500}>
			  <div style={{width:"160%", height: 500}} >
				<h1 style={titleStyle_Ines} data-aos="fade-right"  data-aos-delay="200" data-aos-duration="300" > Inês </h1>
				<h1 style={titleStyle_Nogueira} data-aos="fade-right"  data-aos-delay="1200" data-aos-duration="1000"> Nogueira</h1>
		  </div>
			</Parallax>

			<div style={{display: "flex", flex:1,  flexWrap:"wrap",  width:"100%", justifyContent:"center"}}>
					<div  data-aos="fade-right" data-aos-delay="100">
						<Tile
							title='"Negro em chão de Sangue Verde"'
							description='Inês Nogueira e Carlos "Zíngaro" a partir da poesia de Mário Dionísio -Teatro Maria Matos'
							pic="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=%2B%2BCIbfPZO6u9e374BkabENVlK7k%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3bsKJTXeuP0uQtELSsclFFkfPKgETSyD5W1KIrrfNsk3pSxJY24ZxUBbFI8lWxI"/>
					</div>
					<div  data-aos="fade-left" data-aos-delay="300">
					<Tile
							title='Professora de Voz'
							description=' '
							pic="https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/16174898_10154804445952906_4155029525362041550_n.png?oh=35bf08ae6472c02bb851043a267071c4&oe=5A89BBDE"
					/>
					</div>
					<div  data-aos="fade-right" data-aos-delay="600">
					<Tile
							title='"O Impromptu de Versailles"'
							description=' Nomeado para melhor espectáculo do ano 2016 pela SPA e Globos de Ouro - Teatro Nacional D. Maria II'
							pic="https://sinaisemlinha.files.wordpress.com/2016/04/ng6477869.jpg"
					/> </div>
					</div>

						<div style={{display: "flex", flex:1, backgroundColor:"black", width:"100%",justifyContent:"center", alignContent:"center" }}>
							<YouTube   videoId={"ThX_f4Y5VTE"}   />
						</div>

					<div style={{display: "flex", flex:1,  flexWrap:"wrap", width:"100%", justifyContent:"center"}}>
					<div  data-aos="fade-right" data-aos-delay="100">
					<Tile
							title='"Coro da Achada"'
							description='Desde a sua formação em 2009.Casa da Achada - Centro Mário Dionísio'
							pic="http://centromariodionisio.org/Imagens_casadacahada/coro2.jpg"
					/> </div>
					<div  data-aos="fade-right" data-aos-delay="400">
					<Tile
							title='Encenadores'
							description='Antonino Solmer, Fernanda Lapa, João grosso, Miguel loureiro,Jorge Silva Melo entre outros'
							pic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Theatre_Royal_Brighton.jpg/1024px-Theatre_Royal_Brighton.jpg"
					/> </div>
					<div  data-aos="fade-right" data-aos-delay="700">
					<Tile
							title='"Melania Melanoma"'
							description='Direção Miguel Loureiro - Rua das Gaivotas 6'
							pic="http://ruadasgaivotas6.pt/wp-content/uploads/2017/07/MM_artigo.jpg"

					/> </div>
					<div  data-aos="fade-right" data-aos-delay="1000">
					<Tile
							title='"A abóboda não caiu, a abóboda não cairá"'
							description='Encenação de Tobias Monteiro a partir de "A paixão de Mestre Afonso Domingues" de António Patrício - Mosteiro da Batalha'
							pic="https://i.ytimg.com/vi/y7oVVvxlLoI/maxresdefault.jpg"

					/> </div>
					<div  data-aos="fade-right" data-aos-delay="1300">
					<Tile
							title='"Rythmas" de Luis de Camões'
							description='Direcção Miguel Loureiro - Salão Nobre do Teatro Nacional D.Maria II'
							pic="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=LWh3j7ZgTNrV38KuOrrxVjUUO70%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3W6fJXXLOehuV5EfX8ckQVnfPL5QWK0D5G-K4rvLI0giZfhdY24ZxUBbFI8lW4"
					/> </div>
			</div>



			<Bottom/>



		</div>
	)}

}

const loadingScreen={
	backgroundColor:"white",
	justifyContent:"center",
	alignContent:"center"
}

const mainPic = {
	minHeight:"200px",
	width:"100%",
	zIndex: -10,
	//backgroundSize:"cover",
	//backgroundImage : "url(../static/mainPic.jpeg)",
	//backgroundColor :"black",
	margin:0,
	padding:0,
}

const whiteBG = {
	position: 'absolute',
	top:"0%",
	left:"60%",
	height:"500px",
	width:"700px",
	zIndex: 10,
	//backgroundSize:"cover",
	//backgroundImage : "url(../static/mainPic.jpeg)",
	backgroundColor :"white",
}

const titleStyle_Ines = {
	position: 'absolute',
	top:"0%",
	left:"50%",
	marginLeft:"-150px",
	zIndex: 11,
	//fontFamily: 'Roboto',
	fontFamily: 'Over the Rainbow',
	fontSize: 120,
	padding: 20 ,
	color:"white",
	fontSmooth: "2em",
};

const titleStyle_Nogueira = {
	position: 'absolute',
	top:"0%",
	left:"50%",
	marginLeft:"140px",
	zIndex: 10,
	//fontFamily: 'Roboto',
	fontFamily: 'Over the Rainbow',
	fontSize: 120,
	padding: 20 ,
	color:"black",
	fontSmooth: "2em",
};

const videoEscola={
		height:"300px",
		width:"100%",
		backgroundColor:"black",
		justifyContent:"center",
		alignContent:"center"
}
