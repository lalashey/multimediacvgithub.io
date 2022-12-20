(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("Eg4OAxiIAApEIgBAAMAAAhZ/MBwfAAAMAAABjDg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-316.9,720,633.9);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("ABRCQIgWg7Ih0AAIgYA7Ig4AAIBukfIA3AAIBuEfgAglAfIBMAAIgnhhg");
	this.shape.setTransform(321.125,1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660099").s().p("AAgCQIg/h6IgFAAIAAB6Ig3AAIAAkfIA6AAQAvAAAUAJQAUAIAMAUQANAUAAAbQAAAcgOATQgNASgcAKIBECAgAgkgeIARAAQAZAAAKgHQAKgHAAgQQgBgJgFgHQgEgHgIgDQgIgDgVAAIgPAAg");
	this.shape_1.setTransform(295.95,1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660099").s().p("AhxCQIAAkfIBBAAQA+AAAeAQQAfAQATAiQAUAjAAAuQAAAhgLAcQgLAcgTASQgUATgXAHQgWAHg3AAgAg6BaIAZAAQAkAAARgIQARgJALgUQALgUAAgeQAAgtgagZQgXgXgyAAIgSAAg");
	this.shape_2.setTransform(269.775,1.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660099").s().p("Ag1CFQgXgOgKgWQgKgVAAg0IAAiqIA2AAIAAC5QAAAYAFAKQAEAKAKAGQAJAGAOAAQANAAALgHQAKgHAEgKQAEgKAAgdIAAiyIA3AAIAACqQAAAsgFAQQgFARgNAQQgOAPgSAIQgSAHgYAAQgeAAgXgOg");
	this.shape_3.setTransform(242.325,1.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660099").s().p("AB0CQIgei1Ig+C1IguAAIg9i1IgfC1Ig2AAIAxkfIA2AAIBCDIIBDjIIA1AAIAwEfg");
	this.shape_4.setTransform(211.5,1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660099").s().p("ABRCQIgWg7Ih0AAIgYA7Ig4AAIBukfIA3AAIBuEfgAglAfIBMAAIgnhhg");
	this.shape_5.setTransform(178.725,1.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660099").s().p("AgyCIQgXgPgQggIAugcQAVAmAaAAQAOAAAJgIQAKgIAAgLQAAgKgIgKQgHgJgXgVQgvglgOgVQgOgUAAgVQAAgeAXgVQAXgWAgAAQAWAAATAKQAUAKAWAbIgoAjQgWgdgWAAQgJAAgHAFQgHAGAAAHQAAAIAFAGQAGAJAhAcIAmAgQARARAGAPQAHAPAAATQAAAjgYAXQgYAXgoAAQgeAAgWgPg");
	this.shape_6.setTransform(152.925,1.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660099").s().p("AhpBqQgrgsAAg+QAAgoAUgjQAUgiAjgUQAigVAoAAQA9AAArAsQAsAtAAA+QAAA/grArQgrAsg+AAQhAAAgqgtgAhChFQgbAcAAAqQAAAwAiAbQAbAWAhAAQAnAAAbgcQAcgcAAgpQAAgogcgdQgbgcgoAAQgnAAgbAbg");
	this.shape_7.setTransform(115.075,1.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660099").s().p("AgcCQIAAjpIgyAAIAAg2ICdAAIAAA2Ig0AAIAADpg");
	this.shape_8.setTransform(89.9,1.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660099").s().p("AA/CQIh6i8IAAC8Ig3AAIAAkfIA1AAIB5C9IAAi9IA3AAIAAEfg");
	this.shape_9.setTransform(66.7,1.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660099").s().p("ABRCQIgWg7Ih0AAIgYA7Ig4AAIBukfIA3AAIBuEfgAglAfIBMAAIgnhhg");
	this.shape_10.setTransform(37.125,1.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660099").s().p("AgaCQIhmkfIA4AAIBIDMIBJjMIA4AAIhnEfg");
	this.shape_11.setTransform(8.3,1.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660099").s().p("AhpBqQgrgsAAg+QAAgoAUgjQAUgiAjgUQAigVAoAAQA9AAArAsQAsAtAAA+QAAA/grArQgrAsg+AAQhAAAgqgtgAhChFQgbAcAAAqQAAAwAiAbQAbAWAhAAQAnAAAbgcQAcgcAAgpQAAgogcgdQgbgcgoAAQgnAAgbAbg");
	this.shape_12.setTransform(-22.525,1.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660099").s().p("AA+CQIh5i8IAAC8Ig3AAIAAkfIA0AAIB6C9IAAi9IA3AAIAAEfg");
	this.shape_13.setTransform(-54.1,1.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660099").s().p("AgaCQIAAh9IhViiIA7AAIA1BoIA1hoIA6AAIhUCiIAAB9g");
	this.shape_14.setTransform(-92.475,1.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660099").s().p("AAoCQIhYiAIAACAIg3AAIAAkfIA3AAIAABjIBNhjIBCAAIhjCBIBtCeg");
	this.shape_15.setTransform(-115.95,1.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660099").s().p("AhaCQIBljoIhdAAIAAg3ICtAAIhlDqIBfAAIAAA1g");
	this.shape_16.setTransform(-139.675,1.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660099").s().p("AgaCQIAAkfIA1AAIAAEfg");
	this.shape_17.setTransform(-155.3,1.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660099").s().p("AAgCQIg/h6IgFAAIAAB6Ig3AAIAAkfIA6AAQAuAAAVAJQAUAIAMAUQAMAUAAAbQAAAcgNATQgOASgbAKIBECAgAgkgeIARAAQAZAAAKgHQAKgHAAgQQgBgJgFgHQgEgHgIgDQgIgDgVAAIgPAAg");
	this.shape_18.setTransform(-171.25,1.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660099").s().p("ABRCQIgWg7Ih0AAIgYA7Ig4AAIBukfIA3AAIBuEfgAglAfIBMAAIgnhhg");
	this.shape_19.setTransform(-210.075,1.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660099").s().p("AhCCQIAAkfIA3AAIAADrIBOAAIAAA0g");
	this.shape_20.setTransform(-232.5,1.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660099").s().p("AgaCQIAAh9IhViiIA7AAIA1BoIA1hoIA6AAIhUCiIAAB9g");
	this.shape_21.setTransform(-254.875,1.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660099").s().p("AhNCQIAAkfICbAAIAAA2IhlAAIAAA0IBlAAIAAAzIhlAAIAABMIBlAAIAAA2g");
	this.shape_22.setTransform(-276.95,1.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660099").s().p("AAwCQIAAh+IhfAAIAAB+Ig3AAIAAkfIA3AAIAABtIBfAAIAAhtIA4AAIAAEfg");
	this.shape_23.setTransform(-301.7,1.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660099").s().p("AgyCIQgXgPgQggIAugcQAVAmAaAAQAOAAAJgIQAKgIAAgLQAAgKgIgKQgHgJgXgVQgvglgOgVQgOgUAAgVQAAgeAXgVQAXgWAgAAQAWAAATAKQAUAKAWAbIgoAjQgWgdgWAAQgJAAgHAFQgHAGAAAHQAAAIAFAGQAGAJAhAcIAmAgQARARAGAPQAHAPAAATQAAAjgYAXQgYAXgoAAQgeAAgWgPg");
	this.shape_24.setTransform(-326.275,1.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.1,-26.2,676.2,52.5);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg4UAG9IAAkHQBGgqBYAAQAmAAAiAIQAeg8A0g0QB7h6CuAAQAbAAAaADQAWgdAcgcQCZiZDYAAQDYAACZCZQAbAcAXAdQAZgCAbAAIAXABQA0hlBihUQDNivEiAAQEiAADNCvQB3BlAyB+QCeAJCDAuQAVgbAagZQCWiWDUAAQDUAACWCWQApAoAdAtIAtgBQC+AACHBcIAMAIQASgYAXgXQB2h1CmAAQBbAABMAiQAhgnAsgkQCyiQD7AAQBAAAA7AJQAbgjAhggQCzi0D9ABQD+gBCzC0QBdBdAtByQB+AWBkBIQB1huCjAAQBBAAA6ASIAAHyg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.4,-44.5,720.9,89);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,0,153,0.376)").ss(8,1,1).p("Eg4Phj/MBwfAAAMAAADH/MhwfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(102,0,153,0.376)").ss(6,1,1).p("EgonAAAMBRPAAA");
	this.shape_1.setTransform(0.025,274.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-644,728,1288);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Az3lvMAnwAAAQDDAAAADIIAAFOQAADJjDAAMgnwAAAQjEAAAAjJIAAlOQAAjIDEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.8,-37.7,295.6,75.5);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AzPlvMAmfAAAQC9AAAADIIAAFOQAADJi9AAMgmfAAAQi9AAAAjJIAAlOQAAjIC9AAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.1,-37.7,286.29999999999995,75.5);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Az3lvMAnwAAAQDDAAAADIIAAFOQAADJjDAAMgnwAAAQjEAAAAjJIAAlOQAAjIDEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.8,-37.7,295.6,75.5);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah0DNIAAmZIDpAAIAAAoIjAAAIAACBIC/AAIAAAnIi/AAIAAChIC/AAIAAAog");
	this.shape.setTransform(1.375,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-35.9,34.7,71.9);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah0DNIAAmZIDpAAIAAAoIjAAAIAACBIC/AAIAAAnIi/AAIAAChIC/AAIAAAog");
	this.shape.setTransform(1.375,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-35.9,34.7,71.9);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhiDNIAAmZIAoAAIAAFxICdAAIAAAog");
	this.shape.setTransform(1.675,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-35.9,30.5,71.9);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhiDNIAAmZIAoAAIAAFxICdAAIAAAog");
	this.shape.setTransform(1.675,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-35.9,30.5,71.9);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiTCQQg0g9AAhUQAAhaA/g+QA/g9BeAAQA5AAAvAXQAtAWAeApIggAZQgbgjglgSQgmgSgtAAQgvAAgrAYQgpAXgXAoQgXAoAAAwQAABLAzAyQAzAyBOAAQBWAAA6hDIAgAZQgfAmgtAWQguAVg5AAQhqAAg+hHg");
	this.shape.setTransform(-0.15,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-35.9,50.5,71.9);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiTCQQg0g9AAhUQAAhaA/g+QA/g9BeAAQA5AAAvAXQAtAWAeApIggAZQgbgjglgSQgmgSgtAAQgvAAgrAYQgpAXgXAoQgXAoAAAwQAABLAzAyQAzAyBOAAQBWAAA6hDIAgAZQgfAmgtAWQguAVg5AAQhqAAg+hHg");
	this.shape.setTransform(-0.15,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-35.9,50.5,71.9);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiYCYQg/g+AAhZQAAg6AdgyQAdgyAxgdQAxgcA6AAQBcAAA+A+QA/A+AABaQAABag/A+Qg+A/haAAQhaAAg/g/gAhWiXQgpAYgWAoQgXAoAAAwQAABKAyAyQAzAyBHAAQAvAAApgXQAogXAXgoQAXgoAAgxQAAgxgXgnQgXgngpgYQgpgYguABQgtgBgpAYg");
	this.shape.setTransform(-0.125,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-35.9,53.7,71.9);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiYCYQg/g+AAhZQAAg6AdgyQAdgyAxgdQAxgcA6AAQBcAAA+A+QA/A+AABaQAABag/A+Qg+A/haAAQhaAAg/g/gAhWiXQgpAYgWAoQgXAoAAAwQAABKAyAyQAzAyBHAAQAvAAApgXQAogXAXgoQAXgoAAgxQAAgxgXgnQgXgngpgYQgpgYguABQgtgBgpAYg");
	this.shape.setTransform(-0.125,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-35.9,53.7,71.9);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AC/DNIgpkkIiREkIgIAAIiTkmIgpEmIgnAAIA7mZIAGAAICmFPICllPIAGAAIA7GZg");
	this.shape.setTransform(-0.1,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-35.9,56.6,71.9);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AC/DNIgpkkIiREkIgIAAIiTkmIgpEmIgnAAIA7mZIAGAAICmFPICllPIAGAAIA7GZg");
	this.shape.setTransform(-0.1,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-35.9,56.6,71.9);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah0DNIAAmZIDpAAIAAAoIjAAAIAACBIC/AAIAAAnIi/AAIAAChIC/AAIAAAog");
	this.shape.setTransform(1.375,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-35.9,34.7,71.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah0DNIAAmZIDpAAIAAAoIjAAAIAACBIC/AAIAAAnIi/AAIAAChIC/AAIAAAog");
	this.shape.setTransform(1.375,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-35.9,34.7,71.9);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgXDMQgKgLAAgOQAAgOAKgKQAKgKANAAQAOAAAKAKQAKAKAAAOQAAAOgKALQgKAKgOAAQgNAAgKgKgAgUBnIAAk8IAoAAIAAE8g");
	this.shape.setTransform(-0.075,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-35.9,21,71.9);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgXDMQgKgLAAgOQAAgOAKgKQAKgKANAAQAOAAAKAKQAKAKAAAOQAAAOgKALQgKAKgOAAQgNAAgKgKgAgUBnIAAk8IAoAAIAAE8g");
	this.shape.setTransform(-0.075,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-35.9,21,71.9);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AB6DNIh5k1Ih7E1IgIAAIh0mZIAqAAIBUEmIB1kmIAIAAIB0EmIBVkmIApAAIh1GZg");
	this.shape.setTransform(-0.075,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-35.9,58.9,71.9);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AB6DNIh5k1Ih7E1IgIAAIh0mZIAqAAIBUEmIB1kmIAIAAIB0EmIBVkmIApAAIh1GZg");
	this.shape.setTransform(-0.075,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-35.9,58.9,71.9);


(lib.logo_animasi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// kotak (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlXaRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_1 = new cjs.Graphics().p("AlXaRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_2 = new cjs.Graphics().p("AjBaRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_3 = new cjs.Graphics().p("ACeaRMAAAg0hIKwAAMAAAA0hg");
	var mask_graphics_4 = new cjs.Graphics().p("AH+aRMAAAg0hIKwAAMAAAA0hg");
	var mask_graphics_5 = new cjs.Graphics().p("ANeaRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_6 = new cjs.Graphics().p("AS+aRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_7 = new cjs.Graphics().p("AlXaRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_8 = new cjs.Graphics().p("AS+aRMAAAg0hIKwAAMAAAA0hg");
	var mask_graphics_9 = new cjs.Graphics().p("ANeaRMAAAg0hIKwAAMAAAA0hg");
	var mask_graphics_10 = new cjs.Graphics().p("AH+aRMAAAg0hIKwAAMAAAA0hg");
	var mask_graphics_11 = new cjs.Graphics().p("ACeaRMAAAg0hIKwAAMAAAA0hg");
	var mask_graphics_12 = new cjs.Graphics().p("AjAaRMAAAg0hIKuAAMAAAA0hg");
	var mask_graphics_13 = new cjs.Graphics().p("AlXaRMAAAg0hIKvAAMAAAA0hg");
	var mask_graphics_14 = new cjs.Graphics().p("AlXaRMAAAg0hIKvAAMAAAA0hg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-76.375,y:99.3}).wait(1).to({graphics:mask_graphics_1,x:-5.9964,y:99.3}).wait(1).to({graphics:mask_graphics_2,x:49.3786,y:99.3}).wait(1).to({graphics:mask_graphics_3,x:84.5679,y:99.3}).wait(1).to({graphics:mask_graphics_4,x:119.7571,y:99.3}).wait(1).to({graphics:mask_graphics_5,x:154.9464,y:99.3}).wait(1).to({graphics:mask_graphics_6,x:190.1357,y:99.3}).wait(1).to({graphics:mask_graphics_7,x:416.325,y:99.3}).wait(1).to({graphics:mask_graphics_8,x:190.1607,y:99.3}).wait(1).to({graphics:mask_graphics_9,x:154.9714,y:99.3}).wait(1).to({graphics:mask_graphics_10,x:119.7821,y:99.3}).wait(1).to({graphics:mask_graphics_11,x:84.5929,y:99.3}).wait(1).to({graphics:mask_graphics_12,x:49.4036,y:99.3}).wait(1).to({graphics:mask_graphics_13,x:-5.9464,y:99.3}).wait(1).to({graphics:mask_graphics_14,x:-76.375,y:99.3}).wait(1));

	// logo_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxtKVQAtiDAch9IA0gGIBgDZQBLAWB1AAQB8AABLgmQBJgnAAhGQAAhAgxglQgzgmhtgbIiKgjQi0guhEg/QhFhBAAhfQAAiECFhMQCEhNDZAAQCpABCPAfIAADJIgNA2IgzAIIhVjBQhNgPhaAAQh9AAhMAlQhNAkAABAQAAA9AyAjQAxAkCIAhIBtAdQCkAqBWA2IAAG/IiZACIAAgHQhtAhiMgBQjKABjThAgANFLCIgbgEQgggGgbgJQgZgKgbgQQg2gfg1g7Qg2g7g5hLIh3ifQg/hUhEhRIgignQgPgOgRgIQgQgIgXgEQgWgCgjgBIhcgDIAAFfQAAA9ABAxQAAAxACAmQABAgAgAIICUAhIAEAsQifgDidAAIiJABIAAhoIACgGIAAgEIgCACIAAkyIAEAEIAAnVIgEANIAAgxIAEABIAAjVIAAhcIgChLIgCgJIAAhpICJAAIBTAAIB4gFIB5gDIBMgBQEzABCZBWQCZBXAACnQAACWhpBeQhpBejYAxQBVBhBHBcICFClQA9BLA0A5IAXAaQArggBIgBQBFABAuAhQArAhAAA1QAAAdgNAYQACAwgRACgABEp+QgrACgwAEIAAJQQBQADBFAAQDmAABshKQBqhLAAifQAAiZhmhHQhmhHjbAAQglAAgqACg");
	this.shape.setTransform(155.4101,110.6505,1.3702,1.5273);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("A4RPyQA+jJAmi+IBHgKICEFMQBnAiCgAAQCqAABmg6QBkg8AAhrQAAhihDg5QhFg6iWgpIi9g2Qj2hGhdhgQhfhkAAiRQAAjJC2h0QC1h1EpAAQDnAADFAwIAAE0IgSBTIhGAKIh0klQhqgYh8AAQirAAhoA4QhpA4AABiQAABcBFA2QBDA3C6AzICWAsQDgBBB2BSIAAKqIjSAEIAAgLQiWAyi/AAQkVgBkhhggAR6Q3QgTgDgSgEQgrgJglgOQgjgPgkgYQhLgvhIhaQhKhbhOhzQhOhxhViBQhWiBhdh8Igwg7QgTgWgYgLQgWgNgfgFQgfgEgvgCIh/gDIAAIYQAABcACBLQAABKACA8QABAvAtANIDKAzIAGBDQjagFjXAAIi8AAIAAicIACgKIAAgGIgCACIAAnTIAGAGIAArNIgGAUIAAhMIAGACIAAlEIAAiOIgEhyIgCgNIAAihIC8ABIBxgCIClgFICmgFIBogCQGkAADSCFQDSCFAAD/QAADliQCQQiQCPknBMQB0CUBhCLIC2D+QBTBxBIBYIAfAnQA8gyBjABQBeAAA+AzQA8AxAABSQAAAsgSAlQACBKgXADgABdvPQg7ADhCAHIAAOIQBuAEBfAAQE7AACThxQCShyAAjzQAAjqiMhtQiMhskrAAQgzAAg6ADg");
	this.shape_1.setTransform(155.425,110.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.9,221.3);


(lib.btn_instagram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AAvAuIAAguQAAgOgEgFQgFgGgHAAQgGAAgFAEQgEADgCAGQgCAGgBALIAAApIgVAAIAAgrQAAgMgCgFQgCgFgDgDQgEgDgFAAQgGAAgEAEQgFADgCAGQgCAGAAAMIAAAoIgXAAIAAhZIAXAAIAAAKQAGgGAGgDQAIgDAIAAQAJAAAGAEQAGAEAEAIQAGgIAHgEQAIgEAJAAQAKAAAHAEQAIAFADAHQADAHAAAQIAAA0g");
	this.shape.setTransform(86.25,18.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660099").s().p("AghAiQgNgOAAgUQAAgUAMgNQANgNARAAQAIAAAHADQAHACAGAHIAAgKIAXAAIAABZIgXAAIAAgJQgHAGgGADQgHACgHAAQgRAAgNgNgAgQgSQgHAHAAALQAAAMAHAHQAHAIAJAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLABQgKAAgGAHg");
	this.shape_1.setTransform(72.425,18.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660099").s().p("AgXAuIAAhZIATAAIAAALQADgGAFgEQAFgDAGAAQAFAAAEACIgHATIgGgCQgFAAgEAHQgDAGAAASIAAAFIAAAkg");
	this.shape_2.setTransform(64.575,18.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660099").s().p("AgVA9QgJgEgHgGQgGgHgDgJIAZAAQAEAEAFACQAFACAHAAQAIAAAGgDQAFgDADgEQACgFAAgLQgGAGgHADQgGACgHAAQgTAAgMgMQgNgOAAgTQAAgWAOgNQAMgLAQAAQAHAAAHADQAHACAHAHIAAgKIAXAAIAABNQAAAXgKALQgMAOgZAAQgMAAgJgDgAgQgjQgHAIAAAKQAAALAHAHQAHAHAKAAQAKAAAHgHQAHgGAAgMQAAgLgHgHQgHgHgLAAQgJAAgHAHg");
	this.shape_3.setTransform(55.775,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660099").s().p("AghAiQgNgOAAgUQAAgUAMgNQANgNARAAQAIAAAHADQAHACAGAHIAAgKIAXAAIAABZIgXAAIAAgJQgHAGgGADQgHACgHAAQgRAAgNgNgAgQgSQgHAHAAALQAAAMAHAHQAHAIAJAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLABQgKAAgGAHg");
	this.shape_4.setTransform(44.575,18.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660099").s().p("AgLA+IAAhGIgMAAIAAgUIAMAAIAAghIAVAAIAAAhIAOAAIAAAUIgOAAIAABGg");
	this.shape_5.setTransform(36.7,17.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660099").s().p("AgfAgIAOgPQADAFAGACQAGADACAAQAFAAADgCQADgCgBgDQABgGgLgEIgGgEQgWgKAAgRQAAgKAJgIQAHgIAMABQAKAAAHADQAIAEAFAHIgOAPQgIgJgIAAQgCAAgDABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAJAEQANAHAFAFQAFAHAAAJQAAAMgJAIQgJAJgOgBQgTAAgMgPg");
	this.shape_6.setTransform(30.2,18.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660099").s().p("AARAuIAAgnQAAgPgBgGQgBgFgEgDQgDgDgGAAQgFAAgGAFQgEAFgCAIQgCAEAAANIAAAkIgWAAIAAhZIAWAAIAAAJQAJgGAFgDQAGgCAGAAQAOAAAJAJQAIAIAAAQIAAA6g");
	this.shape_7.setTransform(21.5,18.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660099").s().p("AgLBAIAAhaIAWAAIAABagAgKgmQgDgEAAgGQAAgGADgFQAFgEAFAAQAFAAAFAFQAEAEAAAGQAAAGgEAEQgEAFgGAAQgFAAgFgFg");
	this.shape_8.setTransform(14.3,16.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(102,0,153,0.376)").ss(1,1,1).p("AljiqILHAAQBJAAA0AsQAzAtAAA/IAAAlQAAA/gzAtQg0AshJAAIrHAAQhJAAg0gsQgzgtAAg/IAAglQAAg/AzgtQA0gsBJAAg");
	this.shape_9.setTransform(53.2,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,108.4,36.3);


(lib.btn_github = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AgKA9QgHgDgGgGIAAAJIgXAAIAAh8IAXAAIAAAtQAGgGAHgDQAHgDAHAAQASAAAMANQANANAAAUQAAAUgNAOQgNAOgRAAQgHAAgHgDgAgRgCQgHAGAAAMQAAAMAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgMQAAgMgHgGQgHgHgKAAQgKAAgHAHg");
	this.shape.setTransform(62.925,17.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660099").s().p("AgXAnQgJgGgEgMQgDgIABgVIAAglIAWAAIAAArQAAAMACAFQACAFADACQAFADAEAAQAGAAAEgDQADgCACgFQACgFAAgLIAAgsIAXAAIAAAmQAAAWgEAKQgFAKgIAFQgKAHgNgBQgOABgJgIg");
	this.shape_1.setTransform(52,18.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660099").s().p("AARA+IAAgnQAAgQgBgFQgCgFgDgCQgDgEgGAAQgFAAgGAFQgEAEgCAHQgBAFAAAOIAAAkIgXAAIAAh8IAXAAIAAAsQAGgFAHgDQAFgDAIAAQANAAAJAJQAIAIAAAPIAAA7g");
	this.shape_2.setTransform(41.85,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660099").s().p("AgLA+IAAhGIgMAAIAAgUIAMAAIAAghIAVAAIAAAhIAOAAIAAAUIgOAAIAABGg");
	this.shape_3.setTransform(34.25,17.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660099").s().p("AgKBAIAAhaIAVAAIAABagAgJgmQgFgEAAgGQAAgGAFgFQAEgEAFAAQAGAAAEAFQAFAEgBAGQABAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_4.setTransform(29.55,16.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660099").s().p("AgVA9QgJgEgHgGQgGgHgDgJIAZAAQAEAEAFACQAFACAHAAQAIAAAGgDQAFgDADgEQACgFAAgLQgGAGgHADQgGACgHAAQgTAAgMgMQgNgOAAgTQAAgWAOgNQAMgLAQAAQAHAAAHADQAHACAHAHIAAgKIAXAAIAABNQAAAXgKALQgMAOgZAAQgMAAgJgDgAgQgjQgHAIAAAKQAAALAHAHQAHAHAKAAQAKAAAHgHQAHgGAAgMQAAgLgHgHQgHgHgLAAQgJAAgHAHg");
	this.shape_5.setTransform(21.725,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(102,0,153,0.376)").ss(1,1,1).p("AkaiqII2AAQA6AAApAsQAoAtAAA/IAAAlQAAA/goAtQgpAsg6AAIo2AAQg6AAgpgsQgpgtAAg/IAAglQAAg/ApgtQApgsA6AAg");
	this.shape_6.setTransform(42.3,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.6,36.3);


(lib.btn_facebook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AAQA+IglgpIAAApIgXAAIAAh8IAXAAIAABHIAggkIAdAAIgnAqIAsAvg");
	this.shape.setTransform(97.125,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660099").s().p("AggAiQgPgOAAgUQAAgUAQgOQANgMASAAQAMgBALAHQALAGAHALQAGALABAMQgBANgGAKQgHAMgLAGQgLAGgMAAQgTABgNgOgAgRgSQgHAHAAALQAAAMAHAHQAHAHAKAAQAKAAAIgHQAGgHAAgMQAAgLgGgHQgIgHgKAAQgKAAgHAHg");
	this.shape_1.setTransform(86.05,24.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660099").s().p("AggAiQgOgOgBgUQAAgUAQgOQANgMASAAQAMgBALAHQALAGAHALQAGALABAMQgBANgGAKQgHAMgLAGQgLAGgMAAQgTABgNgOgAgRgSQgHAHAAALQAAAMAHAHQAHAHAKAAQALAAAGgHQAIgHgBgMQABgLgIgHQgGgHgLAAQgKAAgHAHg");
	this.shape_2.setTransform(75.15,24.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660099").s().p("AgKA9QgHgDgGgGIAAAJIgXAAIAAh8IAXAAIAAAtQAGgGAHgDQAHgDAHAAQASAAAMANQANANAAAUQAAAUgNAOQgNAOgRAAQgHAAgHgDgAgRgCQgHAGAAAMQAAAMAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgMQAAgMgHgGQgHgHgKAAQgKAAgHAHg");
	this.shape_3.setTransform(64.325,22.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660099").s().p("AghAiQgNgOAAgTQAAgVANgNQANgNAUAAQAVAAANANQANAOAAAVIAAAFIhIAAQACAJAHAGQAHAFAJABQANAAAJgJIAUAJQgIAJgJAGQgLAEgOAAQgUAAgNgNgAgPgWQgEADgFAJIAxAAQgCgIgHgFQgGgEgKAAQgIgBgHAGg");
	this.shape_4.setTransform(53.05,24.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660099").s().p("AggAhQgNgOAAgTQgBgMAHgLQAGgLAMgHQAMgFANAAQAOgBALAGQAKAFAIAKIgTALQgGgGgFgDQgFgBgHAAQgMAAgHAHQgJAIAAALQABALAHAIQAIAHALAAQAPAAAJgLIASANQgPASgbAAQgXAAgNgOg");
	this.shape_5.setTransform(42.05,24.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660099").s().p("AghAiQgNgOAAgUQAAgUAMgOQANgMARAAQAIAAAHADQAHACAGAHIAAgKIAXAAIAABZIgXAAIAAgJQgHAGgGADQgHACgHAAQgRAAgNgNgAgQgSQgHAHAAALQAAAMAHAHQAHAIAJAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLABQgKAAgGAHg");
	this.shape_6.setTransform(30.925,24.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660099").s().p("AgOBAIAAhGIgIAAIAAgUIAIAAIABgVQAAgHAGgEQAGgFAIAAQAIAAAIADIAAASIgIgCQgEAAgCACQgBABAAAEIAAALIAOAAIAAAUIgOAAIAABGg");
	this.shape_7.setTransform(23.1,22.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(102,0,153,0.376)").ss(1,1,1).p("AljiqILHAAQBJAAA0AsQAzAtAAA/IAAAlQAAA/gzAtQg0AshJAAIrHAAQhJAAg0gsQgzgtAAg/IAAglQAAg/AzgtQA0gsBJAAg");
	this.shape_8.setTransform(60.55,22.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmUDhQhTAAg7g7Qg6g6AAhTIAAgxQAAhTA6g7QA7g6BTAAIMpAAQBTAAA6A6QA7A7AABTIAAAxQAABTg7A6Qg6A7hTAAgAoSAUQAAA+AzAtQA0AsBIABILHAAQBKgBAzgsQAzgtABg+IAAgmQgBg/gzgtQgzgshKAAIrHAAILHAAQBKAAAzAsQAzAtABA/IAAAmQgBA+gzAtQgzAshKABIrHAAQhIgBg0gsQgzgtAAg+IAAgmQAAg/AzgtQA0gsBIAAQhIAAg0AsQgzAtAAA/IAAAmg");
	this.shape_9.setTransform(60.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_facebook, new cjs.Rectangle(0,0,121,45), null);


(lib.welcome_animasi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(300.95,-27.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(300.95,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance_1}]},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(13));

	// E
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(277.25,-27.05);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(277.25,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_3}]},4).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(17));

	// M
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(235.8,-27.05);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(235.8,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_5}]},4).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(21));

	// O
	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.setTransform(184.8,-27.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.setTransform(184.8,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},16).to({state:[{t:this.instance_7}]},4).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(25));

	// C
	this.instance_8 = new lib.Tween11("synched",0);
	this.instance_8.setTransform(136.85,-27.05);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(136.85,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},12).to({state:[{t:this.instance_9}]},4).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(29));

	// L
	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.setTransform(100.5,-27.05);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(100.5,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.instance_11}]},4).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(33));

	// E
	this.instance_12 = new lib.Tween15("synched",0);
	this.instance_12.setTransform(72.05,-27.05);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.setTransform(72.05,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({_off:true,y:35.95,alpha:1},4).wait(37));

	// W
	this.instance_14 = new lib.Tween1("synched",0);
	this.instance_14.setTransform(29.45,-27.05);
	this.instance_14.alpha = 0;

	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.setTransform(29.45,35.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},4).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,y:35.95,alpha:1},4).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-63,311.5,134.9);


(lib.animasi_line_tombol_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween20("synched",0);
	this.instance.setTransform(146.8,36.75);

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.setTransform(146.8,36.75);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween22("synched",0);
	this.instance_2.setTransform(146.8,36.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,295.6,75.5);


(lib.btn_portfolio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line
	this.instance = new lib.animasi_line_tombol_P();
	this.instance.setTransform(140.8,32.1,1,1,0,0,0,146.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4ikIDxCkIjxClg");
	this.shape.setTransform(52.175,30.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAdAAQAuAAAhAhQAhAhAAAvQAAAvghAhQggAggvAAQgvAAggghgAgxgzQgVAVAAAfQAAAjAaAVQAUAQAYAAQAeAAAVgVQAUgVAAgfQAAgdgVgWQgUgVgeAAQgdAAgUAVg");
	this.shape_1.setTransform(233.25,30.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBsIAAjXIApAAIAADXg");
	this.shape_2.setTransform(216.45,30.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBsIAAjXIAoAAIAACwIA7AAIAAAng");
	this.shape_3.setTransform(206.55,30.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvggAhQghAgguAAQgwAAggghgAgygzQgUAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgVAVg");
	this.shape_4.setTransform(186.5,30.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BsIAAjXIBqAAIAAAoIhBAAIAAAnIBBAAIAAAnIhBAAIAABhg");
	this.shape_5.setTransform(167.35,30.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBsIAAiuIgmAAIAAgpIB2AAIAAApIgoAAIAACug");
	this.shape_6.setTransform(153.25,30.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBsIgwhcIgDAAIAABcIgpAAIAAjXIArAAQAjAAAPAHQAQAGAJAPQAJAPAAAUQAAAVgKAOQgLAOgUAHIAzBggAgbgWIANAAQASAAAIgGQAHgFAAgMQAAgHgDgFQgEgFgGgCQgGgDgQAAIgLAAg");
	this.shape_7.setTransform(139.2,30.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvghAhQggAgguAAQgwAAggghgAgxgzQgVAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgUAVg");
	this.shape_8.setTransform(117,30.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BsIAAjXIAsAAQAiAAAQAHQAPAGAJAPQAJAOAAAVQAAAWgMAPQgMAOgUAGQgMADgeAAIAABcgAgWgWIANAAQAPAAAFgDQAHgCADgFQADgFABgHQAAgNgKgFQgIgFgRAAIgMAAg");
	this.shape_9.setTransform(96.45,30.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9933").s().p("AyjFCQhbAAhBhKQhBhKAAhpIAAiJQAAhoBBhKQBBhLBbAAMAlGAAAQBcAABBBLQBBBKAABoIAACJQAABphBBKQhBBKhcAAg");
	this.shape_10.setTransform(140.875,32.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-5.2,294.6,74.5);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn_github = new lib.btn_github();
	this.btn_github.name = "btn_github";
	this.btn_github.setTransform(169.45,130.9,1,1,0,0,0,42.3,17.1);
	new cjs.ButtonHelper(this.btn_github, 0, 1, 1);

	this.btn_instagram = new lib.btn_instagram();
	this.btn_instagram.name = "btn_instagram";
	this.btn_instagram.setTransform(9.15,130.9,1,1,0,0,0,53.2,17.1);
	new cjs.ButtonHelper(this.btn_instagram, 0, 1, 1);

	this.btn_facebook = new lib.btn_facebook();
	this.btn_facebook.name = "btn_facebook";
	this.btn_facebook.setTransform(-151.2,130.9,1,1,0,0,0,60.5,22.5);
	new cjs.ButtonHelper(this.btn_facebook, 0, 1, 1);

	this.instance = new lib.btn_portfolio();
	this.instance.setTransform(9.2,-116.55,1,1,0,0,0,140.8,32.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_facebook},{t:this.btn_instagram},{t:this.btn_github}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.7,-154.3,424.5,307.70000000000005);


// stage content:
(lib.PembuatanCVSheylarzkyns = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {portfolio:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [19,29];
	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		
		
		this.btn_facebook.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://m.facebook.com/100017158179656/", "_blank");
		}
		
		
		this.btn_instagram.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.instagram.com/invites/contact/?i=,l jf738mvl 5qaa&utm_content=68fy0iu", "_blank");
		}
		
		
		this.btn_github.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("http://www.github.com/lalashey", "_blank");
		}
		
		
		this.btn_portfolio.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("portfolio");
		}
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(26));

	// portfolio
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape.setTransform(360,640.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({_off:false},0).wait(36));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(102,0,153,0.376)").ss(8,1,1).p("Eg4Phj/MBwfAAAMAAADH/MhwfAAAg");
	this.shape_1.setTransform(360,640);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,0,153,0.376)").ss(6,1,1).p("EgonAAAMBRPAAA");
	this.shape_2.setTransform(360.025,914.95);

	this.instance = new lib.Tween23("synched",0);
	this.instance.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.instance}]},19).to({state:[]},10).wait(26));

	// could
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg4UAG9IAAkHQBGgqBYAAQAmAAAiAIQAeg8A0g0QB7h6CuAAQAbAAAaADQAWgdAcgcQCZiZDYAAQDYAACZCZQAbAcAXAdQAZgCAbAAIAXABQA0hlBihUQDNivEiAAQEiAADNCvQB3BlAyB+QCeAJCDAuQAVgbAagZQCWiWDUAAQDUAACWCWQApAoAdAtIAtgBQC+AACHBcIAMAIQASgYAXgXQB2h1CmAAQBbAABMAiQAhgnAsgkQCyiQD7AAQBAAAA7AJQAbgjAhggQCzi0D9ABQD+gBCzC0QBdBdAtByQB+AWBkBIQB1huCjAAQBBAAA6ASIAAHyg");
	this.shape_3.setTransform(360.525,589.45);

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.setTransform(360.5,589.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance_1}]},19).to({state:[]},10).wait(26));

	// sheyla_rzkyns
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgxhAISIAAgyMBoDAAAIAAAygEg2/gE/IAAjSMBt/AAAIAADSg");
	this.shape_4.setTransform(352,738.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3EBF7").s().p("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");
	this.shape_5.setTransform(351,739.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7D8EF").s().p("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");
	this.shape_6.setTransform(351.5,739.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCC4E7").s().p("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");
	this.shape_7.setTransform(352,739.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0B1E0").s().p("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");
	this.shape_8.setTransform(352.5,739.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C49DD8").s().p("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");
	this.shape_9.setTransform(353,739.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B889D0").s().p("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");
	this.shape_10.setTransform(353.5,739.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AD76C8").s().p("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");
	this.shape_11.setTransform(345.4,739.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A162C0").s().p("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");
	this.shape_12.setTransform(354.5,739.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#954EB8").s().p("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");
	this.shape_13.setTransform(355,739.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#893BB1").s().p("AclDpIkWAAIhCgbIgzAMIAAAOIhGABIgCAAIjrAAIAAAAQhbAFhdAAQgzAAgygBQgiABgkAAQhBAAg/gFIhsAAIgggHIAAAGIhjABIgBAAIkpAAIgIgCQhpAHhsAAQhgAAhcgFIgBAAI9+AAIgBAAIgBAAIkaAAIoQi/QhcgBhWgKQhKgJhJgPIgGg8IC+gVQBvAdBzAAQAwAAArgGQAqgGAigJQAdgHAXgIQA3gHAqgQQBbgdBzgQQA0gQA+gQQBVgXBmgRQBrgQBzAAQBPAABNAIQBDAFBDANIAIA3IAAAEIi1AaQhggWhfAAQghAAgeAEIgsAKIgnAKQhHAHgzAWQgyAUhGAFQguANg1AMIhaAaQgmALgpAIIFLAAIA9ANIAkgNId5AAQBdgEBgAAQBhAABdAEIKlAAQBegEBgAAQBhAABfAEIBqAAIAPAFIAKgFIEUAAIAXAAIA/AAQA6gEA+AAQBLAABIAHIA3AGQA7AFA2AMIAMACIBDgcIB6AAIBpAwIAfABICTgxIFDAAIF6BTIllgYIiBAJIg0gEIgsgCQhngGhqgEIgagCIgmAJIA/AdIClgLIhtAkIAEABIBtAZIASAFIBLARIADAAQA8APA4ALIArgCIAkgCIABgMQhWgGhXgMIgMgBIhOgJIKIgtIAAgEIAzAMIABAOIkeBMIAXAFIhJAVIgyAAIgrALIjXAAIgJgBQhaABhjAAIkUAAIhGgQQgzAKg1AGQg8AFhBAAQg9AAg6gFgAOgDGIAVAAIAUAAIgUgEgAE2CyIAMgCIBCgGIAZgDIAxAFIBtgNIA2gOIAQgHIAAAJIAYAAIAkgIIgbgGIADgBIBGgEIATgFIg3AEIAVgDIAAgHIAAgGIgRgDIg1AWIABAAIAZgCIgPAFIgVABIAJgEIjtARIhdAAIhaglIhVAXIBhAOIhgAAQBKAQBPAPgAV+CuIBPgJIAYgDQBUgKBSgLIgOgFIi7ALIiGAAgAeyCTIA/AAIBEAJIAVgIIgogTIhEAPIhjgNgAm/CHIAAAMIBqAAIAAgSIgGgBgEgkuACHIAAABIABALIDzAAIACgBIhggVgAurBiIgqALIAgAMIAAAEIAPACIB3ASIBfgZIgBgOIgmgIIAqgBIDIgCIAVgFIANAEIAJAAIAAgJIgWAFIgYgIIAKAAIAeAAIAGACIABgCIgHAAIhUgVIgNABIhzANIhJAJIgNACIhSgFIhPARgAbRCOIAugLIAEgBIgTgEIAOgCIAAgJIAAgEQhbgPhfgNIASAIIAOADIgJgBgAc9B7IAAAAIgMAFIAzgDIgZgHgABsBwIAAABIAAAMIAPACIAagFIACgPIgGgBIglAGgEAkwABkIBXANIA6AIIAZgIIAAAAIg9gPIgjgIIhaAGIgkgKIgOAFIgTgCQhQgLhTgIIB9AbIAYgFIAaABIgXAIIBGgEIAaADgADPBgIArAMICSglIgvgLIgUgCIgOgBQhHANhDAPIAUAIIA8gEIgyAHgAQcBnIBMgFIAAgEIgmgIgAGbBDIAKABIgYADIByAaIBLgfIg1gKIgxgIgARoBdIAAgHIgVgBgA7HBHIEBANIh5gqIgGAAgAX8BRIATgEIAEgBIgCgBIgIABIhlgMIg5gGIgcgDIgYgCIAugKIgGgCIgyAAIAAAMICQATIAVAIIAWgCgAevBMIAmgPIgbgDIgHAAIhEAMIgYgGIhJgFIhHAFIhIgEIAYAHIAwgDgAw/BCIgigOIgEAAIgDAAIgqgDIg2ANIAogDIBhAHgAYHAwIAAAGIBaAEIAMgDIgwgNIg2AAIgogBIAoAHgEggCAA2IAFAAIgFgBgA0qAyIgYgGIgCAAIgFAAIAfAGgEAweADJIARgFIgBAIgEAweADJgAKhCFIAAAAIABAAIgFABgAKiCFg");
	this.shape_14.setTransform(355.5,739.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E27A9").s().p("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");
	this.shape_15.setTransform(356,740);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7214A1").s().p("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");
	this.shape_16.setTransform(356.5,740.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660099").s().p("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");
	this.shape_17.setTransform(359.825,740.175);

	this.instance_2 = new lib.Tween27("synched",0);
	this.instance_2.setTransform(360,740.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.instance_2}]},6).to({state:[]},10).wait(26));

	// text
	this.instance_3 = new lib.welcome_animasi();
	this.instance_3.setTransform(360,102.85,1,1,0,0,0,155.7,36);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZBDQgLgHgGgQQgGgPAAgdQAAgbAGgPQAGgQALgJQALgIAOAAQANAAAMAJQAKAIAIAQQAGAQAAAaQAAAbgGAQQgHAQgLAIQgMAJgNAAQgNAAgMgJgAgRg2QgJAGgEAMQgEANAAAYQAAAYAEAMQAEANAJAGQAIAHAJgBQAJAAAJgFQAIgHAEgMQAFgQABgVQAAgWgGgNQgEgOgIgGQgJgHgJABQgJgBgIAHg");
	this.shape_18.setTransform(453.45,1229.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_19.setTransform(445.4,1236.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAEBIIAAiBIgVAAIAIgOIAbAAIAACPg");
	this.shape_20.setTransform(435.925,1229.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAhA2IAAgyQgBgRgBgGQgCgLgHgFQgGgGgLAAQgMAAgKAIQgJAIgDAMQgCAIAAAVIAAAmIgPAAIAAhpIAPAAIAAATQAHgKALgGQAJgFALAAQAMgBAJAHQAKAFAEALQAFAKgBAVIAAA2g");
	this.shape_21.setTransform(419.65,1231.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAnQgQgQAAgXQABgVAOgQQAQgSAYAAQAYAAARASQAOAQAAAVQAAAXgPAQQgQARgYAAQgYAAgPgRgAgcgdQgMANAAARQgBALAGAKQAGAKAJAGQAKAFAKAAQAMAAAJgFQAJgGAGgKQAFgKABgLQAAgRgNgNQgMgMgRAAQgQAAgMAMg");
	this.shape_22.setTransform(406.95,1231.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGBLIAAhpIANAAIAABpgAgHg3QgDgDAAgFQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFQAAAFgDADQgEAEgEgBQgEABgDgEg");
	this.shape_23.setTransform(398.425,1229.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRA0QgJgEgFgHIAJgKQAKAMAMAAQAHAAAGgFQAGgGAAgHQAAgGgEgEQgEgFgMgGQgPgHgFgHQgFgHAAgKQAAgMAJgIQAHgIAMAAQAPAAAOAPIgIAJQgLgLgLAAQgFAAgFAEQgFAFAAAGQAAAFAEAFQAEAEAMAHQAPAHAGAHQAFAHAAAKQAAANgKAJQgIAJgOAAQgJAAgIgEg");
	this.shape_24.setTransform(392.35,1231.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaA2IAAhpIAOAAIAAAQQAGgJAGgFQAHgEAIAAQAFAAAHADIgIAMIgGgCQgIAAgFAFQgGAGgEAMQgCAJAAAaIAAAkg");
	this.shape_25.setTransform(386.35,1231.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnAnQgPgRAAgWQAAgTANgQQAPgUAaAAQAbAAAQAVQAMAOAAAVIhfAAQABATALAMQAMALAQAAQAIAAAHgCQAIgDAFgFQAGgFAGgKIALAGQgFALgIAHQgHAHgJADQgKAEgLAAQgZAAgPgRgAgaggQgIAIgEAOIBOAAQgDgLgFgGQgFgHgJgEQgIgEgKAAQgPAAgLAKg");
	this.shape_26.setTransform(376.125,1231.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAA1IgxhpIAOAAIAjBMIAjhMIAPAAIgxBpg");
	this.shape_27.setTransform(364.075,1231.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag2BKIAAiQIANAAIAAAUQAIgMALgGQALgFAMAAQAWAAAQAQQAQAQAAAXQAAAXgQAQQgQAQgWABQgMAAgKgGQgLgFgJgLIAAA6gAgegwQgMANAAATQAAALAGAJQAFAKAKAGQAKAFALAAQALAAAJgFQAKgHAGgJQAFgKAAgLQAAgMgFgKQgGgKgKgFQgJgGgLAAQgRAAgNAMg");
	this.shape_28.setTransform(346.425,1233.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag2BKIAAiQIANAAIAAAUQAIgMALgGQALgFAMAAQAWAAAQAQQAQAQAAAXQAAAXgQAQQgQAQgWABQgMAAgKgGQgLgFgJgLIAAA6gAgegwQgMANAAATQAAALAGAJQAFAKAKAGQAKAFALAAQALAAAJgFQAKgHAGgJQAFgKAAgLQAAgMgFgKQgGgKgKgFQgJgGgLAAQgRAAgNAMg");
	this.shape_29.setTransform(332.775,1233.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmAoQgQgRAAgXQAAgWAQgQQAQgRAWAAQANAAAKAGQALAFAIAMIAAgUIANAAIAABpIgNAAIAAgSQgJAKgKAGQgLAFgMAAQgWAAgQgQgAgTgkQgKAGgGAKQgFAKAAAKQAAALAFALQAGAKAKAGQAKAFAKAAQALAAAKgFQAKgGAFgKQAGgJAAgMQAAgSgMgMQgNgNgRAAQgLAAgJAGg");
	this.shape_30.setTransform(318.625,1231.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_31.setTransform(304,1236.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAcBIIgzhDIgIAAIAABDIgOAAIAAiPIAdAAQAXAAAIACQANADAIAKQAIAJAAAOQAAAMgGAJQgFAJgKADQgLAFgRAAIAzBDgAgfgIIAZAAQAOAAAGgDQAHgCAEgGQAEgGAAgIQAAgHgEgGQgEgGgGgCQgGgDgOAAIgaAAg");
	this.shape_32.setTransform(295.225,1229.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRA0QgIgEgGgHIAJgKQAKAMAMAAQAHAAAGgFQAGgGAAgHQAAgGgEgEQgEgFgMgGQgOgHgGgHQgFgHAAgKQAAgMAIgIQAJgIALAAQAPAAAPAPIgJAJQgLgLgKAAQgHAAgEAEQgFAFABAGQgBAFAEAFQAEAEALAHQAQAHAFAHQAGAHAAAKQAAANgJAJQgKAJgNAAQgIAAgJgEg");
	this.shape_33.setTransform(284.75,1231.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660099").s().p("ABFB6IgTgzIhjAAIgTAzIgxAAIBfjzIAtAAIBfDzgAgfAaIBAAAIgghTg");
	this.shape_34.setTransform(466.65,970.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#660099").s().p("AgWB6IAAjzIAtAAIAADzg");
	this.shape_35.setTransform(449.3,970.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660099").s().p("AhgB6IAAjzIA3AAQA1AAAZANQAaANARAeQARAeAAAnQAAAbgJAZQgKAXgQAPQgRAQgTAGQgTAGgvAAgAgyBMIAWAAQAfABAOgIQAPgHAJgRQAJgRAAgZQAAgngWgVQgTgUgrABIgQAAg");
	this.shape_36.setTransform(433.225,970.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#660099").s().p("AhCB6IAAjzICFAAIAAAtIhXAAIAAAtIBXAAIAAArIhXAAIAABAIBXAAIAAAug");
	this.shape_37.setTransform(412.525,970.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660099").s().p("ABjB6IgaiZIg0CZIgoAAIg0iZIgbCZIgtAAIAqjzIAuAAIA3CpIA5ipIAuAAIApDzg");
	this.shape_38.setTransform(387.775,970.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#660099").s().p("Ag4B6IAAjzIAuAAIAADGIBDAAIAAAtg");
	this.shape_39.setTransform(356.5,970.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#660099").s().p("ABFB6IgTgzIhjAAIgTAzIgwAAIBdjzIAuAAIBfDzgAggAaIBBAAIgghTg");
	this.shape_40.setTransform(335.45,970.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#660099").s().p("AgWB6IAAjzIAtAAIAADzg");
	this.shape_41.setTransform(318.1,970.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#660099").s().p("AhRBcQgkgkAAg4QAAgkAQgcQARgdAegRQAfgRAjAAQAeAAAcANQAcAMAUAYIggAfQgigjgpAAQgiAAgYAYQgYAYAAAiQAAAYALATQAKATAUALQATALAXAAQAUAAARgIQAQgHAVgUIAfAhQgbAagYAKQgYAKgfAAQg4AAgkgkg");
	this.shape_42.setTransform(300.275,970.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#660099").s().p("AhaBaQgkgmAAg0QAAgiARgdQARgeAegRQAdgRAiAAQAzAAAmAlQAlAmAAA1QAAA1glAlQglAlg0AAQg2AAglgmgAg4g6QgXAYAAAjQAAAoAdAYQAWASAdAAQAhAAAXgYQAXgXAAgjQAAgigXgYQgXgZgiAAQghAAgXAYg");
	this.shape_43.setTransform(272.575,970.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#660099").s().p("AgrB0QgTgNgOgcIAngXQASAgAWAAQAMAAAIgHQAIgHAAgJQAAgIgGgIQgGgJgUgRQgogfgMgSQgLgSAAgRQAAgaATgSQATgSAcAAQASAAAQAIQARAJATAWIgiAfQgSgagTAAQgIAAgGAFQgGAFAAAGQAAAGAEAGQAGAHAbAYIAhAbQAOAPAGANQAGANAAAPQAAAegVAUQgVATghAAQgZAAgUgMg");
	this.shape_44.setTransform(248.975,970.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#660099").s().p("AhaBaQgkgmAAg0QAAgiARgdQARgeAegRQAdgRAiAAQAzAAAmAlQAlAmAAA1QAAA1glAlQglAlg0AAQg2AAglgmgAg4g6QgXAYAAAjQAAAoAdAYQAWASAdAAQAhAAAXgYQAXgXAAgjQAAgigXgYQgXgZgiAAQghAAgXAYg");
	this.shape_45.setTransform(435.325,657.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#660099").s().p("AgWB6IAAjzIAtAAIAADzg");
	this.shape_46.setTransform(416.3,657.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#660099").s().p("Ag4B6IAAjzIAuAAIAADHIBDAAIAAAsg");
	this.shape_47.setTransform(405.1,657.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#660099").s().p("AhaBaQgkgmAAg0QAAgiARgdQARgeAegRQAdgRAiAAQAzAAAmAlQAlAmAAA1QAAA1glAlQglAlg0AAQg2AAglgmgAg4g6QgXAYAAAjQAAAoAdAYQAWASAdAAQAhAAAXgYQAXgXAAgjQAAgigXgYQgXgZgiAAQghAAgXAYg");
	this.shape_48.setTransform(382.325,657.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#660099").s().p("Ag7B6IAAjzIB3AAIAAAtIhKAAIAAAsIBKAAIAAAsIhKAAIAABug");
	this.shape_49.setTransform(360.65,657.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#660099").s().p("AgXB6IAAjFIgrAAIAAguICGAAIAAAuIgtAAIAADFg");
	this.shape_50.setTransform(344.6,657.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#660099").s().p("AAbB6Ig1hoIgFAAIAABoIguAAIAAjzIAxAAQAnAAASAHQARAHAKARQALARAAAWQAAAZgMAQQgLAPgYAJIA6BsgAgfgaIAPAAQAVABAIgHQAJgFAAgOQAAgIgEgGQgFgGgHgCQgGgDgSAAIgNAAg");
	this.shape_51.setTransform(328.675,657.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#660099").s().p("AhaBaQgkgmAAg0QAAgiARgdQARgeAegRQAdgRAiAAQAzAAAmAlQAlAmAAA1QAAA1glAlQglAlg0AAQg2AAglgmgAg4g6QgXAYAAAjQAAAoAdAYQAWASAdAAQAhAAAXgYQAXgXAAgjQAAgigXgYQgXgZgiAAQghAAgXAYg");
	this.shape_52.setTransform(303.475,657.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#660099").s().p("AhIB6IAAjzIAyAAQAnAAASAHQARAIAKAQQALARAAAWQAAAagOARQgNAQgXAHQgOADgiAAIAABogAgZgaIAPAAQAQAAAHgCQAHgDAEgFQAEgGAAgJQAAgOgLgGQgIgFgVAAIgNAAg");
	this.shape_53.setTransform(280.225,657.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#660099").s().p("Aw5DDQhJAAg1g5Qg0g5AAhRQAAhQA0g5QA1g5BJAAMAhzAAAQBJAAA0A5QA1A5AABQQAABRg1A5Qg0A5hJAAg");
	this.shape_54.setTransform(374.075,1229.15);

	this.text = new cjs.Text("sR. app version 1.0", "20px 'Century Gothic'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(281.05,1217.65);

	this.text_1 = new cjs.Text("SOCIAL MEDIA", "bold 34px 'Century Gothic'", "#660099");
	this.text_1.lineHeight = 43;
	this.text_1.parent = this;
	this.text_1.setTransform(240.6,949.1);

	this.text_2 = new cjs.Text("SHEYLA RIZKY NOVANTO SAMUDRA", "bold 40px 'Century Gothic'", "#660099");
	this.text_2.lineHeight = 51;
	this.text_2.parent = this;
	this.text_2.setTransform(23.9,716.15);

	this.text_3 = new cjs.Text("PORTFOLIO", "bold 34px 'Century Gothic'", "#660099");
	this.text_3.lineHeight = 43;
	this.text_3.parent = this;
	this.text_3.setTransform(270.2,635.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_3}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_3}]},13).to({state:[{t:this.shape_54},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_3}]},6).to({state:[]},10).wait(26));

	// logo
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("EBmWAxsIAAuoIOnAAIAAOogEhMFAlKIAAwaIQbAAIAAQagEh9mAQkIAAoWIebAAIAAIWgEBelAP+IAAyfISgAAIAASfgEg+8ANlIAAwsIQtAAIAAQsgEhW0gKlIAAuBIOBAAIAAOBgEg5lgOKIAAvOIPOAAIAAPOgEBNlgPDIAAoWIajAAIAAIWgEBv5gcLIAAtvINuAAIAANvgEBZNgekIAAu7IF+AAIAAO7gEgYKglJIAAsiIMiAAIAAMigEAGNgltIAArXILXAAIAALXgEg3MgluIAAr8IL8AAIAAL8gEAvcgm7IAAqwIeJAAIAAKwg");
	this.shape_55.setTransform(223.475,317.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EBEB14").s().p("AucF4IAArvIc5AAIAALvg");
	this.shape_56.setTransform(-436.075,393.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF14").s().p("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");
	this.shape_57.setTransform(348.55,320.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D8D827").s().p("AtsHlIAAvJIbZAAIAAPJg");
	this.shape_58.setTransform(-389.025,389.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF27").s().p("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");
	this.shape_59.setTransform(349.525,323.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C4C43B").s().p("As8JSIAAyiIZ5AAIAASig");
	this.shape_60.setTransform(-342,385.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF3B").s().p("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");
	this.shape_61.setTransform(350.475,326.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B1B14E").s().p("AsLK+IAA17IYXAAIAAV7g");
	this.shape_62.setTransform(-294.975,381.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF4E").s().p("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");
	this.shape_63.setTransform(351.425,329.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D9D62").s().p("ArbMrIAA5VIW3AAIAAZVg");
	this.shape_64.setTransform(-247.95,378.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF62").s().p("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");
	this.shape_65.setTransform(352.375,332.925);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#898976").s().p("AqqOXIAA8tIVVAAIAActg");
	this.shape_66.setTransform(-200.95,374.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF76").s().p("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");
	this.shape_67.setTransform(353.325,335.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#767689").s().p("Ap6QEMAAAggHIT0AAMAAAAgHg");
	this.shape_68.setTransform(-153.9,370.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF89").s().p("EAmNAgDIhrghIhlgfIAAhuIAAgKIAAlJIADACIAAnkIgYgBIhsgqIhlgnIAAh1QABgMgBAAIAAldIAEABIAAlmIiwgBIiJAAIgghUQgCgIgBABIhcj7IACADIhAivIAAkgIgEAGIAEkmIAAhoIgCg0IhPgCIh9EhQgTAygSAoQgPAogOAgQgJAaAPAGIA8AcIgLAkQiogDinAAIiPAAIgkhUQgDgIgCABIAAgCQgCAbgJAFIjHAvIgUABQgXABgUgDQgSgDgVgIQgogMgmgkIgVgSQgqgngsguQg8g9hBhFQhChGhGhDQgVgUgOgMQgOgLgQgHQgQgGgTgDQgWgCgegBIhWgCIgvDHQAegJAsAKQA0AMAhAoQAgAlAAA2QAAAegKAZQABAugMAHIitAuIApAOIgFAjIidgBIhrgaIhlgYIAAhpIAAgJIAAgvQg3g3g8g9QhEhGhIhDQgVgUgPgMQgOgLgSgHQgPgHgVgCQgVgDggAAIhWgCIguCtIARADQAyALAiAnQAgAlAAA2QAAAdgKAaQABAtgNAHIi2AuQADAJAKAEIBPAbIgGAkIifgCIg2gOIA3BsIBTCYIARAeQAhgMA0AOQA0APAhAqQAgAnAAA5QAAAegKAbQABAugMAJIjGA/IgUADQgYACgUgBQgSgBgUgFQgogJgngfIgUgOQgvgmgwguIgSgRQgFBTgPBNIAmBOIBiDEIBUCdIARAeQAggLA1AQQAzAQAhAsQAgApABA6QAAAfgKAcQABAwgNAJIjGBGIgUADQgYADgTAAQgTgBgUgFQgogHgngdIgUgPQgwgngyguQhFg9hJhFQgzgvg0gtIgxgqIAAAhIgBAzQgDBugTBhIAnBPIBiDDIBTCcIARAeQAhgLA1AQQAyAPAiAsQAgAoAAA6QAAAfgJAbQABAwgNAKIjHBFIgUADQgXADgUAAQgSgBgUgFQgogHgngeIgUgPQgwgngyguQhFg+hJhFQhMhGhPhCQgXgUgQgMQgQgLgSgHQgRgHgVgCQgYgDghgBIhdgBIhjEgIgeBaQgNAogLAgQgHAaARAHIBGAbIgJAkIikgCIhwgnIhlgiIAAhyIAAgKIAAlSIADACIAAoIIgDAIIADkiIAAhnIgChTIgBgKIAAhzICIAAIBSgBIB4gDIA2gBIAAhlIgEAHIAEkjIAAhnIgDhUIgBgKIAAh1ICJAAIAZAAIAAjCIgDAHIADkcIAAhlIgChSIgBgJIAAhxIBJAAIAAgwIgCAIIACkNIAAhgIgBhNIgBgJIAAhsIB+AAIBLgBIBxgDIBvgDIBHAAQEHAACdBDIAAg9ICAABIBMgBIBxgDIBxgDIBHgBQDzAACZA5IAAggIB9AAIBMAAIBvgEIBugCIBGgBQEMAACbBHQCPBIAeCJQAbB8g0BNQggA0hFAkQgJBSgXBGQgdgygfg0QArgVAkgXIANgGQAGg5ABg9QAAisgziAQgZgNgcgLQixg6kHAAIhqABIh7AGIAACBQAMAbAHAeQAeB8gxBOIAAACIAAFmIA7BKQBpACBfAAQDwAACtguIAWgkQAYgtAQg0QAdAyAaAxIBiCxQAsBOAnA/IARAcQAggQA1ALIARAEIgSgoIACADIgxhuIAAmLIgCAHIACk0IAAhuIgBhYIgBgKIAAh9ICQABIBWgBIB/gDICBgDIBPgBQEwAAC8BIQBMAgA0AuIAwARIAAgkIB7AAIBLgBIBtgDIBtgCIBEgBQEKAACYBHQAaAOAXAQIAHAJIAjgBIBzgCIBIgBQEWAACkBHQCVBIAkCJQAgB8gtBNQgbAxg9AkQADgqAAgsQAAi7gyiOQgcgNgggLQjGg7kdAAQg4AAg7ACIgEAAQhAAChEADIAAHeQgdAYgjAVQgGAwgMArIgEAPIgogPIg0gQIgOgDIAACtIACACIAJAOIAZgGQAMgQALgSQAUgmAQgqQAeA0AcAzIBEB5QACgSgCgUIAqAqICCACIBZABQEFAADBguQAMgUAKgUQAehAAShKIAuBXIBiC6IBTCTIARAdQAhgNA1ANQAzANAhApQAgAmABA3QgBAfgJAaQABAvgNAIIjHA5IgUACQgXACgUgCQgSgCgUgGQgogLgnghIgUgPQgtgngvguQhAg+hFhFQhGhGhKhCQgWgUgPgMQgPgMgSgGQgQgHgVgDIg1gDIhZgCIgpCRQAagGAmAHQAyAKAiAmQAKAKAGAMQCOBHAtB/QAVA8ACAxQAWAPARAWQAfApAAA7QAAAggJAcQABAwgMAKIiKAyQgFAwgHAuIAiBJQA2BrAtBgIBTCiIARAfQAggJA2ARQAyASAiAtQAgAqAAA8QAAAggKAdQABAwgNALIjGBNIgTAEIgLACQgWAXgfASQgGBmgUBYIAsBUIBiC9IBTCXIARAdQAfgNA2AOQAzAOAiAqQAfAnAAA4QAAAfgJAaQABAvgNAJIjGA9IgUADQgYABgTgBQgTgBgTgHQgogJgnggIgVgQQgugngvgtQhCg+hGhFQhIhGhLhCQgXgUgPgMQgQgMgRgGQgRgHgUgCQgXgDgggBIhagCIhZEhQgOAygNAoIgVBIQgGAaASAHIBKAbIgIAkIilgCgEAmAAIOIAAClIBBioIhBADgEgmRAExIBXBJQB9ADB0AAQBoAABegGQgNhqgchaQgggOgjgKQgjgKgngHIgHAdIilgCIhsgjIhAgVgA3uigIAAAvQA0giAWgwQAmhOgmh7QgSg3gjgsIgHALIgyAKQgGgagIgZQgfgOgkgKQjVg4kjgCQADALALAEIBRAcIgGAkIiZgCIhYgXIAAAnIBPBJQB4ADBvAAQDwAAC7gkQAkCNAACtgEArUgIKIAUARIAyArIALgqIAkh+IgRgDQgKAggMAfQhJgJhPgFIBKA+gEAk6gJNIifAGIAAB2IBqABQBuAABkgHIAAhzIgEgEIgSAAIiHABgEghlgVmIhIADIAACpIA/BJQBrADBhAAQD2AACygvQAMgRAKgTIAMgZQAOggAMgiIgagKIgUgHQjVg6kpAAIh7ABgAezz7Ih3ADIAABDQhJABhPAEIAAAZQBPgFBJgIQBIgIBDgLIA1AAIA5ACIgygnIAJgYIADgIQBFjBAHj3IgkgYQgcgXgfgWIAAIWIgfgZIgqABgEg2dAAoQhRgOhnghQiUg4ibhsIgBAAQBJhsA7hnIA0gGICOCzQAaAGAfAEIAzAYIAaAOQBaABAzAHIAADoIhxgngEg4GgDHQhKgbgJgdQgVgdAQgzQAUg1BMgeQBUgeB5AAQBZAABQANIA5BJQgBgTgIgOQgOgfg6gWIgjgRIgrAEQiEABgzgOQgzgbAAg0QAAhHBigZQBhgPChAwQB8ArBqBEIAAAuIgwCEIgbAtIgzAGIhDhWQABAWgJAdQgUA6hJAfQhTAgh4AAQhKAAg9gJgEA3IgQ0Qggg9gkg+QAqgXAkgZIARgJQgGBggVBUIAAAAg");
	this.shape_69.setTransform(354.3,338.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#62629D").s().p("ApJRxMAAAgjhISTAAMAAAAjhg");
	this.shape_70.setTransform(-106.9,366.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF9D").s().p("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");
	this.shape_71.setTransform(355.25,341.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4E4EB1").s().p("AoZTeMAAAgm7IQzAAMAAAAm7g");
	this.shape_72.setTransform(-59.875,362.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFB1").s().p("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");
	this.shape_73.setTransform(356.2,344.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3B3BC4").s().p("AnoVKMAAAgqTIPRAAMAAAAqTg");
	this.shape_74.setTransform(-12.85,358.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFC4").s().p("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");
	this.shape_75.setTransform(357.15,347.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2727D8").s().p("Am4W3MAAAgttINxAAMAAAAttg");
	this.shape_76.setTransform(34.175,355.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFD8").s().p("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");
	this.shape_77.setTransform(358.1,350.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1414EB").s().p("AmHYkMAAAgxHIMPAAMAAAAxHg");
	this.shape_78.setTransform(81.225,351.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFEB").s().p("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");
	this.shape_79.setTransform(359.075,353.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AlXaRMAAAg0hIKvAAMAAAA0hg");
	this.shape_80.setTransform(128.225,347.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("A4RPyQA+jIAmi/IBHgKICEFMQBnAiCgAAQCqAABmg7QBkg7AAhqQAAhjhDg5QhFg5iWgqIi9g2Qj2hFhdhhQhfhkAAiQQAAjKC2h0QC1h1EpAAQDnAADFAwIAAE0IgSBTIhGAKIh0klQhqgZh8ABQirgBhoA5QhpA4AABhQAABeBFA2QBDA2C6AzICWAsQDgBBB2BSIAAKqIjSAEIAAgKQiWAwi/AAQkVABkhhhgAR6Q2QgTgCgSgEQgrgJglgOQgjgPgkgYQhLgvhIhaQhKhbhOhzQhOhxhViBQhWiBhdh8Igwg7QgTgVgYgNQgWgMgfgFQgfgFgvgBIh/gEIAAIZQAABcACBLQAABKACA7QABAxAtAMIDKAzIAGBDQjagFjXAAIi8AAIAAicIACgKIAAgGIgCACIAAnTIAGAFIAArMIgGAVIAAhNIAGACIAAlEIAAiNIgEhzIgCgNIAAigIC8AAIBxgBIClgGICmgFIBogCQGkAADSCFQDSCFAAD+QAADmiQCQQiQCPknBMQB0CUBhCLIC2D9QBTByBIBYIAfAnQA8gxBjgBQBeAAA+A0QA8AxAABSQAAAsgSAlQACBKgXACgABdvPQg7ADhCAHIAAOHQBuAFBfAAQE7AACThxQCShzAAjxQAAjriMhtQiMhskrAAQgzAAg6ADg");
	this.shape_81.setTransform(360.025,358.8);

	this.instance_4 = new lib.logo_animasi();
	this.instance_4.setTransform(360,358.85,1,1,0,0,0,155.4,110.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.instance_4}]},6).to({state:[]},10).wait(26));

	// tombol
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#660099").s().p("AgKA9QgHgDgGgGIAAAJIgXAAIAAh8IAXAAIAAAtQAGgGAHgDQAHgDAHAAQASAAAMANQANANAAAUQAAAUgNAOQgNAOgRAAQgHAAgHgDgAgRgCQgHAGAAAMQAAAMAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgMQAAgMgHgGQgHgHgKAAQgKAAgHAHg");
	this.shape_82.setTransform(540.825,1085.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#660099").s().p("AgXAnQgJgGgEgMQgDgIABgVIAAglIAWAAIAAArQAAAMACAFQACAFADACQAFADAEAAQAGAAAEgDQADgCADgGQABgEAAgLIAAgsIAXAAIAAAmQAAAWgEAKQgFAKgIAFQgKAHgNgBQgOABgJgIg");
	this.shape_83.setTransform(529.9,1087.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#660099").s().p("AARA+IAAgnQAAgQgBgGQgCgEgDgCQgDgEgGAAQgFAAgGAFQgEAEgCAHQgBAEAAAPIAAAkIgXAAIAAh8IAXAAIAAAsQAGgFAHgDQAFgDAIAAQANAAAJAJQAIAIAAAPIAAA7g");
	this.shape_84.setTransform(519.75,1085.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#660099").s().p("AgLA+IAAhGIgMAAIAAgUIAMAAIAAghIAVAAIAAAhIAOAAIAAAUIgOAAIAABGg");
	this.shape_85.setTransform(512.15,1085.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#660099").s().p("AgKBAIAAhaIAVAAIAABagAgJgmQgFgEAAgGQAAgGAFgFQAEgEAFAAQAGAAAEAFQAFAEgBAGQABAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_86.setTransform(507.45,1085.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#660099").s().p("AgVA9QgJgEgHgGQgGgGgDgKIAZAAQAEAEAFACQAFACAHAAQAIAAAGgDQAFgDADgEQACgFAAgLQgGAGgHADQgGACgHAAQgTAAgMgMQgNgOAAgTQAAgWAOgNQAMgLAQAAQAHAAAHADQAHACAHAHIAAgKIAXAAIAABNQAAAXgKALQgMAOgZAAQgMAAgJgDgAgQgjQgHAHAAALQAAALAHAHQAHAHAKAAQAKAAAHgHQAHgGAAgMQAAgLgHgHQgHgHgLAAQgJAAgHAHg");
	this.shape_87.setTransform(499.625,1088.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#660099").s().p("AAvAuIAAguQAAgOgFgFQgEgGgHAAQgGAAgEAEQgFADgCAGQgDAGABALIAAApIgXAAIAAgrQAAgMgBgFQgCgFgDgDQgEgDgFAAQgGAAgFAEQgEADgCAGQgDAGAAAMIAAAoIgWAAIAAhZIAWAAIAAAKQAGgGAIgDQAGgDAJAAQAIAAAHAEQAGAEAEAIQAFgIAJgEQAHgEAKAAQAJAAAIAEQAHAFADAHQADAHAAAQIAAA0g");
	this.shape_88.setTransform(392.95,1086.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#660099").s().p("AghAiQgNgOAAgUQAAgUAMgOQANgMARAAQAIAAAHADQAHACAGAHIAAgKIAXAAIAABZIgXAAIAAgJQgHAGgGADQgHACgHAAQgRAAgNgNgAgQgSQgHAHAAALQAAAMAHAHQAHAIAJAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLABQgKAAgGAHg");
	this.shape_89.setTransform(379.125,1087.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#660099").s().p("AgXAuIAAhZIATAAIAAALQADgGAFgEQAFgDAGAAQAFAAAEACIgHATIgGgCQgFAAgEAHQgDAGAAASIAAAFIAAAkg");
	this.shape_90.setTransform(371.275,1086.925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#660099").s().p("AgVA9QgJgEgHgGQgGgGgDgKIAZAAQAEAEAFACQAFACAHAAQAIAAAGgDQAFgDADgEQACgFAAgLQgGAGgHADQgGACgHAAQgTAAgMgMQgNgOAAgTQAAgWAOgNQAMgLAQAAQAHAAAHADQAHACAHAHIAAgKIAXAAIAABNQAAAXgKALQgMAOgZAAQgMAAgJgDgAgQgjQgHAHAAALQAAALAHAHQAHAHAKAAQAKAAAHgHQAHgGAAgMQAAgLgHgHQgHgHgLAAQgJAAgHAHg");
	this.shape_91.setTransform(362.475,1088.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#660099").s().p("AghAiQgNgOAAgUQAAgUAMgOQANgMARAAQAIAAAHADQAHACAGAHIAAgKIAXAAIAABZIgXAAIAAgJQgHAGgGADQgHACgHAAQgRAAgNgNgAgQgSQgHAHAAALQAAAMAHAHQAHAIAJAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLABQgKAAgGAHg");
	this.shape_92.setTransform(351.275,1087.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#660099").s().p("AgLA+IAAhGIgMAAIAAgUIAMAAIAAghIAVAAIAAAhIAOAAIAAAUIgOAAIAABGg");
	this.shape_93.setTransform(343.4,1085.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#660099").s().p("AgfAgIAOgPQAEAFAFACQAGADADAAQAEAAADgCQACgCAAgDQABgGgKgEIgHgEQgWgKAAgRQAAgKAJgIQAHgIANABQAJAAAHADQAIAEAFAHIgOAPQgJgJgGAAQgDAAgDACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAGAEIAIAEQANAHAFAFQAFAHAAAJQAAAMgJAIQgJAJgOgBQgUAAgLgPg");
	this.shape_94.setTransform(336.9,1087.05);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#660099").s().p("AARAuIAAgnQABgPgCgGQgCgFgDgDQgEgDgFAAQgGAAgFAFQgFAFgCAIQgBAEAAANIAAAkIgWAAIAAhZIAWAAIAAAJQAIgGAHgDQAFgCAGAAQAOAAAJAJQAIAIAAAQIAAA6g");
	this.shape_95.setTransform(328.2,1086.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#660099").s().p("AgKBAIAAhaIAVAAIAABagAgKgmQgDgEAAgGQAAgGADgFQAFgEAFAAQAFAAAFAFQAEAEABAGQgBAGgEAEQgEAFgGAAQgFAAgFgFg");
	this.shape_96.setTransform(321,1085.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#660099").s().p("AAQA+IglgpIAAApIgXAAIAAh8IAXAAIAABHIAggkIAdAAIgnAqIAsAvg");
	this.shape_97.setTransform(236.175,1085.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#660099").s().p("AggAiQgPgPAAgTQAAgUAQgOQANgMASAAQAMgBALAHQALAGAHALQAGALABAMQgBANgGAKQgHAMgLAGQgLAGgMAAQgTABgNgOgAgRgSQgHAHAAALQAAAMAHAHQAHAHAKAAQAKAAAIgHQAGgHAAgMQAAgLgGgHQgIgHgKAAQgKAAgHAHg");
	this.shape_98.setTransform(225.1,1087.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#660099").s().p("AggAiQgOgPgBgTQAAgUAQgOQANgMASAAQAMgBALAHQALAGAHALQAGALABAMQgBANgGAKQgHAMgLAGQgLAGgMAAQgTABgNgOgAgRgSQgHAHAAALQAAAMAHAHQAHAHAKAAQALAAAGgHQAIgHgBgMQABgLgIgHQgGgHgLAAQgKAAgHAHg");
	this.shape_99.setTransform(214.2,1087.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#660099").s().p("AgKA9QgHgDgGgGIAAAJIgXAAIAAh8IAXAAIAAAtQAGgGAHgDQAHgDAHAAQASAAAMANQANANAAAUQAAAUgNAOQgNAOgRAAQgHAAgHgDgAgRgCQgHAGAAAMQAAAMAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgMQAAgMgHgGQgHgHgKAAQgKAAgHAHg");
	this.shape_100.setTransform(203.375,1085.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#660099").s().p("AghAiQgNgOAAgTQAAgVANgNQANgNAUAAQAVAAANANQANAOAAAVIAAAEIhIAAQACAKAHAGQAHAFAJABQANAAAJgJIAUAJQgIAJgJAGQgLAEgOAAQgUAAgNgNgAgPgWQgEADgFAJIAxAAQgCgIgHgFQgGgEgKAAQgIgBgHAGg");
	this.shape_101.setTransform(192.1,1087.05);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#660099").s().p("AggAhQgNgOAAgTQgBgMAHgLQAGgLAMgHQAMgFANAAQAOgBALAGQAKAFAIAKIgTALQgGgGgFgDQgFgBgHAAQgMAAgHAHQgJAIAAALQABALAHAIQAIAGALABQAPAAAJgLIASANQgPASgbAAQgXAAgNgOg");
	this.shape_102.setTransform(181.1,1087.05);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#660099").s().p("AghAiQgNgOAAgUQAAgUAMgOQANgMARAAQAIAAAHADQAHACAGAHIAAgKIAXAAIAABZIgXAAIAAgJQgHAGgGADQgHACgHAAQgRAAgNgNgAgQgSQgHAHAAALQAAAMAHAHQAHAIAJAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLABQgKAAgGAHg");
	this.shape_103.setTransform(169.975,1087.05);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#660099").s().p("AgOBAIAAhGIgIAAIAAgUIAIAAIABgVQAAgHAGgEQAGgFAIAAQAIAAAIADIAAASIgIgCQgEAAgCACQgBABAAAEIAAALIAOAAIAAAUIgOAAIAABGg");
	this.shape_104.setTransform(162.15,1085.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ah4ikIDxCkIjxClg");
	this.shape_105.setTransform(271.325,836.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAdAAQAuAAAhAhQAhAhAAAvQAAAvggAhQghAggvAAQgvAAggghgAgxgzQgVAVAAAfQAAAjAaAVQAUAQAYAAQAeAAAVgVQAUgVAAgfQAAgdgVgWQgUgVgeAAQgdAAgUAVg");
	this.shape_106.setTransform(452.4,836.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgUBsIAAjXIApAAIAADXg");
	this.shape_107.setTransform(435.6,836.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgxBsIAAjXIAoAAIAACwIA7AAIAAAng");
	this.shape_108.setTransform(425.7,836.375);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvggAhQghAgguAAQgwAAggghgAgygzQgUAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgVAVg");
	this.shape_109.setTransform(405.65,836.375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag1BsIAAjXIBrAAIAAAoIhBAAIAAAnIBBAAIAAAnIhBAAIAABhg");
	this.shape_110.setTransform(386.5,836.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgUBsIAAiuIgmAAIAAgpIB2AAIAAApIgoAAIAACug");
	this.shape_111.setTransform(372.4,836.375);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAYBsIgwhcIgDAAIAABcIgpAAIAAjXIArAAQAjAAAPAHQAQAGAJAPQAJAPAAAUQAAAVgKAOQgLAOgUAHIAzBggAgbgWIANAAQASAAAIgGQAHgFAAgMQAAgHgDgFQgEgFgGgCQgGgDgQAAIgLAAg");
	this.shape_112.setTransform(358.35,836.375);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvghAhQggAgguAAQgwAAggghgAgxgzQgVAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgUAVg");
	this.shape_113.setTransform(336.15,836.375);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ag/BsIAAjXIAsAAQAiAAAQAHQAPAGAJAPQAJAOAAAVQAAAWgLAPQgNAOgUAGQgMADgeAAIAABcgAgWgWIANAAQAPAAAFgDQAHgCADgFQADgFABgHQAAgNgKgFQgIgFgRAAIgMAAg");
	this.shape_114.setTransform(315.6,836.375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(102,0,153,0.376)").ss(1,1,1).p("AksiqILHAAQBJAAAzAsQA0AtAAA/IAAAlQAAA/g0AtQgzAshJAAIrHAAQhJAAg0gsQg0gtAAg/IAAglQAAg/A0gtQA0gsBJAAgAVfiqII2AAQA6AAApAsQApAtAAA/IAAAlQAAA/gpAtQgpAsg6AAIo2AAQg6AAgpgsQgpgtAAg/IAAglQAAg/ApgtQApgsA6AAgA9wiqILIAAQBJAAA0AsQA0AtAAA/IAAAlQAAA/g0AtQg0AshJAAIrIAAQhJAAgzgsQg0gtAAg/IAAglQAAg/A0gtQAzgsBJAAg");
	this.shape_115.setTransform(354.45,1085.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AmUDhQhTAAg7g7Qg6g6AAhTIAAgxQAAhTA6g7QA7g6BTAAIMpAAQBTAAA6A6QA7A7AABTIAAAxQAABTg7A6Qg6A7hTAAgAoSAUQAAA+AzAtQA0AsBIABILHAAQBKgBAzgsQAzgtABg+IAAgmQgBg/gzgtQgzgshKAAIrHAAILHAAQBKAAAzAsQAzAtABA/IAAAmQgBA+gzAtQgzAshKABIrHAAQhIgBg0gsQgzgtAAg+IAAgmQAAg/AzgtQA0gsBIAAQhIAAg0AsQgzAtAAA/IAAAmg");
	this.shape_116.setTransform(199.55,1085.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF9933").s().p("AyjFCQhbAAhBhKQhBhKAAhpIAAiJQAAhoBBhKQBBhLBbAAMAlGAAAQBcAABBBLQBBBKAABoIAACJQAABphBBKQhBBKhcAAg");
	this.shape_117.setTransform(360.025,838.025);

	this.btn_github = new lib.btn_github();
	this.btn_github.name = "btn_github";
	this.btn_github.setTransform(520.2,1085.4,1,1,0,0,0,42.3,17.1);
	new cjs.ButtonHelper(this.btn_github, 0, 1, 1);

	this.btn_instagram = new lib.btn_instagram();
	this.btn_instagram.name = "btn_instagram";
	this.btn_instagram.setTransform(359.9,1085.4,1,1,0,0,0,53.2,17.1);
	new cjs.ButtonHelper(this.btn_instagram, 0, 1, 1);

	this.btn_facebook = new lib.btn_facebook();
	this.btn_facebook.name = "btn_facebook";
	this.btn_facebook.setTransform(199.55,1085.4,1,1,0,0,0,60.5,22.5);
	new cjs.ButtonHelper(this.btn_facebook, 0, 1, 1);

	this.btn_portfolio = new lib.btn_portfolio();
	this.btn_portfolio.name = "btn_portfolio";
	this.btn_portfolio.setTransform(359.95,837.95,1,1,0,0,0,140.8,32.1);
	new cjs.ButtonHelper(this.btn_portfolio, 0, 1, 1);

	this.instance_5 = new lib.Tween31("synched",0);
	this.instance_5.setTransform(350.75,954.5);
	this.instance_5.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]}).to({state:[{t:this.btn_portfolio},{t:this.btn_facebook},{t:this.btn_instagram},{t:this.btn_github}]},19).to({state:[{t:this.instance_5}]},1).to({state:[]},9).wait(26));

	// background
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#660099").s().p("Eg4OAxiIAApEIgBAAMAAAhZ/MBwfAAAMAAABjDg");
	this.shape_118.setTransform(360,316.975);

	this.instance_6 = new lib.Tween33("synched",0);
	this.instance_6.setTransform(360,316.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118}]}).to({state:[{t:this.instance_6}]},19).to({state:[]},10).wait(26));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-220.5,636,1247.9,648);
// library properties:
lib.properties = {
	id: 'E7135C84D97AD840A006C3141BC17870',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E7135C84D97AD840A006C3141BC17870'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;