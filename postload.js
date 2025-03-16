const lewis_obj = document.getElementById('Lewis');
const marnie_obj = document.getElementById('Marnie');
const robin_obj = document.getElementById('Robin');
const demetrius_obj = document.getElementById('Demetrius');
const abigail_obj = document.getElementById('Abigail');
const penny_obj = document.getElementById('Penny');
const elliot_obj = document.getElementById('Elliot');
const willy_obj = document.getElementById('Willy');
const emily_obj = document.getElementById('Emily');
const junimos_obj = document.getElementById('Junimos');
const wizard_obj = document.getElementById('Wizard');
const krobus_obj = document.getElementById('Krobus');

const help_obj = document.getElementById('help');
const help_popup_obj = document.getElementById('help-popup');
const help_close_obj = document.getElementById('help-close-button');

const zodiac_popup_obj = document.getElementById('zodiac-popup');
const zodiac_close_obj = document.getElementById('zodiac-close-button');

const volume_obj = document.getElementById('volume');

const zodiac_picture_obj = document.getElementById('zodiac-picture');
const zodiac_sprites_obj = document.getElementById('zodiac-sprites');
const zodiac_name_obj = document.getElementById('zodiac-name');
const zodiac_date_obj = document.getElementById('zodiac-date');
const zodiac_description_obj = document.getElementById('zodiac-description');

help_close_obj.addEventListener('click', function(){
  help_popup_obj.classList.add('hide');
  console.log('hide');
}, false);

help_obj.addEventListener('click', function() {
  help_popup_obj.classList.remove('hide');
  console.log('help is here!')
}, false);


zodiac_close_obj.addEventListener('click', function(){
  zodiac_popup_obj.classList.add('hide');
  console.log('hide');
}, false);

const submit_obj = document.getElementById('submit');

submit_obj.addEventListener('click', function(){
  // Capture user input date
  const birthdate_obj = document.getElementById('birthday-input').valueAsDate;
  console.log('birthday-input is: ' + birthdate_obj);
  // Make sure date is valid
  if (birthdate_obj) {
    const timezone_offset = birthdate_obj.getTimezoneOffset() * 60 * 1000;
    console.log('timezone_offset is: ' + timezone_offset);
    const birthdate_est = new Date(birthdate_obj.getTime() + timezone_offset);
    console.log('birthdate_est is: ' + birthdate_est);
    // Extract month
    const month = birthdate_est.getMonth() + 1;
    console.log('Month is ' + month);
    // Extract day of month
    const day = birthdate_est.getDate();
    console.log('Day is ' + day);

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      astrological_sign = 'Lewis'
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      astrological_sign = 'Krobus'
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      astrological_sign = 'Wizard'
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      astrological_sign = 'The Junimos'
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      astrological_sign = 'Emily'
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      astrological_sign = 'Willy'
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      astrological_sign = 'Elliot'
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      astrological_sign = 'Penny'
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      astrological_sign = 'Abigail'
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      astrological_sign = 'Demetrius'
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      astrological_sign = 'Robin'
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      astrological_sign = 'Marnie'
    }
    console.log(astrological_sign);
    zodiac_info(astrological_sign)
  } else {
    
  }

}, false);

lewis_obj.addEventListener('click', function() {zodiac_info('Lewis')}, false);

marnie_obj.addEventListener('click', function() {zodiac_info('Marnie')}, false);

robin_obj.addEventListener('click', function() {zodiac_info('Robin')}, false);

demetrius_obj.addEventListener('click', function() {zodiac_info('Demetrius')}, false);

abigail_obj.addEventListener('click', function() {zodiac_info('Abigail')}, false);

penny_obj.addEventListener('click', function() {zodiac_info('Penny')}, false);

elliot_obj.addEventListener('click', function() {zodiac_info('Elliot')}, false);

willy_obj.addEventListener('click', function() {zodiac_info('Willy')}, false);

emily_obj.addEventListener('click', function() {zodiac_info('Emily')}, false);

junimos_obj.addEventListener('click', function() {zodiac_info('The Junimos')}, false);

wizard_obj.addEventListener('click', function() {zodiac_info('The Wizard')}, false);

krobus_obj.addEventListener('click', function() {zodiac_info('Krobus')}, false);

volume_obj.addEventListener('click', function(){
  if (!volume_obj.classList.contains("unmuted")){
    volume_obj.setAttribute('src', '/images/stardew-unmuted.png');
    console.log('on');
    document.getElementById('theme').play();
    volume_obj.classList.add('unmuted');
  } else {
    volume_obj.setAttribute('src', '/images/stardew-muted.webp');
    console.log('off');
    document.getElementById('theme').pause();
    volume_obj.classList.remove('unmuted');
  }
}, false);


