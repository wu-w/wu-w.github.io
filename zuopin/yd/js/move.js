/**
 * Created by Administrator on 2017/4/21.
 */

// jiaofei(".dfmoney");
// function jiaofei(jia) {
//     const jiao = $(jia);
//     jiao[0].style.cssText = "background: #e40077;border: 1px solid #e40077;color: #fff;"
//     for (let i = 0; i < jiao.length; i++) {
//         jiao[i].onmouseover = function () {
//             jiao[i].style.cssText = "background: #e40077;border: 1px solid #e40077;color: #fff;";
//         }
//         jiao[i].onmouseout = function () {
//             jiao[i].style.cssText = "background: #fff;border: 1px solid #dadada;color: #666;"
//         }
//     }
// }


const topw = $(".gropdown");
const topq = $(".dropdown_menu");
xuanxiangka(topw, topq);


dian();
function dian() {
    const tai = $(".taiyuan")[0];
    const yuan = $(".topul")[0];
    const body=$("body")[0];
    tai.addEventListener("click",function (e) {
        yuan.style.display = "block";
        e.stopPropagation();
    });
    body.addEventListener("click",function () {
        yuan.style.display = "none";
    });
}

const bar = $(".navtop2");
const barq = $(".navbottom");
xuanxiangka(bar, barq);



// mo()
// function mo() {
//     const tui = $(".bannertu")[0];
//     const left = $(".lbnext")[0];
//     const right = $(".lbprev")[0];
//     const lis=$(".bannerlunbo li");
//     let flag=true;
//
//     let nowli=lis[0];
//     for(let i=0;i<lis.length;i++){
//         lis[i].style.background="#ccc";
//     }
//     lis[0].classList.add("active");
//     var t = setInterval(move, 2000);
//
//     function move(type = "l") {
//         if (type == "l") {
//             flag=false;
//
//             animate(tui, {marginLeft: -740}, 1000, function () {
//                     let first = tui.firstElementChild;
//                     tui.appendChild(first);
//                     tui.style.marginLeft = 0 + "px";
//                     flag=true;
//                     nowli.classList.remove("active");
//                     if(nowli.nextElementSibling){
//                         nowli.nextElementSibling.classList.add("active");
//                         nowli=nowli.nextElementSibling;
//                     }else{
//                         nowli.parentNode.firstElementChild.classList.add("active");
//                         nowli=nowli.parentNode.firstElementChild;
//                     }
//
//             })
//         } else if (type == "r") {
//             flag = false;
//             // for (let i = 0; i < 1; i++) {
//                 let last = tui.lastElementChild;
//                 let first = tui.firstElementChild;
//                 tui.insertBefore(last, first)
//                 tui.style.marginLeft = -740+"px";
//                 flag = true;
//             // }
//             animate(tui, {marginLeft: 0}, 1000)
//         }
//     }
//
//     tui.onmouseover=function () {
//         clearInterval(t);
//     }
//     tui.onmouseout=function () {
//         t=setInterval(move,2000)
//     }
//     left.onmouseover=function () {
//         clearInterval(t)
//     }
//     left.onclick=function () {
//         if(flag){
//             move("r")
//         }
//     }
//     right.onmouseover=function () {
//         clearInterval(t)
//     }
//     right.onclick=function () {
//         if(flag){
//             move("l")
//         }
//     }
//     left.onmouseout=function(){
//         t= setInterval(move,2000);
//     }
//     right.onmouseout=function(){
//
//         t= setInterval(move,2000);
//
//     }
// }

