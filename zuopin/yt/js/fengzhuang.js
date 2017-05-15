function $(select,obj=document){
	if(typeof select == "function"){
		// window.onload=function(){
		// 	select();
		// }
		window.addEventListener("load",select,false)
	}else if(typeof select == "string"){
		// alert(/^<\w+>$/.test(select));
		if(/^<\w+>$/.test(select)){//开头是小于号,然后是字母数字下划线
			return document.createElement(select.slice(1,-1));
		}else{
			return obj.querySelectorAll(select)
		}
	}
}



//选项卡

function xuanxiangka(btn,con){
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function (){//onclick是鼠标点击的效果
			for(let j=0;j<con.length;j++){
				con[j].style.display="none"
			}			
			con[i].style.display="block"
		}
		btn[i].onmouseout=function (){
			con[i].style.display="none"
		}
	}	
}

//遮罩

function zhezhao(q,w){
	for(let i=0;i<q.length;i++){
		q[i].onmouseover=function (){
			for(let j=0;j<w.length;j++){
				w[j].style.display="none"
			}			
		w[i].style.display="block"
		}
		q[i].onmouseout=function (){
			w[i].style.display="none"
		}
	}
}


// 轮播图
	// pic				轮播图						(字符串的选择器)
	// bigbannerBox		通屏的banner盒子			(字符串的选择器)
	// lis				轮播点						(字符串的选择器)
	// colorArr			通屏banner盒子的所有颜色	(数组["red","blue"])
	// tuactiveZ		第一个轮播图的变化后的优先级
	// liactivebgcolor	第一个轮播点的改变颜色
	// LunBoTime		轮播点的变化时间
	// tuZ 				第一个轮播图的初始优先级
	// lisColor 		轮播点原始的颜色
function zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgcolor,LunBoTime,tuZ,lisColor,shu){
	// $(function(){
	const tup=$(pic);
	const banner=$(bigbannerBox)[0];
	const li=$(lis);
	const color=colorArr;
	for(let i=0;i<tup.length;i++){
		tup[i].style.zIndex
	}
	// tup[0].style.opacity="1"
	tup[0].style.zIndex=tuactiveZ;
	li[0].style.background=liactivebgcolor;
	banner.style.background=color[0];
	var num=0;
	var t=setInterval(move,LunBoTime);
	banner.onmouseover=function(){
		clearInterval(t)
	}
	banner.onmouseout=function(){
		t=setInterval(move,LunBoTime)
	}
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			for(let i=0;i<tup.length;i++){
				tup[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
				banner.style.background=color[i];
			}
			tup[j].style.zIndex=tuactiveZ;
			li[j].style.background=liactivebgcolor;
			num=j;
			banner.style.background=color[j]
		}
	}

	function move(){
		num++;
		if(num>shu){
			num=0;
		}
		for(let i=0;i<tup.length;i++){
			tup[i].style.zIndex=tuZ;
			li[i].style.background=lisColor;
			// tup[i].style.opacity="1"
		}
		tup[num].style.zIndex=tuactiveZ;
		li[num].style.background=liactivebgcolor;
		banner.style.background=color[num];
		// tup[num].style.opacity="1"
		// animate(tup[num],{opacity:0},1500);
	}
}




