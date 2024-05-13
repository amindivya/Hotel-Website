





$(document).ready(function()
{
    $(".list").click(function (e) {
      $(".this").addClass('active').siblings().removeClass('active');
      

       let value = $(this).attr("data-filter");

       if(value == "all"){
         $(".items").show(50);
         
       }
       
      
       else{
           $(".items").not("." + value).hide(50);
           $(".items").filter("." + value).show(50);


       }
       
       $(".list").removeClass("active");
       $(this).addClass("active");
    });


    $('.all').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
           // other options
    
    gallery: {
    enabled: true, // set to true to enable 
    
    preload: [1,3], // read about this option in next Lazy-loading section
    
    navigateByImgClick: true,
    
    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    
    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
    },
    zoom: {
    enabled: true, // By default it's false, so don't forget to enable it
    
    
    
    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
    // openerElement is the element on which popup was initialized, in this case its <a> tag
    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
    return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
    }
    
    });





    $('.Forests').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
       // other options

gallery: {
enabled: true, // set to true to enable 

preload: [1,3], // read about this option in next Lazy-loading section

navigateByImgClick: true,

arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

tPrev: 'Previous (Left arrow key)', // title for left button
tNext: 'Next (Right arrow key)', // title for right button
tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
},
zoom: {
enabled: true, // By default it's false, so don't forget to enable it



// The "opener" function should return the element from which popup will be zoomed in
// and to which popup will be scaled down
// By defailt it looks for an image tag:
opener: function(openerElement) {
// openerElement is the element on which popup was initialized, in this case its <a> tag
// you don't need to add "opener" option if this code matches your needs, it's defailt one.
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}

});

$('.Suites').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
       // other options

gallery: {
enabled: true, // set to true to enable 

preload: [1,3], // read about this option in next Lazy-loading section

navigateByImgClick: true,

arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

tPrev: 'Previous (Left arrow key)', // title for left button
tNext: 'Next (Right arrow key)', // title for right button
tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
},













zoom: {
enabled: true, // By default it's false, so don't forget to enable it



// The "opener" function should return the element from which popup will be zoomed in
// and to which popup will be scaled down
// By defailt it looks for an image tag:
opener: function(openerElement) {
// openerElement is the element on which popup was initialized, in this case its <a> tag
// you don't need to add "opener" option if this code matches your needs, it's defailt one.
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}

});

$('.Premium ').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
       // other options

gallery: {
enabled: true, // set to true to enable 

preload: [1,3], // read about this option in next Lazy-loading section

navigateByImgClick: true,

arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

tPrev: 'Previous (Left arrow key)', // title for left button
tNext: 'Next (Right arrow key)', // title for right button
tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
},













zoom: {
enabled: true, // By default it's false, so don't forget to enable it



// The "opener" function should return the element from which popup will be zoomed in
// and to which popup will be scaled down
// By defailt it looks for an image tag:
opener: function(openerElement) {
// openerElement is the element on which popup was initialized, in this case its <a> tag
// you don't need to add "opener" option if this code matches your needs, it's defailt one.
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}

});


$('.Pool').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
       // other options

gallery: {
enabled: true, // set to true to enable 

preload: [1,3], // read about this option in next Lazy-loading section

navigateByImgClick: true,

arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

tPrev: 'Previous (Left arrow key)', // title for left button
tNext: 'Next (Right arrow key)', // title for right button
tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
},













zoom: {
enabled: true, // By default it's false, so don't forget to enable it



// The "opener" function should return the element from which popup will be zoomed in
// and to which popup will be scaled down
// By defailt it looks for an image tag:
opener: function(openerElement) {
// openerElement is the element on which popup was initialized, in this case its <a> tag
// you don't need to add "opener" option if this code matches your needs, it's defailt one.
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}

});


$('.swimming').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
       // other options

gallery: {
enabled: true, // set to true to enable 

preload: [1,3], // read about this option in next Lazy-loading section

navigateByImgClick: true,

arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

tPrev: 'Previous (Left arrow key)', // title for left button
tNext: 'Next (Right arrow key)', // title for right button
tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
},













zoom: {
enabled: true, // By default it's false, so don't forget to enable it



// The "opener" function should return the element from which popup will be zoomed in
// and to which popup will be scaled down
// By defailt it looks for an image tag:
opener: function(openerElement) {
// openerElement is the element on which popup was initialized, in this case its <a> tag
// you don't need to add "opener" option if this code matches your needs, it's defailt one.
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}

});


$('.Dining').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
       // other options

gallery: {
enabled: true, // set to true to enable 

preload: [1,3], // read about this option in next Lazy-loading section

navigateByImgClick: true,

arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

tPrev: 'Previous (Left arrow key)', // title for left button
tNext: 'Next (Right arrow key)', // title for right button
tCounter: '<span class="mfp-counter">%curr% of %total%</span>' //markup of counter
},













zoom: {
enabled: true, // By default it's false, so don't forget to enable it



// The "opener" function should return the element from which popup will be zoomed in
// and to which popup will be scaled down
// By defailt it looks for an image tag:
opener: function(openerElement) {
// openerElement is the element on which popup was initialized, in this case its <a> tag
// you don't need to add "opener" option if this code matches your needs, it's defailt one.
return openerElement.is('img') ? openerElement : openerElement.find('img');
}
}

});

});
 




