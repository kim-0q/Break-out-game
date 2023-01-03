const ball=document.getElementById('ball');
const back=document.getElementById('background');
const bar=document.getElementById('bar');

let ballmove1, ballmove2, ballmove3, ballmove4;

document.addEventListener('mousemove',function(event){
    bar.style.left=event.screenX+'px';
})

let ballmove=function(){ballmove1=setInterval(function(){
  if(ball.offsetLeft<back.clientWidth-ball.offsetWidth)
  {
    ball.style.left=ball.offsetLeft+4+'px';
    ball.style.top=ball.offsetTop-2+'px';
  }
  else
  {
    clearInterval(ballmove1);
    if(ball.offsetTop>back.clientTop)
    {
      ballmove2=setInterval(function(){
      if(ball.offsetTop>back.clientTop)
        {
        ball.style.left=ball.offsetLeft-4+'px';
        ball.style.top=ball.offsetTop-2+'px';
        }
      else
      {
      clearInterval(ballmove2);
      if(ball.offsetLeft>back.clientLeft)
      {
        ballmove3=setInterval(function(){
          if(ball.offsetLeft>ball.offsetHeight)
          {
            ball.style.left=ball.offsetLeft-4+'px';
            ball.style.top=ball.offsetTop+1+'px';
          }
          else
          {
            clearInterval(ballmove3);
            ballmove4=setInterval(function(){
              if(ball.offsetTop<bar.offsetTop-ball.offsetHeight)
              {
                ball.style.left=ball.offsetLeft+4+'px';
                ball.style.top=ball.offsetTop+2+'px';
              }
              else
              {
                clearInterval(ballmove4);
              }
            },40)
          }
        },40)
      }
      }
      },40)
    }
  }
},40)
}

document.addEventListener('click',ballmove);

