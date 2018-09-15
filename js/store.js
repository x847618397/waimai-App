window.onload=function(){
	let submit=document.querySelectorAll("main .content ul li .message img")[2];
    console.log(submit);
    let close=document.querySelector(".pop .picture .close");
    let cover=document.querySelector(".pop");
    let word=document.querySelector(".word");
    console.log(cover);
    submit.onclick=function(){
        cover.style.display="block";
        word.style.display="block";

    }
    close.onclick=function(){
        cover.style.display="none";
        word.style.display="none";
    }
}