// 透明度轮播
function Carousel(pic,bigbannerBox,lis,colorArr,tuactiveO,liactivebgColor,lunboTime,tuO,lisColor){
		const tu = $(pic);
		const banner = $(bigbannerBox)[0];
		const li = $(lis);
		const color = colorArr;
		
		tu[0].style.opacity=tuactiveO;
		li[0].style.backgroundColor=liactivebgColor;
		banner.style.backgroundColor=color[0];
		var num = 0;
		var t = setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t = setInterval(move,lunboTime);
		}
	
		for(let j =0;j<li.length;j++){

			li[j].onmouseover=function(){
				for(let i = 0; i < tu.length; i ++){
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
				// banner.style.backgroundColor=color[0];
				}
				tu[j].style.opacity=tuactiveO;
				animate(tu[j],{opacity:2},500);
				li[j].style.backgroundColor=liactivebgColor;
				banner.style.backgroundColor=color[j];
				num = j;
			}				
		}

		function move(){
			num++;
			if(num>tu.length-1){
				num = 0;
			}
			for(let i = 0; i < tu.length; i ++){
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
			}
			tu[num].style.opacity=tuactiveO;
			animate(tu[num],{opacity:0},500);
			li[num].style.backgroundColor=liactivebgColor;
			banner.style.backgroundColor=color[num];
		}
	}




	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
		//获取轮播图
		const tu = $(pic);
		//获取轮播图盒子
		const img = $(imgBox)[0];
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		const li = $(lis);
		//获取轮播图盒子宽度        获取最终样式    window.getComputedStyle(img,null).width
		const imgW = parseInt(window.getComputedStyle(img,null).width);

		//初始化开始----------- 
		//开关
		var  flag = true;
		//将轮播图都置于右边
		for(let i = 0; i < tu.length; i ++){
			tu[i].style.left=imgW + "px";
		}
		//显示第一张图片在中间
		tu[0].style.left=0;
		//显示第一个轮播点激活的颜色
		li[0].style.backgroundColor=liactivebgColor;
		//开始轮播
		var t= setInterval(move,lunboTime);
		var now = 0;
		var next = 0;
		//初始化结束---------------

		//轮播函数
		function move(type="l"){
			//轮播
			flag=false;
			if(type=="l"){
				//左移动
				next++;
				if(next>tu.length-1){
					next = 0;	
				}
				tu[next].style.left=imgW + "px";
				animate(tu[now],{left:-imgW},500);
			}else if(type=="r"){
				//右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW + "px";
				animate(tu[now],{left:imgW},500);
			}
			
			
			
			animate(tu[next],{left:0},500,function(){
				//轮播结束
					flag=true
					li[next].style.backgroundColor=liactivebgColor;
					li[now].style.backgroundColor=lisColor;
					// console.log(`${now}+${next}`);
					now = next;
			});				
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t= setInterval(move,lunboTime);
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightbtn.onclick=function(){
			if(flag){
				move("r");
			}
		}

		//鼠标移到轮播点上的效果
		for(let i = 0; i < tu.length; i ++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					//
					for(let j = 0; j < tu.length; j ++){
						li[j].style.backgroundColor=lisColor;
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].style.backgroundColor=liactivebgColor;
					now = i;
					next = i;
				}															
			}
		}
	}


