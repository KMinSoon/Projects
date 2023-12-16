//poketmon
var popX = window.screen.width / 2 - 200;
var popY = window.screen.height / 2 - 225;
var myChar = sessionStorage.getItem('myChar');

function popUp() {
  popupWindow = window.open(
    './pSelect.html',
    'starting',
    'left=' + popX + ',top=' + popY + ',resizable=no'
  );
  popupWindow.resizeTo(400, 450);
  popupWindow.onresize = (_) => {
    popupWindow.resizeTo(400, 450);
  };
}

//pSelect
var MC;

function check() {
  location.replace('./pCheck.html');
  MC = Math.floor(Math.random() * 4);
  sessionStorage.setItem('myChar', MC);
}

//pCheck
var bb = document.getElementById('aa');

function showImg() {
  if (myChar == 0) {
    bb.innerHTML = "<img src='./picture/피카츄.gif'>";
    document.body.style.background = '#0063dc';
  } else if (myChar == 1) {
    bb.innerHTML = "<img src='./picture/파이리.gif'>";
    document.body.style.background = '#351c4d';
  } else if (myChar == 2) {
    bb.innerHTML = "<img src='./picture/꼬부기.gif'>";
    document.body.style.background = '#fbb9ab';
  } else if (myChar == 3) {
    bb.innerHTML = "<img src='./picture/이상해씨.gif'>";
    document.body.style.background = '#cfc9c2';
  }
}

function backPage() {
  location.replace('./pSelect.html');
}

function go() {
  popX = window.screen.width / 2 - 255;
  popY = window.screen.height / 2 - 360;

  popupWindow = window.open(
    './pBattle.html',
    'playing',
    'left=' + popX + ',top=' + popY + ',resizable=no'
  );
  popupWindow.resizeTo(510, 720);
  popupWindow.onresize = (_) => {
    popupWindow.resizeTo(510, 720);
  };
  window.close();
}

//pBattle
var charRand = Math.floor(Math.random() * 4);
var php = 60,
  pdef = Math.floor(Math.random() * 4) + 3,
  pspDef = Math.floor(Math.random() * 4) + 3,
  pspd = Math.floor(Math.random() * 2) + 3,
  ehp = 60,
  edef = Math.floor(Math.random() * 4) + 3,
  espDef = Math.floor(Math.random() * 4) + 3,
  espd = Math.floor(Math.random() * 2) + 3,
  pp1 = 5,
  pp2 = 5,
  pp3 = 5,
  pp4 = 5;
var buttons = document.getElementById('footer');
var mid = document.getElementById('list');

function headerImgs() {
  bb = document.getElementById('header');

  if (myChar == 0) {
    bb.innerHTML = "<img src='./picture/피카츄.gif' class='player'>";
  } else if (myChar == 1) {
    bb.innerHTML = "<img src='./picture/파이리.gif' class='player'>";
  } else if (myChar == 2) {
    bb.innerHTML = "<img src='./picture/꼬부기.gif' class='player'>";
  } else if (myChar == 3) {
    bb.innerHTML = "<img src='./picture/이상해씨.gif' class='player'>";
  }

  showVs();
  ex();
  enermyChar();
  initPlayerStatus();
  initEnermyStatus();
  skills();
  spddiff();
}

function enermyChar() {
  if (charRand == 0) {
    bb.innerHTML += "<img src='./picture/피카츄.gif' class='enermy'>";
  } else if (charRand == 1) {
    bb.innerHTML += "<img src='./picture/파이리.gif' class='enermy'>";
  } else if (charRand == 2) {
    bb.innerHTML += "<img src='./picture/꼬부기.gif' class='enermy'>";
  } else if (charRand == 3) {
    bb.innerHTML += "<img src='./picture/이상해씨.gif' class='enermy'>";
  }
}

function showVs() {
  bb.innerHTML += '<img src="./picture/vs.png" id="versus"/>';
}

function ex() {
  bb.innerHTML += '<button id="explain" onclick="gameEx()">게임 설명</button>';
}

