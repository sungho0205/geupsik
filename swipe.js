import { getMealInfo } from './api.mjs';
import {
  getNextDate,
  getNextdateStr,
  getPrevDate,
  getPrevdateStr
} from './date_utilities.mjs';
import { dateInput, schoolCode, officeCode } from './start.js';

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;
function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}
function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}
function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      /* left swipe */
      let datesplit = dateInput.value.split('-');
      getMealInfo(
        schoolCode,
        officeCode,
        getNextDate(datesplit[0], datesplit[1], datesplit[2])
      );
      dateInput.value = getNextdateStr(datesplit[0], datesplit[1], datesplit[2]);
    } else {
      /* right swipe */
      let datesplit = dateInput.value.split('-');
      getMealInfo(
        schoolCode,
        officeCode,
        getPrevDate(datesplit[0], datesplit[1], datesplit[2])
      );
      dateInput.value = getPrevdateStr(datesplit[0], datesplit[1], datesplit[2]);
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}