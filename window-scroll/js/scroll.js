window.onload = function(){
	var pbl = new PBL('#wrap');
	//模拟数据
	var data = [{'src':'1.jpg','title':'This is a title.'},{'src':'2.jpg','title':'This is a title.'},{'src':'3.jpg','title':'This is a title.'},
				{'src':'4.jpg','title':'This is a title.'},{'src':'5.jpg','title':'This is a title.'},{'src':'6.jpg','title':'This is a title.'},
				{'src':'7.jpg','title':'This is a title.'},{'src':'8.jpg','title':'This is a title.'},{'src':'9.jpg','title':'This is a title.'},
				{'src':'10.jpg','title':'This is a title.'}];

	window.onscroll = function(){
		if(pbl._getCheck()){
			var frag = document.createDocumentFragment(),
				li, div, img, a;
			for(var i in data) {
				li = document.createElement('li');
				frag.appendChild(li);

				div = document.createElement('div');
				div.className = 'box';
				li.appendChild(div);

				img = document.createElement('img');
				img.src = 'images/'+data[i].src;
				img.style.height = 'auto';
				div.appendChild(img);

				a = document.createElement('a');
				a.href = '#';
				a.innerHTML = data[i].title;
				div.appendChild(a);
			}
			pbl.wrap.appendChild(frag);
			pbl.refresh();
		}
	};
};

function PBL(el){
	this.el = el;
	this.wrap = typeof el == 'string' ? document.querySelector(el) : el;
	this.boxes = wrap.children;
	this.boxesLen = this.boxes.length;
	this.loop = this.boxesLen;
	this.everyH = [];//定义一个数组存储每一列的高度
	this.getStartNum = 0;

	this.options = {};
	this.options.boxW = this.boxes[0].offsetWidth;
	this.options.colsNum = Math.floor(document.documentElement.clientWidth/this.options.boxW);
	this.wrap.style.width = this.options.boxW*this.options.colsNum+'px';
	
	this._init();
}
PBL.prototype = {
	_init: function(){
		var i = this.boxesLen-this.loop,
			minH,
			minIndex;
		for (; i < this.boxesLen; i++) {
			if(i<this.options.colsNum){
				this.everyH[i] = this.boxes[i].offsetHeight;
			}else{
				minH = Math.min.apply(null,this.everyH);
				minIndex = this._getIndex(minH); 
				this._getStyle(minH,minIndex,i);
				this.everyH[minIndex] += this.boxes[i].offsetHeight;
			}
		}
	},

	refresh: function(){
		this.wrap = typeof this.el == 'string' ? document.querySelector(this.el) : this.el;
		this.boxes = wrap.children;
		this.boxesLen = this.boxes.length;
		this._init();
	},

	_getIndex: function(min){
		for(var index in this.everyH){
			if (this.everyH[index] == min ) return index;
		}
	},

	_getCheck: function (){
		var documentH = document.documentElement.clientHeight,
		    scrollH = document.documentElement.scrollTop || document.body.scrollTop;
		return documentH+scrollH >= (this.boxes[this.boxesLen-1].offsetTop + this.boxes[this.boxesLen-1].offsetHeight) ? true : false;
	},

	_getStyle: function (top,left,index){
	    if (this.getStartNum >= index) return;
	    this.boxes[index].style.cssText = 'position:absolute; top:'+top+'px;left:'+this.boxes[left].offsetLeft+'px;';
	    this.boxes[index].className = 'shadow';
	    this.getStartNum = index;
	}
};



