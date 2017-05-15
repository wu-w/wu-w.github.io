const lis=document.querySelectorAll(".shousuokuang_gouwuche,.wei")
const con=document.querySelectorAll(".gouwucheya,.weixindw")
// console.log(lis,con)
xuanxiangka(lis,con)

// const zi=document.querySelectorAll(".fenlei_logo_yijibiaoti .nav")
// const ku=document.querySelectorAll(".fenlei_logo_yijibiaoti div")
// xuanxiangka(zi,ku)

$(function(){
	// lrCarousel(".bantu",".banner_img",".banner_dayu",".banner_xiaoyu",".dian",2000,"#ddd","#a10000")
	downla(".fenlei_logo_yijibiaoti",".xiala")
})
const returntop=$(".return")[0]
const body=$("body")[0]
const dHeight = document.documentElement.clientHeight;
returntop.onclick=function(){
	animate(body,{scrollTop:0},70)
}