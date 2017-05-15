/**
 * Created by Administrator on 2017/4/18.
 */
const a=$(".con li");
const b=$(".span");
const e=$(".conb")
// console.log(a,b,e)
huaa(a,b,e);
const c=$(".onecli");
const d=$(".onespan");
const f=$(".onehua")
huaa(c,d,f);
function huaa(a,b,e) {
    a[0].style.borderBottomColor="#e5004f";
    // console.log(a[0])
    b[0].style.display="block";
    for(let k=0;k<e.length;k++){
        e[k].style.display="none";
    }
    e[0].style.display="block";
    for(let i=0;i<a.length;i++){
        a[i].onmouseover=function () {
            for(let j=0;j<a.length;j++){
                a[j].style.borderBottomColor="#333";
                b[j].style.display="none";
                e[j].style.display="none";
                a[j].style.fontWeight="normal";
            }
            a[i].style.borderBottomColor="#e5004f";
            b[i].style.display="block";
            e[i].style.display="block";
            a[i].style.fontWeight="bold";
        }
    }
}

const g=$(".navxiala,.f_right_first,.listli");
const h=$(".navewm,.tianjia,.listsecond");
xuanxiangka(g,h);



Tlunbo(".btutu img",".bannertu",".blund",["url(img/90d7755d-4338-4a17-a8d5-f0a259e7fae1.jpg)center 0","url(img/be8b5231-e183-41ad-94a8-76ffa5420212.jpg)center 0","url(img/ef051f20-151e-4025-9a72-cb2f9fcea000.jpg)center 0","url(img/42c0878d-12e4-4422-9f6b-ac9fedc5e4a7.jpg)center 0"],1,"#e5004f",2000,0,"#211616",".blan",".rlan")

function Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor,zuokuohao,youkuohao){
    const tu=$(pic);
    const banner=$(bannerBox)[0];
    const li=$(lis);
    const leftBen=$(zuokuohao)[0];
    const rightBen=$(youkuohao)[0];
    const color=colorArr;
    for(let i=0;i<tu.length;i++){
        tu[i].style.opacity=0;
    }
    tu[0].style.opacity=tuactiveopacity;
    li[0].style.borderBottomColor=liactivebgColor;
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
        for(let i=0;i<tu.length;i++){
            // tu[i].style.opacity=tuopacity;
            li[i].style.borderBottomColor=lisColor;
            banner.style.background=color[i];
        }
        li[num].style.borderBottomColor=liactivebgColor;
        banner.style.background=color[num];
        animate(tu[now],{opacity:0},800);
        animate(tu[num],{opacity:tuactiveopacity},800,function(){
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
                    li[i].style.borderBottomColor=lisColor;
                    banner.style.background=color[i];
                }
                li[j].style.borderBottomColor=liactivebgColor;
                banner.style.background=color[j];
                animate(tu[now],{opacity:0},800);
                animate(tu[j],{opacity:tuactiveopacity},800,function(){
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


border(".conbo .border_top",".conbo .border_right",".conbo .border_bottom",".conbo .border_left",".conboo",220,260);
border(".onecrong .border_top",".onecrong .border_right",".onecrong .border_bottom",".onecrong .border_left",".onecrong",200,248);
border(".clrightborder .border_top",".clrightborder .border_right",".clrightborder .border_bottom",".clrightborder .border_left",".clrightborder",272,182);
function border(btt,brr,bbb,bll,ll,xx,yy) {
    const bt=$(btt);
    const br=$(brr);
    const bb=$(bbb);
    const bl=$(bll);
    const l=$(ll);
    // console.log(bt,br,bb,bl,l);
    for(let i=0;i<l.length;i++){
        l[i].onmouseover=function () {
            animate(bt[i],{width:xx},60);
            animate(br[i],{height:yy},60);
            animate(bb[i],{width:xx},60);
            animate(bl[i],{height:yy},60)
        }
        l[i].onmouseout=function () {
            animate(bt[i],{width:0},60);
            animate(br[i],{height:0},60);
            animate(bb[i],{width:0},60);
            animate(bl[i],{height:0},60)
        }
    }

}

yidong(".lcc",".lrr",".lrrr",".lrc");
yidong(".lccc",".lrrc",".lrrrc",".lrcc");
function yidong(yii,leftt,rightt,liss) {
    const yi=$(yii);
    const left=$(leftt)[0];
    const right=$(rightt)[0];
    const lis=$(liss);
    // console.log(yi,left,right,lis)
    // yi[0].style.marginLeft=0;
    lis[0].style.backgroundPosition="0 -13px";
    left.onclick=function () {
        animate(yi[0],{marginLeft:0},300,function () {
            lis[1].style.backgroundPosition="0 0";
            lis[0].style.backgroundPosition="0 -13px"
        });

    }

    right.onclick=function () {
        animate(yi[0],{marginLeft:-390},300,function () {
            lis[0].style.backgroundPosition="0 0";
            lis[1].style.backgroundPosition="0 -13px"
        })
    }
    lis[0].onclick=function () {
        animate(yi[0],{marginLeft:0},300,function () {
        lis[1].style.backgroundPosition="0 0";
        lis[0].style.backgroundPosition="0 -13px"
    })


    }

    lis[1].onclick=function () {
        animate(yi[0],{marginLeft:-390},300,function () {
            lis[0].style.backgroundPosition="0 0";
            lis[1].style.backgroundPosition="0 -13px";
        });
    }
}



jiedian(".cllong",".clscrollfirst",".cllongfirst",".clleftan",".clrightan",1);
jiedian(".cllong1",".clscrollfirst1",".cllongfirst1",".clleftan1",".clrightan1",1);
jiedian(".cllong2",".clscrollfirst2",".cllongfirst2",".clleftan2",".clrightan2",1);
jiedian(".cllong3",".clscrollfirst3",".cllongfirst3",".clleftan3",".clrightan3",1);
jiedian(".cllong4",".clscrollfirst4",".cllongfirst4",".clleftan4",".clrightan4",1);
jiedian(".cllong5",".clscrollfirst5",".cllongfirst5",".clleftan5",".clrightan5",1);
jiedian(".cllong6",".clscrollfirst6",".cllongfirst6",".clleftan6",".clrightan6",1);
jiedian(".cllong7",".clscrollfirst7",".cllongfirst7",".clleftan7",".clrightan7",1);
jiedian(".cllong8",".clscrollfirst8",".cllongfirst8",".clleftan8",".clrightan8",1);


anxujia(".m",".float","section","","background-image: none;line-height: 18px;background: #e5004f;color: #fff;font-size: 14px;text-align: center;",850);


const mm=$(".m10")[0];
const bo=$("body")[0];
mm.onclick=function () {
    animate(bo,{scrollTop:0},60)
}