let user_hand = prompt("グー・チョキ・パーから選んでください。");
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力してください");
  user_hand = prompt("グー・チョキ・パーから選んでください。");
}

let js_hand = getJShand();
let judge = winlose(user_hand, js_hand);



if (user_hand == null){
  alert("またチャレンジしてね");
} else {
  alert("あなたの選んだ手は" + user_hand + "です。\njavascriptが選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");
}


function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3);
  let hand_name;
  if(js_hand_num == 0){
  hand_name = "グー";
  } else if(js_hand_num == 1){
  hand_name = "チョキ";
  } else if(js_hand_num == 2){
  hand_name = "パー";
  }
  return hand_name;
}

function winlose(user, js){
  let winlosestr;
  
  if (user == "グー"){
    if(js == "グー"){
      winlosestr = "あいこ";
    } else if(js == "チョキ"){
      winlosestr = "勝ち";
    } else if(js == "パー"){
      winlosestr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winlosestr = "負け";
    } else if(js == "チョキ"){
      winlosestr = "あいこ";
    } else if(js == "パー"){
      winlosestr = "勝ち"
    }
  } else if(user == "パー"){
    if (js == "グー"){
      winlosestr = "勝ち";
    } else if (js == "チョキ"){
      winlosestr = "負け";
    } else if(js == "パー"){
      winlosestr = "あいこ";
    }
  }
  return winlosestr;
}