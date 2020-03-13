$(document).ready(function() {
    $('.book-menu').click(function(){
        $('.navigation').toggleClass('change')
    })

    lightbox.option({
        'resizeDuration': 400,
        'wrapAround': true
      });

      $(window).scroll(function(){
          let position = $(this).scrollTop();
          console.log(position);
          if(position > 350){
              $('.gallery').addClass('change');
          }else{
            $('.gallery').removeClass('change');

          }
          
      })

      $('#accordian').click(function(event){
          if(event.target.id.split('-')[0] === 'button'){
                $('#book1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
                $('#book2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg')              
             
          }
        
      })
})