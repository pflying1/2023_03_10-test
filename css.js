
    //스타일 부분
    //스타일 동적으로 만들기
    function styleMaker(object){
      for(let i=0; i<object.arrayName.length; i++)
      object.position.style[object.arrayName[i]] = object.arrayValue[i];
    }
    
    //bodyStyle
    const bodyStyle = {
      arrayName : ["boxSizing","margin"],
      arrayValue : ["border-box","0"],
      position: body
    }
    styleMaker(bodyStyle);

    //rootStyle
    const rootStyle = {
      arrayName : ["width","height"],
      arrayValue : ["100vw","100vh"],
      position: root
    }
    styleMaker(rootStyle);

    //headerStyle
    const headerStyle = {
      arrayName : ["width","height","display","flexDirection","justifyContent","alignItems","fontSize","color"],
      arrayValue : ["100%","10%","flex","row","center","center","50px","royalblue"],
      position: root.children[0]
    }
    styleMaker(headerStyle);

    //nav style
    const navStyle = {
      arrayName : ["width","height","display","flexDirection"],
      arrayValue : ["100%","20%","flex","row"],
      position: root.children[1]
    }
    styleMaker(navStyle);
    //nav > 팀소개 스타일
    const teamNameStyle = {
      arrayName : ["width","height","display","alignItems","flexDirection","border"],
      arrayValue : ["35%","20%","flex","center","column","1px solid black"],
      position: root.children[1].children[0]
    }
    styleMaker(teamNameStyle);
    //nav 팀소개 wrap
    const teamNameWrapStyle = {
      arrayName : ["width","height","display","flexDirection","justifyContent"],
      arrayValue : ["100%","100%","flex","row","center"],
      position: root.children[1].children[0].children[0]
    }
    styleMaker(teamNameWrapStyle);
    //nav > 팀 소개 버튼 
    const button1Style = {
      arrayName : ["width","height"],
      arrayValue : ["50px","20px"],
      position: root.children[1].children[0].children[0].children[1]
    }
    styleMaker(button1Style);
    //nav > 팀소개 내용 wrap
    const teamNameTextWrapStyle = {
      arrayName : ["display","margin","position"],
      arrayValue : ["none","5%","absolute"],
      position: root.children[1].children[0].children[1]
    }
    styleMaker(teamNameTextWrapStyle);
    //nav > 팀소개 내용 스타일
    for(let teamName1 =0; teamName1<root.children[1].children[0].children[1].children.length; teamName1++){
    const teamNameTextStyle = {
      arrayName : ["width","height","display","flexDirection","border","justifyContent","marginLeft","color","backgroundColor"],
      arrayValue : ["100%","100%","flex","column","1px solid black","center","-5%","white","black"],
      position: root.children[1].children[0].children[1].children[teamName1]
    }
    styleMaker(teamNameTextStyle);
  }
    //nav > 팀원구성
    const teamMemberStyle = {
      arrayName : ["width","height","display","alignItems","flexDirection","border"],
      arrayValue : ["35%","20%","flex","center","column","1px solid black"],
      position: root.children[1].children[1]
    }
    styleMaker(teamMemberStyle);
    //nav > 팀원구성 wrap
    const teamMemberWrapStyle = {
      arrayName : ["width","height","display","flexDirection","justifyContent"],
      arrayValue : ["100%","100%","flex","row","center"],
      position: root.children[1].children[1].children[0]
    }
    styleMaker(teamMemberWrapStyle);
    //nav > 팀원구성 버튼 
    const button2Style = {
      arrayName : ["width","height"],
      arrayValue : ["50px","20px"],
      position: root.children[1].children[1].children[0].children[1]
    }
    styleMaker(button2Style);
    //nav > 팀원구성 내용 wrap
    const teamMemberTextWrapStyle = {
      arrayName : ["display","margin","position"],
      arrayValue : ["none","5%","absolute"],
      position: root.children[1].children[1].children[1]
    }
    styleMaker(teamMemberTextWrapStyle);
    //nav > 팀원구성 내용
    for(let teamMember1 =0; teamMember1<root.children[1].children[1].children[1].children.length; teamMember1++){
    const teamMemberTextStyle = {
      arrayName : ["width","height","display","flexDirection","border","justifyContent","marginLeft","color","backgroundColor"],
      arrayValue : ["80%","80%","flex","column","1px solid black","center","5%","white","black"],
      position: root.children[1].children[1].children[1].children[teamMember1]
    }
    styleMaker(teamMemberTextStyle);
  }
      //nav > 트레이닝 구성
      const trainnigStyle = {
      arrayName : ["width","height","display","alignItems","flexDirection","border"],
      arrayValue : ["30%","20%","flex","center","column","1px solid black"],
      position: root.children[1].children[2]
    }
    styleMaker(trainnigStyle);
    //nav > 트레이닝 wrap
    const trainingWrapStyle = {
      arrayName : ["width","height","display","flexDirection","justifyContent"],
      arrayValue : ["100%","100%","flex","row","center"],
      position: root.children[1].children[2].children[0]
    }
    styleMaker(trainingWrapStyle);
    //nav > 트레이닝 버튼 
    const button3Style = {
      arrayName : ["width","height"],
      arrayValue : ["50px","20px"],
      position: root.children[1].children[2].children[0].children[1]
    }
    styleMaker(button3Style);
    //nav > 트레이닝 내용 wrap
    const triningTextWrapStyle = {
      arrayName : ["display","margin","position"],
      arrayValue : ["none","5%","absolute"],
      position: root.children[1].children[2].children[1]
    }
    styleMaker(triningTextWrapStyle);
    //nav > 트레이닝 구성 내용
    for(let training1 =0; training1<root.children[1].children[2].children[1].children.length; training1++){
    const trainingTextStyle = {
      arrayName : ["width","height","display","flexDirection","border","justifyContent","marginLeft","color","backgroundColor"],
      arrayValue : ["100%","100%","flex","column","1px solid black","center","-5%","white","black"],
      position: root.children[1].children[2].children[1].children[training1]
    }
    styleMaker(trainingTextStyle);
  }
    //main style
    const mainStyle = {
      arrayName : ["width","height"],
      arrayValue : ["100%","55%"],
      position: root.children[2]
    }
    styleMaker(mainStyle);

    //footer style
    const footerStyle = {
      arrayName : ["width","height"],
      arrayValue : ["100%","5%"],
      position: root.children[3]
    }
    styleMaker(footerStyle);