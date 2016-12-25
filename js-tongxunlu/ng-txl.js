var app = angular.module('app',[]);

app.service('InitialSort', function(){
	this.sort = function(html){
		var Initials=$('.initials');
        var LetterBox=$('#letter');
        Initials.find('ul').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li><li>#</li>');
        initials2(html);

        $(".initials ul li").on('click', function(){
            var _this=$(this);
            var LetterHtml=_this.html();
            LetterBox.html(LetterHtml).fadeIn();

            Initials.css('background','rgba(145,145,145,0.6)');
            
            setTimeout(function(){
                Initials.css('background','rgba(145,145,145,0)');
                LetterBox.fadeOut();
            },1000);

            var _index = _this.index()
            if(_index==0){
                $('html,body').animate({scrollTop: '0px'}, 300);//点击第一个滚到顶部
            }else if(_index==27){
                var DefaultTop=$('#default').position().top;
                $('html,body').animate({scrollTop: DefaultTop+'px'}, 300);//点击最后一个滚到#号
            }else{
                var letter = _this.text();
                if($('#'+letter).length>0){
                    var LetterTop = $('#'+letter).position().top;
                    $('html,body').animate({scrollTop: LetterTop-45+'px'}, 300);
                }
            }
        });
	$('.initials ul').on('touchmove', function(event){
            event.preventDefault();
            var x = event.originalEvent.targetTouches[0].clientX;
            var y = event.originalEvent.targetTouches[0].clientY;
            var target = document.elementFromPoint(x,y);
            if(!target) return ;

            var LetterHtml=target.innerHTML,
                arr = '<img src="images/star.png">abcdefghijklmnopqrstuvwxyz#';
            if(arr.indexOf(LetterHtml.toLowerCase()) === -1) return ;

            console.log(LetterHtml)
            LetterBox.html(LetterHtml).fadeIn();

            if('<img src="img/068.png">' === LetterHtml){
                $('html,body').animate({scrollTop: '0px'}, 0);//点击第一个滚到顶部
            }else if('#' === LetterHtml){
                var DefaultTop=$('#default').position().top;
                $('html,body').animate({scrollTop: DefaultTop+'px'}, 0);//点击最后一个滚到#号
            }else{
                var letter = LetterHtml;
                if($('#'+letter).length>0){
                    var LetterTop = $('#'+letter).position().top;
                    $('html,body').animate({scrollTop: LetterTop-45+'px'}, 0);
                }
            }
        }).on('touchstart', function(e){
            Initials.css('background','rgba(145,145,145,0.6)');
        }).on('touchend', function(e){
            setTimeout(function(){
                Initials.css('background','rgba(145,145,145,0)');
                LetterBox.fadeOut();
            },500);
        });

        var windowHeight=$(window).height();
        var InitHeight=windowHeight-45;
        Initials.height(InitHeight);
        var LiHeight=InitHeight/28;
        Initials.find('li').height(LiHeight);
	}
});

app.directive('initialSort', ['$compile', 'InitialSort', function($compile, InitialSort){
	return {
		restrict:'EC',
		template: `<div>
						<div id="letter" ></div>
						<div class="sort_box"></div>
						<div class="initials">
							<ul>
								<li><img src="img/068.png"></li>
							</ul>
						</div>
					</div>`,
		link:function(scope, element, attr){
			//对新旧值进行监听保证数据变化时，指令也要更新
			scope.$watch('chineseArr',function(newValue,oldValue){
                 if (newValue){
                    $(element).find('.sort_box').html("");  //删除原有html 
                    var html = [], item=null;
                    for(var i = 0,len = scope.chineseArr.length; i < len; i++){
                        item = scope.chineseArr[i];
                        html += `<div class="sort_list" ng-click=payee(${JSON.stringify(item)})><div class="num_name">${item.name}</div></div>`;
                        item = null;
                    }
                    InitialSort.sort(html, scope.chineseArr);
                    $compile(element.contents())(scope.$new());  //使用compile对dom进行再次编译
                 }
            });
		}
	}
}])
;
app.controller('txlCtrl', ['$scope', function($scope){
		$scope.chineseArr = [
			            {"id":1,name:"涨水"},
			            {"id":2,name:"美女"},
			            {"id":3,name:"准备"},
			            {"id":4,name:"请问"},
			            {"id":5,name:"水电费"},
			            {"id":6,name:"不能"},
			            {"id":7,name:"更好"},
			            {"id":8,name:"熬吧"},
			            {"id":9,name:"凉快了"},
			            {"id":10,name:"潍坊"},
			            {"id":11,name:"拉屎"},
			            {"id":12,name:"胸围"},
			            {"id":13,name:"漂亮"},
			            {"id":14,name:"离开"},
			            {"id":15,name:"额无法"},
			            {"id":16,name:"123"},
			            {"id":17,name:"+sdkl"},
			            {"id":18,name:"AB"}
			            ];

			$scope.init = function(){
				$scope.test = 'test';
			}
			$scope.payee = function(item){
				console.log(item);
			}
}])





