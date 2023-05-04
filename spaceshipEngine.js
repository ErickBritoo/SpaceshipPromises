class SpaceshipEngine {
	startShip(spaceship){
		if(spaceship.currentPercentLoad() > 30){
			spaceship.state = true
		}
	}
}