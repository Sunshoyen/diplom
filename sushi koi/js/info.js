let div=document.getElementById('idDiv');
let btn=document.getElementById('idBtn');
btn.onmousedown=()=>do1();
function do1() {
       div.hidden=false;
       btn.inner='.info-btn'
       btn.onmousedown=()=>do2();
  }
  function do2() {
      btn.onmousedown=()=>do1();
      btn.inner='.info-btn';
        div.hidden=true
  }