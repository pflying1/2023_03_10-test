let buttonValue = true;
//팀소개 옆에 있는 버튼 클릭
//팀소개 옆 버튼을 누르면 내용이 나오고 다시한번 누르면 내용이 사라진다.
button1.addEventListener('click',function(){
  if(buttonValue){
    button1.style.color = "white";
    button1.style.backgroundColor = "black";
    root.children[1].children[0].children[1].style.display="block";
    buttonValue =false;
  }else{
    button1.style.color = "black";
    button1.style.backgroundColor = "white";
    root.children[1].children[1].children[1].style.display="none";
    root.children[1].children[0].children[1].style.display="none";
    root.children[1].children[2].children[1].style.display="none";
    buttonValue =true;
  }
});
//팀원 구성 옆에 있는 버튼 클릭
//팀원 구성 옆 버튼을 누르면 내용이 나오고 다시한번 누르면 내용이 사라진다.
button2.addEventListener('click',function(){
  if(buttonValue){
    button2.style.color = "white";
    button2.style.backgroundColor = "black";
  root.children[1].children[1].children[1].style.display="block";
  buttonValue =false;
  }else{
    button2.style.color = "black";
    button2.style.backgroundColor = "white";
    root.children[1].children[0].children[1].style.display="none";
    root.children[1].children[1].children[1].style.display="none";
    root.children[1].children[2].children[1].style.display="none";
    buttonValue =true;
  }
});
//트레이닝 구성 옆에 있는 버튼 클릭
//트레이닝 구성 옆 버튼을 누르면 내용이 나오고 다시한번 누르면 내용이 사라진다.
button3.addEventListener('click',function(){
  if(buttonValue){
    button3.style.color = "white";
    button3.style.backgroundColor = "black";
  root.children[1].children[2].children[1].style.display="block";
  buttonValue =false;
  }else{
    button3.style.color = "black";
    button3.style.backgroundColor = "white";
    root.children[1].children[0].children[1].style.display="none";
    root.children[1].children[1].children[1].style.display="none";
    root.children[1].children[2].children[1].style.display="none";
    buttonValue =true;
  }
});

