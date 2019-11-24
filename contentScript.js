const timelineAriaText = 'Timeline: Your Home Timeline';
const keyCodes = {
	i: 73,
	o: 79
};

let tweets;

document.addEventListener("keydown", function(event) {
	const { keyCode } = event;

	if(keyCode !== keyCodes.i && keyCode !== keyCodes.o) return;

	tweets = document.querySelectorAll(`div[aria-label="${timelineAriaText}"]>div>div>div`);

	let focusedTweetIndex = Array.from(tweets).findIndex((t,i) => tweets[i].getAttribute('is-focused') === 'true');
	if(focusedTweetIndex < 0) {
		focusedTweetIndex = 0;
		focusTweet(0, null);
		return;
	}

    if (keyCode == keyCodes.i) {
    	focusTweet(focusedTweetIndex + 1, focusedTweetIndex);
    }
    else if (keyCode == keyCodes.o) {
    	if(focusedTweetIndex === 0) return;
    	focusTweet(focusedTweetIndex - 1, focusedTweetIndex);
    }
  });

function focusTweet(newIndex, oldIndex) {
	if(oldIndex != null) tweets[oldIndex].setAttribute('is-focused', 'false');
	tweets[newIndex].scrollIntoView({behavior: 'smooth'});
	tweets[newIndex].setAttribute('is-focused', 'true');
}