bannerlun();
function bannerlun() {
    const imgs = document.querySelectorAll(".bannertu div");
    const box = document.querySelector(".banner");
    const btns = document.querySelectorAll(".bannerlunbo li");
    const prev = document.querySelector(".lbprev");
    const next = document.querySelector(".lbnext");
    var t = setInterval(move, 3000);
    var num = 0;
    var z = 5;
    function move() {
        imgs[num].classList.add("leftOut");
        btns[num].classList.remove("active");
        num++;
        if (num == imgs.length) {
            num = 0;
        }
        btns[num].classList.add("active")
        imgs[num].classList.add("leftIn");
        imgs[num].style.zIndex = z++;
    }
    imgs.forEach(function (img) {
        img.addEventListener("animationend", function () {
            img.className = "";
            flag = true;
        })
    })
    btns.forEach(function (btn, index) {
        btn.onclick = function () {
            if (index == num) {
                return;
            }
            if (index > num) {
                imgs[num].classList.add("leftOut");
                imgs[index].classList.add("leftIn");

            } else {
                imgs[num].classList.add("rightOut");
                imgs[index].classList.add("rightIn");
            }
            btns[num].classList.remove("active");
            btns[index].classList.add("active");
            imgs[index].style.zIndex = z++;
            num = index;
        }
    })
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    prev.onclick = function () {
        if (flag) {
            flag = false;
            imgs[num].classList.add("rightOut");
            btns[num].classList.remove("active");
            num--;
            if (num == -1) {
                num = imgs.length - 1;
            }
            imgs[num].classList.add("rightIn");
            imgs[num].style.zIndex = z++;
            btns[num].classList.add("active");
        }
    }
}



mov()
function mov() {
    const ul=$(".gonggao>ul")[0];
    const li=$(".gonggao>ul>li");
    const next=$(".ggnext")[0];
    const prev=$(".ggprev")[0];
    let flag=true;
    // console.log(ul,li,next,prev)
    var t=setInterval(move,1000)
    function move(type = "l") {
        if (type == "l") {
            flag=false;
                for (let i = 0; i < 1; i++) {
                    let first = ul.firstElementChild;
                    ul.appendChild(first)
                    flag=true;
                }
        }else if (type == "r") {
            flag = false;
            for (let i = 0; i < 1; i++) {
                let last = ul.lastElementChild;
                let first = ul.firstElementChild;
                ul.insertBefore(last, first)
                flag = true;
            }
        }
    }
    next.onmouseover=function () {
        clearInterval(t)
    }
    next.onmouseout=function () {
        t=setInterval(move,1000)
    }
    next.onclick=function () {
        if(flag){
            move("r")
        }
    }
    prev.onmouseover=function () {
        clearInterval(t)
    }
    prev.onmouseout=function () {
        t=setInterval(move,1000)
    }
    prev.onclick=function () {
        if(flag){
            move("l")
        }
    }
}

mos()
function mos() {
    const tui = $(".tjxun")[0];
    const tuijian = $(".tjxun .indexbox");
    const left = $(".tjnext")[0];
    const right = $(".tjprev")[0];
    let flag=true;
    // console.log(tui,tuijian,left,right)
    // tui.style.marginLeft=0
    var t = setInterval(move, 2000);

    function move(type = "l") {
        if (type == "l") {
            flag=false;
            animate(tui, {marginLeft: -295}, 1000, function () {
                for (let i = 0; i < 1; i++) {
                    let first = tui.firstElementChild;
                    tui.appendChild(first)
                    tui.style.marginLeft = 0 + "px";
                    flag=true;
                }
            })
        } else if (type == "r") {
            flag = false;
            for (let i = 0; i < 1; i++) {
                let last = tui.lastElementChild;
                let first = tui.firstElementChild;
                tui.insertBefore(last, first)
                tui.style.marginLeft = -295+"px";
                flag = true;
            }
            animate(tui, {marginLeft: 0}, 500)
        }
    }
    tui.onmouseover=function () {
        clearInterval(t);
    }
    tui.onmouseout=function () {
        t=setInterval(move,2000)
    }
    left.onmouseover=function () {
        clearInterval(t)
    }
    left.onclick=function () {
        if(flag){
            move("r")
        }
    }
    right.onmouseover=function () {
        clearInterval(t)
    }
    right.onclick=function () {
        if(flag){
            move("l")
        }
    }
    left.onmouseout=function(){
        t= setInterval(move,2000);
    }
    right.onmouseout=function(){

        t= setInterval(move,2000);

    }
}

