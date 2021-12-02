// Declaring the looseSound variable
var punch = new Audio("sounds/punch.mp3");

// Death count
var death = 0;

//Background Music
background = new Audio("sounds/backgroundMusic.mp3");
background.loop = true;

//Variable that determines on or off state of background music
music = false;

// Playing loose looseSound
// looseSound.play();

//Background Music button is clicked
document.querySelector(".slider").addEventListener("click", function() {

  background.volume = 0.06;

  music = !music;

  if(music){
    background.play();
  }
  else{
    background.pause();
  }

});


//Scene 1 (Starting Scene):
document.querySelector(".start-btn").addEventListener("click", function() {

  document.querySelector(".textBox").innerHTML = "";
  document.querySelector(".start-btn").classList.add("invisible");
  document.querySelector(".picture").classList.add("invisible");
  document.querySelector(".video").classList.remove("invisible");
  document.querySelector(".next-btn-1").classList.remove("invisible");

  document.querySelector(".video").innerHTML = "<video width='600vh' height='450vh' controls loop='loop' autoplay='autoplay'> <source src='video/OregairuStart.mp4' type='video/mp4'></video>";
});

//Scene 2 :
document.querySelector(".next-btn-1").addEventListener("click", function() {
  //Selecting the story div
  //Changing the HTML into once upon a time inside story div
  document.querySelector(".video").innerHTML = " ";
  document.querySelector(".textBox").innerHTML = "<p> We’re here. The teacher stopped before a completely unremarkable classroom and slid the door open with a rattle. Desks and chairs were stacked up casually in one corner of the classroom. What made it feel so different, though, was that there was a girl there, reading a book in the slanting rays of the setting sun. The moment I saw her, my body and mind both froze. I was entranced.When the girl noticed she had visitors, she bookmarked her paperback and looked up.  ' </p>";

  //Showing the next button
  document.querySelector(".next-btn-1").classList.add("invisible");
  document.querySelector(".video").classList.add("invisible");
  document.querySelector(".picture").classList.add("invisible");




  //Changing the HTML into once upon a time inside story div
  document.querySelector(".picture").classList.remove("invisible");
  document.querySelector(".picture").innerHTML = "<img src = 'images/yukinoClub.jpg' style = 'width: 55vh;'>";
  //Removing the start Button
  //Adding the invisible to the start button
  document.querySelector(".next-btn-2").classList.remove("invisible");

});

//Scene 3 :
document.querySelector(".next-btn-2").addEventListener("click", function() {

  document.querySelector(".textBox").innerHTML = "<p>Flawless visage. Flowing black hair. Even wearing the same uniform as all the faceless girls in my class, she looked completely different.<br><br> 'Ms. Hiratsuka. I thought I asked you to knock before entering.' <br><br>'Even if I knock, you never reply.'<br><br>'You come in without giving me time to.'<br><br> She cast the teacher a dissatisfied glance. <br><br>'And who’s this addled-looking boy?'<br><br> Her chilly gaze flicked toward me. I knew this girl. Class 2-J, Yukino Yukinoshita.</p>";
  //Selecting the story div
  //Changing the HTML into once upon a time inside story div
  document.querySelector(".picture").classList.add("invisible");

  document.querySelector(".next-btn-2").classList.add("invisible");

  document.querySelector(".next-btn-3").classList.remove("invisible");
});


//Scene 4:
document.querySelector(".next-btn-3").addEventListener("click", function() {

  document.querySelector(".textBox").innerHTML = "'This is Hikigaya. He wants to join the club.'<br><br> Prodded forward by Ms. Hiratsuka, I bowed lightly. I assumed she wanted me to introduce myself or something.";
  //Selecting the story div
  //Changing the HTML into once upon a time inside story div

  document.querySelector(".next-btn-3").classList.add("invisible");

  document.querySelector(".decision-1.choice-1").classList.remove("invisible");

  document.querySelector(".decision-1.choice-2").classList.remove("invisible");

  document.querySelector(".picture").classList.remove("invisible");

  document.querySelector(".picture").innerHTML = "<img src = 'images/yukino_3.jpg' style = 'width: 80vh;'>";

});

