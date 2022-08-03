// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div> : 아래 player는 index.html 의 plyer
  new YT.Player('player', {  
    videoId : 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars : {
      autoplay : true,
      loop : true,
      playlist : 'An6LvWQuj_8',
    },
    events : {
      onReady : function(event) {
        event.target.mute() //음소거
      }
    }
    });
  }