function zodiac_info(which_one) {
  zodiac_name_obj.innerHTML = which_one;
  switch (which_one) {
    case 'Lewis':
      console.log('Lewis')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/stardew-lewis.webp';
      zodiac_sprites_obj.src = 'images/sprites/lewis-sprites.png'
      zodiac_date_obj.innerHTML = 'December 22 - January 19';
      zodiac_description_obj.innerHTML = 'You are a natural born leader. Your duties are what motivate you, and you are loved by those around you.';
      //Play audio for this character
      play_sound();
      break;
    case 'Marnie':
      console.log('Marnie')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/stardew-marnie.webp';
      zodiac_sprites_obj.src = 'images/sprites/marnie-sprites.png'
      zodiac_date_obj.innerHTML = 'January 20 - February 18';
      zodiac_description_obj.innerHTML = 'Marnie is cool';
      //Play audio for this character
      play_sound();
      break;
    case 'Robin':
      console.log('Robin')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/stardew-robin.webp';
      zodiac_sprites_obj.src = 'images/sprites/robin-sprites.png'
      zodiac_date_obj.innerHTML = 'February 19 - March 20';
      zodiac_description_obj.innerHTML = 'Robin is cool';
      //Play audio for this character
      play_sound();
      break;
    case 'Demetrius':
      console.log('Demetrius')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/stardew-demetrius.webp';
      zodiac_sprites_obj.src = 'images/sprites/demetrius-sprites.png'
      zodiac_date_obj.innerHTML = 'March 21 - April 19';
      zodiac_description_obj.innerHTML = 'Demetrius is cool';
      //Play audio for this character
      play_sound();
      break;
    case 'Abigail':
      console.log('Abigail')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/stardew-abigail.webp';
      zodiac_sprites_obj.src = 'images/sprites/abigail-sprites.png'
      zodiac_date_obj.innerHTML = 'April 20 - May 20';
      zodiac_description_obj.innerHTML = 'Abigail is cool';
      //Play audio for this character
      play_sound();
      break;
    case 'Penny':
        console.log('Penny')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-penny.webp';
        zodiac_sprites_obj.src = 'images/sprites/penny-sprites.png'
        zodiac_date_obj.innerHTML = 'May 21 - June 21';
        zodiac_description_obj.innerHTML = 'Penny is cool';
        //Play audio for this character
        play_sound();
        break;
    case 'Elliot':
        console.log('Elliot')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-elliot.webp';
        zodiac_sprites_obj.src = 'images/sprites/elliot-sprites.png'
        zodiac_date_obj.innerHTML = 'June 22 - July 22';
        zodiac_description_obj.innerHTML = 'Elliot is cool';
        //Play audio for this character
        play_sound();
        break;
     case 'Willy':
        console.log('Willy')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-willy.webp';
        zodiac_sprites_obj.src = 'images/sprites/willy-sprites.png'
        zodiac_date_obj.innerHTML = 'July 23 - August 22';
        zodiac_description_obj.innerHTML = 'Willy is cool';
        //Play audio for this character
        play_sound();
        break;
     case 'Emily':
        console.log('Emily')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-emily.webp';
        zodiac_sprites_obj.src = 'images/sprites/emily-sprites.png'
        zodiac_date_obj.innerHTML = 'August 23 - September 22';
        zodiac_description_obj.innerHTML = 'Emily is cool';
        //Play audio for this character
        play_sound();
        break;
    case 'The Junimos':
        console.log('Junimos')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-junimos.webp';
        zodiac_sprites_obj.src = 'images/sprites/junimos-sprites.png'
        zodiac_date_obj.innerHTML = 'September 23 - October 22';
        zodiac_description_obj.innerHTML = 'The Junimos are cool';
        //Play audio for this character
        play_sound();
        break;
    case 'The Wizard':
        console.log('Wizard')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-wizard.webp';
        zodiac_sprites_obj.src = 'images/sprites/wizard-sprites.png'
        zodiac_date_obj.innerHTML = 'October 23 - November 21';
        zodiac_description_obj.innerHTML = 'The Wizard is cool';
        //Play audio for this character
        play_sound();
        break;
    case 'Krobus':
        console.log('Krobus')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/stardew-krobus.webp';
        zodiac_sprites_obj.src = 'images/sprites/krobus-sprites.png'
        zodiac_date_obj.innerHTML = 'November 22 - December 21';
        zodiac_description_obj.innerHTML = 'Krobus is cool';
        //Play audio for this character
        play_sound();
        break;
  }
}

function play_sound(sound) {
  document.getElementById(sound).play();
}
