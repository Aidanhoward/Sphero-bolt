Programmer: Aidan howard
date: 1/12/22
program: sphero edu sandbox





async function startProgram() {
	// Write code here
	await speak('hello square!', true);
	setMainLed({ r: 255, g: 0, b: 0})
	await roll(0, 50, 2);
	
}