// 节点轮播

	function jiedian(pic,Bigbox,lis,Leftbnt,Rightbnt,num){
			const box=$(pic)[0]
			// 轮播图的盒子
			// console.log(box)
			const bigbox=$(Bigbox)[0]
			// 轮播图的大盒子
			// console.log(bigbox)
			// const ul=$(".box ul")[0]
			var lastlen=box.children.length;
			// 获取轮播图的长度
			// console.log(lastlen)
			const li=$(lis)
			// 每一个轮播图
			const leftbnt=$(Leftbnt)[0]
			// 左按钮
			const rightbnt=$(Rightbnt)[0]
			// 右按钮
			// console.log(rightbnt)
			var flag=true;
			// 开关
			var n=num;
			// 一个盒子里放几张图，让大盒子的宽放大多少倍
			const imgW = parseInt(window.getComputedStyle(bigbox,null).width);
			// 获取最大盒子的宽度
				// console.log(bigbox)
			// var t=setInterval(move,1000)
			bigbox.style.width=(imgW*n)+"px";
				function move(type="l"){
					
			// 五、左右
					
				// let first = box.firstElementChild;

			// 	animate(box,{left:-500},500,function(){
			// 		let first = box.firstElementChild;
			// 		box.appendChild(first)
			// 		box.style.left=0+"px";
			// 	})
			// }
			// 四、左右

			if(type=="l"){
				flag=false;
				
					animate(box,{left:-imgW*n},500,function(){
						for(let i=0;i<n;i++){
							let first = box.firstElementChild;
							box.appendChild(first)
							box.style.left=0+"px";
							flag=true;
						}	
					})
				
			}else if(type=="r"){
				flag=false;

					
					for(let i=0;i<n;i++){
						let last=box.lastElementChild;
						let first = box.firstElementChild;
						box.insertBefore(last,first)
						box.style.left=-imgW*n+"px";
						flag=true;
					}
				animate(box,{left:0},500,function(){
				})
			}
				
			}
            // window.onload=function () {
            //     clearInterval(t)
            // }
				// leftbnt.onmouseover=function(){
				// 	clearInterval(t);
				// }
				// rightbnt.onmouseover=function(){
				// 	clearInterval(t);
				// }

				leftbnt.onclick=function(){
					if(flag){

						move("r");
					}
				}
				rightbnt.onclick=function(){
					if(flag){

						move("l");
					}
					
				}
		}



		// 获取scrollTop的对象
		function scrollobj(){
			let body=document.body;
			let html=document.documentElement;
			body.scrollTop=100;
			html.scrollTop=100;
			let obj;
			if(body.scrollTop==0){
				obj=html;
			}else{
				obj=body;
			}
			body.scrollTop=100;
			html.scrollTop=100;
			return obj;
		}


		//加载
		//section 	装图片的盒子ps:可以很大
		// pnc 	图片ps:img标签
		// url 	将src替换成url,再给src幅一个空值
		function loadd(sectionn,pnc,url){
			const section=$(sectionn)
			const ch=document.documentElement.clientHeight;
			// section[0].queryseletorAll("img")
			var obj=scrollobj();

			window.onscroll=function(){
				for(let i=0;i<section.length;i++){
					
					if(obj.scrollTop+ch>=section[i].offsetTop){
							let img=$(pnc,section[i])
							// console.log(img)
						for(let j=0;j<img.length;j++){
							img[j].src=img[j].getAttribute(url)
							
						}
					}

				}
			}
		}








		// 按需加载
		function anxujia(lefttu,left,centertu,bgmnow,bgmnexty,navwidth){
			const list=$(lefttu)
			const box=$(left)[0]
			const section=$(centertu)
			// const nav=$(nav_top)[0]
			const ch=document.documentElement.clientHeight;
			// section[0].queryseletorAll("img")
			// console.log(nav)
			var obj=scrollobj();
			// console.log(obj)
			for(let i=0;i<list.length-1;i++){
				list[i].onclick=function(){

					animate(obj,{scrollTop:section[i].offsetTop},200)
					console.log(section[i].offsetTop)
				}	
			}

			let flagx=true;
			let flagy=false;
			window.onscroll=function(){
				for(let i=0;i<section.length;i++){
					if(obj.scrollTop+0.5*ch>=section[i].offsetTop){
						for(let j=0;j<list.length-1;j++){
							list[j].style.cssText=bgmnow;
						}
						list[i].style.cssText=bgmnexty;
					}
				}
				if(obj.scrollTop>=navwidth){
					//设备1与设备2，一个开一个关，在开一的同时要考虑2
					
					if(flagx){
						flagx=false;
						flagy=true;
					}
					box.style.display="block"
				}else{

					box.style.display="none"
				}
			}

		}


		// 事件触发后执行一次
		// one(obj,type,fn)
		// obj:事件源： 某对象 
		// type:事件：发生的事
		// fn:事件处理程序：去做什么
		function one(obj,type,fn){
			// 添加第一个type类型事件，执行fn
			obj.addEventListener(type,fn,false)
			// 添加第二个type类型事件，执行clear
			obj.addEventListener(type,clear,false)
			function clear(){
				// alert(33)
				// 清除type类型事件中的fn处理程序
				obj.removeEventListener(type,fn,false)
				// 清除type类型事件中的clear处理程序
				obj.removeEventListener(type,clear,false)
			}
		}


		//拖拽
		//box（要拖拽的对象）需要绝对定位，
		function tuozhuai(box) {
			const box = $(bigbox)[0];
			let x;
			let y;
			let boxx;
			let boxy;
			box.addEventListener("mousedown",down,false)
			function down(e){
				box.style.position="absolute";

				x=e.clientX;
				y=e.clientY;

				boxx=box.offsetLeft;
				boxy=box.offsetTop;

				box.addEventListener("mousemove",move,false)
				box.addEventListener("mouseup",function(){
					box.removeEventListener("mousemove",move,false)
				})
			}
			function move(e){
				let mx=e.clientX;
				let my=e.clientY;
				let chax=mx-x;
				// console.log(chax)
				let chay=my-y;
				box.style.left=boxx+chax+"px";
				box.style.top=boxy+chay+"px";
			}
		}



		//鼠标滚轮事件mouseWheel(obj,shang,xia)//detail（火狐）wheeldelta(谷歌)
		//obj:鼠标滚动事件源，shang():鼠标滚轮向上时触发的事件，xia():鼠标滚轮向下时触发的事件
		function mouseWheel(obj,shang,xia){
			obj.addEventListener("mousewheel",scrollFn,false);
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
			function scrollFn(e){
				e.preventDefault();
				if(e.wheelDelta){
					if(e.wheelDelta>0){
						//向上滚动
						shang();
					}else{
						xia();
					}
				}else{
					if(e.ddetail>0){
						xia();
					}else{
						shang();
					}
				}
			}
		}


		//获取attr(obj,style)
		//获取obj元素的style(width,height等)样式值
		//
		function attr(obj,style){
			return window.getComputedStyle(obj,null)[style];
		}

		//下拉框，缓动式
		function  downla(items,itemul) {
			const item = $(items);//导航上的(首页等)
			const ul = $(itemul);//导航上的下拉
			for(let i=0;i<ul.length;i++){
				let h=parseInt(attr(ul[i],"height"));//获取高
				ul[i].setAttribute("h",h)//添加一个高的属性
				ul[i].style.height=0;//让下拉框的高为0
			}
			for(let i=0;i<item.length;i++){
				//鼠标事件，对象，移入移出函数
				hover(item[i],function(){
					if(item[i].children[1]){//寻找item下是否有下拉框
						let ul =item[i].children[1];
						animate(ul,{height:ul.getAttribute("h")},200)//让下拉框的高从0到应有的高
					}//鼠标移入事件
				},function(){
					if(item[i].children[1]){
						let ul =item[i].children[1];
						animate(ul,{height:0},200);//让下拉框的高变回0
					}//鼠标移出事件
				})

			}
		}






		// cookie的添加，查看，删除，获取
		// addCookie("key","222",30);//名，值，过期时间
		// addCookie("keyq","222q",20);//名，值，过期时间
		function addCookie(key,val,time){//time可填可不填[time]
			if(time){
				val = escape(val);
				let date=new Date();
				time*=1000;
				date.setTime(date.getTime()+time);
				date = date.toGMTString();
				document.cookie=`${key}=${val};expires=${date}`;
			}else{
				document.cookie=`${key}=${val}`;
			}
		}


		// getCookie("key");
		// console.log(getCookie("key"))
		function getCookie(key){//用键名获取键值

			let cookies = document.cookie;
			let cookiearr = cookies.split("; ");
			let val;
			for(let i=0;i<cookiearr.length;i++){
				let arr=cookiearr[i].split("=");
					if(key==arr[0]){
						// console.log(key)
						val=arr[1];
						// console.log(val)
					}
			return unescape(val);
			}
		}

		// delCookie("key");
		// console.log(delCookie("key"));
		function delCookie(key){
			let date = new Date();
			date.setTime(date.getTime()-10000);
			date = date.toGMTString();
			document.cookie=`${key}=aa;expires=${date}`;

		}


