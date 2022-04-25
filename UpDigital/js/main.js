$(document).ready(function(){


    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    
        if($(window).scrollTop() > 30){
          $('.header').css({'background':'#192041','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
          $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
      });
})

var test = document.getElementById("banner");

var text = 'Web design & Desenvolvimento de serviços'; //put your text here
var result = "";
//Press rerun button to see effect
window.addEventListener("load", (event) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      result += text[i];
      test.innerHTML = result;
    }, 80 * i);
  }
});

var words = ['Você tem a visão.', 'Nós temos o time', 'vamos aplicar juntos!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.slogan').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider .drag-line");
slider.oninput = ()=>{
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
}

