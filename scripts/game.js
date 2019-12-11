//
//SETS ALL VARIABLES FOR THE GAME
//
var timedDialogue = "";
var timedDialogue2 = "";
bukShot = 0;
currentArea = 1;
cellunlocked = false;
torch_ply = false;
beentohallway = false;
beentorture = false;
beenmorgue = false;
beentowesthall = false;
beentobonus = false;
beentojukebox = false
exit_1unlocked = false;
beentoexit_1 = false;
beentocorridor_2 = false;
beentohub = false;
unlocked_2 = false;
unlocked_3 = false;
unlocked_4 = false;
unlocked_5 = false;
unlocked_6 = false;
cratemove = false;
beento2_2 = false;
beento2_3 = false;
beento2_4 = false;
beento2_5 = false;
beento2_6 = false;
beento2_7 = false;
//inventory
paperclip = false;
icecream = false;
deadbugs = false;
lunchtray = false;
torch = false;
burnttorch = false;
note = false;
knife = false;
hat = false;
whip = false;
key_1 = false;
powder = false;
bucket_e = false;
bucket_f = false;
key2_3 = false;
key2_4 = false;
key2_5 = false;
key2_6 = false;
key2_7 = false;
inventory = false;
music = false;
plying_m = false;
//inventory listing
listed_t = false;
listed_pc = false;
listed_tray = false;
listed_n = false;
listed_ic = false;
listed_w = false;
listed_kn = false;
listed_ke = false;
listed_pow = false;
listed_burnt = false;
listed_bucket_e = false;
listed_bucket_f = false;
listed_key2_3 = false;
listed_key2_4 = false;
listed_key2_5 = false;
listed_key2_6 = false;
listed_key2_7 = false;
//puzzle solving for room re-entering
solved2_2 = false;
solved2_3 = false;
solved2_4 = false;
solved2_5 = false;
solved2_6 = false;
solved2_7 = false;

