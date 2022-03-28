var coun = 0;
function alerthyo() {
  const idojs = document.getElementById("ido");
  const ido2 = idojs.value;
  const keijs = document.getElementById("kei");
  const kei2 = keijs.value;
  const dasyo = ido2 + ',' + kei2
      if (dasyo == ",") {
        alert("緯度と経度を入力して下さい");
      } else {
        coun += 1;
        const url = 'https://www.google.com/maps/search/?api=1&query=' + dasyo
        document.getElementById("kotae").style.visibility = "visible";
        //URL表示プロセス
        var textbox_element = document.getElementById('urltxt');
        var new_element = document.createElement('p');
        new_element.textContent = "カウント:" + coun + " URL:" + url;
        textbox_element.appendChild(new_element); //URLを表示
        //mapリンク表示プロセス
        let link = document.getElementById('map');
        link.setAttribute('href', url);
      }
    }
  
