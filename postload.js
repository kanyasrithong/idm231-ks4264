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

const error_popup_obj = document.getElementById('error-popup');
const error_close_obj = document.getElementById('error-close');

const help_obj = document.getElementById('help');
const help_popup_obj = document.getElementById('help-popup');
const help_close_obj = document.getElementById('help-close');

const zodiac_popup_obj = document.getElementById('zodiac-popup');
const zodiac_close_obj = document.getElementById('zodiac-close-button');

const volume_obj = document.getElementById('volume');
const indicator_obj = document.getElementById('indicator');

const zodiac_picture_obj = document.getElementById('zodiac-picture');
const zodiac_sprites_obj = document.getElementById('zodiac-sprites');
const zodiac_name_obj = document.getElementById('zodiac-name');
const zodiac_date_obj = document.getElementById('zodiac-date');
const zodiac_description_obj = document.getElementById('zodiac-description');
const zodiac_ld_obj = document.getElementById('zodiac-ld');

help_close_obj.addEventListener('click', function(){
  help_popup_obj.classList.add('hide');
  console.log('hide');
}, false);


help_obj.addEventListener('click', function() {
  help_popup_obj.classList.remove('hide');
  console.log('help is here!')
}, false);

error_close_obj.addEventListener('click', function(){
  error_popup_obj.classList.add('hide');
  console.log('hide');
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
    zodiac_info(astrological_sign);
  } else {
    error_popup_obj.classList.remove('hide');
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

wizard_obj.addEventListener('click', function() {zodiac_info('Wizard')}, false);

krobus_obj.addEventListener('click', function() {zodiac_info('Krobus')}, false);

function zodiac_info(which_one) {
  zodiac_name_obj.innerHTML = which_one;
  switch (which_one) {
    case 'Lewis':
      console.log('Lewis')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/zodiac-profiles/lewis-profile.webp';
      zodiac_sprites_obj.src = 'images/zodiac-sprites/lewis-sprites.webp';
      zodiac_date_obj.innerHTML = 'December 22 - January 19';
      zodiac_description_obj.innerHTML = 'You are a natural born leader. Your duties are what motivate you, and you are loved by those around you.';
      zodiac_ld_obj.src = 'images/zodiac-ld/lewis-ld.webp';
      //Play audio for this character
      play_sound('lewis-audio');
      break;
    case 'Marnie':
      console.log('Marnie')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/zodiac-profiles/marnie-profile.webp';
      zodiac_sprites_obj.src = 'images/zodiac-sprites/marnie-sprites.webp';
      zodiac_date_obj.innerHTML = 'January 20 - February 18';
      zodiac_description_obj.innerHTML = 'Optimism drives you, even in the most dire of circumstances. Adaptable and gentle, you are a animal lover at heart.';
      zodiac_ld_obj.src = 'images/zodiac-ld/marnie-ld.webp';
      //Play audio for this character
      play_sound('marnie-audio');
      break;
    case 'Robin':
      console.log('Robin')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/zodiac-profiles/robin-profile.webp';
      zodiac_sprites_obj.src = 'images/zodiac-sprites/robin-sprites.webp';
      zodiac_date_obj.innerHTML = 'February 19 - March 20';
      zodiac_description_obj.innerHTML = 'You are hardworking and very dedicated to your craft. Somewhat reserved, you can become ruled by your emotions.';
      zodiac_ld_obj.src = 'images/zodiac-ld/robin-ld.webp';
      //Play audio for this character
      play_sound('robin-audio');
      break;
    case 'Demetrius':
      console.log('Demetrius')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/zodiac-profiles/demetrius-profile.webp';
      zodiac_sprites_obj.src = 'images/zodiac-sprites/demetrius-sprites.webp';
      zodiac_date_obj.innerHTML = 'March 21 - April 19';
      zodiac_description_obj.innerHTML = 'Consistent and reliable, you work well within scientific fields. Stubborn tendencies may rule you at times, but at your core you are very loyal and protective.';
      zodiac_ld_obj.src = 'images/zodiac-ld/demetrius-ld.webp';
      //Play audio for this character
      play_sound('demetrius-audio');
      break;
    case 'Abigail':
      console.log('Abigail')
      zodiac_popup_obj.classList.remove('hide');
      zodiac_picture_obj.src = 'images/zodiac-profiles/abigail-profile.webp';
      zodiac_sprites_obj.src = 'images/zodiac-sprites/abigail-sprites.webp';
      zodiac_date_obj.innerHTML = 'April 20 - May 20';
      zodiac_description_obj.innerHTML = 'You refuse to let yourself succumb to those around you, a free-spirit who marches to the beat of their own drum. Your interests are varied, a true jack-of-all-trades.';
      zodiac_ld_obj.src = 'images/zodiac-ld/abigail-ld.webp';
      //Play audio for this character
      play_sound('abigail-audio');
      break;
    case 'Penny':
        console.log('Penny')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/penny-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/penny-sprites.webp';
        zodiac_date_obj.innerHTML = 'May 21 - June 21';
        zodiac_description_obj.innerHTML = 'You are patient, making you a natural fit for the role of teacher. A lover of books, you find beauty in the smallest details.';
        zodiac_ld_obj.src = 'images/zodiac-ld/penny-ld.webp';
        //Play audio for this character
        play_sound('penny-audio');
        break;
    case 'Elliot':
        console.log('Elliot')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/elliot-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/elliot-sprites.webp';
        zodiac_date_obj.innerHTML = 'June 22 - July 22';
        zodiac_description_obj.innerHTML = 'A romantic, you embrace the simpler joys in life. You enjoy the soft melody of a piano and find pleasure in the written word.';
        zodiac_ld_obj.src = 'images/zodiac-ld/elliot-ld.webp';
        //Play audio for this character
        play_sound('elliot-audio');
        break;
     case 'Willy':
        console.log('Willy')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/willy-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/willy-sprites.webp';
        zodiac_date_obj.innerHTML = 'July 23 - August 22';
        zodiac_description_obj.innerHTML = 'You live to spread your interests with others, not for your own personal gain. Keeping to yourself most of the time, you tend to like doing things your way. ';
        zodiac_ld_obj.src = 'images/zodiac-ld/willy-ld.webp';
        //Play audio for this character
        play_sound('willy-audio');
        break;
     case 'Emily':
        console.log('Emily')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/emily-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/emily-sprites.webp';
        zodiac_date_obj.innerHTML = 'August 23 - September 22';
        zodiac_description_obj.innerHTML = 'Outgoing and personable, your innate creativity rules your every move. You do well in social settings, but also love to delve into your personal hobbies.';
        zodiac_ld_obj.src = 'images/zodiac-ld/emily-ld.webp';
        //Play audio for this character
        play_sound('emily-audio');
        break;
    case 'The Junimos':
        console.log('Junimos')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/junimos-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/junimo-sprites.webp';
        zodiac_date_obj.innerHTML = 'September 23 - October 22';
        zodiac_description_obj.innerHTML = 'Curious and kind, you are known to often help those around you. You are ruled by a sense of justice, and generally work well within a team setting.';
        zodiac_ld_obj.src = 'images/zodiac-ld/junimos-ld.webp';
        //Play audio for this character
        play_sound('junimos-audio');
        break;
    case 'Wizard':
        console.log('Wizard')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/wizard-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/wizard-sprites.webp';
        zodiac_date_obj.innerHTML = 'October 23 - November 21';
        zodiac_description_obj.innerHTML = 'Dark and mysterious, your unpredictable personality entices those around you. Intuitive and determined, you are always striving for greatness.';
        zodiac_ld_obj.src = 'images/zodiac-ld/wizard-ld.webp';
        //Play audio for this character
        play_sound('wizard-audio');
        break;
    case 'Krobus':
        console.log('Krobus')
        zodiac_popup_obj.classList.remove('hide');
        zodiac_picture_obj.src = 'images/zodiac-profiles/krobus-profile.webp';
        zodiac_sprites_obj.src = 'images/zodiac-sprites/krobus-sprites.webp';
        zodiac_date_obj.innerHTML = 'November 22 - December 21';
        zodiac_description_obj.innerHTML = 'Often misunderstood, you begin to warm up to those who get to know you. You have a philosophical, complex mind that thinks beyond the surface level.';
        zodiac_ld_obj.src = 'images/zodiac-ld/krobus-ld.webp';
        //Play audio for this character
        play_sound('krobus-audio');
        break;
  }
}

volume_obj.addEventListener('click', function(){
  if (!volume_obj.classList.contains("unmuted")){
    volume_obj.setAttribute('src', '/images/site-icons/stardew-unmuted.webp');
    indicator_obj.innerHTML = 'Click to pause!';
    console.log('music on');
    play_sound('theme');
    volume_obj.classList.add('unmuted');
  } else {
    volume_obj.setAttribute('src', '/images/site-icons/stardew-muted.webp');
    indicator_obj.innerHTML = 'Click to play!';
    console.log('music off');
    document.getElementById('theme').pause();
    volume_obj.classList.remove('unmuted');
  }
}, false);

//Play audio function
const all_audios = document.querySelectorAll('audio');
function play_sound(sound) {
  all_audios.forEach(this_audio => {
    this_audio.pause();
    //Reset sound file back to beginning
  });
  document.getElementById(sound).play();
}
