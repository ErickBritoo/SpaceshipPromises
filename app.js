let shopia = new Spaceship("Shopia",10, 5)
let amsterdã = new Spaceship("Amsterdã", 14, 10)
let estrela_anã = new Spaceship("Estrela-Anã", 20, 4)
let spaceshipEnginando = new SpaceshipEngine()

const Enginando = (spaceship)=>{
	return new Promise((resolve, reject) => {
		spaceshipEnginando.startShip(spaceship)
		if(spaceship.state == true){
			resolve(`Nave : ${spaceship.spaceName}.\nPartida Autorizada. \nCarga Atual em ${spaceship.currentLoad} `)
		} else{
			reject(`Nave : ${spaceship.spaceName} Partida Não Autorizada. Carga Atual em ${spaceship.currentLoad}`)
		}
	})
}
Enginando(shopia).then( data => {console.log(data)})
Enginando(amsterdã).then( data => {console.log(data)})
Enginando(estrela_anã).then( data => {console.log(data)})