//Decision 1, Choice 1 function
function decision1Choice1(){
  document.querySelector(".textBox").innerHTML = "<p>Ms. Hiratsuka opened her mouth in response to my question. <br><br>'Your punishment will be to participate in this club’s activities. I won’t accept any arguments, disagreements, objections, questions, or back talk. Cool your head for a bit and think about what you did.' She handed down my sentence with the force of crashing waves, leaving me no room for protest.<br><br> 'Well, then, I think you can tell by looking at him, but he’s rotten to the core. That’s why he’s always alone. He’s such a pitiful soul.'<br><br>'If he learns how to be around people, I think he’ll straighten himself out a little. I’ll leave him with you. My request is that you correct his twisted, lonely character,' the teacher said, and proceded to leave the classroom.</p>";

  document.querySelector(".picture").classList.add("invisible");

  document.querySelector(".decision-1.choice-1").classList.add("invisible");
  document.querySelector(".decision-2.choice-1").classList.add("invisible");
  document.querySelector(".decision-2.choice-2").classList.add("invisible");
  document.querySelector(".decision-1.choice-2").classList.add("invisible");
  document.querySelector(".next-btn-4").classList.remove("invisible");

}

//Decision 1 : Deciding to leave the club or ask questions
//Decision 1, Choice 1
document.querySelector(".decision-1.choice-1").addEventListener("click", decision1Choice1);

//Decision 1, Choice 2
document.querySelector(".decision-1.choice-2").addEventListener("click", function() {

  document.querySelector(".textBox").innerHTML = "<p>Within a few miliseconds, a gust of wind suddenly blew onto my right cheek. I slowly turned my head and was greeted by Ms. Hiratsuka's fist. <br><br> 'I would like you to reconsider your decision Hikigaya.' </p>";
  //Selecting the story div
  //Changing the HTML into once upon a time inside story div

  document.querySelector(".picture").innerHTML = "<img src = 'images/hiratsuka_punch.jpg' style = 'width: 60vh;'>";

  document.querySelector(".decision-1.choice-2").classList.add("invisible");

  document.querySelector(".decision-1.choice-1").classList.add("invisible");

  document.querySelector(".decision-2.choice-1").classList.remove("invisible");

  document.querySelector(".decision-2.choice-2").classList.remove("invisible");

});

//Decision 2 : Taking the punch or complying with Hiratsuka
//Complying
document.querySelector(".decision-2.choice-1").addEventListener("click", decision1Choice1);

//Not Complying
document.querySelector(".decision-2.choice-2").addEventListener("click", function() {

  death+=1;

  punch.volume = 0.2;

  punch.play();

  document.querySelector(".textBox").innerHTML = "<h1>GAME OVER</h1>";

  document.querySelector(".picture").innerHTML = "<img src = 'images/hikigaya_dead.jpg' style = 'width: 60vh;'>";

  document.querySelector(".decision-2.choice-1").classList.add("invisible");

  document.querySelector(".decision-2.choice-2").classList.add("invisible");

  document.querySelector(".restart").classList.remove("invisible");

});

//Restart Button

document.querySelector(".restart").addEventListener("click", function() {
  document.querySelector(".textBox").innerHTML = "<p> We’re here. The teacher stopped before a completely unremarkable classroom and slid the door open with a rattle. Desks and chairs were stacked up casually in one corner of the classroom. What made it feel so different, though, was that there was a girl there, reading a book in the slanting rays of the setting sun. The scene was so picturesque that I imagined that even after the end of the world she would still be sitting there, just like that. The moment I saw her, my body and mind both froze. I was entranced. When the girl noticed she had visitors, she bookmarked her paperback and looked up.  ' </p>";

  document.querySelector(".next-btn-1").classList.add("invisible");
  document.querySelector(".video").classList.add("invisible");
  document.querySelector(".picture").classList.add("invisible");

  document.querySelector(".picture").classList.remove("invisible");
  document.querySelector(".picture").innerHTML = "<img src = 'images/yukinoClub.jpg' style = 'width: 55vh;'>";

  document.querySelector(".next-btn-2").classList.remove("invisible");

  document.querySelector(".restart").classList.add("invisible");
});

