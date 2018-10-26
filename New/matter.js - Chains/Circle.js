function Circle (x, y, radius, fixed) {

	this.radius = radius;
	
	this.color = color(random(255), random(255), random(255));

	let options = {
		friction : 0.1,
		restitution : 0.5,
		isStatic: fixed
	}

	this.body = Bodies.circle(x, y, radius/2, options);

	World.add(world, this.body);

	this.show = function() {

		let position = this.body.position;
		noStroke();
		fill(this.color);
		ellipse(position.x, position.y, this.radius);
	}

	this.isOffScreen = function() {
		
		let pos = this.body.position;
		return (pos.y > height + 100);

	}

	this.removeFromWorld = function() {
		World.remove(world, this.body);
	}
}