function initPlayerStatus() {
  bb.innerHTML += `<p id="pStatus">(player)<br><br>체력: <span id="plh">${php}</span><br>물리방어: <span id="pldf">${pdef}</span><br>특수방어: <span id="plsdf">${pspDef}</span><br>속도: <span id="plspd">${pspd}</span><br></p>`;
  bb.innerHTML += '<p id="php"></p>';
}

function initEnermyStatus() {
  bb.innerHTML += `<p id="eStatus">(cpu)<br><br>체력: <span id="eh">${ehp}</span><br>물리방어: <span id="edf">${edef}</span><br>특수방어: <span id="esdf">${espDef}</span><br>속도: <span id="espd">${espd}</span><br></p>`;
  bb.innerHTML += '<p id="ehp"></p>';
}

function pHp(hp) {
  if (hp < 35 && hp >= 15) {
    document.getElementById('php').style = 'width: 10px';
    document.getElementById('php').style.background = '#ffa100';
  } else if (hp < 15) {
    document.getElementById('php').style = 'width: 5px';
    document.getElementById('php').style.background = '#d1180b';
  }
}

function eHp(hp) {
  if (hp < 35 && hp >= 15) {
    document.getElementById('ehp').style = 'width: 10px';
    document.getElementById('ehp').style.background = '#ffa100';
  } else if (hp < 15) {
    document.getElementById('ehp').style = 'width: 5px';
    document.getElementById('ehp').style.background = '#d1180b';
  }
}

function gameEx() {
  popupWindow = window.open(
    './pExplains.html',
    'explaining',
    'left=' + 193.5 + ',top=' + 158.5 + ',resizable=no'
  );
  popupWindow.resizeTo(400, 450);
  popupWindow.onresize = (_) => {
    popupWindow.resizeTo(400, 450);
  };
}

function pwrite(str) {
  if (myChar == 0) {
    mid.innerHTML = '피카츄' + str;
  } else if (myChar == 1) {
    mid.innerHTML = '파이리' + str;
  } else if (myChar == 2) {
    mid.innerHTML = '꼬부기' + str;
  } else if (myChar == 3) {
    mid.innerHTML = '이상해씨' + str;
  }
}

function skills() {
  buttons.innerHTML =
    `<button class="vision" onclick="btnSkill1()">꼬리흔들기<br>PP: <span id="s1pp">${pp1}</span>/5<br><br>"물리방어를 1깎습니다."</button>` +
    `<button class="vision" onclick="btnSkill2()">거짓울음<br>PP: <span id="s2pp">${pp2}</span>/5<br><br>"특수방어를 1깎습니다."</button>`;

  if (myChar == 0) {
    buttons.innerHTML +=
      `<button class="vision" onclick="btnSkill3()"><span id="vision1">할퀴기</span><br>PP:<span id="s3pp">${pp3}</span>/5<br>피해: 10<br>"물리피해를 줍니다."</button>` +
      `<button class="vision" style="background-color: #fefd48" onclick="btnSkill4()"><span id="vision2">전기쇼크</span><br>PP: <span id="s4pp">${pp4}</span>/5<br>피해: 15<br>"특수피해를 줍니다."</button>`;
  } else if (myChar == 1) {
    buttons.innerHTML +=
      `<button class="vision" onclick="btnSkill3()"><span id="vision1">할퀴기</span><br>PP: <span id="s3pp">${pp3}</span>/5<br>피해: 10<br>"물리피해를 줍니다."</button>` +
      `<button class="vision" style="background-color: #ff7f50" onclick="btnSkill4()"><span id="vision2">불꽃세례</span><br>PP: <span id="s4pp">${pp4}</span>/5<br>피해: 15<br>"특수피해를 줍니다."</button>`;
  } else if (myChar == 2) {
    buttons.innerHTML +=
      `<button class="vision" onclick="btnSkill3()"><span id="vision1">박치기</span><br>PP: <span id="s3pp">${pp3}</span>/5<br>피해: 10<br>"물리피해를 줍니다."</button>` +
      `<button class="vision" style="background-color: #79edff" onclick="btnSkill4()"><span id="vision2">거품광선</span><br>PP: <span id="s4pp">${pp4}</span>/5<br>피해: 15<br>"특수피해를 줍니다."</button>`;
  } else if (myChar == 3) {
    buttons.innerHTML +=
      `<button class="vision" onclick="btnSkill3()"><span id="vision1">박치기</span><br>PP: <span id="s3pp">${pp3}</span>/5<br>피해: 10<br>"물리피해를 줍니다."</button>` +
      `<button class="vision" style="background-color: #00ff00" onclick="btnSkill4()"><span id="vision2">잎날가르기</span><br>PP: <span id="s4pp">${pp4}</span>/5<br>피해: 15<br>"특수피해를 줍니다."</button>`;
  }
}