//next 4
document.querySelector(".next-btn-4").addEventListener("click", function() {
  document.querySelector(".textBox").innerHTML = "<p>Glaring at me with a downward look, Yukino stated 'Welcome to the volunteer's club, we extend a helping hand to those in need. I have been entrusted with this and will fulfill my responsibility. I will correct your problems for you. Be grateful.'</p>";

  document.querySelector(".picture").classList.remove("invisible");
  document.querySelector(".picture").innerHTML = "<img src = 'images/yukino_2.jpg' style = 'width: 70vh'>";
  document.querySelector(".next-btn-4").classList.add("invisible");
  document.querySelector(".next-btn-5").classList.remove("invisible");
});

//next 5
document.querySelector(".next-btn-5").addEventListener("click", function(){
  document.querySelector(".picture").classList.add("invisible");
  document.querySelector(".next-btn-5").classList.add("invisible");
  document.querySelector(".textBox").innerHTML = "<p>I guess I considered her an aloof beauty. At that moment, she wore a cold smile. To elaborate, it was sadistic.<br><br>'Hmph. Based on what I’ve seen, the reason you’re all alone is that rotten personality and those twisted sensibilities of yours.'<br><br> 'First, since you clearly feel so uncomfortable here, let’s give you a place to belong. Did you know? Just having somewhere you belong can save you from a tragic end like becoming a star and burning out of existence.'<br><br>‘The Nighthawk’s Star’?” Yukinoshita’s eyes widened. <br><br>'That’s unexpected. I didn’t think an average, mediocre high school boy would be reading Kenji Miyazawa.' 'Did you just slip in a remark implying my inferiority?' How rude could you get? She was treating a boy she’d only just met as an inferior being. </p>"
  document.querySelector(".next-btn-6").classList.remove("invisible");
});

//next 6 scene (gif scene)

document.querySelector(".next-btn-6").addEventListener("click", function(){
  document.querySelector(".next-btn-6").classList.add("invisible");
  document.querySelector(".picture").classList.remove("invisible");
  document.querySelector(".next-btn-7").classList.remove("invisible");
  document.querySelector(".picture").innerHTML = "<img src = 'images/yukinoAngel.gif' style = 'width: 70vh;'>";
  document.querySelector(".textBox").innerHTML = "<p>'Now your practice conversation with an actual person is complete. If you can speak with a girl like me, you should be able to speak to most ordinary people.'<br>And then she smiled.<br>'Now with this wonderful memory in your heart, you’ll have the strength to go live your life alone.' </p>";
});

document.querySelector(".next-btn-7").addEventListener("click", function(){
  document.querySelector(".picture").classList.add("invisible");
  document.querySelector(".next-btn-7").classList.add("invisible");
  document.querySelector(".next-btn-8").classList.remove("invisible");

  document.querySelector(".textBox").innerHTML = "<p>Ms Hiratsuka enetered the room. <br><br>‘Yukinoshita. Sorry to interrupt.’<br><br> She looked back and forth between the two of us. ‘I’m glad you two seem to be getting along.’ <br><br> Why and where the hell did she get that idea? <br><br>‘You keep working on fixing that twisted character of yours and correcting those rotten, sordid eyes. I’m going back now. Go home by the time school is over, you two.’<br><br>'H-hold on a minute, please! There’s something wrong with you! What do you mean, correct me? What the heck is with this place, anyway?’ I demanded.  </p>";
});

document.querySelector(".next-btn-8").addEventListener("click", function(){
  document.querySelector(".next-btn-8").classList.add("invisible");
  document.querySelector(".next-btn-9").classList.remove("invisible");

  document.querySelector(".textBox").innerHTML = "<p>Ms. Hiratsuka put a hand to her chin. ‘Yukinoshita didn’t explain it to you? In short, the goal of this club is to stimulate personal transformation. I guide students here who I believe are in need of change. Yukinoshita. It seems you’re having trouble correcting him.’ <br><br> ‘The problem is he isn’t even aware of his own issues,’ Yukinoshita replied.</p>";
  document.querySelector(".picture").classList.remove("invisible");
  document.querySelector(".picture").innerHTML = "<img src = 'images/yukinoHiratsuka.png' style = 'width: 60vh;'>";
});

