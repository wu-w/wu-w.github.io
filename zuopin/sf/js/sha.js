        const x=$(".xiashang");
//		console.log(x)
		const y=$(".xiashang ul");
//		console.log(y);
		xuanxiangka(x,y);


		const zz=$(".jx_sf");
		const xx=$(".zhezhao");
//		console.log(zz,xx)
		xxx(zz,xx);
        function xxx(btn,con){
            for(let i=0;i<btn.length;i++){
                con[i].style.opacity=0;
                btn[i].onmouseover=function (){//onclick是鼠标点击的效果
                    for(let j=0;j<con.length;j++){
                        con[j].style.opacity=0;
                    }
                    con[i].style.opacity=1;
					con[i].style.transition="opacity 0.3s ease-in-out 0s";
                }
                btn[i].onmouseout=function (){
                    con[i].style.opacity=0;
                }
            }
        }
        tm();
       function  tm() {
            const cc=$(".banner_right_background img");
            const vv=$(".banner_right_background")[0];
            // console.log(cc,vv)
            
            var num=0;
            setInterval(function  () {
                num++;
                if(num>=cc.length){
                    num=0;}
                    for (let i = 0; i<cc.length; i++) {
                        cc[i].style.opacity=0;
                }
                animate(cc[num],{opacity:1},500);
            },2000)    
        }
        


        
        
        as();
        function as () {
            const bb=$(".lzjsq");
            const bbb=$(".yy_rightsection");
             const poiu=$(".yy_rightbody_sleft>ul>li");
            const po=$(".yrsl");
            const poi=$(".yrsl_right");

            // console.log(bb)
            bb[0].style.color="#00a8f6";
            bb[0].style.borderBottom="3px solid #00a8f6";
            bbb[1].style.display="none";
            poiu[0].style.height="auto";
                    poi[0].style.display="block";
                    for (let k = 0; k < poiu.length; k++) {
                        poiu[k].onmouseover=function  () {
                        poiu[k].style.height="auto";
                        for (let l = 0; l < poi.length; l++) {
                            poiu[l].style.height="auto";
                            poiu[l].style.display="block";
                            poi[l].style.display="none";
                        }
                            poiu[k].style.display="block"
                            poi[k].style.display="block";
                        }
                        poiu[k].onmouseout=function  () {
                            // poi[i].style.display="none";
                            poiu[k].style.display="block"
                            poiu[k].style.height="auto";
                        }
                    }

            for (let i = 0; i < bb.length; i++) {
            poiu[0].style.height="auto";
            poi[0].style.display="block";
                bb[0].onclick=function  () {
                    bbb[1].style.display="none";
                    bbb[0].style.display="block";
                    poiu[0].style.height="auto";
                    poi[0].style.display="block";
                    for (let k = 0; k < poiu.length; k++) {
                        poiu[k].onmouseover=function  () {
                        poiu[k].style.height="auto";
                        for (let l = 0; l < poi.length; l++) {
                            poiu[l].style.height="auto";
                            poiu[l].style.display="block";
                            poi[l].style.display="none";
                        }
                            poiu[k].style.display="block"
                            poi[k].style.display="block";
                        }
                        poiu[k].onmouseout=function  () {
                            // poi[i].style.display="none";
                            poiu[k].style.display="block"
                            poiu[k].style.height="auto";
                        }
                    }
                    for (let j = 0; j < bb.length; j++) {
                        bb[j].style.color="#333"    
                        bb[j].style.borderBottom="none";
                    };
                    bb[0].style.color="#00a8f6"    
                    bb[0].style.borderBottom="3px solid #00a8f6";
                }
                
                bb[1].onclick=function  () {
                    
                    bbb[0].style.display="none";
                    bbb[1].style.display="block";
                    poiu[0].style.height="auto";
                    poi[0].style.display="block";
                    for (let k = 0; k < poiu.length; k++) {
                        poiu[k].onmouseover=function  () {
                        poiu[k].style.height="auto";
                        for (let l = 0; l < poi.length; l++) {
                            poiu[l].style.height="auto";
                            poiu[l].style.display="block";
                            poi[l].style.display="none";
                        }
                            poiu[k].style.display="block"
                            poi[k].style.display="block";
                        }
                        poiu[k].onmouseout=function  () {
                            // poi[i].style.display="none";
                            poiu[k].style.display="block"
                            poiu[k].style.height="auto";
                        }
                    }
                    for (let j = 0; j < bb.length; j++) {
                        bb[j].style.color="#333"    
                        bb[j].style.borderBottom="none";
                    };
                    for (let j = 0; j < bb.length; j++) {
                        bb[j].style.color="#333"    
                        bb[j].style.borderBottom="none";
                    };
                    bb[1].style.color="#00a8f6"    
                    bb[1].style.borderBottom="3px solid #00a8f6";
                }
                
            }
        }







