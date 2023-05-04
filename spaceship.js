class Spaceship {
	constructor(spaceName, capacity, currentLoad){
		this.spaceName = spaceName
		this.capacity = capacity
		this.currentLoad = currentLoad
		this.state = false
	}
	currentPercentLoad(){
		return this.currentLoad * 100 / this.capacity
	}
}