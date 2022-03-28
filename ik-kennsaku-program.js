var coun = 0;
function alerthyo() {
    const keidojs = document.getElementById("keido");
    const keido2 = keidojs.value;
    const idojs = document.getElementById("ido");
    const ido2 = idojs.value;
    const dasyo = keido2 + ',' + ido2
    if (keido2 > "90") {
      alert ("経度が90゜以上です。")
    } else if (ido2 > "180") {
      alert ("緯度が180゜以上です。")
    } else {
      if (dasyo == ",") {
        alert("緯度と経度を入力して下さい");
      } else {
        coun += 1;
        const url = 'https://www.google.com/maps/search/?api=1&query=' + dasyo
          document.getElementById("kotae").style.visibility="visible";
          var textbox_element = document.getElementById('urltxt');
          var new_element = document.createElement('p');
          new_element.textContent = "カウント:"+coun + " URL:" + url;
          textbox_element.appendChild(new_element);
          
          let link = document.getElementById('map');
          link.setAttribute('href', url);
        }
    }
  }