var chineseArr = [
            {"id":1,name:"涨水"},
            {"id":2,name:"美女"},
            {"id":3,name:"准备"},
            {"id":4,name:"请问"},
            {"id":5,name:"水电费"},
            {"id":6,name:"不能"},
            {"id":7,name:"更好"},
            {"id":8,name:"熬吧"},
            {"id":9,name:"凉快了"},
            {"id":10,name:"潍坊"},
            {"id":11,name:"拉屎"},
            {"id":12,name:"胸围"},
            {"id":13,name:"漂亮"},
            {"id":14,name:"离开"},
            {"id":15,name:"额无法"},
            {"id":16,name:"123"},
            {"id":17,name:"+sdkl"},
            {"id":18,name:"AB"}
            ];
function initials2(html){
    var SortBox=$(".sort_box");

   /* var html = [];
    for(var i = 0,len = chineseArr.length; i < len; i++){
        html += `<div class="sort_list">
                    <div class="num_name">${chineseArr[i].name}</div>
                </div>`;
    }*/
    var SortList=$(html);

    SortList.sort(asc_sort).appendTo('.sort_box');
    function asc_sort(a, b) {
        return makePy($(b).find('.num_name').text().charAt(0))[0].toUpperCase() < makePy($(a).find('.num_name').text().charAt(0))[0].toUpperCase() ? 1 : -1;
    }

    var initials = [];
    var num=0;
    SortList.each(function(i) {
        var initial = makePy($(this).find('.num_name').text().charAt(0))[0].toUpperCase();
        if(initial>='A'&&initial<='Z'){
            if (initials.indexOf(initial) === -1)
                initials.push(initial);
        }else{
            num++;
        }
        
    });

     $.each(initials, function(index, value) {//添加首字母标签
        SortBox.append('<div class="sort_letter" id="'+ value +'">' + value + '</div>');
    });
    if(num!=0){SortBox.append('<div class="sort_letter" id="default">#</div>');}

    for (var i =0;i<chineseArr.length;i++) {//插入到对应的首字母后面
        var letter=makePy(SortList.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
        switch(letter){
            case "A":
                $('#A').after(SortList.eq(i));
                break;
            case "B":
                $('#B').after(SortList.eq(i));
                break;
            case "C":
                $('#C').after(SortList.eq(i));
                break;
            case "D":
                $('#D').after(SortList.eq(i));
                break;
            case "E":
                $('#E').after(SortList.eq(i));
                break;
            case "F":
                $('#F').after(SortList.eq(i));
                break;
            case "G":
                $('#G').after(SortList.eq(i));
                break;
            case "H":
                $('#H').after(SortList.eq(i));
                break;
            case "I":
                $('#I').after(SortList.eq(i));
                break;
            case "J":
                $('#J').after(SortList.eq(i));
                break;
            case "K":
                $('#K').after(SortList.eq(i));
                break;
            case "L":
                $('#L').after(SortList.eq(i));
                break;
            case "M":
                $('#M').after(SortList.eq(i));
                break;
            case "N":
                $('#N').after(SortList.eq(i));
                break;
            case "O":
                $('#O').after(SortList.eq(i));
                break;
            case "P":
                $('#P').after(SortList.eq(i));
                break;
            case "Q":
                $('#Q').after(SortList.eq(i));
                break;
            case "R":
                $('#R').after(SortList.eq(i));
                break;
            case "S":
                $('#S').after(SortList.eq(i));
                break;
            case "T":
                $('#T').after(SortList.eq(i));
                break;
            case "U":
                $('#U').after(SortList.eq(i));
                break;
            case "V":
                $('#V').after(SortList.eq(i));
                break;
            case "W":
                $('#W').after(SortList.eq(i));
                break;
            case "X":
                $('#X').after(SortList.eq(i));
                break;
            case "Y":
                $('#Y').after(SortList.eq(i));
                break;
            case "Z":
                $('#Z').after(SortList.eq(i));
                break;
            default:
                $('#default').after(SortList.eq(i));
                break;
        }
    };
}

function initials() {//公众号排序
    var SortList=$(".sort_list");
    var SortBox=$(".sort_box");
    SortList.sort(asc_sort).appendTo('.sort_box');//按首字母排序
    function asc_sort(a, b) {
        return makePy($(b).find('.num_name').text().charAt(0))[0].toUpperCase() < makePy($(a).find('.num_name').text().charAt(0))[0].toUpperCase() ? 1 : -1;
    }

    var initials = [];
    var num=0;
    SortList.each(function(i) {
        var initial = makePy($(this).find('.num_name').text().charAt(0))[0].toUpperCase();
        if(initial>='A'&&initial<='Z'){
            if (initials.indexOf(initial) === -1)
                initials.push(initial);
        }else{
            num++;
        }
        
    });

    $.each(initials, function(index, value) {//添加首字母标签
        SortBox.append('<div class="sort_letter" id="'+ value +'">' + value + '</div>');
    });
    if(num!=0){SortBox.append('<div class="sort_letter" id="default">#</div>');}

    for (var i =0;i<SortList.length;i++) {//插入到对应的首字母后面
        debugger
        var letter=makePy(SortList.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
        switch(letter){
            case "A":
                $('#A').after(SortList.eq(i));
                break;
            case "B":
                $('#B').after(SortList.eq(i));
                break;
            case "C":
                $('#C').after(SortList.eq(i));
                break;
            case "D":
                $('#D').after(SortList.eq(i));
                break;
            case "E":
                $('#E').after(SortList.eq(i));
                break;
            case "F":
                $('#F').after(SortList.eq(i));
                break;
            case "G":
                $('#G').after(SortList.eq(i));
                break;
            case "H":
                $('#H').after(SortList.eq(i));
                break;
            case "I":
                $('#I').after(SortList.eq(i));
                break;
            case "J":
                $('#J').after(SortList.eq(i));
                break;
            case "K":
                $('#K').after(SortList.eq(i));
                break;
            case "L":
                $('#L').after(SortList.eq(i));
                break;
            case "M":
                $('#M').after(SortList.eq(i));
                break;
            case "N":
                $('#N').after(SortList.eq(i));
                break;
            case "O":
                $('#O').after(SortList.eq(i));
                break;
            case "P":
                $('#P').after(SortList.eq(i));
                break;
            case "Q":
                $('#Q').after(SortList.eq(i));
                break;
            case "R":
                $('#R').after(SortList.eq(i));
                break;
            case "S":
                $('#S').after(SortList.eq(i));
                break;
            case "T":
                $('#T').after(SortList.eq(i));
                break;
            case "U":
                $('#U').after(SortList.eq(i));
                break;
            case "V":
                $('#V').after(SortList.eq(i));
                break;
            case "W":
                $('#W').after(SortList.eq(i));
                break;
            case "X":
                $('#X').after(SortList.eq(i));
                break;
            case "Y":
                $('#Y').after(SortList.eq(i));
                break;
            case "Z":
                $('#Z').after(SortList.eq(i));
                break;
            default:
                $('#default').after(SortList.eq(i));
                break;
        }
    };
}