function btnSkill1() {
  var q = document.getElementById('s1pp').innerText;
  var w = document.getElementById('edf').innerText;
  if (q > 0) {
    document.getElementById('s1pp').innerText = --pp1;
    if (w > 0) {
      document.getElementById('edf').innerText = --edef;
      pwrite('의 꼬리흔들기!<br>상대의 물리방어가 떨어졌다!');
      turnEnd();
      setTimeout(eattack, 1000);
    } else {
      pwrite('의 꼬리흔들기!<br>상대의 물리방어는 더 떨어지지 않는다.');
      turnEnd();
      setTimeout(eattack, 1000);
    }
  } else {
    pwrite('의 꼬리흔들기!<br>PP가 부족해 사용할 수 없다!');
  }
}
function btnSkill2() {
  var q = document.getElementById('s2pp').innerText;
  var w = document.getElementById('esdf').innerText;
  if (q > 0) {
    document.getElementById('s2pp').innerText = --pp2;
    if (w > 0) {
      document.getElementById('esdf').innerText = --espDef;
      pwrite('의 거짓울음!<br>상대의 특수방어가 떨어졌다.');
      turnEnd();
      setTimeout(eattack, 1000);
    } else {
      pwrite('의 거짓울음!<br>상대의 특수방어는 더 떨어지지 않는다.');
      turnEnd();
      setTimeout(eattack, 1000);
    }
  } else {
    pwrite('의 거짓울음!<br>PP가 부족해 사용할 수 없다!');
  }
}
function btnSkill3() {
  var q = document.getElementById('s3pp').innerText;
  var w = document.getElementById('edf').innerText;
  var h = document.getElementById('eh').innerText;
  var buf = h - (10 - w);
  var t = document.getElementById('vision1').innerText;
  if (q > 0) {
    document.getElementById('s3pp').innerText = --pp3;
    if (buf > 0) {
      document.getElementById('eh').innerText = buf;
      pwrite('의 ' + t + '!<br>' + (10 - w) + '의 피해를 입혔다!');
      eHp(buf);
      turnEnd();
      setTimeout(eattack, 1000);
    } else {
      document.getElementById('eh').innerText = buf;
      pwrite('의 ' + t + '!<br>' + (10 - w) + '의 피해를 입혔다!');
      eHp(buf);
      turnEnd();
      setTimeout(victory, 1000);
    }
  } else {
    pwrite('의 ' + t + '!<br>PP가 부족해 사용할 수 없다!');
  }
}
function btnSkill4() {
  var q = document.getElementById('s4pp').innerText;
  var w = document.getElementById('esdf').innerText;
  var h = document.getElementById('eh').innerText;
  var buf = h - (15 - w);
  var t = document.getElementById('vision2').innerText;
  if (q > 0) {
    document.getElementById('s4pp').innerText = --pp4;
    if (buf > 0) {
      document.getElementById('eh').innerText = buf;
      pwrite('의 ' + t + '!<br>' + (15 - w) + '의 피해를 입혔다!');
      eHp(buf);
      turnEnd();
      setTimeout(eattack, 1000);
    } else {
      document.getElementById('eh').innerText = buf;
      pwrite('의 ' + t + '!<br>' + (15 - w) + '의 피해를 입혔다!');
      eHp(buf);
      turnEnd();
      setTimeout(victory, 1000);
    }
  } else {
    pwrite('의 ' + t + '!<br>PP가 부족해 사용할 수 없다!');
  }
}

