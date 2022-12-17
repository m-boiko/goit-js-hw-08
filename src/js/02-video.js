import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (timeupdate) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate.seconds));
};

player.on('play', throttle(onPlay, 1000));
const curentTime = localStorage.getItem('videoplayer-current-time');

if (curentTime !== null) {
  player.setCurrentTime(curentTime);
}
