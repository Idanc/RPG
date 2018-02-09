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


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		GameThis = this; 
		
		var CharacterCreator = new lib.CharacterCreator();
		CharacterCreator.x = 0;
		CharacterCreator.y = -495.25;
		CharacterCreator.name = "CharacterCreator";
		GameThis.addChild(CharacterCreator);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.statsPanelDungeon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		statsPanelDungeonThis = this;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.Speed = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.Speed.name = "Speed";
	this.Speed.textAlign = "right";
	this.Speed.lineHeight = 44;
	this.Speed.lineWidth = 152;
	this.Speed.parent = this;
	this.Speed.setTransform(-46.6,256.3,0.683,0.683);

	this.SpeedText = new cjs.Text("Speed:", "35px 'Tahoma'", "#E5E5D6");
	this.SpeedText.name = "SpeedText";
	this.SpeedText.lineHeight = 44;
	this.SpeedText.lineWidth = 439;
	this.SpeedText.parent = this;
	this.SpeedText.setTransform(-346.7,256.3,0.683,0.683);

	this.DropChancePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.DropChancePrecentage.name = "DropChancePrecentage";
	this.DropChancePrecentage.textAlign = "right";
	this.DropChancePrecentage.lineHeight = 32;
	this.DropChancePrecentage.lineWidth = 34;
	this.DropChancePrecentage.parent = this;
	this.DropChancePrecentage.setTransform(303.6,50.9,0.683,0.683);

	this.DropChance = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.DropChance.name = "DropChance";
	this.DropChance.textAlign = "right";
	this.DropChance.lineHeight = 44;
	this.DropChance.lineWidth = 152;
	this.DropChance.parent = this;
	this.DropChance.setTransform(281.9,45.9,0.683,0.683);

	this.DropChanceText = new cjs.Text("Drop Chance:", "35px 'Tahoma'", "#E5E5D6");
	this.DropChanceText.name = "DropChanceText";
	this.DropChanceText.lineHeight = 44;
	this.DropChanceText.lineWidth = 439;
	this.DropChanceText.parent = this;
	this.DropChanceText.setTransform(8.8,45.9,0.683,0.683);

	this.DodgePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.DodgePrecentage.name = "DodgePrecentage";
	this.DodgePrecentage.textAlign = "right";
	this.DodgePrecentage.lineHeight = 32;
	this.DodgePrecentage.lineWidth = 34;
	this.DodgePrecentage.parent = this;
	this.DodgePrecentage.setTransform(302.7,261.2,0.683,0.683);

	this.Dodge = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.Dodge.name = "Dodge";
	this.Dodge.textAlign = "right";
	this.Dodge.lineHeight = 44;
	this.Dodge.lineWidth = 152;
	this.Dodge.parent = this;
	this.Dodge.setTransform(281,256.3,0.683,0.683);

	this.DodgeText = new cjs.Text("Dodge:", "35px 'Tahoma'", "#E5E5D6");
	this.DodgeText.name = "DodgeText";
	this.DodgeText.lineHeight = 44;
	this.DodgeText.lineWidth = 439;
	this.DodgeText.parent = this;
	this.DodgeText.setTransform(8.8,256.3,0.683,0.683);

	this.DefenseChancePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.DefenseChancePrecentage.name = "DefenseChancePrecentage";
	this.DefenseChancePrecentage.textAlign = "right";
	this.DefenseChancePrecentage.lineHeight = 32;
	this.DefenseChancePrecentage.lineWidth = 34;
	this.DefenseChancePrecentage.parent = this;
	this.DefenseChancePrecentage.setTransform(303,214,0.683,0.683);

	this.DefenseChance = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.DefenseChance.name = "DefenseChance";
	this.DefenseChance.textAlign = "right";
	this.DefenseChance.lineHeight = 44;
	this.DefenseChance.lineWidth = 152;
	this.DefenseChance.parent = this;
	this.DefenseChance.setTransform(281.9,209,0.683,0.683);

	this.DefenseChanceText = new cjs.Text("Defense Chance:", "35px 'Tahoma'", "#E5E5D6");
	this.DefenseChanceText.name = "DefenseChanceText";
	this.DefenseChanceText.lineHeight = 44;
	this.DefenseChanceText.lineWidth = 439;
	this.DefenseChanceText.parent = this;
	this.DefenseChanceText.setTransform(8.8,209,0.683,0.683);

	this.PhysicalDefense = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDefense.name = "PhysicalDefense";
	this.PhysicalDefense.textAlign = "right";
	this.PhysicalDefense.lineHeight = 44;
	this.PhysicalDefense.lineWidth = 152;
	this.PhysicalDefense.parent = this;
	this.PhysicalDefense.setTransform(308.9,114.6,0.683,0.683);

	this.PhysicalDefenseText = new cjs.Text("Physical Defense:", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDefenseText.name = "PhysicalDefenseText";
	this.PhysicalDefenseText.lineHeight = 44;
	this.PhysicalDefenseText.lineWidth = 439;
	this.PhysicalDefenseText.parent = this;
	this.PhysicalDefenseText.setTransform(8.8,114.6,0.683,0.683);

	this.MagicResist = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.MagicResist.name = "MagicResist";
	this.MagicResist.textAlign = "right";
	this.MagicResist.lineHeight = 44;
	this.MagicResist.lineWidth = 152;
	this.MagicResist.parent = this;
	this.MagicResist.setTransform(308,161.8,0.683,0.683);

	this.MagicResistText = new cjs.Text("Magic Resist:", "35px 'Tahoma'", "#E5E5D6");
	this.MagicResistText.name = "MagicResistText";
	this.MagicResistText.lineHeight = 44;
	this.MagicResistText.lineWidth = 439;
	this.MagicResistText.parent = this;
	this.MagicResistText.setTransform(8.8,161.8,0.683,0.683);

	this.HealthRegenTimer = new cjs.Text("10", "35px 'Tahoma'", "#E5E5D6");
	this.HealthRegenTimer.name = "HealthRegenTimer";
	this.HealthRegenTimer.textAlign = "right";
	this.HealthRegenTimer.lineHeight = 44;
	this.HealthRegenTimer.lineWidth = 39;
	this.HealthRegenTimer.parent = this;
	this.HealthRegenTimer.setTransform(-707.5,169.3,0.683,0.683);

	this.HealthRegen = new cjs.Text("888", "35px 'Tahoma'", "#E5E5D6");
	this.HealthRegen.name = "HealthRegen";
	this.HealthRegen.textAlign = "right";
	this.HealthRegen.lineHeight = 44;
	this.HealthRegen.lineWidth = 64;
	this.HealthRegen.parent = this;
	this.HealthRegen.setTransform(-765.6,169.3,0.683,0.683);

	this.HealthRegenText = new cjs.Text("HP/10s:", "35px 'Tahoma'", "#E5E5D6");
	this.HealthRegenText.name = "HealthRegenText";
	this.HealthRegenText.lineHeight = 44;
	this.HealthRegenText.lineWidth = 123;
	this.HealthRegenText.parent = this;
	this.HealthRegenText.setTransform(-896.1,169.3,0.683,0.683);

	this.HitChancePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.HitChancePrecentage.name = "HitChancePrecentage";
	this.HitChancePrecentage.textAlign = "right";
	this.HitChancePrecentage.lineHeight = 32;
	this.HitChancePrecentage.lineWidth = 34;
	this.HitChancePrecentage.parent = this;
	this.HitChancePrecentage.setTransform(-53.7,214,0.683,0.683);

	this.HitChance = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.HitChance.name = "HitChance";
	this.HitChance.textAlign = "right";
	this.HitChance.lineHeight = 44;
	this.HitChance.lineWidth = 152;
	this.HitChance.parent = this;
	this.HitChance.setTransform(-74.5,209,0.683,0.683);

	this.HitChanceText = new cjs.Text("Hit Chance:", "35px 'Tahoma'", "#E5E5D6");
	this.HitChanceText.name = "HitChanceText";
	this.HitChanceText.lineHeight = 44;
	this.HitChanceText.lineWidth = 439;
	this.HitChanceText.parent = this;
	this.HitChanceText.setTransform(-346.7,209,0.683,0.683);

	this.MagicDamage = new cjs.Text("0", "35px 'Tahoma'", "#FFFFFF");
	this.MagicDamage.name = "MagicDamage";
	this.MagicDamage.textAlign = "right";
	this.MagicDamage.lineHeight = 44;
	this.MagicDamage.lineWidth = 152;
	this.MagicDamage.parent = this;
	this.MagicDamage.setTransform(-47.5,161.8,0.683,0.683);

	this.MagicDamageText = new cjs.Text("Magic Damage:", "35px 'Tahoma'", "#E5E5D6");
	this.MagicDamageText.name = "MagicDamageText";
	this.MagicDamageText.lineHeight = 44;
	this.MagicDamageText.lineWidth = 439;
	this.MagicDamageText.parent = this;
	this.MagicDamageText.setTransform(-346.7,161.8,0.683,0.683);

	this.PhysicalDamage = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDamage.name = "PhysicalDamage";
	this.PhysicalDamage.textAlign = "right";
	this.PhysicalDamage.lineHeight = 44;
	this.PhysicalDamage.lineWidth = 152;
	this.PhysicalDamage.parent = this;
	this.PhysicalDamage.setTransform(-46.6,114.6,0.683,0.683);

	this.PhysicalDamageText = new cjs.Text("Physical Damage:", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDamageText.name = "PhysicalDamageText";
	this.PhysicalDamageText.lineHeight = 44;
	this.PhysicalDamageText.lineWidth = 439;
	this.PhysicalDamageText.parent = this;
	this.PhysicalDamageText.setTransform(-346.7,114.6,0.683,0.683);

	this.StatsText = new cjs.Text("Stats", "60px 'Tahoma'", "#999999");
	this.StatsText.name = "StatsText";
	this.StatsText.textAlign = "center";
	this.StatsText.lineHeight = 74;
	this.StatsText.lineWidth = 162;
	this.StatsText.alpha = 0.64705882;
	this.StatsText.parent = this;
	this.StatsText.setTransform(-199.8,25.3,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StatsText},{t:this.PhysicalDamageText},{t:this.PhysicalDamage},{t:this.MagicDamageText},{t:this.MagicDamage},{t:this.HitChanceText},{t:this.HitChance},{t:this.HitChancePrecentage},{t:this.HealthRegenText},{t:this.HealthRegen},{t:this.HealthRegenTimer},{t:this.MagicResistText},{t:this.MagicResist},{t:this.PhysicalDefenseText},{t:this.PhysicalDefense},{t:this.DefenseChanceText},{t:this.DefenseChance},{t:this.DefenseChancePrecentage},{t:this.DodgeText},{t:this.Dodge},{t:this.DodgePrecentage},{t:this.DropChanceText},{t:this.DropChance},{t:this.DropChancePrecentage},{t:this.SpeedText},{t:this.Speed}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E23").s().p("AjDYAQkiAAjNjNQjNjNAAkiIAA6HQAAkiDNjNQDNjNEiAAMBZNAAAQEjAADMDNQDODNgBEiIAAaHQABEijODNQjMDNkjAAgEhdlAGZQhdABhBhCQhDhDAAhdQAAhdBDhBQBBhBBdgBISrAAQBdABBCBBQBCBBAABdQAABdhCBDQhCBChdgBg");
	this.shape.setTransform(-289.6,166.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.statsPanelDungeon_mc, new cjs.Rectangle(-911,13.1,1242.9,307.2), null);


(lib.SkillSlot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283238").s().p("AhUBUQgjgiAAgyQAAgxAjgjQAjgjAxAAQAyAAAiAjQAkAjAAAxQAAAygkAiQgiAkgyAAQgxAAgjgkg");
	this.shape.setTransform(90.5,90.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42545D").s().p("AljH6QiWAAAAiWIAArHQAAiWCWAAILHAAQCWAAAACWIAALHQAACWiWAAgAncl+QgGAWAAAbIAAKYQAACTCTAAIKdAAQASAAARgCQBwgQAAiBIAAqYQAAgbgFgWQgThShYgNQgRgDgSAAIqdAAQh3AAgWBigAlyF1IAAruILvAAIAALug");
	this.shape_1.setTransform(50.6,50.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283238").s().p("AlOHfQiTAAAAiTIAAqYQAAgbAGgWQAWhhB3AAIKdAAQASgBARADQBYANATBSQAFAWAAAbIAAKYQAACBhwAQQgRACgSAAgAlxF3ILvAAIAArvIrvAAg");
	this.shape_2.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SkillSlot_mc, new cjs.Rectangle(0,0,102.5,102.1), null);


(lib.RaiseLevel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCD00").s().p("AgmC7IAAiVIiVAAIAAhLICVAAIAAiVIBNAAIAACVICVAAIAABLIiVAAIAACVg");
	this.shape.setTransform(26.6,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBBB00").s().p("AgmC6IAAiUIiWAAIAAhLICWAAIAAiUIBNAAIAACUICVAAIAABLIiVAAIAACUg");
	this.shape_1.setTransform(27.4,43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,24.2,38.5,38.3);


(lib.currentHpBar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B64C3F").ss(0.1,1,1,3,true).p("EA8OgCQMh4bAAAIAAEhMB4bAAA");
	this.shape.setTransform(385.4,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64C3F").s().p("Eg8NACRIAAkhMB4aAAAIAAEhg");
	this.shape_1.setTransform(385.4,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.currentHpBar_mc, new cjs.Rectangle(-1,-1,772.7,31), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.statsPanel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Speed = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.Speed.name = "Speed";
	this.Speed.textAlign = "right";
	this.Speed.lineHeight = 44;
	this.Speed.lineWidth = 152;
	this.Speed.parent = this;
	this.Speed.setTransform(-26.3,507.7,0.683,0.683);

	this.SpeedText = new cjs.Text("Speed:", "35px 'Tahoma'", "#E5E5D6");
	this.SpeedText.name = "SpeedText";
	this.SpeedText.lineHeight = 44;
	this.SpeedText.lineWidth = 439;
	this.SpeedText.parent = this;
	this.SpeedText.setTransform(-326.4,507.7,0.683,0.683);

	this.DropChancePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.DropChancePrecentage.name = "DropChancePrecentage";
	this.DropChancePrecentage.textAlign = "right";
	this.DropChancePrecentage.lineHeight = 32;
	this.DropChancePrecentage.lineWidth = 34;
	this.DropChancePrecentage.parent = this;
	this.DropChancePrecentage.setTransform(-31.6,560.2,0.683,0.683);

	this.DropChance = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.DropChance.name = "DropChance";
	this.DropChance.textAlign = "right";
	this.DropChance.lineHeight = 44;
	this.DropChance.lineWidth = 152;
	this.DropChance.parent = this;
	this.DropChance.setTransform(-53.3,555.3,0.683,0.683);

	this.DropChanceText = new cjs.Text("Drop Chance:", "35px 'Tahoma'", "#E5E5D6");
	this.DropChanceText.name = "DropChanceText";
	this.DropChanceText.lineHeight = 44;
	this.DropChanceText.lineWidth = 439;
	this.DropChanceText.parent = this;
	this.DropChanceText.setTransform(-326.4,555.3,0.683,0.683);

	this.DodgePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.DodgePrecentage.name = "DodgePrecentage";
	this.DodgePrecentage.textAlign = "right";
	this.DodgePrecentage.lineHeight = 32;
	this.DodgePrecentage.lineWidth = 34;
	this.DodgePrecentage.parent = this;
	this.DodgePrecentage.setTransform(-32.5,465.4,0.683,0.683);

	this.Dodge = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.Dodge.name = "Dodge";
	this.Dodge.textAlign = "right";
	this.Dodge.lineHeight = 44;
	this.Dodge.lineWidth = 152;
	this.Dodge.parent = this;
	this.Dodge.setTransform(-54.2,460.5,0.683,0.683);

	this.DodgeText = new cjs.Text("Dodge:", "35px 'Tahoma'", "#E5E5D6");
	this.DodgeText.name = "DodgeText";
	this.DodgeText.lineHeight = 44;
	this.DodgeText.lineWidth = 439;
	this.DodgeText.parent = this;
	this.DodgeText.setTransform(-326.4,460.5,0.683,0.683);

	this.DefenseChancePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.DefenseChancePrecentage.name = "DefenseChancePrecentage";
	this.DefenseChancePrecentage.textAlign = "right";
	this.DefenseChancePrecentage.lineHeight = 32;
	this.DefenseChancePrecentage.lineWidth = 34;
	this.DefenseChancePrecentage.parent = this;
	this.DefenseChancePrecentage.setTransform(-32.2,418.2,0.683,0.683);

	this.DefenseChance = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.DefenseChance.name = "DefenseChance";
	this.DefenseChance.textAlign = "right";
	this.DefenseChance.lineHeight = 44;
	this.DefenseChance.lineWidth = 152;
	this.DefenseChance.parent = this;
	this.DefenseChance.setTransform(-53.3,413.2,0.683,0.683);

	this.DefenseChanceText = new cjs.Text("Defense Chance:", "35px 'Tahoma'", "#E5E5D6");
	this.DefenseChanceText.name = "DefenseChanceText";
	this.DefenseChanceText.lineHeight = 44;
	this.DefenseChanceText.lineWidth = 439;
	this.DefenseChanceText.parent = this;
	this.DefenseChanceText.setTransform(-326.4,413.2,0.683,0.683);

	this.PhysicalDefense = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDefense.name = "PhysicalDefense";
	this.PhysicalDefense.textAlign = "right";
	this.PhysicalDefense.lineHeight = 44;
	this.PhysicalDefense.lineWidth = 152;
	this.PhysicalDefense.parent = this;
	this.PhysicalDefense.setTransform(-26.3,366,0.683,0.683);

	this.PhysicalDefenseText = new cjs.Text("Physical Defense:", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDefenseText.name = "PhysicalDefenseText";
	this.PhysicalDefenseText.lineHeight = 44;
	this.PhysicalDefenseText.lineWidth = 439;
	this.PhysicalDefenseText.parent = this;
	this.PhysicalDefenseText.setTransform(-326.4,366,0.683,0.683);

	this.MagicResist = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.MagicResist.name = "MagicResist";
	this.MagicResist.textAlign = "right";
	this.MagicResist.lineHeight = 44;
	this.MagicResist.lineWidth = 152;
	this.MagicResist.parent = this;
	this.MagicResist.setTransform(-27.2,318.7,0.683,0.683);

	this.MagicResistText = new cjs.Text("Magic Resist:", "35px 'Tahoma'", "#E5E5D6");
	this.MagicResistText.name = "MagicResistText";
	this.MagicResistText.lineHeight = 44;
	this.MagicResistText.lineWidth = 439;
	this.MagicResistText.parent = this;
	this.MagicResistText.setTransform(-326.4,318.7,0.683,0.683);

	this.HealthRegenPrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.HealthRegenPrecentage.name = "HealthRegenPrecentage";
	this.HealthRegenPrecentage.textAlign = "right";
	this.HealthRegenPrecentage.lineHeight = 32;
	this.HealthRegenPrecentage.lineWidth = 34;
	this.HealthRegenPrecentage.parent = this;
	this.HealthRegenPrecentage.setTransform(-31.6,276.4,0.683,0.683);

	this.HealthRegen = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.HealthRegen.name = "HealthRegen";
	this.HealthRegen.textAlign = "right";
	this.HealthRegen.lineHeight = 44;
	this.HealthRegen.lineWidth = 152;
	this.HealthRegen.parent = this;
	this.HealthRegen.setTransform(-52.4,271.5,0.683,0.683);

	this.HealthRegenText = new cjs.Text("Health Regen:", "35px 'Tahoma'", "#E5E5D6");
	this.HealthRegenText.name = "HealthRegenText";
	this.HealthRegenText.lineHeight = 44;
	this.HealthRegenText.lineWidth = 441;
	this.HealthRegenText.parent = this;
	this.HealthRegenText.setTransform(-326.4,271.5,0.683,0.683);

	this.Health = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.Health.name = "Health";
	this.Health.textAlign = "right";
	this.Health.lineHeight = 44;
	this.Health.lineWidth = 152;
	this.Health.parent = this;
	this.Health.setTransform(-26.3,224.2,0.683,0.683);

	this.HealthText = new cjs.Text("Health:", "35px 'Tahoma'", "#E5E5D6");
	this.HealthText.name = "HealthText";
	this.HealthText.lineHeight = 44;
	this.HealthText.lineWidth = 439;
	this.HealthText.parent = this;
	this.HealthText.setTransform(-326.4,224.2,0.683,0.683);

	this.HitChancePrecentage = new cjs.Text("%", "25px 'Tahoma'", "#CCCCCC");
	this.HitChancePrecentage.name = "HitChancePrecentage";
	this.HitChancePrecentage.textAlign = "right";
	this.HitChancePrecentage.lineHeight = 32;
	this.HitChancePrecentage.lineWidth = 34;
	this.HitChancePrecentage.parent = this;
	this.HitChancePrecentage.setTransform(-33.4,181.9,0.683,0.683);

	this.HitChance = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.HitChance.name = "HitChance";
	this.HitChance.textAlign = "right";
	this.HitChance.lineHeight = 44;
	this.HitChance.lineWidth = 152;
	this.HitChance.parent = this;
	this.HitChance.setTransform(-54.2,177,0.683,0.683);

	this.HitChanceText = new cjs.Text("Hit Chance:", "35px 'Tahoma'", "#E5E5D6");
	this.HitChanceText.name = "HitChanceText";
	this.HitChanceText.lineHeight = 44;
	this.HitChanceText.lineWidth = 439;
	this.HitChanceText.parent = this;
	this.HitChanceText.setTransform(-326.4,177,0.683,0.683);

	this.MagicDamage = new cjs.Text("0", "35px 'Tahoma'", "#FFFFFF");
	this.MagicDamage.name = "MagicDamage";
	this.MagicDamage.textAlign = "right";
	this.MagicDamage.lineHeight = 44;
	this.MagicDamage.lineWidth = 152;
	this.MagicDamage.parent = this;
	this.MagicDamage.setTransform(-27.2,129.7,0.683,0.683);

	this.MagicDamageText = new cjs.Text("Magic Damage:", "35px 'Tahoma'", "#E5E5D6");
	this.MagicDamageText.name = "MagicDamageText";
	this.MagicDamageText.lineHeight = 44;
	this.MagicDamageText.lineWidth = 439;
	this.MagicDamageText.parent = this;
	this.MagicDamageText.setTransform(-326.4,129.7,0.683,0.683);

	this.PhysicalDamage = new cjs.Text("0", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDamage.name = "PhysicalDamage";
	this.PhysicalDamage.textAlign = "right";
	this.PhysicalDamage.lineHeight = 44;
	this.PhysicalDamage.lineWidth = 152;
	this.PhysicalDamage.parent = this;
	this.PhysicalDamage.setTransform(-26.3,82.5,0.683,0.683);

	this.PhysicalDamageText = new cjs.Text("Physical Damage:", "35px 'Tahoma'", "#E5E5D6");
	this.PhysicalDamageText.name = "PhysicalDamageText";
	this.PhysicalDamageText.lineHeight = 44;
	this.PhysicalDamageText.lineWidth = 439;
	this.PhysicalDamageText.parent = this;
	this.PhysicalDamageText.setTransform(-326.4,82.5,0.683,0.683);

	this.StatsText = new cjs.Text("Stats", "60px 'Tahoma'", "#999999");
	this.StatsText.name = "StatsText";
	this.StatsText.lineHeight = 74;
	this.StatsText.lineWidth = 162;
	this.StatsText.alpha = 0.64705882;
	this.StatsText.parent = this;
	this.StatsText.setTransform(-326.4,18.4,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StatsText},{t:this.PhysicalDamageText},{t:this.PhysicalDamage},{t:this.MagicDamageText},{t:this.MagicDamage},{t:this.HitChanceText},{t:this.HitChance},{t:this.HitChancePrecentage},{t:this.HealthText},{t:this.Health},{t:this.HealthRegenText},{t:this.HealthRegen},{t:this.HealthRegenPrecentage},{t:this.MagicResistText},{t:this.MagicResist},{t:this.PhysicalDefenseText},{t:this.PhysicalDefense},{t:this.DefenseChanceText},{t:this.DefenseChance},{t:this.DefenseChancePrecentage},{t:this.DodgeText},{t:this.Dodge},{t:this.DodgePrecentage},{t:this.DropChanceText},{t:this.DropChance},{t:this.DropChancePrecentage},{t:this.SpeedText},{t:this.Speed}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.statsPanel_mc, new cjs.Rectangle(-327.8,17,303.8,568.5), null);


(lib.plusStatSymbol_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBqIAAhUIhVAAIAAgqIBVAAIAAhVIArAAIAABVIBVAAIAAAqIhVAAIAABUg");
	this.shape.setTransform(15.3,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhyiVIDmAAQAiAAAAAjIAADlQAAAjgiAAIjmAAQgjAAAAgjIAAjlQAAgjAjAAg");
	this.shape_1.setTransform(15.6,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D06200").s().p("AhyCWQgjAAAAgjIAAjmQAAgiAjAAIDlAAQAjAAAAAiIAADmQAAAjgjAAg");
	this.shape_2.setTransform(15.6,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plusStatSymbol_mc, new cjs.Rectangle(-0.4,0,32.8,44), null);


(lib.minusStatSymbol_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKAVIAAgpICVAAIAAApg");
	this.shape.setTransform(12.2,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhyiVIDmAAQAiAAAAAjIAADlQAAAjgiAAIjmAAQgjAAAAgjIAAjlQAAgjAjAAg");
	this.shape_1.setTransform(12,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D06200").s().p("AhyCWQgjAAAAgjIAAjmQAAgiAjAAIDlAAQAjAAAAAiIAADmQAAAjgjAAg");
	this.shape_2.setTransform(12,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.minusStatSymbol_mc, new cjs.Rectangle(-6.3,2.2,37.2,39.8), null);


(lib.FinishCharacterCreator_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("A3wp4MAvhAAAQDIAAAADIIAANhQAADIjIAAMgvhAAAQjIAAAAjIIAAthQAAjIDIAAg");
	this.shape.setTransform(172.1,63.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666FF").s().p("A3wJ5QjIAAAAjIIAAthQAAjIDIAAMAvhAAAQDIAAAADIIAANhQAADIjIAAg");
	this.shape_1.setTransform(172.1,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,346.2,128.6);


(lib.character_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1,3,true).p("Ag7s6IB2AAQCFAABdBeQBeBdAACEIAAP3QAACEheBdQhdBeiFAAIh2AAQiEAAheheQhdhdAAiEIAAv3QAAiEBdhdQBeheCEAAg");
	this.shape.setTransform(37.9,82.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252D33").s().p("Ag7M7QiEAAheheQhdhdAAiEIAAv3QAAiEBdhdQBeheCEAAIB3AAQCDAABeBeQBdBdAACEIAAP3QAACEhdBdQheBeiDAAg");
	this.shape_1.setTransform(37.9,82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.character_mc, new cjs.Rectangle(-5,-5,85.7,175.4), null);


(lib.gamingGround_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// ************ Movement ************
		
		window.addEventListener("keydown", startMoving);
		window.addEventListener("keyup", stopMoving);
		
		var jumpInterval; // אינטרוואל הקפיצה
		var checkJumpWorking = false; // בדיקה שיש אינטרוואל של קפיצה
		var rightInterval; // אינטרוואל של תנועה ימינה
		var checkRightWorking = false; // בדיקה שיש אינטרוואל של תנועה ימינה
		var leftInterval; // אינטרוואל של תנועה שמאלה
		var checkLeftWorking = false; // בדיקה שיש אינטרוואל של תנועה שמאלה
		 
		var moveDistance = 2; // #speed // מהירות התזוזה
		
		function startMoving(e) 
		{ // פונקציית תחילת תנועה
		
			if(e.keyCode == 32) // מקש רווח
			{
				if(checkJumpWorking == false) // בדיקה שמותר לקפוץ
				{
					checkJumpWorking = true; // סימון שיש אינטרוואל קפיצה
					jumpInterval = setInterval(jump, 1); // יצירת אינטרוואל קפיצה
				}
			}
			else if((checkLeftWorking == true) && (checkRightWorking == true)) // עצירת הדמות אם גם מקש ימין וגם שמאל לחוצים // עצירת האינטרוואלים
			{
				clearInterval(rightInterval);
				clearInterval(leftInterval);
			}
			else if(e.keyCode == 37) // לחיצה על מקש שמאל
			{
				if(checkLeftWorking == false) // כל עוד אין אינטרוואל של הליכה שמאלה
				{ 
					checkLeftWorking = true; // מסמן שיש אינטרוואל של הליכה שמאלה
					leftInterval = setInterval(left, 1); // יצירת אינטרוואל של הליכה שמאלה
				}
			}
			else if(e.keyCode == 39) // לחיצה על מקש ימין
			{
				if(checkRightWorking == false) // כל עוד אין אינטרוואל של הליכה ימינה
				{
					checkRightWorking = true; // מסמן שיש אינטרוואל של הליכה ימינה
					rightInterval = setInterval(right, 1); // יצירת אינטרוול של הליכה ימינה
				}
			}
		}
		
		function jump() // תחילת אנימציית קפיצה
		{	
			
		}
		
		function left() // תחילת תנועה שמאלה
		{
			if(((globalFox.x > -460.1) && (globalFox.y > 0)) || ((globalFox.x > -440.1) && (globalFox.y < 0))) // עצירה בקצוות // side
			{
				if(checkIfInAirAndHowLong[0] == false) // אם הדמות לא בקפיצה
				{
					globalFox.fox2.fox3.gotoAndStop(1);
				}
				globalFox.x -= moveDistance;
			}
		}
		
		function right() // תחילת תנועה ימינה
		{
			if(((globalFox.x < 459.9) && (globalFox.y > 0)) || ((globalFox.x < 440) && (globalFox.y < 0))) // עצירה בקצוות // side 
			{
				if(checkIfInAirAndHowLong[0] == false) // אם הדמות לא בקפיצה
				{
					globalFox.fox2.fox3.gotoAndStop(2);
				}
				globalFox.x += moveDistance;
			}
		}
		
		function stopMoving(e)  // עצירת תנועה
		{
			if ((e.keyCode == 32) || (e.keyCode == 37) || (e.keyCode == 39))
			{
				if(checkIfInAirAndHowLong[0] == false) // אם הדמות לא בקפיצה
				{
					globalFox.fox2.fox3.gotoAndStop(0); // שינוי הדמות לעומדת
				}
			}
			
			if(e.keyCode == 32)
			{
				checkJumpWorking = false;
				clearInterval(jumpInterval); // הפסקת הקפיצה
			}
			else if(e.keyCode == 37)
			{
				checkLeftWorking = false;
				clearInterval(leftInterval); // הפסקת ההליכה לשמאל
			}
			else if(e.keyCode == 39)
			{
				checkRightWorking = false;
				clearInterval(rightInterval); // הפסקת ההליכה לימין
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.character = new lib.character_mc();
	this.character.name = "character";
	this.character.parent = this;
	this.character.setTransform(211.3,533.5,1,1,0,0,0,37.9,82.7);

	this.timeline.addTween(cjs.Tween.get(this.character).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252D33").s().p("EiBxAE7QkaAAjIjIQi1i0gRj6MEYzAAAQgRD6i1C0QjIDIkaAAg");
	this.shape.setTransform(898.8,664.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F3A41").s().p("EiMZAxcQgCgZAAgaMAAAhXaQAAkaDIjIQDIjIEaAAMEDjAAAQEaAADIDIQDIDIAAEaMAAABXaQAAAagCAZg");
	this.shape_1.setTransform(898.8,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F3A41").s().p("EiBxA2XQkaAAjIjIQjIjHAAkbMAAAhXZQAAkbDIjIQDIjIEaAAMEDjAAAQEaAADIDIQDIDIAAEbMAAABXZQAAEbjIDHQjIDIkaAAg");
	this.shape_2.setTransform(898.8,348);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.gamingGround_mc, new cjs.Rectangle(0,0,1797.6,695.9), null);


(lib.HealthBar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.Health = new cjs.Text("8888888888", "35px 'Tahoma'");
	this.Health.name = "Health";
	this.Health.textAlign = "center";
	this.Health.lineHeight = 44;
	this.Health.lineWidth = 1144;
	this.Health.parent = this;
	this.Health.setTransform(393.6,-2.2,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.Health).wait(1));

	// Layer_2
	this.currentHpBar = new lib.currentHpBar_mc();
	this.currentHpBar.name = "currentHpBar";
	this.currentHpBar.parent = this;
	this.currentHpBar.setTransform(7.4,13,1,1,0,0,0,0,14.5);

	this.timeline.addTween(cjs.Tween.get(this.currentHpBar).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADBABF").s().p("Eg8NACRIAAkhMB4bAAAIAAEhg");
	this.shape.setTransform(392.7,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#647F8C").s().p("EhAoACRIAAkhMCBRAAAIAAEhg");
	this.shape_1.setTransform(392.5,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#576E79").s().p("EhAoABQIAAhLIABAAQAGhGBAgMQANgCAQAAMB/lAAAIAIAAIAACfg");
	this.shape_2.setTransform(392.5,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44565F").s().p("EhAoADQIAAieMB3SAAAIAAkBIJ/AAIAAFBIgBAPQgJBJhMAGIgKAAg");
	this.shape_3.setTransform(392.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E4E56").s().p("Eg/uAFgQgwAAgZgXQgWgUgGgvIAAoQIABAAQAHhVBdAAMB/kAAAQBWADAHBSIAAIGIgBAUQgJBJhLAGIgPABg");
	this.shape_4.setTransform(396.8,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.HealthBar_mc, new cjs.Rectangle(-21.2,-17.6,835.9,70.4), null);


(lib.plusStat_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.plusStatSymbol = new lib.plusStatSymbol_mc();
	this.plusStatSymbol.name = "plusStatSymbol";
	this.plusStatSymbol.parent = this;
	this.plusStatSymbol.setTransform(16.1,21.9,1,1,0,0,0,16.1,21.9);

	this.timeline.addTween(cjs.Tween.get(this.plusStatSymbol).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,44);


(lib.minusStat_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.minusStatSymbol_btn = new lib.minusStatSymbol_mc();
	this.minusStatSymbol_btn.name = "minusStatSymbol_btn";
	this.minusStatSymbol_btn.parent = this;
	this.minusStatSymbol_btn.setTransform(8.7,21.9,1,1,0,0,0,8.7,21.9);

	this.timeline.addTween(cjs.Tween.get(this.minusStatSymbol_btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,2.2,37.2,39.8);


(lib.CharacterCreator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		characterCreatorThis = this;
		
		this.FinishCharacterCreator.addEventListener("click", FinishCreator);
		
		function FinishCreator()
		{	
			clearInterval(characterCreatorChanger);
			GameThis.removeChild(GameThis.getChildByName("CharacterCreator"));
			
			var GameDungeon = new lib.GameDungeon();
			GameDungeon.x = -960;
			GameDungeon.y = -540;
			GameDungeon.name = "GameDungeon";
			GameThis.addChild(GameDungeon);
			
		}
		
		
		attributePoints = 100;
		var maxAttributePoints = attributePoints;
		
		var attributeChars = ["s", "i", "x", "v", "d", "p", "l"];
		var attributeNames = ["Strength", "Intelligence", "Dexterity", "Vitality", "Defense", "Perception", "Luck"];
		
		var textBoxChars = ["t", "p", "m"];
		
		startingCreatorPage();
		function startingCreatorPage()
		{	
			player.Name = "Nameless"; 
			
			characterCreatorThis.StrengthText.name = "st";
			characterCreatorThis.StrengthPlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.StrengthPlus.name = "sp";
			characterCreatorThis.StrengthMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.StrengthMinus.name = "sm";
			
			characterCreatorThis.IntelligenceText.name = "it";
			characterCreatorThis.IntelligencePlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.IntelligencePlus.name = "ip";
			characterCreatorThis.IntelligenceMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.IntelligenceMinus.name = "im";
			
			characterCreatorThis.DexterityText.name = "xt";
			characterCreatorThis.DexterityPlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.DexterityPlus.name = "xp";
			characterCreatorThis.DexterityMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.DexterityMinus.name = "xm";
			
			characterCreatorThis.VitalityText.name = "vt";
			characterCreatorThis.VitalityPlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.VitalityPlus.name = "vp";
			characterCreatorThis.VitalityMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.VitalityMinus.name = "vm";
			
			characterCreatorThis.DefenseText.name = "dt";
			characterCreatorThis.DefensePlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.DefensePlus.name = "dp";
			characterCreatorThis.DefenseMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.DefenseMinus.name = "dm";
			 
			characterCreatorThis.PerceptionText.name = "pt";
			characterCreatorThis.PerceptionPlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.PerceptionPlus.name = "pp";
			characterCreatorThis.PerceptionMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.PerceptionMinus.name = "pm";
			
			characterCreatorThis.LuckText.name = "lt";
			characterCreatorThis.LuckPlus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.LuckPlus.name = "lp";
			characterCreatorThis.LuckMinus.addEventListener("click", pointAddAndRemove);
			characterCreatorThis.LuckMinus.name = "lm";
			
		}
		
		
		var characterCreatorChanger = setInterval(characterCreatorInterval, 1);
		function characterCreatorInterval()
		{
			PlusMinus();
			atrributeTextChange();
			NameChange();
			statsUpdate();
			fixPoints();
		}
		
		function atrributeTextChange()
		{
			characterCreatorThis.startingPoints.text = attributePoints;
			
			characterCreatorThis.StrengthText.text = player.Strength;
			characterCreatorThis.IntelligenceText.text = player.Intelligence;
			characterCreatorThis.DexterityText.text = player.Dexterity;
			characterCreatorThis.VitalityText.text = player.Vitality;
			characterCreatorThis.DefenseText.text = player.Defense;
			characterCreatorThis.PerceptionText.text = player.Perception;
			characterCreatorThis.LuckText.text = player.Luck;
		}
		
		function NameChange()
		{
			if(document.getElementById("characterName").value != "Enter Name")
			{
				player.Name =  document.getElementById("characterName").value;
			}
			characterCreatorThis.nameText.text = player.Name;
		}
		
		function PlusMinus()
		{
			//console.log (attributePoints);
			if(attributePoints == 0)
			{
				characterCreatorThis.startingPoints.alpha = 0.4;
				for(var j = 0; j < attributeChars.length; j++)
				{
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[1]).mouseEnabled = false;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[1]).alpha = 0.15;
				}
			}
			else if(attributePoints == maxAttributePoints)
			{
				characterCreatorThis.startingPoints.alpha = 1;
				for(var j = 0; j < attributeChars.length; j++)
				{
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).mouseEnabled = false;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).alpha = 0.15;
				}
			}
			else
			{
				characterCreatorThis.startingPoints.alpha = 1;
				for(var j = 0; j < attributeChars.length; j++)
				{
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[1]).mouseEnabled = true;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[1]).alpha = 1;
				}
			}
			
			for(var j = 0; j < attributeChars.length; j++)
			{
				if(parseInt(characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[0]).text) > 0)
				{
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).mouseEnabled = true;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).alpha = 1;
				}
				else
				{
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).mouseEnabled = false;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).alpha = 0.15;
				}
			}
		}
		
		function pointAddAndRemove(e)
		{	
			var clickedName = e.currentTarget.name;
			
			if(attributePoints >= 0)
			{
				for(var j = 0; j < attributeChars.length; j++) // on all attributes
				{
					if(clickedName.slice(0, 1) == attributeChars[j]) // check which attribute clicked
					{
						if(clickedName.slice(1, 2) == textBoxChars[1]) // check if its plus
						{
							attributePoints--;	
							changeAttribute(attributeChars[j], 1);
						}
						else
						{
							attributePoints++;
							changeAttribute(attributeChars[j], -1);
						}
					}
				}
			}
			else
			{
				attributePoints = 0;
			}
		}
		
		function changeAttribute(attributeChar, operator)
		{
			switch(attributeChar)
			{
				case "s":
					player.Strength += operator;
					break;
				case "i":
					player.Intelligence += operator;
					break;
				case "x":
					player.Dexterity += operator;
					break;
				case "v":
					player.Vitality += operator;
					break;
				case "d":
					player.Defense += operator;
					break;
				case "p":
					player.Perception += operator;
					break;
				case "l":
					player.Luck += operator;
					break;
			}
		}
		
		
		var minAlpha = 0.1;
		function statsUpdate()
		{	
			stats.Physical[0] = ( player.Strength*statAmountPerPoint*0.75 );
			stats.Physical[2] = stats.Physical[1] * Math.round(( 1.5 * Math.sqrt(stats.Physical[0] * 0.0078 * 0.8)) * 100) / 100;
			characterCreatorThis.statsPanel.PhysicalDamage.text = stats.Physical[2];
			if(stats.Physical[2] == 0)
			{
				characterCreatorThis.statsPanel.PhysicalDamage.alpha = minAlpha;
				characterCreatorThis.statsPanel.PhysicalDamageText.alpha = minAlpha;
				
			}
			else
			{
				characterCreatorThis.statsPanel.PhysicalDamage.alpha = 1;
				characterCreatorThis.statsPanel.PhysicalDamageText.alpha = 1;
			}
			
			stats.Magic[0] = ( player.Intelligence*statAmountPerPoint*0.82 );
			stats.Magic[2] = stats.Magic[1] * Math.round(( 1.5 * Math.sqrt(stats.Magic[0] * 0.0078 * 0.8)) * 100) / 100;
			characterCreatorThis.statsPanel.MagicDamage.text = stats.Magic[2];
			if(stats.Magic[2] == 0)
			{
				characterCreatorThis.statsPanel.MagicDamage.alpha = minAlpha;
				characterCreatorThis.statsPanel.MagicDamageText.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.MagicDamage.alpha = 1;
				characterCreatorThis.statsPanel.MagicDamageText.alpha = 1;
			}
			
			stats.Health[0] = ( player.Strength*statAmountPerPoint*0.15 ) + ( player.Intelligence*statAmountPerPoint*0.05 ) + ( player.Vitality*statAmountPerPoint*0.70 ) + ( player.Defense*statAmountPerPoint*0.07 );
			stats.Health[2] =  Math.round(stats.Health[1] + 100 + stats.Health[0] * 0.5 + 2 * Math.sqrt(stats.Health[0] * 1 * 3));
			characterCreatorThis.statsPanel.Health.text = stats.Health[2];
			if(stats.Health[2] == 100)
			{
				characterCreatorThis.statsPanel.Health.alpha = minAlpha;
				characterCreatorThis.statsPanel.HealthText.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.Health.alpha = 1;
				characterCreatorThis.statsPanel.HealthText.alpha = 1;
			}
			
			stats.HealthRegen[0] = ( player.Vitality*statAmountPerPoint*0.20 );
			stats.HealthRegen[2] = Math.round((stats.HealthRegen[1] + stats.HealthRegen[1] * 1.5 * ( 0.01 * Math.pow(stats.HealthRegen[0]/100, 2) * 100) )* 100) / 100;
			characterCreatorThis.statsPanel.HealthRegen.text = stats.HealthRegen[2];
			if(stats.HealthRegen[2] == 1)
			{
				characterCreatorThis.statsPanel.HealthRegen.alpha = minAlpha;
				characterCreatorThis.statsPanel.HealthRegenText.alpha = minAlpha;
				characterCreatorThis.statsPanel.HealthRegenPrecentage.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.HealthRegen.alpha = 1;
				characterCreatorThis.statsPanel.HealthRegenText.alpha = 1;
				characterCreatorThis.statsPanel.HealthRegenPrecentage.alpha = 1;
			}
			
			stats.PhysicalDefense[0] = ( player.Strength*statAmountPerPoint*0.06 ) + ( player.Intelligence*statAmountPerPoint*0.04 ) + ( player.Vitality*statAmountPerPoint*0.05 ) +
				( player.Defense*statAmountPerPoint*0.43 );
			stats.PhysicalDefense[2] = Math.round(stats.PhysicalDefense[1] + stats.PhysicalDefense[0] * 0.085 * 10) / 10;
			characterCreatorThis.statsPanel.PhysicalDefense.text = stats.PhysicalDefense[2];
			if(stats.PhysicalDefense[2] == 0)
			{
				characterCreatorThis.statsPanel.PhysicalDefense.alpha = minAlpha;
				characterCreatorThis.statsPanel.PhysicalDefenseText.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.PhysicalDefense.alpha = 1;
				characterCreatorThis.statsPanel.PhysicalDefenseText.alpha = 1;
			}
			
			stats.MagicResist[0] = ( player.Strength*statAmountPerPoint*0.04 ) + ( player.Intelligence*statAmountPerPoint*0.04 ) + ( player.Vitality*statAmountPerPoint*0.05 ) +
			( player.Defense*statAmountPerPoint*0.43 );
			stats.MagicResist[2] = Math.round(stats.MagicResist[1] + stats.MagicResist[0] * 0.085 * 10) / 10;
			characterCreatorThis.statsPanel.MagicResist.text = stats.MagicResist[2];
			if(stats.MagicResist[2] == 0)
			{
				characterCreatorThis.statsPanel.MagicResist.alpha = minAlpha;
				characterCreatorThis.statsPanel.MagicResistText.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.MagicResist.alpha = 1;
				characterCreatorThis.statsPanel.MagicResistText.alpha = 1;
			}
			
			stats.Dodge[0] = ( player.Dexterity*statAmountPerPoint*0.20 ) + ( player.Perception*statAmountPerPoint*0.60 ) + ( player.Luck*statAmountPerPoint*0.15 );
			stats.Dodge[2] = Math.round(( stats.Dodge[1] + 3 * Math.sqrt(stats.Dodge[0] * 0.01)) * 100) / 100;
			characterCreatorThis.statsPanel.Dodge.text = stats.Dodge[2];
			if(stats.Dodge[2] == 0)
			{
				characterCreatorThis.statsPanel.Dodge.alpha = minAlpha;
				characterCreatorThis.statsPanel.DodgeText.alpha = minAlpha;
				characterCreatorThis.statsPanel.DodgePrecentage.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.Dodge.alpha = 1;
				characterCreatorThis.statsPanel.DodgeText.alpha = 1;
				characterCreatorThis.statsPanel.DodgePrecentage.alpha = 1;
			}
			
			stats.Speed[0] = ( player.Dexterity*statAmountPerPoint*0.20 ) + ( player.Perception*statAmountPerPoint*0.10 ) + ( player.Luck*statAmountPerPoint*0.05 );
			stats.Speed[2] = Math.round((stats.Speed[1] + stats.Speed[1] * 0.15 * Math.sqrt(stats.Speed[0] * 0.01)) * 100) / 100;
			characterCreatorThis.statsPanel.Speed.text = stats.Speed[2];
			if(stats.Speed[2] == 1)
			{
				characterCreatorThis.statsPanel.Speed.alpha = minAlpha;
				characterCreatorThis.statsPanel.SpeedText.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.Speed.alpha = 1;
				characterCreatorThis.statsPanel.SpeedText.alpha = 1;
			}
			
			stats.DefenseChance[0] = 1 + (( player.Dexterity*statAmountPerPoint*0.25 ) + ( player.Defense*statAmountPerPoint*0.07 ) + ( player.Perception*statAmountPerPoint*0.10 ) + 
			( player.Luck*statAmountPerPoint*0.15 ))/100;
			var DefenseChanceHelp = 95000 / (1 + ((player.Strength/1.5) + player.Intelligence + player.Vitality)*300);
			stats.DefenseChance[2] = Math.round(stats.DefenseChance[1] + ( 2 * ((Math.pow(DefenseChanceHelp, stats.DefenseChance[0]) / (1 + Math.pow(DefenseChanceHelp, stats.DefenseChance[0]))) * 95 - 47.5 )) * 10) / 10;
			characterCreatorThis.statsPanel.DefenseChance.text = stats.DefenseChance[2];
			if(stats.DefenseChance[2] == 95)
			{
				characterCreatorThis.statsPanel.DefenseChance.alpha = minAlpha + 0.3;
				characterCreatorThis.statsPanel.DefenseChanceText.alpha = minAlpha + 0.3;
				characterCreatorThis.statsPanel.DefenseChancePrecentage.alpha = minAlpha + 0.3;
			}
			else
			{
				characterCreatorThis.statsPanel.DefenseChance.alpha = 1;
				characterCreatorThis.statsPanel.DefenseChanceText.alpha = 1;
				characterCreatorThis.statsPanel.DefenseChancePrecentage.alpha = 1;
			}
			
			stats.HitChance[0] = 1 + (( player.Intelligence*statAmountPerPoint*0.05 ) + ( player.Dexterity*statAmountPerPoint*0.35 ) + ( player.Perception*statAmountPerPoint*0.10 ) +
			( player.Luck*statAmountPerPoint*0.15 ))/200;
			var HitChanceHelp = 95000 / (1 + (player.Strength + (player.Intelligence/1.2))*300);
			stats.HitChance[2] = Math.round(stats.HitChance[1] + ( 2 * ((Math.pow(HitChanceHelp, stats.HitChance[0]) / (1 + Math.pow(HitChanceHelp, stats.HitChance[0]))) * 95 - 47.5 )) * 10) / 10;
			characterCreatorThis.statsPanel.HitChance.text = stats.HitChance[2];
			if(stats.HitChance[2] == 95)
			{
				characterCreatorThis.statsPanel.HitChance.alpha = minAlpha + 0.3;
				characterCreatorThis.statsPanel.HitChanceText.alpha = minAlpha + 0.3;
				characterCreatorThis.statsPanel.HitChancePrecentage.alpha = minAlpha + 0.3;
			}
			else
			{
				characterCreatorThis.statsPanel.HitChance.alpha = 1;
				characterCreatorThis.statsPanel.HitChanceText.alpha = 1;
				characterCreatorThis.statsPanel.HitChancePrecentage.alpha = 1;
			}
			
			stats.DropChance[0] = ( player.Luck*statAmountPerPoint*0.50 ) + ( player.Perception*statAmountPerPoint*0.10 );
			stats.DropChance[2] = stats.DropChance[1] + Math.round(( 0.18 * Math.sqrt(stats.DropChance[0] * 0.01 * 500)) * 100) / 100;
			characterCreatorThis.statsPanel.DropChance.text = "+"+stats.DropChance[2];
			if(stats.DropChance[2] == 0)
			{
				characterCreatorThis.statsPanel.DropChance.alpha = minAlpha;
				characterCreatorThis.statsPanel.DropChanceText.alpha = minAlpha;
				characterCreatorThis.statsPanel.DropChancePrecentage.alpha = minAlpha;
			}
			else
			{
				characterCreatorThis.statsPanel.DropChance.alpha = 1;
				characterCreatorThis.statsPanel.DropChanceText.alpha = 1;
				characterCreatorThis.statsPanel.DropChancePrecentage.alpha = 1;
			}
			
		}
		
		function fixPoints()
		{
			var sumAttributes = player.Strength + player.Intelligence + player.Dexterity + player.Vitality + player.Defense + player.Perception + player.Luck;
			var ifMinus = false;
			if((player.Strength < 0) || (player.Intelligence < 0) || (player.Dexterity < 0) || (player.Vitality < 0) || (player.Defense < 0) || (player.Perception < 0) || (player.Luck < 0))
			{
				ifMinus = true;
			}
			if((attributePoints > maxAttributePoints) || (attributePoints < 0) || (sumAttributes > maxAttributePoints) || ifMinus)
			{
				player.Strength = 0;
				player.Intelligence = 0;
				player.Dexterity = 0;
				player.Vitality = 0;
				player.Defense = 0;
				player.Perception = 0;
				player.Luck = 0;
				
				attributePoints = maxAttributePoints;
				
				for(var j = 0; j < attributeChars.length; j++)
				{
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[1]).mouseEnabled = true;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[1]).alpha = 1;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).mouseEnabled = true;
					characterCreatorThis.getChildByName(attributeChars[j] + textBoxChars[2]).alpha = 1;
				}
				alert("Auto Clicks... , It wont work :)");
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.FinishCharacterCreator = new lib.FinishCharacterCreator_btn();
	this.FinishCharacterCreator.name = "FinishCharacterCreator";
	this.FinishCharacterCreator.parent = this;
	this.FinishCharacterCreator.setTransform(621.1,845.3,1,1,0,0,0,172.1,63.3);
	new cjs.ButtonHelper(this.FinishCharacterCreator, 0, 1, 1);

	this.statsPanel = new lib.statsPanel_mc();
	this.statsPanel.name = "statsPanel";
	this.statsPanel.parent = this;
	this.statsPanel.setTransform(292,280.8,1,1,0,0,0,128.8,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.statsPanel},{t:this.FinishCharacterCreator}]}).wait(1));

	// Layer_4
	this.nameText = new cjs.Text("", "bold 50px 'Tahoma'", "#FFFFFF");
	this.nameText.name = "nameText";
	this.nameText.textAlign = "center";
	this.nameText.lineHeight = 62;
	this.nameText.lineWidth = 100;
	this.nameText.parent = this;
	this.nameText.setTransform(-6.5,174.9);

	this.characterName = new lib.an_TextInput({'id': 'characterName', 'value':'Enter Name', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.characterName.setTransform(0,113.4,3.292,3.292,0,0,0,50,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqCJIAAhgIBVAAIAABggAgqgoIAAhgIBVAAIAABgg");
	this.shape.setTransform(171.5,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBrQgpgkAAhFQgBhCAngoQAngoBEAAQA/AAAgAhQAgAjgBA/IAAAdIi6AAQACAUAGANQAIAMAKAIQAMAHANAEQAPADARAAQAPAAAOgDQAPgEAMgFQAKgEAJgGIAPgKIAJAAIAABHIgTAIQgJAEgPADIgdAGQgOACgWAAQhNAAgpgmgAgihLQgOAPgCAaIBnAAQgBgbgMgOQgMgPgZAAQgXAAgOAPg");
	this.shape_1.setTransform(147.7,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB5CNIAAiJIgBghQAAgOgFgJQgDgJgIgEQgHgEgOAAQgKAAgJAEQgKAFgMAHIAADCIhUAAIAAiJIgBghQgBgOgEgJQgDgJgIgEQgHgEgOAAQgLAAgKAFQgKAFgKAGIAADCIhVAAIAAkRIBVAAIAAAeQAWgSASgKQATgKAXAAQAZAAASAMQATAMAKAYQAZgXAWgNQAWgMAWAAQATAAAPAGQAQAGAKAMQALAOAGASQAGASAAAdIAACyg");
	this.shape_2.setTransform(109,37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhnB4QgYgYAAglQAAgfAMgTQAMgRAXgLQAYgMAfgEQAfgEAmgDIAAgBQAAgXgRgJQgRgIggAAQgPAAgVAFQgTAGgUAIIgIAAIAAhCQAOgEAcgFQAcgFAdAAQBGAAAgAYQAgAXAAAxIAAC5IhUAAIAAgdIgQANQgIAGgLAGQgLAGgLADQgKADgUAAQgkAAgYgZgAAIAMQgMACgNAFQgMAEgFAIQgHAHAAAOQAAATAKAHQALAHAUAAQAKAAAMgFQAMgFAKgJIAAg5IgkADg");
	this.shape_3.setTransform(69.2,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABEC2IiLj9IAAD9IhUAAIAAlrIBwAAIBzDPIAAjPIBUAAIAAFrg");
	this.shape_4.setTransform(35.9,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AheBrQgqgkAAhFQAAhCAngoQAngoBEAAQA/AAAgAhQAgAjgBA/IAAAdIi5AAQABAUAGANQAIAMAKAIQAMAHANAEQAPADARAAQAPAAAOgDQAPgEAMgFQALgEAIgGIAPgKIAJAAIAABHIgTAIQgJAEgPADIgdAGQgOACgWAAQhMAAgqgmgAgihLQgOAPgCAaIBmAAQAAgbgMgOQgMgPgYAAQgYAAgOAPg");
	this.shape_5.setTransform(-12.9,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhICKQgbgHgSgIIAAhIIAIAAIANAKQAIAFAOAGQAMAGAPAEQAPAEARAAQASAAANgGQAPgFAAgNQAAgJgHgFQgHgEgRgFIgZgFQgOgDgMgEQgggKgQgSQgRgUAAggQAAgTAJgQQAIgQARgNQAQgMAYgHQAYgIAdABQAeAAAXAFQAZAGARAIIAABFIgIAAIgNgJQgKgGgJgEQgLgFgNgDQgOgDgNAAQgSAAgNAGQgNAGABALQAAAJAGAGQAGAFAVAFIAZAFQAOADANAEQAeAKAPARQAPATAAAfQAAASgJASQgJASgRALQgRAOgXAGQgZAIgggBQgeAAgbgGg");
	this.shape_6.setTransform(-40.3,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhnBrQgmgnAAhEQAAhEAmgmQAlgmBCAAQBDgBAmAnQAlAnAABDQAABEglAnQglAnhEgBQhCABglgngAgUhQQgJAEgIAKQgHAJgFARQgEAQAAAYQAAAZAEARQAEAOAHAKQAHAKAKAEQAKAFAMgBQAKABALgFQAKgEAHgKQAHgKAEgOQAEgPAAgbQAAgXgEgQQgEgQgHgKQgIgLgJgEQgKgDgMAAQgKgBgKAEg");
	this.shape_7.setTransform(-69,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhnBrQgmgnAAhEQAAhEAmgmQAlgmBCAAQBDgBAmAnQAlAnAABDQAABEglAnQglAnhEgBQhCABglgngAgUhQQgJAEgIAKQgHAJgFARQgEAQAAAYQAAAZAEARQAEAOAHAKQAHAKAKAEQAKAFAMgBQAKABALgFQAKgEAHgKQAHgKAEgOQAEgPAAgbQAAgXgEgQQgEgQgHgKQgIgLgJgEQgKgDgMAAQgKgBgKAEg");
	this.shape_8.setTransform(-99.8,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqC+IAAiIIAAghQgCgRgEgGQgEgJgIgFQgJgDgOAAQgJAAgLADQgKAEgNAJIAADBIhWAAIAAl7IBWAAIAACIQAVgSAUgKQATgKAYABQAqgBAWAbQAXAaAAAxIAACzg");
	this.shape_9.setTransform(-131.1,33);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhmCMQgwgyABhaQgBhVAwgzQAxg0BQAAQAXAAARADQARACAQAEIAbAKIAXALIAABXIgJAAIgRgOQgKgIgMgIQgNgIgPgFQgPgGgRAAQgUAAgQAHQgQAGgOAPQgOAOgJAYQgJAXAAAgQAAAiAJAXQAKAXAPAOQANAOARAGQASAGAQAAQATAAAQgGQARgGAKgIQANgHAJgIIAQgOIAIAAIAABWIgWAKQgNAGgOAEIghAIQgPADgaAAQhQAAgxgxg");
	this.shape_10.setTransform(-163.9,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.characterName},{t:this.nameText}]}).wait(1));

	// Layer_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhACUQgagIgRgJIAAg4IADAAIAPALQAJAGAOAHQANAGAPAEQAPAFARAAQALAAAOgDQANgDAHgEQAJgGAFgHQAEgHAAgOQAAgSgKgJQgKgJgZgGIgYgGIgcgGQgjgKgPgUQgQgVAAgdQAAgoAfgaQAegZAyAAQAZAAAZAGQAZAGARAKIAAA1IgDAAQgTgPgYgJQgXgJgYAAQgYAAgRALQgRAKAAAVQAAATAKAJQAKAJAWAGIAYAGIAdAHQAhAIARASQARATAAAhQAAAUgIARQgHARgPAMQgQAOgUAHQgUAGgeAAQgeAAgagIg");
	this.shape_11.setTransform(-545.9,278.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhYB1QgogpAAhKQAAhHAngrQAlgsA9AAQAcAAAVAIQAWAIAPARQAQASAJAYQAJAZAAAkIAAAaIjOAAQAAA0AbAbQAaAcAtAAQAQAAAQgEQAQgEANgFIAWgMIAQgLIADAAIAAA3IgVAIIgYAIIgbAHQgLACgTAAQhGAAgngogAgahsQgPAGgLALQgMAMgFAOQgGAPgCASICdAAQAAgUgFgOQgEgPgIgKQgJgLgOgGQgNgGgVAAQgSAAgOAGg");
	this.shape_12.setTransform(-572.7,278.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeCrQgXgXAAgzIAAikIgiAAIAAgpIAiAAIAAhWIAyAAIAABWIBbAAIAAApIhbAAIAACNIABAjQABAMAEALQAEAJALAFQAKAFARAAQAMAAAMgEIAQgGIADAAIAAAtQgOAEgOACQgPADgMAAQgoAAgXgYg");
	this.shape_13.setTransform(-596.1,274.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7CTQgRgHgNgOQgNgOgHgVQgHgVAAgeIAAjAIAyAAIAACoQAAAYACAQQACAPAGAMQAGAMAKAFQALAFAUAAQARAAAVgKQAVgLARgPIAAjdIAyAAIAAEpIgyAAIAAghQgXAUgVALQgVAKgYAAQgUAAgRgGg");
	this.shape_14.setTransform(-620.8,278.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoDOQgRgGgRgLIgDAOIgvAAIAAmeIAyAAIAACUQATgRAWgLQAWgLAbAAQAyAAAeAoQAdApAABGQAABJgkAtQgjAtg2AAQgXAAgRgGgAgkgtQgVAKgRAPIAACpQATAKAPAEQAPADARAAQAmAAAVgbQAWgbAAg7QAAg1gQgbQgRgbgjAAQgUAAgVAJg");
	this.shape_15.setTransform(-650,272.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYDIIAAkpIAxAAIAAEpgAgciTIAAg0IA5AAIAAA0g");
	this.shape_16.setTransform(-672.4,273.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhOCVIAAkpIAyAAIAAAsQAcgYATgKQAUgKAUAAIALABIAJABIAAA0IgDAAQgGgCgFAAIgQgBQgUAAgUAJQgTAJgSARIAADTg");
	this.shape_17.setTransform(-686.8,278.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeCrQgXgXAAgzIAAikIgiAAIAAgpIAiAAIAAhWIAyAAIAABWIBbAAIAAApIhbAAIAACNIABAjQABAMAEALQAEAJALAFQAKAFARAAQAMAAAMgEIAQgGIADAAIAAAtQgOAEgOACQgPADgMAAQgoAAgXgYg");
	this.shape_18.setTransform(-707.3,274.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeCrQgXgXAAgzIAAikIgiAAIAAgpIAiAAIAAhWIAyAAIAABWIBbAAIAAApIhbAAIAACNIABAjQABAMAEALQAEAJALAFQAKAFARAAQAMAAAMgEIAQgGIADAAIAAAtQgOAEgOACQgPADgMAAQgoAAgXgYg");
	this.shape_19.setTransform(-725.5,274.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABvDHIgkhvIiXAAIgkBvIg1AAICGmNIBAAAICGGNgAg+ArIB6AAIg9i7g");
	this.shape_20.setTransform(-751.2,273.4);

	this.VitalityMinus = new lib.minusStat_btn();
	this.VitalityMinus.name = "VitalityMinus";
	this.VitalityMinus.parent = this;
	this.VitalityMinus.setTransform(-294.8,549.3,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.VitalityMinus, 0, 1, 1);

	this.VitalityPlus = new lib.plusStat_btn();
	this.VitalityPlus.name = "VitalityPlus";
	this.VitalityPlus.parent = this;
	this.VitalityPlus.setTransform(-326.1,549.3,1,1,0,0,0,16.1,21.9);
	new cjs.ButtonHelper(this.VitalityPlus, 0, 1, 1);

	this.DefenseMinus = new lib.minusStat_btn();
	this.DefenseMinus.name = "DefenseMinus";
	this.DefenseMinus.parent = this;
	this.DefenseMinus.setTransform(-294.8,642.6,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.DefenseMinus, 0, 1, 1);

	this.DefensePlus = new lib.plusStat_btn();
	this.DefensePlus.name = "DefensePlus";
	this.DefensePlus.parent = this;
	this.DefensePlus.setTransform(-326.1,642.6,1,1,0,0,0,16.1,21.9);
	new cjs.ButtonHelper(this.DefensePlus, 0, 1, 1);

	this.PerceptionMinus = new lib.minusStat_btn();
	this.PerceptionMinus.name = "PerceptionMinus";
	this.PerceptionMinus.parent = this;
	this.PerceptionMinus.setTransform(-294.8,829.1,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.PerceptionMinus, 0, 1, 1);

	this.PerceptionPlus = new lib.plusStat_btn();
	this.PerceptionPlus.name = "PerceptionPlus";
	this.PerceptionPlus.parent = this;
	this.PerceptionPlus.setTransform(-326.1,829.1,1,1,0,0,0,16.1,21.9);
	new cjs.ButtonHelper(this.PerceptionPlus, 0, 1, 1);

	this.LuckMinus = new lib.minusStat_btn();
	this.LuckMinus.name = "LuckMinus";
	this.LuckMinus.parent = this;
	this.LuckMinus.setTransform(-294.8,922.2,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.LuckMinus, 0, 1, 1);

	this.LuckPlus = new lib.plusStat_btn();
	this.LuckPlus.name = "LuckPlus";
	this.LuckPlus.parent = this;
	this.LuckPlus.setTransform(-326.1,922.3,1,1,0,0,0,16.1,21.9);
	new cjs.ButtonHelper(this.LuckPlus, 0, 1, 1);

	this.DexterityMinus = new lib.minusStat_btn();
	this.DexterityMinus.name = "DexterityMinus";
	this.DexterityMinus.parent = this;
	this.DexterityMinus.setTransform(-294.8,735.8,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.DexterityMinus, 0, 1, 1);

	this.DexterityPlus = new lib.plusStat_btn();
	this.DexterityPlus.name = "DexterityPlus";
	this.DexterityPlus.parent = this;
	this.DexterityPlus.setTransform(-326.1,735.8,1,1,0,0,0,16.1,21.9);
	new cjs.ButtonHelper(this.DexterityPlus, 0, 1, 1);

	this.IntelligenceMinus = new lib.minusStat_btn();
	this.IntelligenceMinus.name = "IntelligenceMinus";
	this.IntelligenceMinus.parent = this;
	this.IntelligenceMinus.setTransform(-294.8,455.9,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.IntelligenceMinus, 0, 1, 1);

	this.IntelligencePlus = new lib.plusStat_btn();
	this.IntelligencePlus.name = "IntelligencePlus";
	this.IntelligencePlus.parent = this;
	this.IntelligencePlus.setTransform(-326.1,456.1,1,1,0,0,0,16.1,21.9);
	new cjs.ButtonHelper(this.IntelligencePlus, 0, 1, 1);

	this.StrengthMinus = new lib.minusStat_btn();
	this.StrengthMinus.name = "StrengthMinus";
	this.StrengthMinus.parent = this;
	this.StrengthMinus.setTransform(-294.8,362.7,1,1,0,0,0,8.7,21.9);
	new cjs.ButtonHelper(this.StrengthMinus, 0, 1, 1);

	this.StrengthPlus = new lib.plusStat_btn();
	this.StrengthPlus.name = "StrengthPlus";
	this.StrengthPlus.parent = this;
	this.StrengthPlus.setTransform(-342.2,340.9);
	new cjs.ButtonHelper(this.StrengthPlus, 0, 1, 1);

	this.LuckText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.LuckText.name = "LuckText";
	this.LuckText.textAlign = "center";
	this.LuckText.lineHeight = 62;
	this.LuckText.lineWidth = 56;
	this.LuckText.parent = this;
	this.LuckText.setTransform(-406.5,901.8,0.683,0.683);

	this.PerceptionText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.PerceptionText.name = "PerceptionText";
	this.PerceptionText.textAlign = "center";
	this.PerceptionText.lineHeight = 62;
	this.PerceptionText.lineWidth = 56;
	this.PerceptionText.parent = this;
	this.PerceptionText.setTransform(-406.5,808.5,0.683,0.683);

	this.DefenseText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.DefenseText.name = "DefenseText";
	this.DefenseText.textAlign = "center";
	this.DefenseText.lineHeight = 62;
	this.DefenseText.lineWidth = 56;
	this.DefenseText.parent = this;
	this.DefenseText.setTransform(-406.5,622,0.683,0.683);

	this.VitalityText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.VitalityText.name = "VitalityText";
	this.VitalityText.textAlign = "center";
	this.VitalityText.lineHeight = 62;
	this.VitalityText.lineWidth = 56;
	this.VitalityText.parent = this;
	this.VitalityText.setTransform(-406.5,528.8,0.683,0.683);

	this.DexterityText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.DexterityText.name = "DexterityText";
	this.DexterityText.textAlign = "center";
	this.DexterityText.lineHeight = 62;
	this.DexterityText.lineWidth = 56;
	this.DexterityText.parent = this;
	this.DexterityText.setTransform(-406.5,715.3,0.683,0.683);

	this.IntelligenceText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.IntelligenceText.name = "IntelligenceText";
	this.IntelligenceText.textAlign = "center";
	this.IntelligenceText.lineHeight = 62;
	this.IntelligenceText.lineWidth = 56;
	this.IntelligenceText.parent = this;
	this.IntelligenceText.setTransform(-406.5,437,0.683,0.683);

	this.StrengthText = new cjs.Text("", "50px 'Tahoma'", "#FFFFFF");
	this.StrengthText.name = "StrengthText";
	this.StrengthText.textAlign = "center";
	this.StrengthText.lineHeight = 62;
	this.StrengthText.lineWidth = 56;
	this.StrengthText.parent = this;
	this.StrengthText.setTransform(-406.5,342.3,0.683,0.683);

	this.startingPoints = new cjs.Text("100", "bold 40px 'Tahoma'", "#FFFFFF");
	this.startingPoints.name = "startingPoints";
	this.startingPoints.lineHeight = 50;
	this.startingPoints.lineWidth = 169;
	this.startingPoints.parent = this;
	this.startingPoints.setTransform(-319.1,273.8,0.683,0.683);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgPBLIAAgnIAfAAIAAAngAgPgkIAAgmIAfAAIAAAmg");
	this.shape_21.setTransform(-329,292.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AgfBKQgNgEgJgEIAAgcIACAAIAHAFIAMAHIAOAEQAHADAJAAIALgBQAHgCAEgCQAEgDACgEQACgDAAgHQAAgJgEgEQgFgFgNgDIgLgDIgPgEQgRgFgHgIQgIgLAAgOQAAgVAPgNQAPgMAYAAQANAAAMADQANADAJAFIAAAbIgCAAQgJgIgMgEQgMgFgMAAQgLAAgJAGQgJAEAAALQAAAKAGAEQAFAFALADIALACIAPADQAQAFAJAIQAIAKAAARQAAAJgEAJQgEAIgHAHQgIAGgKAEQgKADgOAAQgPAAgNgEg");
	this.shape_22.setTransform(-339.8,292.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AgPBWQgMgMAAgZIAAhSIgQAAIAAgVIAQAAIAAgrIAaAAIAAArIAtAAIAAAVIgtAAIAABGIAAARQAAAHACAFQADAFAEACQAFADAKAAQAFgBAHgCIAIgDIABAAIAAAXIgPAEIgNAAQgTABgMgMg");
	this.shape_23.setTransform(-350.5,290.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AAhBNIAAhVIAAgTQgCgJgCgEQgDgHgGgCQgFgDgKAAQgIAAgKAGQgKAEgKAIIAABvIgZAAIAAiVIAZAAIAAARQAMgKALgGQAKgEAMAAQAWAAAMAOQANAOAAAcIAABgg");
	this.shape_24.setTransform(-362.8,292.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AgMBkIAAiUIAZAAIAACUgAgNhJIAAgaIAbAAIAAAag");
	this.shape_25.setTransform(-373.6,289.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgwA6QgSgVAAglQAAgkATgVQASgUAdAAQAeAAASAUQATAVAAAkQAAAmgTAUQgSAVgegBQgeAAgSgUgAgdgqQgLAOAAAcQAAAcALAOQAKAPATAAQATAAALgOQALgOAAgdQAAgcgLgOQgKgOgUAAQgTAAgKAOg");
	this.shape_26.setTransform(-384.1,292.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("Ag+BjIAAjFIAyAAQARAAAMADQANACAJAHQALAIAHALQAGAMAAAQQAAANgFAMQgEAMgJAHQgKAKgOAFQgOAFgUAAIgWAAIAABKgAgjADIASAAQAQAAAJgDQAKgCAGgGQAGgGADgHQACgHAAgKQAAgKgDgIQgEgHgHgFQgGgEgIgCQgIgCgMAAIgWAAg");
	this.shape_27.setTransform(-398.3,289.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5E5D6").s().p("AgdBeIAAhCIA7AAIAABCgAgdgbIAAhCIA7AAIAABCg");
	this.shape_28.setTransform(-557.6,833.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5E5D6").s().p("AAdBgIAAhdIgBgVQgBgMgCgFQgDgGgGgDQgGgDgJAAQgHAAgHADQgHADgJAFIAACEIg6AAIAAi6IA6AAIAAAVQAPgNANgGQANgHARAAQAcAAAPASQAQASAAAiIAAB5g");
	this.shape_29.setTransform(-574.7,833);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E5E5D6").s().p("AhGBJQgagbAAguQAAguAagaQAZgbAtAAQAuAAAaAbQAZAaAAAuQAAAugZAbQgaAaguAAQgtAAgZgagAgNg3QgGADgGAHQgFAGgDAMQgDALAAAQQAAASADAKQADAKAEAHQAFAGAHADQAHAEAIAAQAHAAAHgEQAHgCAFgHQAFgHACgJQADgLAAgSQAAgQgDgLQgCgLgFgHQgFgGgHgDQgHgDgIAAQgHAAgGACg");
	this.shape_30.setTransform(-596.2,833.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5E5D6").s().p("AgcCCIAAi7IA5AAIAAC7gAgehTIAAguIA9AAIAAAug");
	this.shape_31.setTransform(-611.9,829.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgXAAIAAgpIAXAAIAAg1IA5AAIAAA1IA5AAIAAApIg5AAIAABCIAAARQAAAHADAGQACAGAHADQAFAEAMAAIAMgCQAIgCACgCIAGAAIAAApIgVAEIgaABQgjAAgQgOg");
	this.shape_32.setTransform(-624.1,830.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5E5D6").s().p("AhbCDIAAkAIA6AAIAAAUQANgLAOgGQAMgIASABQAgAAASAaQASAZAAAtQAAArgXAcQgXAcghAAQgNAAgLgEQgKgCgMgIIAABPgAgRhSQgIADgIAFIAABdIALADIANABQAUAAALgOQAKgNAAgcQAAgbgIgNQgJgMgRAAQgIAAgHACg");
	this.shape_33.setTransform(-641.4,836.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E5E5D6").s().p("AhABJQgcgZAAgvQAAgsAagcQAbgbAuAAQArAAAWAXQAVAXAAAsIAAATIh/AAQABANAFAKQAFAIAHAFQAIAGAJACQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAvIgNAGIgQAEIgUAFQgKABgPAAQg0AAgcgagAgXgzQgKALgBARIBGAAQgBgTgIgJQgIgKgRAAQgQAAgJAKg");
	this.shape_34.setTransform(-662.9,833.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5E5D6").s().p("AgTBdQgTgGgOgMQgOgMgIgTQgIgSAAgZQAAgaAIgTQAJgTAOgMQAOgMATgFQASgGAVAAQAPAAAQAEQAPADAQAIIAAAyIgHAAIgJgHIgLgHQgGgEgIgCQgIgDgKAAQgXAAgLAQQgMAQAAAZQAAAcANAOQAMAOAWAAQALAAAIgDQAIgCAGgEIAKgHIAIgHIAHAAIAAAyIgLAFIgOAFIgQAEIgUABQgWAAgTgGg");
	this.shape_35.setTransform(-681.9,833.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5E5D6").s().p("Ag+BeIAAi7IA6AAIAAAbIALgJQAHgFAFgEQAHgEAIgCQAJgDAHAAIAHAAIAGAAIAAA4IgFAAQgDgBgHgBIgOgBQgJAAgKADIgTAGIAAB9g");
	this.shape_36.setTransform(-697.4,833.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5E5D6").s().p("AhABJQgcgZAAgvQAAgsAagcQAbgbAuAAQArAAAWAXQAVAXAAAsIAAATIh/AAQABANAFAKQAFAIAHAFQAIAGAJACQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAvIgNAGIgQAEIgUAFQgKABgPAAQg0AAgcgagAgXgzQgKALgBARIBGAAQgBgTgIgJQgIgKgRAAQgQAAgJAKg");
	this.shape_37.setTransform(-716,833.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E5E5D6").s().p("AhfB8IAAj3IBgAAQAVAAAQAEQAQAEAMAIQAOAKAIAPQAIAQAAAVQAAASgGAPQgFAPgLALIgOAMQgHAFgJAEQgKAEgKACQgLACgNAAIggAAIAABRgAgggCIAEAAIARgBIAMgBIALgDQAGgCADgDQAGgHACgGQADgHAAgLQAAgLgFgHQgFgIgHgDQgJgEgHAAIgWgBIgJAAg");
	this.shape_38.setTransform(-736.5,830.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E5E5D6").s().p("AgdBeIAAhCIA7AAIAABCgAgdgbIAAhCIA7AAIAABCg");
	this.shape_39.setTransform(-661,926.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E5E5D6").s().p("AAYCCIgyhSIgJAMIAABGIg6AAIAAkDIA6AAIAACRIA3hJIBFAAIhCBQIBHBrg");
	this.shape_40.setTransform(-676.2,922.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E5E5D6").s().p("AgTBdQgTgGgOgMQgOgMgIgTQgIgSAAgZQAAgaAIgTQAJgTAOgMQAOgMATgFQASgGAVAAQAPAAAQAEQAPADAQAIIAAAyIgHAAIgJgHIgLgHQgGgEgIgCQgIgDgKAAQgXAAgLAQQgMAQAAAZQAAAcANAOQAMAOAWAAQALAAAIgDQAIgCAGgEIAKgHIAIgHIAHAAIAAAyIgLAFIgOAFIgQAEIgUABQgWAAgTgGg");
	this.shape_41.setTransform(-696.7,926.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E5E5D6").s().p("AhHBPQgQgSAAgjIAAh5IA7AAIAABdIABAXQAAAJADAGQADAGAFADQAGADAKAAQAFAAAJgDQAIgDAHgFIAAiEIA7AAIAAC6Ig7AAIAAgUQgPAMgNAHQgLAGgSAAQgcAAgPgRg");
	this.shape_42.setTransform(-716.8,926.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E5E5D6").s().p("AhSB8IAAj3IA+AAIAADIIBnAAIAAAvg");
	this.shape_43.setTransform(-736.4,923.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E5E5D6").s().p("AgcBeIAAhCIA5AAIAABCgAgcgbIAAhCIA5AAIAABCg");
	this.shape_44.setTransform(-601.3,646.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAAsIAAAUIh/AAQABANAFAIQAFAJAHAFQAIAFAJADQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAwIgNAFIgQAEIgUAEQgKACgPAAQg0AAgcgZgAgXgyQgKAKgBARIBGAAQgBgSgIgKQgIgJgRAAQgQgBgJALg");
	this.shape_45.setTransform(-617.6,646.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E5E5D6").s().p("AgxBeQgSgEgMgGIAAgxIAEAAIAKAHIAPAIIASAGQAKADAMAAQAMAAAJgEQAKgEAAgIQAAgHgFgDQgEgDgMgDIgQgEIgSgEQgWgHgLgMQgMgOAAgWQAAgMAGgLQAGgMALgIQALgJARgFQAQgFAUAAQATAAARAEQARAEALAGIAAAvIgFAAIgJgGIgNgHIgQgGQgKgCgJAAQgMAAgIAFQgJAEAAAHQAAAGAEAEQAEAEAOADIARAEIATAFQAUAGALAMQAKAMAAAVQAAANgGAMQgGAMgMAIQgMAJgQAFQgQAFgWAAQgVAAgSgFg");
	this.shape_46.setTransform(-636.4,646.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E5E5D6").s().p("AAdBgIAAhdIgBgVQgBgMgCgFQgDgGgGgDQgGgDgJAAQgHAAgHADQgHADgJAFIAACEIg6AAIAAi6IA6AAIAAAVQAPgNANgGQANgHARAAQAcAAAPASQAQASAAAiIAAB5g");
	this.shape_47.setTransform(-656.2,646.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAAsIAAAUIh/AAQABANAFAIQAFAJAHAFQAIAFAJADQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAwIgNAFIgQAEIgUAEQgKACgPAAQg0AAgcgZgAgXgyQgKAKgBARIBGAAQgBgSgIgKQgIgJgRAAQgQgBgJALg");
	this.shape_48.setTransform(-677.4,646.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E5E5D6").s().p("AgtCDIAAiSIgXAAIAAgpIAXAAIAAgFQAAgiASgSQASgQAkAAIAXABIATACIAAAqIgEAAIgKgDIgOgBQgSAAgGAHQgHAGAAASIAAABIAvAAIAAApIgtAAIAACSg");
	this.shape_49.setTransform(-693.3,643.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAAsIAAAUIh/AAQABANAFAIQAFAJAHAFQAIAFAJADQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAwIgNAFIgQAEIgUAEQgKACgPAAQg0AAgcgZgAgXgyQgKAKgBARIBGAAQgBgSgIgKQgIgJgRAAQgQgBgJALg");
	this.shape_50.setTransform(-710.7,646.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E5E5D6").s().p("AhuB8IAAj3IBNAAQAbAAAWADQAWAEAUAMQAZAQAOAbQAOAaAAAjQAAAjgPAcQgPAbgYAPQgTAMgWAEQgWADgaAAgAgvBOIABAAIAkgBQANgBANgIQAPgKAIgRQAIgRAAgYQAAgYgJgRQgIgSgSgJQgMgHgNgBIghgBIgBAAg");
	this.shape_51.setTransform(-733.1,643.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E5E5D6").s().p("AgcBeIAAhCIA5AAIAABCgAgcgbIAAhCIA5AAIAABCg");
	this.shape_52.setTransform(-615.9,553.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E5E5D6").s().p("Ag5CAIAchJIhFi2IA+AAIAmB2IAlh2IA8AAIhfD/g");
	this.shape_53.setTransform(-632,557);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgXAAIAAgpIAXAAIAAg1IA5AAIAAA1IA4AAIAAApIg4AAIAABCIAAARQABAHACAGQADAGAFADQAGAEALAAIANgCQAHgCAEgCIAEAAIAAApIgUAEIgaABQgjAAgQgOg");
	this.shape_54.setTransform(-648.8,551);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E5E5D6").s().p("AgcCCIAAi7IA5AAIAAC7gAgehTIAAguIA9AAIAAAug");
	this.shape_55.setTransform(-661.1,549.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E5E5D6").s().p("AgcCCIAAkDIA5AAIAAEDg");
	this.shape_56.setTransform(-671.5,549.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E5E5D6").s().p("AhGBSQgQgRAAgZQgBgVAJgNQAIgLAPgIQARgIAWgDQAVgDAZgBIAAgBQAAgQgLgGQgMgGgWAAQgKAAgOAEQgOAEgNAGIgFAAIAAguQAJgCATgDQAUgEATAAQAvAAAXAQQAWAQgBAhIAAB/Ig5AAIAAgUIgLAJQgFAEgIAEIgOAGQgHACgOAAQgZAAgQgRgAAFAJQgHABgKADQgHACgEAGQgFAFAAAJQAAANAHAFQAIAFANAAQAHAAAIgDQAIgEAHgGIAAgnIgZADg");
	this.shape_57.setTransform(-687.5,553.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgWAAIAAgpIAWAAIAAg1IA5AAIAAA1IA5AAIAAApIg5AAIAABCIABARQAAAHACAGQADAGAGADQAFAEAMAAIAMgCQAHgCADgCIAGAAIAAApIgVAEIgaABQgiAAgRgOg");
	this.shape_58.setTransform(-704.1,551);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E5E5D6").s().p("AgcCCIAAi7IA5AAIAAC7gAgehTIAAguIA9AAIAAAug");
	this.shape_59.setTransform(-716.4,549.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E5E5D6").s().p("AggB8IhVj3IBBAAIA1CnIA2inIA/AAIhVD3g");
	this.shape_60.setTransform(-733.1,550.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E5E5D6").s().p("AgcBeIAAhCIA5AAIAABCgAgcgbIAAhCIA5AAIAABCg");
	this.shape_61.setTransform(-579.7,740);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E5E5D6").s().p("Ag5CAIAchJIhFi2IA+AAIAmB2IAlh2IA8AAIhfD/g");
	this.shape_62.setTransform(-595.8,743.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgWAAIAAgpIAWAAIAAg1IA5AAIAAA1IA5AAIAAApIg5AAIAABCIABARQAAAHACAGQACAGAHADQAFAEAMAAIAMgCQAHgCADgCIAGAAIAAApIgVAEIgaABQgiAAgRgOg");
	this.shape_63.setTransform(-612.6,737.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E5E5D6").s().p("AgcCCIAAi7IA5AAIAAC7gAgehTIAAguIA9AAIAAAug");
	this.shape_64.setTransform(-625,736.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E5E5D6").s().p("Ag+BeIAAi7IA6AAIAAAbIALgJQAHgFAFgEQAHgEAIgCQAJgDAHAAIAHAAIAGAAIAAA4IgFAAQgDgBgHgBIgOgBQgJABgKACIgTAGIAAB9g");
	this.shape_65.setTransform(-636.5,740);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAAsIAAATIh/AAQABAOAFAIQAFAJAHAFQAIAGAJACQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAvIgNAGIgQAEIgUAFQgKABgPAAQg0AAgcgZgAgXgzQgKALgBARIBGAAQgBgSgIgKQgIgJgRAAQgQgBgJAKg");
	this.shape_66.setTransform(-655.1,740);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgWAAIAAgpIAWAAIAAg1IA5AAIAAA1IA4AAIAAApIg4AAIAABCIABARQgBAHADAGQADAGAFADQAGAEALAAIANgCQAHgCAEgCIAEAAIAAApIgUAEIgaABQgiAAgRgOg");
	this.shape_67.setTransform(-672.3,737.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E5E5D6").s().p("AAkBeIgkg2IgkA2IhDAAIBFheIhEhdIBFAAIAiA1IAjg1IBDAAIhEBdIBFBeg");
	this.shape_68.setTransform(-689.8,740);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAAsIAAATIh/AAQABAOAFAIQAFAJAHAFQAIAGAJACQAKACAMAAQAKAAAKgCQAKgDAIgEIANgGIAKgGIAGAAIAAAvIgNAGIgQAEIgUAFQgKABgPAAQg0AAgcgZgAgXgzQgKALgBARIBGAAQgBgSgIgKQgIgJgRAAQgQgBgJAKg");
	this.shape_69.setTransform(-710.2,740);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E5E5D6").s().p("AhuB8IAAj3IBNAAQAbAAAVADQAXAEAUAMQAZAQAOAbQAOAaAAAjQAAAjgPAcQgPAbgXAPQgUAMgXAEQgVADgaAAgAgwBOIABAAIAkgBQANgBANgIQAQgKAIgRQAIgRAAgYQAAgYgIgRQgJgSgRgJQgNgHgNgBIgigBIgBAAg");
	this.shape_70.setTransform(-732.6,737);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E5E5D6").s().p("AgcBeIAAhCIA5AAIAABCgAgcgbIAAhCIA5AAIAABCg");
	this.shape_71.setTransform(-535.1,460.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAArIAAAVIh/AAQABAMAFAJQAFAJAHAFQAIAGAJABQAKADAMAAQAKAAAKgDQAKgCAIgDIANgHIAKgHIAGAAIAAAxIgNAFIgQAFIgUADQgKACgPAAQg0AAgcgZgAgXgyQgKAJgBATIBGAAQgBgUgIgJQgIgKgRABQgQAAgJAKg");
	this.shape_72.setTransform(-551.4,460.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E5E5D6").s().p("AgTBdQgTgGgOgMQgOgMgIgTQgIgSAAgZQAAgaAIgTQAJgTAOgMQAOgMATgFQASgGAVAAQAPAAAQAEQAPADAQAIIAAAyIgHAAIgJgHIgLgHQgGgEgIgCQgIgDgKAAQgXAAgLAQQgMAQAAAZQAAAcANAOQAMAOAWAAQALAAAIgDQAIgCAGgEIAKgHIAIgHIAHAAIAAAyIgLAFIgOAFIgQAEIgUABQgWAAgTgGg");
	this.shape_73.setTransform(-570.4,460.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E5E5D6").s().p("AAdBgIAAhdIgBgVQgBgMgCgFQgDgGgGgDQgGgDgJAAQgHAAgHADQgHADgJAFIAACEIg6AAIAAi6IA6AAIAAAVQAPgNANgGQANgHARAAQAcAAAPASQAQASAAAiIAAB5g");
	this.shape_74.setTransform(-590.4,460);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAArIAAAVIh/AAQABAMAFAJQAFAJAHAFQAIAGAJABQAKADAMAAQAKAAAKgDQAKgCAIgDIANgHIAKgHIAGAAIAAAxIgNAFIgQAFIgUADQgKACgPAAQg0AAgcgZgAgXgyQgKAJgBATIBGAAQgBgUgIgJQgIgKgRABQgQAAgJAKg");
	this.shape_75.setTransform(-611.6,460.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E5E5D6").s().p("AgqCBIgdgFIAAgvIAHAAIAKAEIAMADIAOADIAOABQAOAAAKgDQAJgDAGgFQAFgGACgJQACgIAAgLIAAgEQgKAJgNAFQgMAGgOAAQgkAAgUgYQgUgYAAgvQAAgXAGgRQAGgRALgNQALgMAOgGQAPgHAQAAQANAAALAEQAMAEAJAGIACgJIA5AAIAAClQAAAagIASQgHATgNAKQgNAKgSAFQgTAFgVAAQgSAAgRgDgAgUhJQgLANAAAZQAAAMACAIQABAJAEAGQAFAGAGADQAHADAKAAQAHAAAIgDQAIgCAHgFIAAhUIgLgEIgNgBQgUAAgKAOg");
	this.shape_76.setTransform(-633.1,463.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E5E5D6").s().p("AgcCCIAAi7IA5AAIAAC7gAgehTIAAguIA9AAIAAAug");
	this.shape_77.setTransform(-648.4,456.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E5E5D6").s().p("AgcCCIAAkDIA5AAIAAEDg");
	this.shape_78.setTransform(-658.7,456.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E5E5D6").s().p("AgcCCIAAkDIA5AAIAAEDg");
	this.shape_79.setTransform(-669,456.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E5E5D6").s().p("AhABKQgcgaAAguQAAguAagbQAbgbAuAAQArAAAWAXQAVAXAAArIAAAVIh/AAQABAMAFAJQAFAJAHAFQAIAGAJABQAKADAMAAQAKAAAKgDQAKgCAIgDIANgHIAKgHIAGAAIAAAxIgNAFIgQAFIgUADQgKACgPAAQg0AAgcgZgAgXgyQgKAJgBATIBGAAQgBgUgIgJQgIgKgRABQgQAAgJAKg");
	this.shape_80.setTransform(-684.3,460.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgXAAIAAgpIAXAAIAAg1IA5AAIAAA1IA4AAIAAApIg4AAIAABCIAAARQABAHACAGQADAGAFADQAGAEALAAIANgCQAHgCAEgCIAEAAIAAApIgUAEIgaABQgjAAgQgOg");
	this.shape_81.setTransform(-701.4,457.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E5E5D6").s().p("AAdBgIAAhdIgBgVQgBgMgCgFQgDgGgGgDQgGgDgJAAQgHAAgHADQgHADgJAFIAACEIg6AAIAAi6IA6AAIAAAVQAPgNANgGQANgHARAAQAcAAAPASQAQASAAAiIAAB5g");
	this.shape_82.setTransform(-719.5,460);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E5E5D6").s().p("AhCB8IAAgrIAkAAIAAihIgkAAIAAgrICFAAIAAArIgkAAIAAChIAkAAIAAArg");
	this.shape_83.setTransform(-738.7,457.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E5E5D6").s().p("AgdBeIAAhCIA7AAIAABCgAgdgbIAAhCIA7AAIAABCg");
	this.shape_84.setTransform(-592.8,367);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E5E5D6").s().p("AAdCCIAAhdIgBgXQgBgLgCgEQgDgHgGgCQgGgDgJAAQgHAAgHACQgHADgJAGIAACEIg6AAIAAkDIA6AAIAABdQAPgMANgHQANgHARAAQAcAAAPASQAQASAAAiIAAB6g");
	this.shape_85.setTransform(-609.9,363.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgXAAIAAgpIAXAAIAAg1IA5AAIAAA1IA4AAIAAApIg4AAIAABCIAAARQAAAHADAGQACAGAGADQAGAEALAAIANgCQAIgCADgCIAEAAIAAApIgUAEIgaABQgjAAgQgOg");
	this.shape_86.setTransform(-627.9,364.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E5E5D6").s().p("AgqCBIgdgFIAAgwIAHAAIAKAFIAMADIAOADIAOABQAOAAAKgDQAJgDAGgGQAFgGACgHQACgIAAgMIAAgEQgKAJgNAFQgMAGgOgBQgkABgUgYQgUgYAAgvQAAgXAGgRQAGgSALgMQALgMAOgGQAPgHAQAAQANAAALAEQAMAEAJAGIACgIIA5AAIAACkQAAAbgIARQgHATgNAKQgNAKgSAFQgTAFgVAAQgSAAgRgDgAgUhJQgLAOAAAYQAAAMACAIQABAJAEAGQAFAGAGADQAHAEAKgBQAHAAAIgCQAIgDAHgFIAAhUIgLgEIgNgBQgUAAgKAOg");
	this.shape_87.setTransform(-646.5,370.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E5E5D6").s().p("AAdBgIAAhdIgBgVQgBgMgCgFQgDgGgGgDQgGgDgJAAQgHAAgHADQgHADgJAFIAACEIg6AAIAAi6IA6AAIAAAVQAPgNANgGQANgHARAAQAcAAAPASQAQASAAAiIAAB5g");
	this.shape_88.setTransform(-667.4,366.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E5E5D6").s().p("AhABJQgcgYAAgwQAAgsAagcQAbgbAuAAQArAAAWAXQAVAXAAArIAAAVIh/AAQABAMAFAKQAFAIAHAFQAIAFAJACQAKADAMAAQAKAAAKgDQAKgCAIgDIANgHIAKgHIAGAAIAAAxIgNAFIgQAFIgUADQgKACgPAAQg0AAgcgagAgXgyQgKAJgBATIBGAAQgBgUgIgJQgIgKgRAAQgQAAgJALg");
	this.shape_89.setTransform(-688.6,367);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E5E5D6").s().p("Ag+BeIAAi6IA6AAIAAAbIALgJQAHgHAFgCQAHgEAIgDQAJgDAHAAIAHAAIAGABIAAA3IgFAAQgDgCgHAAIgOAAQgJgBgKADIgTAHIAAB8g");
	this.shape_90.setTransform(-705.1,367);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E5E5D6").s().p("AgdBsQgQgPAAghIAAhXIgXAAIAAgpIAXAAIAAg1IA5AAIAAA1IA4AAIAAApIg4AAIAABCIAAARQAAAHADAGQACAGAGADQAGAEALAAIANgCQAIgCADgCIAEAAIAAApIgUAEIgaABQgjAAgQgOg");
	this.shape_91.setTransform(-720.6,364.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E5E5D6").s().p("Ag5B7QgXgFgSgIIAAg7IAGAAQATAPAWAJQAXAIAUAAIAOgBQAIgBAGgCQAGgDAFgFQAEgFAAgJQAAgJgHgGQgHgGgLgCIgagHQgOgDgNgEQgdgKgMgRQgNgRAAgaQAAgiAegWQAdgWAsAAQAWAAAWAFQAWAEARAIIAAA5IgFAAQgOgMgUgIQgUgIgVAAIgNABQgHABgIADQgFADgEAFQgFAFAAAHQAAAJAHAGQAHAGATAEIAYAGQALACANAFQAaAJANAPQAMAQAAAaQAAAlgdAWQgdAXgxAAQgcAAgVgGg");
	this.shape_92.setTransform(-738.3,364);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#181818").ss(1,1,1).p("EgoqAlnMBRVAAAEgoqA0rMBRVAAAEgoqglnMBRVAAAEgoqg0qMBRVAAAEgoqgWkMBRVAAAEgoqgHhMBRVAAAEgoqAHhMBRVAAAEgoqAWkMBRVAAA");
	this.shape_93.setTransform(-511.7,645.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.startingPoints},{t:this.StrengthText},{t:this.IntelligenceText},{t:this.DexterityText},{t:this.VitalityText},{t:this.DefenseText},{t:this.PerceptionText},{t:this.LuckText},{t:this.StrengthPlus},{t:this.StrengthMinus},{t:this.IntelligencePlus},{t:this.IntelligenceMinus},{t:this.DexterityPlus},{t:this.DexterityMinus},{t:this.LuckPlus},{t:this.LuckMinus},{t:this.PerceptionPlus},{t:this.PerceptionMinus},{t:this.DefensePlus},{t:this.DefenseMinus},{t:this.VitalityPlus},{t:this.VitalityMinus},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CharacterCreator, new cjs.Rectangle(-779.7,0,1573.9,983.3), null);


(lib.LargePanelDungeon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		LargePanelDungeonThis = this;
		
		var healthRegenPerSec = Math.round((stats.Health[2] / 100) * stats.HealthRegen[2]);
		var currentHP = stats.Health[2];
		var counterRegen = 10;
		var maxHp = stats.Health[2];
		var maxHPBarWidth = LargePanelDungeonThis.HealthBar.currentHpBar.nominalBounds.width;
		
		LoadStats();
		function LoadStats()
		{
			LargePanelDungeonThis.HealthBar.Health.text =  currentHP + " / " + maxHp;;
			LargePanelDungeonThis.statsPanelDungeon.HealthRegen.text = healthRegenPerSec;
			LargePanelDungeonThis.statsPanelDungeon.PhysicalDamage.text = stats.Physical[2];
			LargePanelDungeonThis.statsPanelDungeon.MagicDamage.text = stats.Magic[2];
			LargePanelDungeonThis.statsPanelDungeon.HitChance.text = stats.HitChance[2];
			LargePanelDungeonThis.statsPanelDungeon.Speed.text = stats.Speed[2];
			LargePanelDungeonThis.statsPanelDungeon.DropChance.text = "+" + stats.DropChance[2];
			LargePanelDungeonThis.statsPanelDungeon.PhysicalDefense.text = stats.PhysicalDefense[2];
			LargePanelDungeonThis.statsPanelDungeon.MagicResist.text = stats.MagicResist[2];
			LargePanelDungeonThis.statsPanelDungeon.DefenseChance.text = stats.DefenseChance[2];
			LargePanelDungeonThis.statsPanelDungeon.Dodge.text = stats.Dodge[2];
			
		}
		
		var hpUpdateInterval = setInterval(hpUpdate, 1000);
		function hpUpdate()
		{
			counterRegen --;
			if(counterRegen == 0)
			{
				if(currentHP + healthRegenPerSec >= stats.Health[2])
				{
					currentHP = stats.Health[2];
					LargePanelDungeonThis.HealthBar.currentHpBar.scaleX = 1;
				}
				else
				{
					currentHP += healthRegenPerSec;
					LargePanelDungeonThis.HealthBar.currentHpBar.scaleX += healthRegenPerSec/maxHp;
				}
				counterRegen = 10;
				LargePanelDungeonThis.HealthBar.Health.text = currentHP + " / " + maxHp;
			}
			LargePanelDungeonThis.statsPanelDungeon.HealthRegenTimer.text = counterRegen
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.SkillSlot1 = new lib.SkillSlot_mc();
	this.SkillSlot1.name = "SkillSlot1";
	this.SkillSlot1.parent = this;
	this.SkillSlot1.setTransform(531.9,71.2,1,1,0,0,0,50.6,50.6);

	this.instance = new lib.SkillSlot_mc();
	this.instance.parent = this;
	this.instance.setTransform(661.3,71.2,1,1,0,0,0,50.6,50.6);

	this.instance_1 = new lib.SkillSlot_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(790.8,71.2,1,1,0,0,0,50.6,50.6);

	this.instance_2 = new lib.SkillSlot_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(920.2,71.2,1,1,0,0,0,50.6,50.6);

	this.instance_3 = new lib.SkillSlot_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1049.6,71.2,1,1,0,0,0,50.6,50.6);

	this.statsPanelDungeon = new lib.statsPanelDungeon_mc();
	this.statsPanelDungeon.name = "statsPanelDungeon";
	this.statsPanelDungeon.parent = this;
	this.statsPanelDungeon.setTransform(1387.3,302.6,1,1,0,0,0,-175.9,301.3);

	this.instance_4 = new lib.RaiseLevel_btn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.2,85.5,1,1,0,0,0,26.6,38.2);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.Level = new cjs.Text("888", "bold 30px 'Tahoma'", "#647F8C");
	this.Level.name = "Level";
	this.Level.lineHeight = 38;
	this.Level.lineWidth = 59;
	this.Level.parent = this;
	this.Level.setTransform(187.8,71.5);

	this.LevelText = new cjs.Text("Level:", "bold 30px 'Tahoma'", "#647F8C");
	this.LevelText.name = "LevelText";
	this.LevelText.lineHeight = 38;
	this.LevelText.lineWidth = 100;
	this.LevelText.parent = this;
	this.LevelText.setTransform(83.7,71.5);

	this.PlayerName = new cjs.Text("Name", "bold 35px 'Tahoma'", "#647F8C");
	this.PlayerName.name = "PlayerName";
	this.PlayerName.lineHeight = 44;
	this.PlayerName.lineWidth = 370;
	this.PlayerName.parent = this;
	this.PlayerName.setTransform(35.2,16.7);

	this.HealthBar = new lib.HealthBar_mc();
	this.HealthBar.name = "HealthBar";
	this.HealthBar.parent = this;
	this.HealthBar.setTransform(276.8,252.8,1,1,0,0,0,222.3,19.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C2327").s().p("EiV/Aa2MAAAgyHQAAjkDIAAMElvAAAQDIAAAADkMAAAAyHg");
	this.shape.setTransform(960,343.6,1,1,0,0,0,0,171.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C2327").s().p("EiV/ALFIAAzBQAAjIDIAAMElvAAAQDIAAAADIIAATBg");
	this.shape_1.setTransform(960,272.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.HealthBar},{t:this.PlayerName},{t:this.LevelText},{t:this.Level},{t:this.instance_4},{t:this.statsPanelDungeon},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.SkillSlot1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LargePanelDungeon_mc, new cjs.Rectangle(0,0,1920,343.7), null);


(lib.GameDungeon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.LargePanelDungeon = new lib.LargePanelDungeon_mc();
	this.LargePanelDungeon.name = "LargePanelDungeon";
	this.LargePanelDungeon.parent = this;
	this.LargePanelDungeon.setTransform(960,908.2,1,1,0,0,0,960,171.8);

	this.timeline.addTween(cjs.Tween.get(this.LargePanelDungeon).wait(1));

	// Layer_1
	this.gamingGround = new lib.gamingGround_mc();
	this.gamingGround.name = "gamingGround";
	this.gamingGround.parent = this;
	this.gamingGround.setTransform(959.3,368.1,1,1,0,0,0,898.8,347.9);

	this.timeline.addTween(cjs.Tween.get(this.gamingGround).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E23").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameDungeon, new cjs.Rectangle(0,0,1920,1080), null);


// stage content:
(lib.Dev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Game = new lib.Game();
	this.Game.name = "Game";
	this.Game.parent = this;
	this.Game.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.Game).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	id: 'A768B28AD2B3BA4FA1C89D6ACB144719',
	width: 1920,
	height: 1080,
	fps: 120,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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
an.compositions['A768B28AD2B3BA4FA1C89D6ACB144719'] = {
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