function spddiff() {
  var u1 = document.getElementById('plspd').innerText;
  var u2 = document.getElementById('espd').innerText;
  if (u2 > u1) {
    eattack();
  }
}

function eattack() {
  var arand = Math.floor(Math.random() * 4);
  var p = document.getElementById('pldf').innerText;
  var o = document.getElementById('plsdf').innerText;
  var i = document.getElementById('plh').innerText;
  var buf;

  if (arand == 0) {
    if (p > 0) {
      document.getElementById('pldf').innerText = --pdef;
      ewrite('적의 꼬리흔들기!<br>내 포켓몬의 물리방어가 떨어졌다!');
      turnOn();
    } else {
      ewrite('적의 꼬리흔들기!<br>내 포켓몬의 물리방어는 더 떨어지지 않는다.');
      turnOn();
    }
  } else if (arand == 1) {
    if (o > 0) {
      document.getElementById('plsdf').innerText = --pspDef;
      ewrite('적의 거짓울음!<br>내 포켓몬의 특수방어가 떨어졌다.');
      turnOn();
    } else {
      ewrite('적의 거짓울음!<br>내 포켓몬의 특수방어는 더 떨어지지 않는다.');
      turnOn();
    }
  } else if (arand == 2) {
    buf = i - (10 - p);
    if (buf > 0) {
      document.getElementById('plh').innerText = buf;
      ewrite('적의 물리공격!<br>' + (10 - p) + '의 피해를 입었다!');
      pHp(buf);
      turnOn();
    } else {
      document.getElementById('plh').innerText = buf;
      ewrite('적의 물리공격!<br>' + (10 - p) + '의 피해를 입었다!');
      pHp(buf);
      setTimeout(defeated, 1000);
    }
  } else if (arand == 3) {
    buf = i - (15 - o);
    if (buf > 0) {
      document.getElementById('plh').innerText = buf;
      ewrite('적의 특수공격!<br>' + (15 - o) + '의 피해를 입었다!');
      pHp(buf);
      turnOn();
    } else {
      document.getElementById('plh').innerText = buf;
      pwrite('적의 특수공격!<br>' + (15 - o) + '의 피해를 입었다!');
      pHp(buf);
      setTimeout(defeated, 1000);
    }
  }
}

function ewrite(str) {
  mid.innerHTML = str;
}

function victory() {
  popX = window.screen.width / 2 - 200;
  popY = window.screen.height / 2 - 225;

  popupWindow = window.open(
    './pVictory.html',
    'starting',
    'left=' + popX + ',top=' + popY + ',resizable=no'
  );
  popupWindow.resizeTo(400, 450);
  popupWindow.onresize = (_) => {
    popupWindow.resizeTo(400, 450);
  };
  window.close();
}

function defeated() {
  popX = window.screen.width / 2 - 200;
  popY = window.screen.height / 2 - 225;

  popupWindow = window.open(
    './pDefeated.html',
    'starting',
    'left=' + popX + ',top=' + popY + ',resizable=no'
  );
  popupWindow.resizeTo(400, 450);
  popupWindow.onresize = (_) => {
    popupWindow.resizeTo(400, 450);
  };
  window.close();
}

function turnEnd() {
  var chilNodes = document.getElementById('footer').getElementsByTagName('*');
  for (var node of chilNodes) {
    node.disabled = true;
  }
}

function turnOn() {
  var chilNodes = document.getElementById('footer').getElementsByTagName('*');
  for (var node of chilNodes) {
    node.disabled = false;
  }
}

// pVictory & pDefeated
function retry() {
  popX = window.screen.width / 2 - 200;
  popY = window.screen.height / 2 - 225;

  popupWindow = window.open(
    './pSelect.html',
    'starting',
    'left=' + popX + ',top=' + popY + ',resizable=no'
  );
  popupWindow.resizeTo(400, 450);
  popupWindow.onresize = (_) => {
    popupWindow.resizeTo(400, 450);
  };
}

function exit() {
  window.close();
}
