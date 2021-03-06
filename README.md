# Guardians of the Forest

Developed for the 'Girls in Tech' Hackathon in Vancouver, BC, on May 4-5 2019.

<i>Play it here!</i>
https://guardians-of-the-forest-206f6.firebaseapp.com/

Created by team 9, the 'Guardians of the Forestry'!
<ul>
  <li>Debby Chiu</li>
  <li>Josh Geransky</li>
  <li>Edmond Wong</li>
  <li>Aleksandra Sorokina</li>

------------------------------------------------------------------------------------------------------------------------------

<b>What our site does</b>

<i>Guardians of the Forest</i> is an online web game that has the user put out forest fires. The fires become more frequent, and if all the trees light up, the game is over! The user must see how long they can last, and in the process hopefully understand more about the critical nature of forest fires. If the player is interested, there is a 'learn more' page that offers more information.

<br>

<b>What we're trying to solve</b>

Forest fires, particularly in BC, are becoming more and more frequent every summer and without action nothing is going to change. Our hope is to raise awareness of this serious issue and encourage action against it- from something as simple as never leaving a campfire unattended to how they can help spread awareness themselves.
This falls under <i>scenario 4</i> as given by Hacking for Humanity, and it also could be applied to <i>scenario 2</i> as it uses gaming to educate.

<br>

<b>What technologies we used</b>

The game was developed in pure, unadulteraded HTML Canvas with JavaScript- a solution we would never recommend for designing a game. While it works, it was extremely difficult to develop and implement (especially in only two days!). We didn't get as far as we would've liked but we feel we managed to give a good idea of what we want to do.
Besides JavaScript, we used only CSS for the design on the home and learn more pages. Node.js was used for testing on a local server, and when the game was finished we hosted it with Firebase (link to that page at the top of the readme). The sprites for the game were designed with <i>Piskel</i>, a pixel art editor, linked below in the resources.

<br>

<b>What we found difficult</b>

With JavaScript, everything can feel difficult. That being said, the most involved and complicated feature to implement was the actual clicking and subsequent extinguishing of the fires. Because we used 'canvas' with JavaScript, everything is display as only one image without any actual reference for each sprite. This made it cumbersome to remove individual fires- plus, when something happened, the entire canvas had to be cleared and then re-drawn. Again, we cannot stress this enough: <i>do not make a game in straight JavaScript.</i>

<br>


<b>What are the next steps to complete the project?</b>


In order to complete the project, we would like to implement more of the features we wanted. <br> Features such as: trees growing over time just like the fires, tree variations (different tree types), sounds effects and music, leaderboard of the top 10 scores on a global scale as well as your score and position (for example, rank 53 score: 10000), restart game button (retry), fire animations, informational popups, natural causes of fire animations such as lightning & smoking, and more information on the learn page. There are also a number of bugs that we'd like to eventually be fixed.


<br><b>Resources utilised:</b><br>
https://firebase.google.com - Firebase, used for hosting the site<br>
https://www.piskelapp.com - Piskel, a pixel art editor<br>
https://www.urbanfonts.com/fonts/superscript.htm - Superscript font<br>
https://fonts.googleapis.com/css?family=Press+Start+2P|VT323 - Press Start 2P & VT323 fonts


