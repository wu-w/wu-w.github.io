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



function xxk(bbn,ccn){
	// bbn[0].style.color="orange";
	for(let i=0;i<bbn.length;i++){
		bbn[i].onmouseover=function (){//onclick是鼠标点击的效果
			for(let j=0;j<ccn.length;j++){
				ccn[j].style.display="none";
				// bbn[i].style.color="#333";
			}			
			ccn[i].style.display="block";
			// bbn[i].style.color="#333"
		}
		// bbn[i].onmouseout=function (){
			// ccn[i].style.display="none"
		// }
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

	function jiedian(pic,Bigbox,Leftbnt,Rightbnt,num){
			const box=$(pic);
			// 轮播图的盒子
			// console.log(box)
			const bigbox=$(Bigbox)[0];
			// 轮播图的大盒子
			// console.log(bigbox)
			// const ul=$(".box ul")[0]
			// var lastlen=box.children.length;
			// 获取轮播图的长度
			// console.log(lastlen)
			// const li=$(lis);
			// 每一个轮播图
			const leftbnt=$(Leftbnt)[0];
			// 左按钮
			const rightbnt=$(Rightbnt)[0];
			// 右按钮
			// console.log(rightbnt)
			var flag=true;
			// 开关
			var n=num;
			let s
			let now=0;
			let next=0;
			// 一个盒子里放几张图，让大盒子的宽放大多少倍
			const imgW = parseInt(window.getComputedStyle(bigbox,null).width);
			// 获取最大盒子的宽度
				// console.log(bigbox)
			for(let i=0;i<box.length;i++){
				box[i].style.left=imgW+"px";
			}
			box[0].style.left=0;
			var t=setInterval(move,3000);
			// bigbox.style.width=(imgW*n)+"px";
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
				next++;
				flag=false;
					if(next>box.length-1){
						next=0;
					}
					for(let i=0;i<box.length;i++){
						box[i].style.left=imgW+"px";
					}
					box[now].style.left=0+"px";
					animate(box[now],{left:-imgW*n},1000);
					animate(box[next],{left:0},1000,function(){
						// for(let i=0;i<n;i++){
							// let first = box.firstElementChild;
							// box.appendChild(first)
							now=next;
							flag=true;

						// }	
					})
				
			}else if(type=="r"){
				next--;
				flag=false;
					if(next<0){
						next=box.length-1;
					}
					for(let i=0;i<box.length;i++){
						box[i].style.left=-imgW+"px";
					}
					box[now].style.left=0+"px";
					animate(box[now],{left:imgW*n},2500);
					animate(box[next],{left:0},2500,function(){
						// for(let i=0;i<n;i++){
							// let first = box.firstElementChild;
							// box.appendChild(first)
							now=next;
							flag=true;

						// }	
					})
				}
				
			}
				leftbnt.onmouseover=function(){
					clearInterval(t);
				}
				rightbnt.onmouseover=function(){
					clearInterval(t);
				}
				leftbnt.onmouseout=function(){
					t= setInterval(move,3000);
				}
				rightbnt.onmouseout=function(){
					
					t= setInterval(move,3000);
					
				}
				leftbnt.onclick=function(){
					if(flag){

						move("l");
					}
				}
				rightbnt.onclick=function(){
					if(flag){

						move("r");
					}
					
				}
		}


		function dd(picc,Bigboxc,Leftbntc,Rightbntc,numm){
			const box=$(picc)[0]
			// 轮播图的盒子
			// console.log(box)
			const bigbox=$(Bigboxc)[0]
			// 轮播图的大盒子
			// console.log(bigbox)
			// const ul=$(".box ul")[0]
			var lastlen=box.children.length;
			// 获取轮播图的长度
			// console.log(lastlen)
			// const li=$(lis)
			// 每一个轮播图
			const leftbnt=$(Leftbntc)[0]
			// 左按钮
			const rightbnt=$(Rightbntc)[0]
			// 右按钮
			// console.log(rightbnt)
			var flag=true;
			// 开关
			var n=numm;
			// 一个盒子里放几张图，让大盒子的宽放大多少倍
			const imgW = parseInt(window.getComputedStyle(bigbox,null).width);
			// 获取最大盒子的宽度
				// console.log(bigbox)
			var t=setInterval(move,200)
			clearInterval(t);
			bigbox.style.width=(imgW*n)+"px";
				function move(type="l"){

					if(type=="l"){
						flag=false;
						
							animate(box,{left:-imgW*n},200,function(){
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
						animate(box,{left:0},200,function(){
						})
					}
				
			}
				leftbnt.onmouseover=function(){
					clearInterval(t);
				}
				rightbnt.onmouseover=function(){
					clearInterval(t);
				}
				// leftbnt.onmouseout=function(){
				// 	t= setInterval(move,1000);
				// }
				// rightbnt.onmouseout=function(){
					
				// 	t= setInterval(move,1000);
					
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
		function anxujia(lefttu,left,centertu,nav_top,bgmnow,bgmnexty,navwidth){
			const list=$(lefttu)
			const box=$(left)[0]
			const section=$(centertu)
			const nav=$(nav_top)[0]
			const ch=document.documentElement.clientHeight;
			// section[0].queryseletorAll("img")
			// console.log(nav)
			var obj=scrollobj();
			// console.log(obj)
			for(let i=0;i<list.length;i++){
				list[i].onclick=function(){
					animate(obj,{scrollTop:section[i].offsetTop},200)
					// console.log(section[i].offsetTop)
				}	
			}

			let flagx=true;
			let flagy=false;
			window.onscroll=function(){
				for(let i=0;i<section.length;i++){
					if(obj.scrollTop+0.5*ch>=section[i].offsetTop){
						for(let j=0;j<list.length;j++){
							list[j].style.background=bgmnow;
						}
						list[i].style.background=bgmnexty[i];
					}
					if(obj.scrollTop+ch>=section[i].offsetTop){
							let img=$("img",section[i])
							// console.log(img)
						for(let j=0;j<img.length;j++){
							img[j].src=img[j].getAttribute("imgUrl")
							
						}
					}

				}
				if(obj.scrollTop>=navwidth){
					//设备1与设备2，一个开一个关，在开一的同时要考虑2
					
					if(flagx){
						flagx=false;
						flagy=true;
						animate(nav,{top:0},function(){flagx=true;})

					}
					box.style.display="block"
				}else{
					if(flagy){
						// flagy=false;
						flagx=true;
						animate(nav,{top:-50},function(){flagy=true;})

					}
					box.style.display="none"
				}
			}
			setTimeout(function(){
				animate(nav,{top:-50},function(){
					flagy=true;
				})
			},1000)
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


		function  downlq(iteme,itemule) {
			const item = $(iteme);//导航上的(首页等)
			const ul = $(itemule);//导航上的下拉
			for(let i=0;i<ul.length;i++){
				let h=parseInt(attr(ul[i],"height"));//获取高
				ul[i].setAttribute("h",h)//添加一个高的属性
				ul[i].style.height=0;//让下拉框的高为0
			}
			for(let i=0;i<item.length;i++){
				//鼠标事件，对象，移入移出函数
				hover(item[i],function(){
					if(item[i].children[0]){//寻找item下是否有下拉框
						let ul =item[i].children[0];
						animate(ul,{height:ul.getAttribute("h")},200)//让下拉框的高从0到应有的高
					}//鼠标移入事件
				},function(){
					if(item[i].children[0]){
						let ul =item[i].children[0];
						animate(ul,{height:0},200);//让下拉框的高变回0
					}//鼠标移出事件
				})

			}
		}



		function  downlw(itemq,itemulq) {
			const item = $(itemq);//导航上的(首页等)
			const ul = $(itemulq);//导航上的下拉
			for(let i=0;i<ul.length;i++){
				let h=parseInt(attr(ul[i],"height"));//获取高
				ul[i].setAttribute("h",h)//添加一个高的属性
				ul[i].style.height=0;//让下拉框的高为0
				ul[i].style.opacity=0;
			}
			for(let i=0;i<item.length;i++){
				//鼠标事件，对象，移入移出函数
				hover(item[i],function(){
					if(item[i].children[4]){//寻找item下是否有下拉框
						let ul =item[i].children[4];
						animate(ul,{height:ul.getAttribute("h"),opacity:4},60)//让下拉框的高从0到应有的高
					}//鼠标移入事件
				},function(){
					if(item[i].children[4]){
						let ul =item[i].children[4];
						animate(ul,{height:0,opacity:0},60);//让下拉框的高变回0
					}//鼠标移出事件
				})

			}
		}






	function zuoyou(tuname,imgname,leftname,rightname,liname,bgc,acbgc){
		const tu= $ (tuname);//获取轮播图
		// console.log(tu)
		const img= $ (imgname)[0];// 获取轮播图的盒子
		// console.log(img)
		const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度
		const leftbtn=$(leftname)[0];//获取左按钮
		// console.log(leftbtn)
		const rightbtn=$(rightname)[0];//获取右按钮
		// console.log(rightbtn)
		const li=$(liname);//获取轮播点
		let flag=true;//开关
		//初始化
		var t=setInterval(move,1000);
		var now=0;
		var next=0;//var next=1;
		// 把所有的图片都移到右边
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		//第一张图显示
		tu[0].style.left=0;
		// 初始化轮播点的白色
		li[0].style.background=bgc;//li[0].classList.add("active");

		//轮播函数
		function move(type){
			flag=false;//当图片移动过程中让他无法点击
			if(type=="l"){//向左移动
				next++;
				if(next>tu.length-1){
					next=0;
				}//如果轮播图超出最后一张 让他从第一张重新开始
				tu[next].style.left=imgw+"px";	//下一张图片的位置			
				animate(tu[now],{left:-imgw},500);//当前图片向左移
			}else if(type=="r"){//向右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}//如果向右移的话 当下一张图片的下标小于0时 让它从最后一张开始
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},500);
			}
			//轮播结束
			animate(tu[next],{left:0},500,function(){
				flag=true;//开关打开 可以继续点击
				li[next].style.background=acbgc;
				//li[next].classList.add("active");
				li[now].style.background=bgc;
				//li[now].classList.remove("active");
				now=next;
			});			
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t=setInterval(move,1000);
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
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		window.onblur=function(){
			clearInterval(t)
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
		// 鼠标经过 切换图片 图片暂停
		for(let i=0;i<li.length;i++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					for(let j=0;j<li.length;j++){
					li[j].style.background=bgc;
					//li[now].classList.remove("active");//让所有的li元素变为橙色
					tu[j].style.left=imgw+"px";
					}
				}		
				
				li[i].style.background=acbgc;
				//li[next].classList.add("active");//要来的元素
				tu[i].style.left=0;
				now=i;
				next=i;//当鼠标移走以后 for循环重新开始
			}
		}
}



function Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor,zuokuohao,youkuohao){
    const tu=$(pic);
    // console.log(tu)
    const banner=$(bannerBox)[0];
    // console.log(banner)
    const li=$(lis);
    // console.log(li)
    const leftBen=$(zuokuohao)[0];
    const rightBen=$(youkuohao)[0];
    // console.log(leftBen,rightBen)
    const color=colorArr;
    for(let i=0;i<tu.length;i++){
        tu[i].style.opacity=tuopacity;
        li[i].style.background=lisColor;//白
        banner.style.background=color[i];
    }
    tu[0].style.opacity=tuactiveopacity;
    li[0].style.background=liactivebgColor;//红
    banner.style.background=color[0];
    var num=0;
    var now=0;
    var flag=true;
    var t=setInterval(move,lubotime);

    function move(type="r"){
        flag=false;
        if(type=="r"){
            num++;
            if(num>tu.length-1){
                num=0;
            }
        }else if(type=="l"){
            num--;
            if(num<0){
                num=tu.length-1;
            }
        }
        for(let i=0;i<li.length;i++){
            li[i].style.background=lisColor;
        }
        li[num].style.background=liactivebgColor;//红
        banner.style.background=color[num];
        animate(tu[now],{opacity:0},1000);
        animate(tu[num],{opacity:tuactiveopacity},1000,function(){
            now=num;
            flag=true;
        });
    }
    banner.onmouseover=function(){
        clearInterval(t);

    }
    banner.onmouseout=function(){
        t=setInterval(move,lubotime);
    }
    for(let j=0;j<li.length;j++){
        li[j].onmouseover=function(){
            if(flag){
                flag=false;
                for(let i=0;i<tu.length;i++){
                    // tu[i].style.opacity=tuopacity;
                    li[i].style.background=lisColor;
                    banner.style.background=color[i];
                }
                li[j].style.background=liactivebgColor;
                banner.style.background=color[j];
                animate(tu[now],{opacity:0},1000);
                animate(tu[j],{opacity:tuactiveopacity},1000,function(){
                    num=j;
                    now=num;
                    flag=true;
                });
            }
        }
    }
    leftBen.onmouseover=function(){
        clearInterval(t);
    }
    rightBen.onmouseover=function(){
        clearInterval(t);
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


