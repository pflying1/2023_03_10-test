//동적으로 요소 만들기 부분입니다. 
const body = document.body;
const root = document.getElementById('root');
function elementMaker(tagname, parent){
  const element = document.createElement(tagname);
  parent.appendChild(element);
}
//동적으로 요소에 속성을 부여한다.
function attriMaker(attriName,attriValue,parent) {
  parent.setAttribute(attriName,attriValue)
}
//동적으로 요소에 텍스트를 추가한다.
function textMaker(text,parent) {
  parent.textContent = text;
}
//element 만들기 시작 부분입니다. 
//header
elementMaker('header',root);
textMaker('만수무강',root.children[0]);

//nav
elementMaker('nav',root);
//팀소개 nav > children[0]
elementMaker('div', root.children[1]);
  elementMaker('div', root.children[1].children[0]);
    // 팀 소개 text 쓴부분
    elementMaker('div', root.children[1].children[0].children[0]);
      textMaker('팀소개', root.children[1].children[0].children[0].children[0]);
    //팀소개 옆 버튼부분
    elementMaker('button', root.children[1].children[0].children[0]);
      attriMaker('id','button1',root.children[1].children[0].children[0].children[1])
      textMaker('click', root.children[1].children[0].children[0].children[1])
  //버튼을 누르면 나오는 내용
  elementMaker('ul', root.children[1].children[0]);
  //nav > children[0] > children[1] > children
  for(let a =0; a<3; a++)
  elementMaker('li', root.children[1].children[0].children[1]);
  textMaker("팀 이름 : "+a.teamInformation.teamName,
  root.children[1].children[0].children[1].children[0])
  textMaker("팀 이름 스토리 : "+a.teamInformation.teamNameStory,
  root.children[1].children[0].children[1].children[1])
  textMaker("팀 매니저 : "+a.teamInformation.teamManager,
  root.children[1].children[0].children[1].children[2])

//팀원구성 nav > children[1]
elementMaker('div', root.children[1]);
  elementMaker('div', root.children[1].children[1]);
    //팀원 구성 text쓴 부분
    elementMaker('div', root.children[1].children[1].children[0]);
      textMaker('팀원구성', root.children[1].children[1].children[0].children[0]);
    //팀원 구성 옆 버튼
    elementMaker('button', root.children[1].children[1].children[0]);
      attriMaker('id','button2',root.children[1].children[1].children[0].children[1])
      textMaker('click', root.children[1].children[1].children[0].children[1])
  //버튼을 누르면 나오는 내용
  elementMaker('ul', root.children[1].children[1]);
  for(let i =0; i<5; i++){
    elementMaker('li', root.children[1].children[1].children[1]);
    textMaker(
      `${i+1}.`+a.teamInformation.teamAllMember[i].name +
      " "+a.teamInformation.teamAllMember[i].teamPosition+
      " 깃허브 주소 : "+a.teamInformation.teamAllMember[i].githubAddress,
      root.children[1].children[1].children[1].children[i]
      )
    }
    
//트레이닝 구성 nav > children[2]
elementMaker('div', root.children[1]);
//nav > children[2] > children[2]
  elementMaker('div', root.children[1].children[2]);
    //트레이닝 구성text쓴 부분
    elementMaker('div', root.children[1].children[2].children[0]);
      textMaker('트레이닝 구성', root.children[1].children[2].children[0].children[0]);
    //트레이닝 구성 옆 버튼
    elementMaker('button', root.children[1].children[2].children[0]);
      attriMaker('id','button3',root.children[1].children[2].children[0].children[1])
      textMaker('click', root.children[1].children[2].children[0].children[1])
  //버튼을 누르면 나오는 내용
  elementMaker('ul', root.children[1].children[2]);
  for(let training=0; training<a.trainingInformation.subject.length; training++){
    elementMaker('li', root.children[1].children[2].children[1])
  textMaker(
    `${training+1}.`+a.trainingInformation.subject[training] ,
    root.children[1].children[2].children[1].children[training]
    )
  }

//main
elementMaker('main',root);
  elementMaker('h1',root.children[2])
    textMaker("포켓몬 도감 만들기 예시입니다.", root.children[2].children[0])
  elementMaker('img',root.children[2])
    attriMaker('src','https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjBfMjc3/MDAxNTUzMDYxNDU5OTUy.nMLyqYQk98rRnhV9fJ7HQZqbbmZYRKdvAMloK6fySt8g.FXP9RHK6H4XDDrm6FuXg7vJl_J8ir9mczw-9JUwQgCkg.JPEG.hanee218/1551327280-1.jpg?type=w800'
    , root.children[2].children[1])

//footer
elementMaker('footer',root);