let arrow = document.getElementById('bt');
window.onscroll = function() {
  if (window.scrollY >= 500) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
}


arrow.onclick= function(){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}