//Decision 3
document.querySelector(".next-btn-9").addEventListener("click", function(){
  document.querySelector(".next-btn-9").classList.add("invisible");
  document.querySelector(".decision-3.choice-1").classList.remove("invisible");
  document.querySelector(".decision-3.choice-2").classList.remove("invisible");
  document.querySelector(".picture").classList.remove("invisible");

  document.querySelector(".picture").innerHTML = "<img src = 'images/hiratsukaPoint.png' style = 'width: 60vh; '>";

  document.querySelector(".textBox").innerHTML = "<p>‘No.’ Yukinoshita refused. <br><br> Ms. Hiratsuka cleared her throat. ‘The only way you can prove that you are righteous is through action! I told you to compete, so you’re going to have a competition! In order to make you two fight with all you’ve got, I’ll give you an incentive. How about the victor can order the loser to do anything?’</p>";

  // There was the sound of a chair scraping as Yukinoshita drew back. ‘With him as my competition, I feel a threat to my virtue, and so I refuse.’

});

//Getting punched part 2
document.querySelector(".decision-3.choice-1").addEventListener("click", function(){
  document.querySelector(".decision-3.choice-1").classList.add("invisible");
  document.querySelector(".decision-3.choice-2").classList.add("invisible");
  document.querySelector(".restart").classList.remove("invisible");

  document.querySelector(".picture").innerHTML = "<img src = 'images/hiratsukaPunch2.jpg' style = 'width: 60vh; '>";

  punch.volume = 0.2;

  punch.play();

  document.querySelector(".textBox").innerHTML = "<p>‘You ungrateful little worm! Can you not see that I'm trying to even out the playing field for you?!’</p>";

  death+=1;

});

document.querySelector(".decision-3.choice-2").addEventListener("click", function(){
  document.querySelector(".decision-3.choice-1").classList.add("invisible");
  document.querySelector(".decision-3.choice-2").classList.add("invisible");
  document.querySelector(".restart").classList.add("invisible");
  document.querySelector(".next-btn-10").classList.remove("invisible");

  document.querySelector(".picture").innerHTML = "<img src = 'images/yukinoDrawback.jpg' style = 'width: 50vh;'>";

  document.querySelector(".textBox").innerHTML = "Yukinoshita drew back. ‘With him as my competition, I feel a threat to my virtue, and so I refuse.’ <br><br>‘So even Yukino Yukinoshita is afraid of something... Are you that unsure of your ability to win?’ Ms. Hiratsuka asked.<br><br>Yukinoshita looked a little sullen. ‘Fine. Though I find it rather vexing to give in to such cheap provocation, I will accept your challenge and deal with him while I’m at it.’";

});

document.querySelector(".next-btn-10").addEventListener("click", function(){
  document.querySelector(".next-btn-10").classList.add("invisible");
  document.querySelector(".next-btn-11").classList.remove("invisible");

  document.querySelector(".picture").innerHTML = "<img src = 'images/yukino_2.jpg' style = 'width: 60vh;'>";

  document.querySelector(".textBox").innerHTML = "‘So it’s settled. I will be the judge of this competition.’ Yukinoshita briskly began preparing to leave. She tucked her book neatly in her bag and stood glancing at me. But she just looked at me and then left without a word. Sparing not so much as a bye, she strode briskly out the door. Her demeanor was so frigid, I didn’t even have a chance to say anything to her. ";

});

document.querySelector(".next-btn-11").addEventListener("click", function(){
  document.querySelector(".next-btn-11").classList.add("invisible");
  document.querySelector(".next-btn-12").classList.remove("invisible");

  document.querySelector(".picture").classList.add("invisible");

  document.querySelector(".textBox").innerHTML = "<p>And then I was left there, all alone. What an unlucky day it’d been. I got called to the teachers’ room, press-ganged into joining some mysterious club, verbally abused by a wastefully cute girl... I suffered a lot. And what’s more, how’d I get forced into this incomprehensible competition? I don’t even think I can beat Yukinoshita.</p> <h1>Youth really is a lie.</h1> <p>You were punched by Ms. Hiratsuka " + death + " times!";

});
