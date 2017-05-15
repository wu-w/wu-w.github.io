$(function (){
	anxujia(".xuanlie",".xuanfu_left","section",".xuanfunav","","#c81000",750)
	Tlunbo(".btz1tu img",".btz1",".btz1lun span",[],1,"#a10000",2000,0,"#fff",".lanb",".ranb");
	Tlunbo(".ner_ufss",".ner_ufs",".ner_ufaa",[],1,"#fd3131",2000,0,"#fff",".ner_ufal",".ner_ufar")
})

const gou=document.querySelectorAll(".gouwu,.dao_zuo,.wdjd,.kf,.wzdh,.sjjd,.banzhong_zuoul ul li")
const wu=document.querySelectorAll(".gouwuxialak,.daozuoxiala,.jingxiala,.top_feichuk,.top_ri2,.jingdongss,.mulu_list")
xuanxiangka(gou,wu);



const xuan=$(".xuanfan")[0];
const body=$("body")[0];
// console.log(body)
xuan.onclick=function(){
	animate(body,{scrollTop:0},100)
}






huaba(".cxgg",".banyou_youhen",".banyou_youscsc",["translateX(0px)","translateX(42px)"])
function huaba(h,m,s,weizhi) {
	const hh=$(h);
	const mm=$(m)[0];
	const sas=$(s);
	console.log(hh,mm,sas);
	let wei= weizhi;
	sas[0].style.zIndex=100;
    for(let i=0;i<sas.length;i++){
        hh[i].onmouseover=function  () {
            for(let j=0;j<sas.length;j++){
                sas[j].style.zIndex=1;
            }
            mm.style.transform=weizhi[i];
            sas[i].style.zIndex=100;
        }
    }

}

zhun(".faxian_you1 a",".faxianyouhen",".faxian_youm",["translateX(0px)","translateX(78px)","translateX(150px)","translateX(228px)","translateX(305px)"])
function  zhun(zun,beih,xxx,wei) {
	const zhun=$(zun);
	const bei=$(beih)[0];
	const xx=$(xxx);
	let hq=wei;
	xx[0].style.zIndex=100;
    for(let i=0;i<xx.length;i++){
        zhun[i].onmouseover=function  () {
            for(let j=0;j<xx.length;j++){
                // let sqa;
                xx[j].style.zIndex=1;
            }
            bei.style.transform=wei[i];
            xx[i].style.zIndex=100;
        }
    }
}


djss()
function djss() {
    const shiqiao=$(".shijian")[0];
    const fenqiao=$(".fenjian")[0];
    const miaoqiao=$(".miaojian")[0];
// console.log(shiqiao,fenqiao)
	setInterval(function () {
        let date=new Date();
        let h=date.getHours();
        // console.log(h)
        let f=date.getMinutes();
        let m=date.getSeconds();
        shiqiao.innerHTML=h;
        // console.log(shiqiao)
        fenqiao.innerHTML=f;
        miaoqiao.innerHTML=m;
    },1000)

}


jiedianlunbo(".anxuj",".jdms ul li",".leftanul",".rightanul",5,1000)
function jiedianlunbo(hezi,img,zuokuohao,youkuohao,num,lunboxiaotime){
    const box=$(hezi)[0];
    // const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
    const boxW=parseInt(document.querySelector(img).offsetWidth);
    const leftBen=$(zuokuohao)[0];
    const rightBen=$(youkuohao)[0];
    // console.log(boxW)
    // console.log(img)
    let n=num;
    let flag=true;
    // let t=setInterval(move,lunbotime);
    // clearInterval(t)
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
        // clearInterval(t);
    }
    leftBen.onmouseover = function(){
        // clearInterval(t);
    }
    rightBen.onmouseover = function(){
        // clearInterval(t);
    }
    rightBen.onmouseout = function(){
        // t=setInterval(move,lunbotime);
    }

    window.onblur = function(){
        // clearInterval(t);
    }
    window.onfocus = function(){
        // t=setInterval(move,lunbotime);
    }

}