//
currentroom = "jail";
bukFight = false;
searchtable = false;
crate = false;
zombiedead = false;
health = 100;
z_health = 2;
buk_health = 5;
Xtra = 0;
//array variables
var array_z = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0];
function ATK_z(array_z) { return array_z[Math.floor(Math.random() * array_z.length)]; };
var ary_stndrd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var ary_player = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function ATK(ary_stndrd) { return ary_stndrd[Math.floor(Math.random() * ary_stndrd.length)]; };
function ATK_P(ary_player) { return ary_player[Math.floor(Math.random() * ary_player.length)]; };
//
//
//
$(document).ready(function() {
	$("#message_begin").fadeIn(3000);
	$("#area_main").fadeIn(3000);
	$("#command_line").fadeIn(3000);
	$("#map_back").fadeIn(3000);
	$("#inventory").fadeIn(3000);
	$("#inventory_br").fadeIn(3000);
	$("#inventory_box").fadeIn(3000);
	$("#health_display").fadeIn(3000);
	$("#location_JC").fadeIn(3000);
	$(".Map_JC").fadeIn(3000);
	$("#yes2").fadeIn(4000);
	$('<img src="heart/heart start.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
	$('<video autoplay loop id="screen"><source src="videos/video_JC/JCidle.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
	$("#yes2").fadeOut(4000);
	$("form").submit(function() {
		var input = $("#command_line").val();

		//
		//help
		//
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "help 2") {
				$("#message_help2").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//
		//end help
		//

		//
		//music
		//
		else if (input.indexOf("music") > -1) {
			if (input == "music on" && music == false) {
				$('<p>Playing game music.</p>').insertBefore("#placeholder").fadeIn(1000);
				music = true;

			}
			else if (input == "music off" && music == true) {
				$('<p>Stopping game music.</p>').insertBefore("#placeholder").fadeIn(1000);
				music = false;
			}
			else {
				$('<p>You can\'t do that</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//
		//end music
		//

		//
		//health
		//
		else if (input.indexOf("health") > -1) {
			if (input == "health") {
				$('<p>Health: ' + health + '</p>').insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//
		//end health
		//

		//
		//hard mode
		//
		else if (input.indexOf("hard mode") > -1) {
			if (input == "hard mode on") {
				$('<p>Okay bucko</p>').insertBefore("#placeholder").fadeIn(1000);
				health = 5;
			}
		}
		//
		//end hard mode
		//

		//
		//developer variable editor
		//
		else if (input.indexOf("M@K#") > -1) {
			if (input == "M@K# jukebox true") {
				$('<p>done</p>').insertBefore("#placeholder").fadeIn(1000);
				beentojukebox = true;
			}
			else if (input == "M@K# health false") {
				$('<p>done</p>').insertBefore("#placeholder").fadeIn(1000);
				health = 21;
			}
			else if (input == "M@K# jailcell unlock") {
				$('<p>done</p>').insertBefore("#placeholder").fadeIn(1000);
				cellunlocked = true
			}
			else if (input == "M@K# all true") {
				$('<p>done</p>').insertBefore("#placeholder").fadeIn(1000);
				cellunlocked = true;
				beentohallway = true;
				beentorture = true;
				beenmorgue = true;
				beentowesthall = true;
				beentobonus = true;
				beentojukebox = true;
				exit_1unlocked = true;
				beentoexit_1 = true;
				cratemove = true;
				paperclip = true;
				lunchtray = true;
				torch = true;
				knife = true;
				hat = true;
				whip = true;
				powder = true;
				searchtable = true;
				crate = true;
				zombiedead = true;
				burnttorch = true;
				icecream = true;
			}
			else if (input == "M@K# map show") {
				$('#dev_map').fadeIn(1000);
			}
		}
		//
		//end variable edit
		//

		//
		//song list
		//
		else if (input.indexOf("songs") > -1 && beentojukebox == true) {
			if (input == "songs") {
				$("#message_songs").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//
		//ends songs
		//

		//
		//take
		//
		else if (input.indexOf("take") > -1 || input.indexOf("read") > -1 || input.indexOf("pick up") > -1 || input.indexOf("fill") > -1) {

			if (input == "take" || input == "pick up" || input == "read") {
				$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//paperclip
			else if (input == "take paperclip" || input == "take paper clip" || input == "pick up paperclip" || input == "pick up paper clip") {
				if (currentroom == "jail" && paperclip == false && deadbugs == false && lunchtray == false) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == false && deadbugs == true && lunchtray == false) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == false && deadbugs == true && lunchtray == true) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == false && lunchtray == true && deadbugs == false) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//dead bugs
			else if (input == "take dead bugs" || input == "take deadbugs" || input == "pick up dead bugs" || input == "pick up deadbugs") {
				if (currentroom == "jail" && deadbugs == false && paperclip == true && lunchtray == true) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && deadbugs == false && paperclip == true && lunchtray == false) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && deadbugs == false && paperclip == false && lunchtray == false) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCbug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && deadbugs == false && paperclip == false && lunchtray == true) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCbug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//lunch tray
			else if (input == "take lunchtray" || input == "take lunch tray" || input == "take tray" || input == "pick up lunchtray" || input == "pick up lunch tray" || input == "pick up tray") {
				if (currentroom == "jail" && lunchtray == false) {
					lunchtray = true;

				if (deadbugs == false && paperclip == false) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCtray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == "ate" && paperclip == false) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCtray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && paperclip == false) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCbug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && paperclip == true) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == false && paperclip == true) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == "ate" && paperclip == true) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//torch
			else if (input == "take torch" || input == "take the torch" || input == "pick up torch" || input == "pick up the torch") {
				if (currentroom == "hallway" && torch == false) {
					torch = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a torch. You can now venture off into the dark hallway.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#hallway_TH1").fadeIn(500);
					$("#hallway_TH2").fadeIn(500);
					if (note == false) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (note == true) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//note
			else if (input == "take note" || input == "read note" || input == "pick up note" || input == "pick up the note") {
				if (currentroom == "hallway" && note == false && torch == false) {
					note = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a note. It reads: <br />You asked for more excitement in your life, so we bashed your head in, gave you amnesia, and dragged you down into this dungeon, it shouldn\'t get too hard... for now...<br /><br />Sincerely,<br/>The Wish Granted Association<br /><br />P.S. Watch out for our zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (currentroom == "hallway" && note == false && torch == true) {
					note = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a note. It reads: <br />You asked for more excitement in your life, so we bashed your head in, gave you amnesia, and dragged you down into this dungeon, it shouldn\'t get too hard... for now...<br /><br />Sincerely,<br/>The Wish Granted Association<br /><br />P.S. Watch out for our zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//whip
			else if (input == "take whip" || input == "pick up whip") {
				if (currentroom == "torture" && whip == false) {
					whip = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a whip.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (whip == true && hat == true) {
						$('<p>A whip and a hat? Come on Indy, no shenanigans here.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//ice cream
			else if (input == "take ice cream" || input == "pick up ice cream") {
				if (currentroom == "westhall" && icecream == false) {
					icecream = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some ice cream.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}

			}
			//

			//take bucket
			else if (input == "take bucket") {
				if (currentroom == "2.2" && bukFight == false) {
					$('<p>OH MY GOD! THE BUCKET IS ALIVE!<br>AS NARRATOR AND DEVELOPER OF THIS GAME, I <i>NEVER</i> COULD HAVE SEEN THIS COMING!</p>').insertBefore("#placeholder").fadeIn(1000);
					bukFight = true;
				} else if (currentroom == "2.2" && bukFight == true && bucket_e == true) {
					$('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//take water
			else if (input == "take water" || input == "fill bucket") {
				if (bucket_e == true) {
					$("<p>You filled the bucket with water.<br>You can <i>place</i> that <i>bucket</i> if you so choose.</p>").insertBefore('#placeholder').fadeIn(1000);
					bucket_f = true;
					bucket_e = false;
				} else if (bucket_f == true) {
					$("<p>The bucket is already full.</p>").insertBefore('#placeholder').fadeIn(1000);
				}
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);

		}
		//
		//end take
		//

		//place bucket
		else if (input.indexOf("place") > -1) {
			if (input == "place bucket") {
				if (currentroom == "2.2") {
					if (bucket_e == true) {
						$('<p>Why? There\'s nothing in your bucket.</p>').insertBefore('#placeholder').fadeIn(1000);
					} else if (bucket_f == true) {
						$('<p>You place your bucket on the scale and watch it slowly tip.<br>Below the stone, you see a small rug, with a tag sticking out from underneath</p>').insertBefore('#placeholder').fadeIn(1000);
						bucket_f = false;
						$('#bukF').fadeOut(10);
						solved2_2 = true;
					} else {
						$('<p>What bucket?</p>').insertBefore('#placeholder').fadeIn(1000);
					}
				} else {
					if (bucket_e == true) {
						$('<p>Why? There\'s nowhere to do that here, plus, your bucket is empty.</p>').insertBefore('#placeholder').fadeIn(1000);
					} else if (bucket_f == true) {
						$('<p>Why? There\'s nowhere to do that here.</p>').insertBefore('#placeholder').fadeIn(1000);
					}  else {
						$('<p>What bucket?</p>').insertBefore('#placeholder').fadeIn(1000);
					}
				}
			}
		}

		//
		//search
		//
		else if (input.indexOf("search") > -1 || input.indexOf("check") > -1) {

			if (input == "search" || input == "check") {
				$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//table
			else if (input == "search table" || input == "check table") {
				if (currentroom == "torture" && hat == false && knife == false) {
					hat = true;
					knife = true;
					searchtable = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You found a knife stuck in the table and picked it up. You also take a hat from the table and place it on your head.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (whip == true && hat == true) {
						$('<p>come on Indy, this is no time for shenanigans</p>').insertBefore("#placeholder").fadeIn(1000);
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_knife_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (whip == false && hat == true) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_knife.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					$('<p>You put the hat back on the table</p>').insertBefore("#placeholder").fadeIn(1000);
					hat = false;

				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//zombie
			else if (input == "search zombie" || input == "check zombie") {
				if (currentroom == "morgue" && zombiedead == true) {
					key_1 = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You found a key buried in the zombie\'s flesh.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//crate
			else if (input == "search crate" || input == "check crate") {
				if (currentroom == "bonus") {
					powder = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You found a strange powder. What use could that possibly have?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//gunpowder
			else if (input == "search powder" || input == "check powder") {
				if (powder == true && torch == true) {
					$('<p>You lean in close with the torch to see the powder<br> like the Chinese in the 8th century,<br> you have discovered gunpowder</p>').insertBefore("#placeholder").fadeIn(1000);
					//figure out stock explosion please
					$("audio").detach(".death");
					$("img").detach(".death");
					$("video").detach(".death");
					$(".death").fadeOut(3000);
					$("#container").fadeOut(9000, function() {
					$("#killself").fadeIn(9000);
					});
				}
				else if (powder == false) {
					$('<p>What powder?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			//rug 2.2
			else if (input == "search rug") {
				if (solved2_2 == false) {
					$('<p>You can\'t, the stone is still down.</p>').insertBefore("#placeholder").fadeIn(1000);
				} else if (solved2_2 == true) {
					$('<p>You search the rug and find a key labeled <b>"Room 2"</b></p>').insertBefore("#placeholder").fadeIn(1000);
					key2_3 = true;
					solved2_2 = "complete";
				} else {
					$('<p>You already have.</p>').insertBefore('#placeholder').fadeIn(1000);
				}
			}


			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);

		}
		//
		//end search
		//

		//
		//move
		//
		else if (input.indexOf("move") > -1) {
			if (input == "move crate" && currentroom == "bonus" && cratemove == false) {
				$("audio").detach("#move");
				$('<audio autoplay id="move"><source src="soundfx/move_crate.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>You reveal a ladder downwards.</p>').insertBefore("#placeholder").fadeIn(1000);
				cratemove = true

			}
			else if (input == "move stone" && currentroom == "2.2") {
				if (solved2_2 == false) {
					$('<p>I mean yeah, if a bucket of water can lift it I guess it can\'t be too heavy.</p>').insertBefore('#placeholder').fadeIn(1000);
					solved2_2 = true;
				} else if (solved2_2 == true || solved2_2 == "complete") {
					$('<p>It\'s already moved.</p>').insertBefore('#placeholder').fadeIn(1000);
				}
			}
			else $('<p>You can\'t do that</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end move
		//

		//
		//eat
		//
		else if (input.indexOf("eat") > -1) {

			if (input == "eat") {
				$('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//powder
			else if (input == "eat powder" || input == "eat strange powder") {
				if (powder == true) {
					$("audio").detach(".death");
					$("img").detach(".death");
					$("video").detach(".death");
					$(".death").fadeOut(3000);
					$("#container").fadeOut(3000, function() {
						$("#foodpoisoning").fadeIn(3000);
					});
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//


			//bugs
			else if (input == "eat bugs" || input == "eat dead bugs") {
				if (deadbugs == true) {
					$('<p>Dude, that\'s really gross<br> like wow <br> gross</p>').insertBefore("#placeholder").fadeIn(1000);
					deadbugs = "ate";
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//ice cream
			else if (input == "eat ice cream") {
				if (health < 91 && icecream == true) {
					$('<p>You eat the floor ice cream and somehow it recovers your health.</p>').insertBefore("#placeholder").fadeIn(1000);
					health += 10;
					icecream = "ate";
				}
				else if (health < 100 && health > 90 && icecream == true) {
					$('<p>You eat the floor ice cream and somehow it recovers your health.</p>').insertBefore("#placeholder").fadeIn(1000);
					health = 100;
					icecream = "ate";
				}
				else if (health == 100 && icecream == true) {
					$('<p>You are already at full health.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			else $('<p>I don\'t understand "' + input + '</p>').insertBefore("#placeholder").fadeIn(1000);

		}
		//
		//end eat
		//

		//
		//attack
		//
		else if (input.indexOf("attack") > -1) {

			if (input == "attack") {
				$('<p>attack what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "attack zombie" && currentroom == "morgue") {
				$('<p>attack zombie with what?</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "attack bucket" && currentroom == "2.2") {
				$('<p>attack bucket with what?</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//zombie
			else if (input == "attack zombie with knife") {
				if (currentroom == "morgue" && knife == true && zombiedead == false) {
					ATK_z(array_z);
					if (ATK_z(array_z) == 2) {
						if (z_health == 1) {
							zombiedead = true;
							$('<p>You hit the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
							$('<p>You did it! The zombie is dead! <br> You see a glimmer in the zombie\'s torso?</p>').insertBefore("#placeholder").fadeIn(1000);
						} else {
							z_health -= 1;
							$('<p>You hit the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
							$('<p>He\'s looking pretty beat up too. Keep going!</p>').insertBefore("#placeholder").fadeIn(1000);
						}
					}
					else if (ATK_z(array_z) == 1) {
						$('<p>You missed the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<p>The zombie attacks back! (-2 HP)</p>').insertBefore("#placeholder").fadeIn(1000);
						health -= 2;
					}
					else if (ATK_z(array_z) == 0){
						$('<p>You strike yourself.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<p>Ouch! (-2 HP)</p>').insertBefore("#placeholder").fadeIn(1000);
						health -= 2;
					}
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "attack zombie with gun") {
				if (currentroom == "morgue" && zombiedead == false) {
					$('<p>Where did you get that? seriuosly where?<br> I mean you killed the zombie,<br> but where did you get a gun?</p>').insertBefore("#placeholder").fadeIn(1000);
					zombiedead = true;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "attack zombie with lunch tray" || input == "attack zombie with lunchtray" || input == "attack zombie with tray") {
				if (currentroom == "morgue" && lunchtray == true && zombiedead == false) {
					ATK_z(array_z);
					if (ATK_z(array_z) == 2) {
						if (z_health == 1) {
							zombiedead = true;
							$('<p>You hit the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
							$('<p>You did it! The zombie is dead! <br> You see a glimmer in the zombie\'s torso?</p>').insertBefore("#placeholder").fadeIn(1000);
						} else {
							z_health -= 1;
							$('<p>You hit the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
							$('<p>He\'s looking pretty beat up too. Keep going!</p>').insertBefore("#placeholder").fadeIn(1000);
						}
					}
					else if (ATK_z(array_z) == 1) {
						$('<p>You missed the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<p>The zombie attacks back! (-2 HP)</p>').insertBefore("#placeholder").fadeIn(1000);
						health -= 2;
					}
					else if (ATK_z(array_z) == 0){
						$('<p>You strike yourself.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<p>Ouch! (-2 HP)</p>').insertBefore("#placeholder").fadeIn(1000);
						health -= 2;
					}
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//attack with whip
			else if (input == "attack zombie with whip") {
				if (currentroom == "morgue" && whip == true && zombiedead == false) {
					ATK_z(array_z);
					if (ATK_z(array_z) == 2) {
						if (z_health == 1) {
							zombiedead = true;
							$('<p>You hit the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
							$('<p>You did it! The zombie is dead! <br> You see a glimmer in the zombie\'s torso?</p>').insertBefore("#placeholder").fadeIn(1000);
						} else {
							z_health -= 1;
							$('<p>You hit the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
							$('<p>He\'s looking pretty beat up too. Keep going!</p>').insertBefore("#placeholder").fadeIn(1000);
						}
					}
					else if (ATK_z(array_z) == 1) {
						$('<p>You missed the zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<p>The zombie attacks back! (-2 HP)</p>').insertBefore("#placeholder").fadeIn(1000);
						health -= 2;
					}
					else if (ATK_z(array_z) == 0){
						$('<p>You strike yourself.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<p>Ouch! (-2 HP)</p>').insertBefore("#placeholder").fadeIn(1000);
						health -= 2;
					}
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//attack bucket
			else if (input == "attack bucket with knife" && currentroom == "2.2" && bukFight == true && bucket_e == false && bucket_f == false) {
				if (buk_health >= 2) {
					bukDam = Math.ceil(Math.random() * 20);
					playDam = Math.ceil(Math.random() * 20);
					if (bukDam == 20) {
						health -= 5;
						$('<p>The bucket kicks you in the shins and you take 5 damage.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam == 1) {
						if (buk_health == 2) {
							buk_health = 0;
							$('<p>The bucket literally fell over and died.<br>You pick up the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
							bucket_e = true;
						} else {
							buk_health -= 2;
							$('<p>The bucket tripped trying to attack and took double damage.</p>').insertBefore("#placeholder").fadeIn(1000);
						}
					} else if (bukDam != 1 && (bukDam - 4) < playDam) {
						buk_health -= 1;
						$('<p>You stike the bucket with your knife.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam != 20 && bukDam > playDam) {
						$('<p>The bucket evaded your attempt.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				} else if (buk_health < 2) {
					bukDam = ATK(ary_stndrd);
					playDam = ATK_P(ary_player);
					if (bukDam == 20) {
						health -= 5;
						$('<p>The bucket kicks you in the shins and you take 5 damage.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam == 1) {
						buk_health = 0;
						$('<p>The bucket literally fell over and died.<br>You pick up the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
						bucket_e = true;
					} else if (bukDam != 1 && (bukDam - 4) < playDam) {
						buk_health = 0;
						$('<p>You struck the bucket and killed it.<br>You pick up the bucket</p>').insertBefore("#placeholder").fadeIn(1000);
						bucket_e = true;
					} else if (bukDam != 20 && bukDam > playDam) {
						$('<p>The bucket dodged your advance!</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
			}
			else if (input == "attack bucket with whip" && currentroom == "2.2" && bukFight == true) {
				if (buk_health >= 2) {
					bukDam = Math.ceil(Math.random() * 20);
					playDam = Math.ceil(Math.random() * 20);
					if (bukDam == 20) {
						health -= 5;
						$('<p>The bucket kicks you in the shins and you take 5 damage.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam == 1) {
						if (buk_health == 2) {
							buk_health = 0;
							$('<p>The bucket literally fell over and died.<br>You pick up the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
							bucket_e = true;
						} else {
							buk_health -= 2;
							$('<p>The bucket tripped trying to attack and took double damage.</p>').insertBefore("#placeholder").fadeIn(1000);
						}
					} else if (bukDam != 1 && (bukDam - 4) < playDam) {
						buk_health -= 1;
						$('<p>You whip the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam != 20 && bukDam > playDam) {
						$('<p>The bucket evaded your attempt.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				} else if (buk_health < 2) {
					bukDam = ATK(ary_stndrd);
					playDam = ATK_P(ary_player);
					if (bukDam == 20) {
						health -= 5;
						$('<p>The bucket kicks you in the shins and you take 5 damage.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam == 1) {
						buk_health = 0;
						$('<p>The bucket literally fell over and died.<br>You pick up the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
						bucket_e = true;
					} else if (bukDam != 1 && (bukDam - 4) < playDam) {
						buk_health = 0;
						$('<p>You whipped the bucket and killed it.<br>You pick up the bucket</p>').insertBefore("#placeholder").fadeIn(1000);
						bucket_e = true;
					} else if (bukDam != 20 && bukDam > playDam) {
						$('<p>The bucket dodged your advance!</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
			}
			else if (input == "attack bucket with tray" && currentroom == "2.2" && bukFight == true) {
				if (buk_health >= 2) {
					bukDam = Math.ceil(Math.random() * 20);
					playDam = Math.ceil(Math.random() * 20);
					if (bukDam == 20) {
						health -= 5;
						$('<p>The bucket kicks you in the shins and you take 5 damage.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam == 1) {
						if (buk_health == 2) {
							buk_health = 0;
							$('<p>The bucket literally fell over and died.<br>You pick up the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
							bucket_e = true;
						} else {
							buk_health -= 2;
							$('<p>The bucket tripped trying to attack and took double damage.</p>').insertBefore("#placeholder").fadeIn(1000);
						}
					} else if (bukDam != 1 && (bukDam - 4) < playDam) {
						buk_health -= 1;
						$('<p>You whack the bucket with your tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam != 20 && bukDam > playDam) {
						$('<p>The bucket evaded your attempt.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				} else if (buk_health < 2) {
					bukDam = ATK(ary_stndrd);
					playDam = ATK_P(ary_player);
					if (bukDam == 20) {
						health -= 5;
						$('<p>The bucket kicks you in the shins and you take 5 damage.</p>').insertBefore("#placeholder").fadeIn(1000);
					} else if (bukDam == 1) {
						buk_health = 0;
						$('<p>The bucket literally fell over and died.<br>You pick up the bucket.</p>').insertBefore("#placeholder").fadeIn(1000);
						bucket_e = true;
					} else if (bukDam != 1 && (bukDam - 4) < playDam) {
						buk_health = 0;
						$('<p>You smacked the bucket one final time and killed the helpless bucket.<br>You pick up the bucket</p>').insertBefore("#placeholder").fadeIn(1000);
						bucket_e = true;
					} else if (bukDam != 20 && bukDam > playDam) {
						$('<p>The bucket dodged your advance!</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
			}
			else if (input == "attack bucket with gun" && currentroom == "2.2" && bukFight == true) {
				if (bukShot == 0) {
					$('<p>Dude.<br>You just put a hole, in the bucket that you need to <i>fill</i> to solve this puzzle<br>Like yeah, it\'s dead now, but you ruined it<br><br>You know what?<br>no<br>I brought it back to life so you can try that agin, I mean come on, really</p>').insertBefore("#placeholder").fadeIn(1000);
					bukShot = 1;
				} else if (bukShot == 1) {
					$('<p>Seriously<br>Stop<br>I brought it back again but this was the last time.</p>').insertBefore("#placeholder").fadeIn(1000);
					bukShot = 2;
				} else if (bukShot >= 2) {
					$('<p>I warned you<br>You shot the bucket, and considering breaking the bucket renders the game unplayable<br>And you would\'nt listen to me<br>This is soviet Russia now,<br>And in soviet Russia, bucket shoots you<br><br>You have died<br>good job.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("audio").detach(".death");
					$("img").detach(".death");
					$("video").detach(".death");
					$(".death").fadeOut(12000);
					$("#container").fadeOut(12000, function() {
						$("#killself").fadeIn(12000);
					});
				}
			}
			//


			//kill self
			else if (input == "attack self with lunch tray" || input == "attack self with lunchtray" || input == "attack self with tray") {
				if (lunchtray == true && health == 1) {
					$("audio").detach(".death");
					$("img").detach(".death");
					$("video").detach(".death");
					$(".death").fadeOut(3000);
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else if (lunchtray == true && health > 1) {
					$('<p>You lose 1 HP, good job.</p>').insertBefore("#placeholder").fadeIn(1000);
					health -= 1;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "attack self with knife") {
				if (knife == true) {
					$("audio").detach(".death");
					$("img").detach(".death");
					$("video").detach(".death");
					$(".death").fadeOut(3000);
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "attack self with whip") {
				if (whip == true) {
					$("audio").detach(".death");
					$("img").detach(".death");
					$("video").detach(".death");
					$(".death").fadeOut(3000);
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "attack self with gun") {
				$('<p>You shot yourself, i don\'t know where you got ammo<br> or a gun for that matter<br> but you shot yourself</p>').insertBefore("#placeholder").fadeIn(1000);
				$("audio").detach(".death");
				$("img").detach(".death");
				$("video").detach(".death");
				$(".death").fadeOut(3000);
				$("#container").fadeOut(9000, function() {
				$("#killself").fadeIn(9000);
			});
			}

			//

			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);


		}
		//
		//end attack
		//

		//
		//inventory
		//
		else if (input.indexOf("inventory") > -1) {
			if (input == "inventory") {

				//paperclips
				if (paperclip == true) {
					pclip = "Paper Clip<br />";
				}
				else {
					pclip = "";
				}
				//

				//dead bugs
				if (deadbugs == true) {
					dbugs = "Dead Bugs<br />";
				}
				else {
					dbugs = "";
				}
				//

				//lunch tray
				if (lunchtray == true) {
					ltray = "Lunch Tray<br />";
				}
				else {
					ltray = "";
				}
				//

				//torch
				if (torch == true) {
					tch = "Torch<br />";
				}
				else {
					tch = "";
				}
				//

				//burnt torch
				if (burnttorch == true) {
					btch = "Burnt torch<br />";
				}
				else if (burnttorch == false) {
					btch = "";
				};
				//

				//note
				if (note == true) {
					nt = "Note from Captors<br />";
				}
				else {
					nt = "";
				}
				//

				//ice cream
				if (icecream == true) {
					icre = "Ice Cream<br />";
				}
				else {
					icre = "";
				}

				//hat
				if (hat == true) {
					ht = "Hat<br />";
				}
				else {
					ht = "";
				}
				//

				//knife
				if (knife == true) {
					knf = "Knife<br />";
				}
				else {
					knf = "";
				}
				//

				//whip
				if (whip == true) {
					whp = "Whip<br />";
				}
				else {
					whp = "";
				}
				//

				//key
				if (key_1 == true) {
					ky_1 = "Key<br />";
				}
				else if (key_1 == false || key_1 == "used") {
					ky_1 = "";
				};
				//

				//powder
				if (powder == true) {
					powd = "Strange Powder<br />";
				}
				else {
					powd = "";
				}
				//

				//bucket
				if (bucket_e == true) {
					buk = "empty bucket";
				} else if (bucket_f == true) {
					buk = "bucket of water";
				} else {
					buk = "";
				}
				//

				//key2_3
				if(key2_3 == true){
					ky2_3 = 'a key labeled "2"';
				} else {
					ky2_3 = "";
				}

				if (pclip == "" && dbugs == "" && ltray == "") {
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + pclip + dbugs + ltray + tch + btch + nt + ht + whp + knf + ky_1 + powd + icre + buk + ky2_3 + '</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end inventory
		//

		//
		//unlock
		//
		else if (input.indexOf("unlock") > -1) {
			if (input == "unlock" || input == "unlock door" || input == "unlock jail door" || input == "unlock jaildoor") {
				$('<p>Unlock door with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//jail door
			else if (input == "unlock jail door with paperclip" || input == "unlock jaildoor with paperclip" || input == "unlock jail door with paper clip" || input == "unlock jaildoor with paper clip" || input == "unlock door with paper clip" || input == "unlock door with paperclip") {
				if (currentroom != "jail") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (cellunlocked == true) {
					$('<p>The door is already unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (paperclip == true && cellunlocked == false) {
					cellunlocked = true;

					$('<p>You unlocked the jail door successfully. You can now proceed north.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (lunchtray == true && deadbugs == true) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
						$('<video autoplay id="screen"><source src="videos/video_JC/JCunlock_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == true && deadbugs == false) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
						$('<video autoplay id="screen"><source src="videos/video_JC/JCunlock_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == true && deadbugs == "ate") {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
						$('<video autoplay id="screen"><source src="videos/video_JC/JCunlock_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == false && deadbugs == true) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
						$('<video autoplay id="screen"><source src="videos/video_JC/JCunlock_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == false && deadbugs == false) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
						$('<video autoplay id="screen"><source src="videos/video_JC/JCunlock.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == false && deadbugs == "ate") {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
						$('<video autoplay id="screen"><source src="videos/video_JC/JCunlock.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//A1 exit door
			else if (input == "unlock door with key") {
				if (currentroom != "exit_1") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (exit_1unlocked == true) {
					$('<p>The door is already unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "exit_1" && key_1 == true) {
					exit_1unlocked = true;
					key_1 = "used";
					$('<p>You unlocked the door successfully. You can now proceed northward.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//door to 2.3
			else if (input == "unlock door 2 with key") {
				if (key2_3 == true) {
					$('<p>You successfully unlocked the second door</p>').insertBefore('#placeholder').fadeIn(1000);
					key2_3 = "used";
					unlocked_2 = true;
				} else {
					$('<p>You don\'t have that key.</p>').insertBefore('#placeholder').fadeIn(1000);
				}
			}
			//

			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);

		}
		//
		//end unlock
		//

		//
		//go
		//
		else if (input.indexOf("go") > -1) {
			if (input == "go") {
				$('<p>Go in which direction?</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//go to hall way
			else if (input == "go north" && currentroom == "jail") {
				if (cellunlocked == true) {
					if (beentohallway == true) {
						if (note == false) {
							hallnote = " The note is still here. ";
						}
						else {
							hallnote = "";
						}
						if (torch == false) {
							halltorch = " The torch continues to light the dim hallway. ";
						}
						else {
							halltorch = "";
						}
						$('<p>You are back in the hallway. The hallway continues to the east and west. The jail room is to the south. ' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						if (torch == true && note == true) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="videos/video_TH/TH_fade_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						} }
						else if (torch == true && note == false) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="videos/video_TH/TH_fade_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						}
						else if (torch == false && note == false) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="videos/video_TH/TH_fade.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="videos/video_TH/TH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						}
						else if (torch == false && note == true) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="videos/video_TH/TH_fade_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						}
					}
					else {
						$("#area_hallway").clone().insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						beentohallway = true;
						$("video").detach("#screen");
						$('<video autoplay id="screen"><source src="videos/video_TH/TH_fade.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						setTimeout(function(){TH_enter()}, 1000);
						function TH_enter() {
							$("video").detach("#screen");
							$('<video autoplay loop id="screen"><source src="videos/video_TH/TH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
				}
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//go back to jail cell
			else if (input == "go south" && currentroom == "hallway") {
				if (deadbugs == false) {
					jailbugs = "The dead bugs are still here";
					jailperiod = ".";
				}
				else {
					jailbugs = "";
				}
				if (lunchtray == false) {
					jailtray = "The lunch tray is still here";
					jailperiod = ".";
				}
				else {
					jailtray = "";
				}
				if (deadbugs == false && lunchtray == false) {
					jailword = " and ";
					jailtray = "the lunch tray is still here";
					jailperiod = ".";
				}
				else {
					jailword = "";
				}
				if (deadbugs == true && lunchtray == true) {
					jailperiod = "";
				}
				$('<p>You are back in the jail cell. To the north is the door. ' + jailbugs + jailword + jailtray + jailperiod + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "jail";
				if (deadbugs == false && lunchtray == false) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == false && lunchtray == true) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && lunchtray == true) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && lunchtray == false) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_JC/JCclip_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
			}
			//

			//go to torture room from hallway
			else if (input == "go east" && currentroom == "hallway") {
				if (torch == true) {
					if (beentorture == true) {
						if (searchtable == false) {
							torturetable = "The table seems to emit a strange energy. ";
						}
						else {
							torturetable = "";
						}
						if (whip == false) {
							torturewhip = "The whip remains stationed on the wall. ";
						}
						else {
							torturewhip = "";
						}
						$('<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway you came from. ' + torturetable + torturewhip + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "torture";
						$("video").detach("#screen");
						if (searchtable == false && whip == false) {
							$('<video autoplay loop id="screen"><source src="videos/video_TR/TR.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						else if (searchtable == true && whip == false) {
							$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_knife.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						else if (searchtable == true && whip == true) {
							$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_knife_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						else if (searchtable == false && whip == true) {
							$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
					}
					else {
						$("#area_torture").clone().insertBefore("#placeholder").fadeIn(1000);
						beentorture = true;
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_TR/TR.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						currentroom = "torture";
					}
				}
				else {
					$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//go to westhall from hallway
			else if (input == "go west" && currentroom == "hallway") {
				if (torch == true) {
					if (beentowesthall == true) {
						$("video").detach("#screen");
						if (icecream == true || icecream == "ate") {
						$('<p>You are back at the west hallway. To the east is where you came from. To the north and south are dark rooms.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<video autoplay loop id="screen"><source src="videos/video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						currentroom = "westhall";
						}
						else if (icecream == false) {
							$('<video autoplay loop id="screen"><source src="videos/video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							$('<p>You are back at the west hallway. The floor cream remains. To the east is where you came from. To the north and south are dark rooms.</p>').insertBefore("#placeholder").fadeIn(1000);
							currentroom = "westhall";
						}
					}
					else {
						$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						beentowesthall = true;
						currentroom = "westhall";
					}
				}
				else {
					$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//go to exit from westhallway
			else if (input == "go north" && currentroom == "westhall") {
				$("video").detach("#screen");
				if (beentoexit_1 == true) {
					$('<p>You are back at the room with the strange door. To the south is the hallway you came from.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "exit_1";
				}
				else {
					$("#area_exit").clone().insertBefore("#placeholder").fadeIn(1000);
					beentoexit_1 = true;
					currentroom = "exit_1";
				}
			}
			//

			//go to westhallway from exit
			else if (input == "go south" && currentroom == "exit_1") {
				if (beentowesthall == true) {
					if (icecream == true || icecream == "ate") {
						$("video").detach("#screen");
						$('<p>You are back at the west hallway. To the north is where you came from. To the south is a dark room and to the east the hallway continues.</p>').insertBefore("#placeholder").fadeIn(1000);
						$('<video autoplay loop id="screen"><source src="videos/video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						currentroom = "westhall";
						}
						else if (icecream == false) {
							$("video").detach("#screen");
							$('<video autoplay loop id="screen"><source src="videos/video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							$('<p>You are back at the west hallway. The floor cream remains. To the north is where you came from. To the south is a dark room and to the east the hallway continues.</p>').insertBefore("#placeholder").fadeIn(1000);
							currentroom = "westhall";
					}
				}
				else {
					$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
					beentowesthall = true;
					currentroom = "westhall";
				}
			}
			//

			//go north from tutorial
			else if (input == "go north" && currentroom == "exit_1") {
				if (exit_1unlocked == true) {
					$("#area_2Corridor").clone().insertBefore("#placeholder").fadeIn(1000);
					burnttorch = true;
					torch = false;
					currentroom = "corridor_2";
					beentocorridor_2 = true;
					currentArea = 2;
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//

			//can't return
			else if (input == "go south" && currentroom == "corridor_2") {
				$('<p>I\'m afraid you cannot return through the door, it\'s too dark for your dim torch</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//go to hub
			else if (input == "go north" && currentroom == "corridor_2" || input == "go back" && currentroom == "2.2" || input == "go back" && currentroom == "2.3" || input == "go back" && currentroom == "2.4" || input == "go back" && currentroom == "2.5" || input == "go back" && currentroom == "2.6" || input == "go back" && currentroom == "2.7") {
				if (beentohub == false) {
				$("#area_hub").clone().insertBefore("#placeholder").fadeIn(1000);
				beentohub = true;
				}
				else {
					if (unlocked_3 == true) {
						ulo3 = "";
					}
					else {
						ulo3 = " 3,";
					}
					if (unlocked_4 == true) {
						ulo4 = "";
					}
					else {
						ulo4 = " 4,";
					}
					if (unlocked_5 == true) {
						ulo5 = "";
					}
					else {
						ulo5 = " 5,";
					}
					if (unlocked_6 == true) {
						ulo6 = "";
					}
					else {
						ulo6 = " 6";
					}
					if (unlocked_2 == false) {
						$('<p>You return to the hub, south the corridor,<br>All but the first door are locked.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
					else {
						$('<p>You return to the hub room. <br>Doors' + ulo3  + ulo4 + ulo5 + ulo6 +' are still locked.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
				currentroom = "area_hub";
			}
			//

			//go to room 2.2
			else if (input == "go through door 1" && currentroom == "area_hub") {
				if (beento2_2 == false) {
					$('<p>You enter a room that is obviously the first of many.<br> Agaist the left wall, there sits a large scale.<br>On one arm, a stone, and on the other, a standard scale platform.<br>In the back right corner, is a small fountain, with a bucket to its side.<br>Finally, under the stone, there lies a rug with a small tag visible beneath.</p>').insertBefore("#placeholder").fadeIn(1000);

					beento2_2 = true;
				}
				else {
					if (bucket_e == false && solved2_2 == false && bucket_f == false) {
						$("<p>You return to the first challenge room, the bucket remains, the puzzle unsolved.<br>It's as if you've done nothing.</p>").insertBefore("#placeholder").fadeIn(1000);
					} else if (bucket_e == true && solved2_2 == false) {
						$("<p>You walk back into the first challenge room,<br>You have the pieces to solve this puzzle, but you haven't<br>Why is that?</p>").insertBefore("#placeholder").fadeIn(1000);
					} else if (bucket_f == true && solved2_2 == false) {
						$("<p>Come on now. The bucket is full. One command will complete this puzzle<br>What are you waiting for?!</p>").insertBefore("#placeholder").fadeIn(1000);
					} else if (bucket_e == true && solved2_2 == true) {
						$("<p>This room is done, I guess there could be a reason to be back here, but that's on you.</p>").insertBefore("#placeholder").fadeIn(1000);
					} else if (bucket_f == true && solved2_2 == true) {
						$("<p>You're back in the first challenge room<br>All you\'re missing is the key</p>").insertBefore("#placeholder").fadeIn(1000);
					} else if (bucket_f == true && solved2_2 == "complete") {
						$("<p>You're back in the first challenge room<br>There's nothing left to do here, but you're back.</p>").insertBefore("#placeholder").fadeIn(1000);
					} else if (bucket_e == true && solved2_2 == "complete") {
						$("<p>You're back in the first challenge room<br>I guess you could fill the bucket, but everything else is done.</p>").insertBefore("#placeholder").fadeIn(1000);
					} else {
						$("<p>You're back in the first challenge room, if you\'re seeing this, you have done such a series of choices that I didn't write specific code for you.<br>Sorry, but also well done.</p>").insertBefore("#placeholder").fadeIn(1000);
					}
				}
				currentroom = "2.2";
			}

			//

			//go to room 2.3
			else if (input == "go through door 2" && currentroom == "area_hub") {
				if (beento2_3 == false) {
					$("<p id='Gnome1'>You enter another of the challenge rooms,<br>In one corner, you see a small pile of bananas<br>In the other, a gnoblin wi-</p>").insertBefore('#placeholder').fadeIn(1000);
					beento2_3 = true;
					timedDialogue = setTimeout(function () {
						$('<p>I\'M NOT A GNOBLIN, I\'M A GNOME!</p>').insertBefore("#placeholder").fadeIn(1000);
						$("#console").scrollTop($("#console")[0].scrollHeight);}, 2000);
					timedDialogue2 = setTimeout(function () {
						$("<p>Fine. A gnome. Weilding a 15 pound sledgehammer (keep in mind even 10 pounds is alot for a sledgehammer)<br>Like really, he\'s just a 1-foot, standard clay lawn gnome, but he\'s very good with that hammer. It\'s scary.</p>").insertBefore('#placeholder').fadeIn(1000);
						$("#console").scrollTop($("#console")[0].scrollHeight);}, 4000);
				} else {
					$("<p>Still nothing here, I appreciate the dedication though.</p>").insertBefore('#placeholder').fadeIn(1000);
				}
				currentroom = "2.3"
			}
			//

			//return to corridor_2
			else if (input == "go south" && currentroom == "area_hub" && beentocorridor_2 == true) {
				$('<p>You are back at the corridor. There is literally no reason for you to be back here. You came from the north.</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "corridor_2";
			}
			//

			//go back to hallway from west hall
			else if (input == "go east" && currentroom == "westhall") {
				$("video").detach("#screen");
				if (note == false) {
					hallnote = " The note is still here. ";
				}
				else {
					hallnote = "";
				}
				if (torch == false) {
					halltorch = " The torch continues to light the dim hallway. ";
				}
				else {
					halltorch = "";
				}
				$('<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
				if (note == false) {
					$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (note == true) {
					$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
			}
			//

			//go to bonus room from westhall
			else if (input == "go south" && currentroom == "westhall") {
				$("video").detach("#screen");
				if (beentobonus == true && cratemove == false) {
					if (powder == false) {
						bonuscrate = "The lone wheeled crate in the corner looks untouched.";
					}
					else {
						bonuscrate = "";
					}
					$('<p>You are back in the small storage room. You came from the north. ' + bonuscrate + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "bonus";
				}
				else if (beentobonus == true && cratemove == true) {
					if (powder == false) {
						bonuscrate = "The lone wheeled crate in the corner still looks full.";
					}
					else if (powder == true ) {
						bonuscrate = "The crate sits empty and shifted, ladder revealed.";
					}

					$('<p>You are back in the small storage room. You came from the north. ' + bonuscrate + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "bonus";
				}
				else {
					$("#area_bonus").clone().insertBefore("#placeholder").fadeIn(1000);
					beentobonus = true;
					currentroom = "bonus";
				}
			}
			//

			//go down ladder
			else if (input == "go down" && currentroom == "bonus" && cratemove == true) {
				if (beentojukebox == false) {
				$('<p>You descend down the ladder into a Wizard of Oz esque broadcast room<br>Inside, you find an old jukebox with various songs ready to play throughout these barren halls.<br>up is the crate room.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('#jukebox_find').clone().insertBefore("#placeholder").fadeIn(1000);
				beentojukebox = true
				currentroom = "jukeboxroom";
				}
				else if (beentojukebox == true) {
					$('<p>You descend back down the ladder<br>Why?<br>There\'s nothing left to do here</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "jukeboxroom"
				}
			}


			//go up ladder
			else if (input == "go up" && currentroom == "jukeboxroom") {
				$('<p>You ascend up the ladder into the crate room. North, the hall, down, the jukebox room.</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "bonus";
			}

			//go to westhall from bonus room
			else if (input == "go north" && currentroom == "bonus") {
				if (icecream == true || icecream == "ate") {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="videos/video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You are back at the west hallway. To the south is where you came from. To the north is a dark room and to the east the hallway continues.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "westhall";
					}
					else if (icecream == false) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="videos/video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						$('<p>You are back at the west hallway. The floor cream remains. To the south is where you came from. To the north is a dark room and to the east the hallway continues.</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "westhall";
					}
			}
			//

			//go back to hallway from torture room
			else if (input == "go west" && currentroom == "torture") {
				$("video").detach("#screen");
				if (note == false) {
					hallnote = " The note is still here. ";
				}
				else {
					hallnote = "";
				}
				if (torch == false) {
					halltorch = " The torch continues to light the dim hallway. ";
				}
				else {
					halltorch = "";
				}
				$('<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
				if (note == false) {
					$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (note == true) {
					$('<video autoplay loop id="screen"><source src="videos/video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
			}
			//


			//go to morgue from torture room
			else if (input == "go south" && currentroom == "torture") {
				$("video").detach("#screen");
				if (beenmorgue == true) {
					if (zombiedead == false) {
						morguezombie = "The zombie is still here!";
					}
					else {
						morguezombie = "The zombie remains on the floor rotting in a cesspool of it's juices.";
					}
					$('<p>You are back in the morgue. To the north is the doorway to the room of strange devices. ' + morguezombie + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "morgue";
				}
				else {
					$("#area_morgue").clone().insertBefore("#placeholder").fadeIn(1000);
					beenmorgue = true;
					currentroom = "morgue";
				}
			}
			//

			//go to torture room from morgue
			else if (input == "go north" && currentroom == "morgue") {
				$("video").detach("#screen");
				if (searchtable == false) {
					torturetable = "The table seems to emit a strange energy. ";
				}
				else {
					torturetable = "";
				}
				if (whip == false) {
					torturewhip = "The whip remains stationed on the wall. ";
				}
				else {
					torturewhip = "";
				}
				$('<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway. ' + torturetable + torturewhip + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "torture";
				if (searchtable == false && whip == false) {
					$('<video autoplay loop id="screen"><source src="videos/video_TR/TR.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (searchtable == true && whip == false) {
					$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_knife.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (searchtable == true && whip == true) {
					$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_knife_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (searchtable == false && whip == true) {
					$('<video autoplay loop id="screen"><source src="videos/video_TR/TR_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
			}
			//



			else $('<p>You can\'t go that way.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//
		//end go
		//

		//
		//radio
		//
		else if (input.indexOf("play") > -1 && beentojukebox == true ) {
			if (input == "play still alive") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/stal.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Still Alive. Singer: Ellen McLain</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/cake.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play portal radio") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay loop id="yep"><source src="audio/radio.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Portal Radio. Performer: I dunno, some mariachi band?</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/pr.png" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
				playing = true

			}
			else if (input == "play ambient piano") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/ambiencep.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Ambient Piano. Composer: Steffen Daum. Title: Goodbye My Dear</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/gmd.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play zelda and chill") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/zccomplete.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Zelda & Chill. Composer: Mikel & Gamechops.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/cover.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play portal 2") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/Want You Gone.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Want You Gone. Singer: Ellen McLain.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/wyg.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play diamond city radio" || input == "play Diamond City Radio") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/Diamond City Radio.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Diamond City Radio. Origin: Fallout.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/dcr.png" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play secret") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/becret.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Secret song. Found in: random assets of The Stanley Parable.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/secret.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play elevator music") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/elevatormusic.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Elevator Music. Found in: random assets of The Stanley Parable.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/elevate.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play adventure line") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls loop id="yep"><source src="audio/adventure line.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Adventure Line. From: The Stanley Parable.</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/adventureline.jpg" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else if (input == "play doom song") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<audio autoplay controls id="yep"><source src="audio/doom.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
				$('<p>Playing Doom Song. From: Invader Zim ep.1</p>').insertBefore("#placeholder").fadeIn(1000);
				$('<img src="images/GIR.png" style="width:250px;height:250px" id="yep">').insertBefore("#nope");
			}
			else { $('<p>I\'m afraid "' + input + '" is either not a possible song <br>or at least not one I have ready for you.</p>').insertBefore("#placeholder").fadeIn(1000);}

		}
		//

		//
		else if (input.indexOf("stop") > -1 && beentojukebox == true) {
			if (input == "stop song") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$('<p>Stopping song</p>').insertBefore("#placeholder").fadeIn(1000);
				playing = false
			}
			else { $('<p>Stop song is the proper command my liege.</p>').insertBefore("#placeholder").fadeIn(1000);}
		}
		//radio stop

		//victory
		//$("#container").fadeOut(3000, function() {
		//	$("#wingame").fadeIn(3000);
		//})

		else if (input != "") {
			$('<p>I\'m sorry, what kind of simpleton tries to use "' + input + '"?</p>').insertBefore("#placeholder").fadeIn(1000);
		}

		//torch
		if (torch == true || currentroom == "hallway") {
			if (torch_ply == true) {

			}
			else {
			$('<audio autoplay loop id="torch"><source src="soundfx/crackle.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
			torch_ply = true;
			var torch_var = document.getElementById("torch");
			torch_var.volume = 0.8;
			}
		}
		else if (torch == false && currentroom != "hallway") {
			$("audio").detach("#torch");

		}

		//heart display
		if (health > -100) {
			if (health == 95) {
				$("img").detach("#health")
				$('<img src="heart/heart 95.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 90) {
				$("img").detach("#health")
				$('<img src="heart/heart 90.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 85) {
				$("img").detach("#health")
				$('<img src="heart/heart 85.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 80) {
				$("img").detach("#health")
				$('<img src="heart/heart 80.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 75) {
				$("img").detach("#health")
				$('<img src="heart/heart 75.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 70) {
				$("img").detach("#health")
				$('<img src="heart/heart 70.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 65) {
				$("img").detach("#health")
				$('<img src="heart/heart 65.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 60) {
				$("img").detach("#health")
				$('<img src="heart/heart 60.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 55) {
				$("img").detach("#health")
				$('<img src="heart/heart 55.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 50) {
				$("img").detach("#health")
				$('<img src="heart/heart 50.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 45) {
				$("img").detach("#health")
				$('<img src="heart/heart 45.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 40) {
				$("img").detach("#health")
				$('<img src="heart/heart 40.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 35) {
				$("img").detach("#health")
				$('<img src="heart/heart 35.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 30) {
				$("img").detach("#health")
				$('<img src="heart/heart 30.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 25) {
				$("img").detach("#health")
				$('<img src="heart/heart 25.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 20) {
				$("img").detach("#health")
				$('<img src="heart/heart 20.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 15) {
				$("img").detach("#health")
				$('<img src="heart/heart 15.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 10) {
				$("img").detach("#health")
				$('<img src="heart/heart 10.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
			else if (health == 5) {
				$("img").detach("#health")
				$('<img src="heart/heart 5.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
			}
		}
		//end of health display

		//inventory display
		if (health > 0) {
			if (torch == true && listed_t == false) {
				$('<p id="torchInv">Torch</p>').insertBefore('#inv_box_bottom');
				listed_t = true;
			}
			if (deadbugs == true || deadbugs == "ate") {
				$('<p>Deadbugs</p>').insertBefore('#inv_box_bottom');
			}
			if (paperclip == true && listed_pc == false) {
				$('<p>Paperclip</p>').insertBefore('#inv_box_bottom');
				listed_pc = true;
			}
			if (lunchtray == true && listed_tray == false) {
				$('<p>Tray</p>').insertBefore('#inv_box_bottom');
				listed_tray = true;
			}
			if (note == true && listed_n == false) {
				$('<p>Note</p>').insertBefore('#inv_box_bottom');
				listed_n = true;
			}
			if (knife == true && listed_kn == false) {
				$('<p>Knife</p>').insertBefore('#inv_box_bottom');
				listed_kn = true;
			}
			if (key_1 == true && listed_ke == false) {
				$('<p id="A1Key">Key</p>').insertBefore('#inv_box_bottom');
				listed_ke = true;
			}
			if (key_1 == "used" && listed_ke == true) {
				$('#A1Key').fadeOut(10);
			}
			if (whip == true && listed_w == false) {
				$('<p>Whip</p>').insertBefore('#inv_box_bottom');
				listed_w = true;
			}
			if (powder == true && listed_pow == false) {
				$('<p>Strange Powder</p>').insertBefore('#inv_box_bottom');
				listed_pow = true;
			}
			if (bucket_e == true && listed_bucket_e == false) {
				$('<p id="bukE">Empty bucket</p>').insertBefore('#inv_box_bottom');
				listed_bucket_e = true;
			}
			if (bucket_f == true && listed_bucket_f == false) {
				$('#bukE').fadeOut(10);
				$('<p id="bukF">Bucket of Water</p>').insertBefore('#inv_box_bottom');
				listed_bucket_f = true;
			}
			if (burnttorch == true && listed_burnt == false) {
				$('#torchInv').fadeOut(10);
				$('<p>Burnt Torch</p>').insertBefore('#inv_box_bottom');
				listed_burnt = true;
			}
			if (key2_3 == true && listed_key2_3 == false) {
				$('<p id="key2_3Inv">Door 2 key</p>').insertBefore('#inv_box_bottom');
				listed_key2_3 = true;
			}
			if (key2_3 == "used" && listed_key2_3 == true) {
				$('#key2_3Inv').fadeOut(10);
			}
			if (icecream == true && listed_ic == false) {
				$('<p id="IceC">Ice Cream</p>').insertBefore('#inv_food_bottom');
				listed_ic = true;
			}
		}

		//location check
		//tutorial area
		if (currentArea == 1) {
			if (currentroom == "jail") {
				$("#location_TH").fadeOut(500);
				$("#location_JC").fadeIn(500);
				$(".Map_JC").fadeIn(500);
			} else if (currentroom == "hallway") {
				$("#location_JC").fadeOut(500);
				$("#location_WH").fadeOut(500);
				$("#location_TR").fadeOut(500);
				$("#location_TH").fadeIn(500);
				$(".Map_TH").fadeIn(500);
			} else if (currentroom == "torture") {
				$('#location_TH').fadeOut(500);
				$('#location_MG').fadeOut(500);
				$('#location_TR').fadeIn(500);
				$(".Map_TR").fadeIn(500);
			} else if (currentroom == "morgue") {
				$('#location_TR').fadeOut(500);
				$('#location_MG').fadeIn(500);
				$(".Map_MG").fadeIn(500);
			} else if (currentroom == "westhall") {
				$("#location_TH").fadeOut(500);
				$('#location_CR').fadeOut(500);
				$('#location_A1E').fadeOut(500);
				$("#location_WH").fadeIn(500);
				$(".Map_WH").fadeIn(500);
			} else if (currentroom == "bonus") {
				$('#location_WH').fadeOut(500);
				$('#location_CR').fadeIn(500);
				$(".Map_CR").fadeIn(500);
			} else if (currentroom == "exit_1") {
				$('#location_WH').fadeOut(500);
				$('#location_A1E').fadeIn(500);
				$(".Map_A1E").fadeIn(500);
			}
			
		}
		//area 2: pantheon area 
		else if (currentArea == 2) {
			if (currentroom == "corridor_2") {
				$('.A1').fadeOut(500);
				$('#location2_1').fadeOut(500);
				$('#location2_0').fadeIn(500);
				$('#room2_0').fadeIn(500);
			} else if (currentroom == "area_hub" && unlocked_2 == false) {
				$('#location2_0').fadeOut(500);
				$('#location2_2').fadeOut(500);
				$('#location2_1').fadeIn(500);
				$('#room2_1').fadeIn(500);
				$('#doors1').fadeIn(500);
			} else if (currentroom == "area_hub" && unlocked_2 == true) {
				$('#location2_0').fadeOut(500);
				$('#location2_2').fadeOut(500);
				$('#location2_3').fadeOut(500);
				$('#location2_4').fadeOut(500);
				$('#location2_5').fadeOut(500);
				$('#location2_6').fadeOut(500);
				$('#location2_7').fadeOut(500);
				$('#location2_1').fadeIn(500);
				$('#room2_1').fadeIn(500);
			} else if (currentroom == "2.2") {
				$('#location2_1').fadeOut(500);
				$('#location2_2').fadeIn(500);
				$('#room2_2').fadeIn(500);
			} else if (currentroom == "2.3") {
				$('#location2_1').fadeOut(500);
				$('#location2_3').fadeIn(500);
				$('#room2_3').fadeIn(500);
			} else if (currentroom == "2.4") {
				$('#location2_1').fadeOut(500);
				$('#location2_4').fadeIn(500);
				$('#room2_4').fadeIn(500);
			} else if (currentroom == "2.5") {
				$('#location2_1').fadeOut(500);
				$('#location2_5').fadeIn(500);
				$('#room2_5').fadeIn(500);
			} else if (currentroom == "2.6") {
				$('#location2_1').fadeOut(500);
				$('#location2_6').fadeIn(500);
				$('#room2_6').fadeIn(500);
			} else if (currentroom == "2.7") {
				$('#location2_1').fadeOut(500);
				$('#location2_7').fadeIn(500);
				$('#room2_7').fadeIn(500);
			}
			if (unlocked_2 == true) {
				$('#doors2').fadeIn(500);
			} else if (unlocked_3 == true) {
				$('#doors3').fadeIn(500);
			} else if (unlocked_4 == true) {
				$('#doors4').fadeIn(500);
			} else if (unlocked_5 == true) {
				$('#doors5').fadeIn(500);
			} else if (unlocked_6 == true) {
				$('#doors6').fadeIn(500);
			} else if (solved2_6 == "complete") {
				$('#A2Exit').fadeIn(500);
			}
		}
		//

		//something unecessary
		if (music == true && plying_m == false) {

			$('<audio autoplay loop id="background"><source src="audio/overall_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");
			var music_var = document.getElementById("background");
			music_var.volume = 0.1;
			plying_m = true
		}
		else if (music == false && plying_m == true) {
			$("audio").detach("#background");
			plying_m = false
		}

		//
		//should you ever somehow die
		//
		if (health <= 0) {
			$("audio").detach(".death");
			$("img").detach(".death");
			$("video").detach(".death");
			$(".death").fadeOut(3000);
			$("#container").fadeOut(3000, function() {
			$("#health_die").fadeIn(3000);
		});
		}
		//


		//
		//scroll bar
		//
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
		//

		//
		//inventory scroll bar
		//
		$("#inventory_br").scrollTop($("#inventory")[0].scrollHeight);
		$("#command_line").val("");
		//
	});
});
