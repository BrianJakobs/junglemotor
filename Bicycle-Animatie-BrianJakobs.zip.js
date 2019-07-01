(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_Image = function(options) {
	this._element = new $.an.Image(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Scene_1_Layer_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.background = new lib.an_Image({'id': 'background', 'src':'images/background.png', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image'});

	this.background.setTransform(960,540,19.2,10.8,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_11, null, null);


(lib.Scene_1_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Six_by_Eight");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Idle
	this.idle = new lib.an_Video({'id': 'idle', 'src':'videos/motorcycle-idle.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.idle.setTransform(960,540,4.8,3.6,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.idle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Idle, null, null);


(lib.Scene_1_Function3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Function3
	this.iconThree = new lib.an_Image({'id': 'iconThree', 'src':'images/iconThree.gif', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image'});

	this.iconThree.setTransform(1371.2,950.75,2,1.1235,0,0,0,50.6,51.5);

	this.timeline.addTween(cjs.Tween.get(this.iconThree).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Function3, null, null);


(lib.Scene_1_Function2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Function2
	this.iconTwo = new lib.an_Image({'id': 'iconTwo', 'src':'images/iconTwo.gif', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image'});

	this.iconTwo.setTransform(960,951,2,1.1245,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.iconTwo).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Function2, null, null);


(lib.Scene_1_Function1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Function1
	this.iconOne = new lib.an_Image({'id': 'iconOne', 'src':'images/iconOne.gif', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image'});

	this.iconOne.setTransform(550.2,951,2,1.1245,0,0,0,50.1,50);

	this.timeline.addTween(cjs.Tween.get(this.iconOne).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Function1, null, null);


// stage content:
(lib.bikeanimationinteractive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.iconThree = this.Function3.iconThree;
		this.iconTwo = this.Function2.iconTwo;
		this.iconOne = this.Function1.iconOne;
		this.idle = this.Idle.idle;
		this.background = this.Layer_11.background;
		if(!this.iconOne_click_cbk) {
			function iconOne_click(evt) {
				console.log("iconOne clicked");
			$("#idle")[0].src = "videos/motorcycle-function1.mp4";
		    $("#idle")[0].muted = false;
			setTimeout(function(){ $("#idle")[0].src = "videos/motorcycle-idle.mp4"; }, 5550);
			}
			$("#dom_overlay_container").on("click", "#iconOne", iconOne_click.bind(this));
			this.iconOne_click_cbk = true;
		}
		
		if(!this.iconTwo_click_cbk) {
			function iconTwo_click(evt) {
				console.log("iconTwo clicked");
				$("#idle")[0].src = "videos/motorcycle-function2.mp4";
				$("#idle")[0].muted = false;
				setTimeout(function(){ $("#idle")[0].src = "videos/motorcycle-idle.mp4"; }, 8600);
			}
			$("#dom_overlay_container").on("click", "#iconTwo", iconTwo_click.bind(this));
			this.iconTwo_click_cbk = true;
		}
		
		if(!this.iconThree_click_cbk) {
			function iconThree_click(evt) {
				console.log("iconThree clicked");
				$("#idle")[0].src = "videos/motorcycle-function3.mp4";
				 $("#idle")[0].muted = false;
				setTimeout(function(){ $("#idle")[0].src = "videos/motorcycle-idle.mp4"; }, 4500);
			}
			$("#dom_overlay_container").on("click", "#iconThree", iconThree_click.bind(this));
			this.iconThree_click_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Function3_obj_
	this.Function3 = new lib.Scene_1_Function3();
	this.Function3.name = "Function3";
	this.Function3.parent = this;
	this.Function3.setTransform(1370,949.1,1,1,0,0,0,1370,949.1);
	this.Function3.depth = 0;
	this.Function3.isAttachedToCamera = 0
	this.Function3.isAttachedToMask = 0
	this.Function3.layerDepth = 0
	this.Function3.layerIndex = 0
	this.Function3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Function3).wait(1));

	// Function2_obj_
	this.Function2 = new lib.Scene_1_Function2();
	this.Function2.name = "Function2";
	this.Function2.parent = this;
	this.Function2.setTransform(960,951,1,1,0,0,0,960,951);
	this.Function2.depth = 0;
	this.Function2.isAttachedToCamera = 0
	this.Function2.isAttachedToMask = 0
	this.Function2.layerDepth = 0
	this.Function2.layerIndex = 1
	this.Function2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Function2).wait(1));

	// Function1_obj_
	this.Function1 = new lib.Scene_1_Function1();
	this.Function1.name = "Function1";
	this.Function1.parent = this;
	this.Function1.setTransform(550,951,1,1,0,0,0,550,951);
	this.Function1.depth = 0;
	this.Function1.isAttachedToCamera = 0
	this.Function1.isAttachedToMask = 0
	this.Function1.layerDepth = 0
	this.Function1.layerIndex = 2
	this.Function1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Function1).wait(1));

	// Idle_obj_
	this.Idle = new lib.Scene_1_Idle();
	this.Idle.name = "Idle";
	this.Idle.parent = this;
	this.Idle.setTransform(960,540,1,1,0,0,0,960,540);
	this.Idle.depth = 0;
	this.Idle.isAttachedToCamera = 0
	this.Idle.isAttachedToMask = 0
	this.Idle.layerDepth = 0
	this.Idle.layerIndex = 3
	this.Idle.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Idle).wait(1));

	// Layer_11_obj_
	this.Layer_11 = new lib.Scene_1_Layer_11();
	this.Layer_11.name = "Layer_11";
	this.Layer_11.parent = this;
	this.Layer_11.setTransform(960,540,1,1,0,0,0,960,540);
	this.Layer_11.depth = 0;
	this.Layer_11.isAttachedToCamera = 0
	this.Layer_11.isAttachedToMask = 0
	this.Layer_11.layerDepth = 0
	this.Layer_11.layerIndex = 4
	this.Layer_11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(950.4,534.6,979.1999999999999,550.8000000000001);
// library properties:
lib.properties = {
	id: '5D888059563C3C4491E84CA2CA7D4F6F',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Six_by_Eight.mp3?1554278975147", id:"Six_by_Eight"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1554278975147", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1554278975147", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1554278975147", id:"an.Video"},
		{src:"components/ui/src/image.js?1554278975147", id:"an.Image"}
	],
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
an.compositions['5D888059563C3C4491E84CA2CA7D4F6F'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;