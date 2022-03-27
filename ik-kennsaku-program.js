function alerthyo() {
    const keidojs = document.getElementById("keido");
    const keido2 = keidojs.value;
    const idojs = document.getElementById("ido");
    const ido2 = idojs.value;
    const dasyo = keido2 + ',' + ido2
    if (dasyo == ",") {
      alert("緯度と経度を入力して下さい");
    } else {
      const ha = keido2 + ido2
      if (!isNaN(ha)) {
        var result = confirm(dasyo + "をGoogleマップで検索します。");
        if (result) {
          const url = 'https://www.google.com/maps/search/?api=1&query=' + dasyo
          window.open(url)
        }
      } else {
        alert(ha + "は数字ではありません");
      }
    }
  }