function jiedianlunbo(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime){
    const box=$(hezi)[0];
    const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
    const leftBen=$(zuokuohao)[0];
    const rightBen=$(youkuohao)[0];
    let n=num;
    let flag=true;
    let t=setInterval(move,lunbotime);
    function move(type="l"){
        flag=false;
        if(type=="l"){
            animate(box,{left:-boxW*n},lunboxiaotime,function(){
                for(let i=0;i<n;i++){
                    let firstChild=box.firstElementChild;
                    box.appendChild(firstChild);
                }
                box.style.left=0;
                flag=true;
            })
        }
        if(type=="r"){
            for(let i=0;i<n;i++){
                let lastChild=box.lastElementChild;
                let firstChild=box.firstElementChild;
                box.insertBefore(lastChild,firstChild);
            }
            box.style.left=-boxW*n+"px";
            animate(box,{left:0},lunboxiaotime,function(){
                flag=true;
            });
        }
    }
    leftBen.onclick = function(){
        if(flag){
            move("r");
        }
    }
    rightBen.onclick = function(){
        if(flag){
            move("l");
        }
    }
    box.onmouseover = function(){
        clearInterval(t);
    }
    box.onmouseout = function(){
        t=setInterval(move,lunbotime);
    }
    leftBen.onmouseover = function(){
        clearInterval(t);
    }
    leftBen.onmouseout = function(){
        t=setInterval(move,lunbotime);
    }
    rightBen.onmouseover = function(){
        clearInterval(t);
    }
    rightBen.onmouseout = function(){
        t=setInterval(move,lunbotime);
    }

    window.onblur = function(){
        clearInterval(t);
    }
    window.onfocus = function(){
        t=setInterval(move,lunbotime);
    }

}




//左右轮播图
//pic:轮播图 字符串的选择器
//bannerBox：通屏的banner盒子 字符串的选择器
//leftBen:左括号
//rightBen：右括号
//lunbodian：轮播点 字符串的选择器
//liscolor:所有轮播点的颜色
//lisactivebgColor;轮播点1开始的颜色
//lubotime：轮播时间
//luoboxiaotime:一次轮播中从左到右(从右到左)的时间
function zzlunbo(pic,bannerBox,zuokuohao,youkuohao,lunbodian,liscolor,lisactivebgColor,lubotime,luoboxiaotime){
    const tu=$(pic);
    // alert(1);
    const img=$(bannerBox)[0];
    const imgw=parseInt(window.getComputedStyle(img,null).width);
    const leftBen=$(zuokuohao)[0];
    const rightBen=$(youkuohao)[0];
    const lis=$(lunbodian);
    for(let i=0;i<tu.length;i++){
        tu[i].style.left=imgw+"px";
        lis[0].style.background=liscolor;
    }
    tu[0].style.left=0;
    lis[0].style.background=lisactivebgColor;
    var t=setInterval(move,lubotime);
    var now=0;
    var next=0;
    var flag=true;
    for(let j=0;j<lis.length;j++){
        lis[j].onmouseover=function(){
            clearInterval(t);
            if(flag){
                for(let i=0;i<tu.length;i++){
                    lis[i].style.background=liscolor;
                    tu[i].style.left=imgw+"px";
                }
                tu[j].style.left=0;
                lis[j].style.background=lisactivebgColor;
                next=j;
                now=j;
            }

        }
    }
    function move(type="l"){
        flag=false;
        if(type=="l"){//left的首字母
            next++;
            if(next>tu.length-1){
                next=0;
            }
            tu[next].style.left=imgw+"px";
            animate(tu[now],{left:-imgw},luoboxiaotime);
        }else if(type=="r"){
            next--;
            if(next<0){
                next=tu.length-1;
            }
            tu[next].style.left=-imgw+"px";
            animate(tu[now],{left:imgw},luoboxiaotime);
        }
        animate(tu[next],{left:0},luoboxiaotime,function(){
            lis[now].style.background=liscolor;
            lis[next].style.background=lisactivebgColor;
            flag=true;
            now=next;
        });
    }
    img.onmouseover=function(){
        clearInterval(t);
    }
    img.onmouseout=function(){
        t=setInterval(move,lubotime);
    }
    leftBen.onmouseover=function(){
        clearInterval(t);
    }
    leftBen.onmouseout=function(){
        t=setInterval(move,lubotime);
    }
    rightBen.onmouseover=function(){
        clearInterval(t);
    }
    rightBen.onmouseout=function(){
        t=setInterval(move,lubotime);
    }
    leftBen.onclick=function(){
        if(flag){
            move("l");
        }
    }
    rightBen.onclick=function(){
        if(flag){
            move("r");
        }
    }
}