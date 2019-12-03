//
//SETS ALL VARIABLES FOR THE GAME
//
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

//
currentroom = "jail";
searchtable = false;
crate = false;
zombiedead = false;
health = 100;
z_health = 2;
Xtra = 0;
//array variables
var array_z = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0];
function ATK_z(array_z) { return array_z[Math.floor(Math.random() * array_z.length)]; };
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
	$("#map_box_test").fadeIn(3000);
	$("#hallway").fadeIn(3000);
	$("#yes2").fadeIn(4000);
	$('<img src="heart/heart start.png" style="width:100px;height:100px" id="health">').insertBefore('#placeholder_dos');
	$('<video autoplay loop id="screen"><source src="video_JC/JCidle.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
			else if (input == "M@K# cellunlocked true") {
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
				deadbugs = true;
				lunchtray = true;
				torch = true;
				knife = true;
				hat = true;
				whip = true;
				key_1 = true;
				powder = true;
				searchtable = true;
				crate = true;
				zombiedead = true;
				burnttorch = true;
				health = 21;
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
		else if (input.indexOf("take") > -1 || input.indexOf("read") > -1 || input.indexOf("pick up") > -1) {
			
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
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == false && deadbugs == true && lunchtray == false) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == false && deadbugs == true && lunchtray == true) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == false && lunchtray == true && deadbugs == false) {
					paperclip = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//dead bugs
			else if (input == "take dead bugs" || input == "take deadbugs" || input == "pick up dead bugs" || input == "pick up deadbugs") {
				if (currentroom == "jail" && deadbugs == false && paperclip == true && lunchtray == true) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && deadbugs == false && paperclip == true && lunchtray == false) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && deadbugs == false && paperclip == false && lunchtray == false) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCbug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && deadbugs == false && paperclip == false && lunchtray == true) {
					deadbugs = true;
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<video autoplay loop id="screen"><source src="video_JC/JCbug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
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
					$('<video autoplay loop id="screen"><source src="video_JC/JCtray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == "ate" && paperclip == false) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="video_JC/JCtray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && paperclip == false) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="video_JC/JCbug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && paperclip == true) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == false && paperclip == true) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == "ate" && paperclip == true) {
					$("video").detach("#screen");
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
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
						$('<video autoplay loop id="screen"><source src="video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");		
					}
					else if (note == true) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");		
					}
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
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
					$('<video autoplay loop id="screen"><source src="video_TH/TH_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");	
				}
				else if (currentroom == "hallway" && note == false && torch == true) {
					note = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$('<p>You picked up a note. It reads: <br />You asked for more excitement in your life, so we bashed your head in, gave you amnesia, and dragged you down into this dungeon, it shouldn\'t get too hard... for now...<br /><br />Sincerely,<br/>The Wish Granted Association<br /><br />P.S. Watch out for our zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");	
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//whip
			else if (input == "take whip" || input == "pick up whip") {
				if (currentroom == "torture" && whip == false) {
					whip = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="video_TR/TR_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up a whip.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (whip == true && hat == true) {
						$('<p>A whip and a hat? Come on Indy, no shenanigans here.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//ice cream
			else if (input == "take ice cream" || input == "pick up ice cream") {
				if (currentroom == "westhall" && icecream == false) {
					icecream = true;
					$("audio").detach("#take");
					$('<audio autoplay id="take"><source src="soundfx/sand4.mp3" type="audio/mpeg">you cannot use jukebox</audio>').insertAfter("#nope");
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You picked up some ice cream.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);

			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//
		//end take
		//
		
		
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
						$('<video autoplay loop id="screen"><source src="video_TR/TR_knife_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (whip == false && hat == true) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="video_TR/TR_knife.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
					$("video").detach("#screen");
					$("audio").detach("#yep");
					$("img").detach("#yep");
					$("#map_box_TH").fadeOut(3000);
					$("#map_box_WH").fadeOut(3000);
					$("#map_back").fadeOut(3000);
					$("#hallway").fadeOut(3000);
					$("#hallway_TH1").fadeOut(3000);
					$("#hallway_TH2").fadeOut(3000);
					$("#hallway_WH1").fadeOut(3000);
					$("#hallway_WH2").fadeOut(3000);
					$("#location_JC").fadeOut(3000);
					$("#location_TH").fadeOut(3000);
					$("#inventory").fadeOut(3000);
					$("#inventory_br").fadeOut(3000);
					$("#inventory_box").fadeOut(3000);$("#location_WH").fadeOut(3000);
					$("#health_display").fadeOut(3000);
					$("#map_box_test").fadeOut(3000);
					$("#container").fadeOut(9000, function() {
					$("#killself").fadeIn(9000);
					});
				}
				else if (powder == false) {
					$('<p>What powder?</p>').insertBefore("#placeholder").fadeIn(1000);
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
					$("audio").detach("#yep");
					$("img").detach("#yep");
					$("video").detach("#screen");
					$("#map_box_TH").fadeOut(3000);
					$("#map_box_WH").fadeOut(3000);
					$("#map_back").fadeOut(3000);
					$("#hallway").fadeOut(3000);
					$("#hallway_TH1").fadeOut(3000);
					$("#hallway_TH2").fadeOut(3000);
					$("#hallway_WH1").fadeOut(3000);
					$("#inventory").fadeOut(3000);
					$("#inventory_br").fadeOut(3000);
					$("#inventory_box").fadeOut(3000);
					$("#hallway_WH2").fadeOut(3000);
					$("#location_JC").fadeOut(3000);
					$("#location_TH").fadeOut(3000);
					$("#location_WH").fadeOut(3000);
					$("#health_display").fadeOut(3000);
					$("#map_box_test").fadeOut(3000);
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
		//kill
		//
		else if (input.indexOf("attack") > -1) {
			
			if (input == "attack") {
				$('<p>attack what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "attack zombie" && currentroom == "morgue") {
				$('<p>attack zombie with what?</p>').insertBefore("#placeholder").fadeIn(1000);
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
			
			//attack whip
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

			//kill self
			else if (input == "attack self with lunch tray" || input == "attack self with lunchtray" || input == "attack self with tray") {
				if (lunchtray == true && health == 1) {
					$("audio").detach("#yep");
					$("img").detach("#yep");
					$("video").detach("#screen");
					$("#map_box_TH").fadeOut(3000);
					$("#map_box_WH").fadeOut(3000);
					$("#map_back").fadeOut(3000);
					$("#hallway").fadeOut(3000);
					$("#hallway_TH1").fadeOut(3000);
					$("#hallway_TH2").fadeOut(3000);
					$("#hallway_WH1").fadeOut(3000);
					$("#hallway_WH2").fadeOut(3000);
					$("#inventory").fadeOut(3000);
					$("#inventory_br").fadeOut(3000);
					$("#inventory_box").fadeOut(3000);
					$("#location_JC").fadeOut(3000);
					$("#location_TH").fadeOut(3000);
					$("#location_WH").fadeOut(3000);
					$("#health_display").fadeOut(3000);
					$("#map_box_test").fadeOut(3000);
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
					$("audio").detach("#yep");
					$("img").detach("#yep");
					$("video").detach("#screen");
					$("#map_box_test").fadeOut(3000);
					$("#map_box_TH").fadeOut(3000);
					$("#map_box_WH").fadeOut(3000);
					$("#map_back").fadeOut(3000);
					$("#hallway").fadeOut(3000);
					$("#hallway_TH1").fadeOut(3000);
					$("#hallway_TH2").fadeOut(3000);
					$("#hallway_WH1").fadeOut(3000);
					$("#hallway_WH2").fadeOut(3000);
					$("#inventory").fadeOut(3000);
					$("#inventory_br").fadeOut(3000);
					$("#inventory_box").fadeOut(3000);
					$("#location_JC").fadeOut(3000);
					$("#location_TH").fadeOut(3000);
					$("#location_WH").fadeOut(3000);
					$("#health_display").fadeOut(3000);
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
					$("audio").detach("#yep");
					$("img").detach("#yep");
					$("video").detach("#screen");
					$("#map_box_test").fadeOut(3000);
					$("#map_box_TH").fadeOut(3000);
					$("#map_box_WH").fadeOut(3000);
					$("#map_back").fadeOut(3000);
					$("#hallway").fadeOut(3000);
					$("#hallway_TH1").fadeOut(3000);
					$("#hallway_TH2").fadeOut(3000);
					$("#inventory").fadeOut(3000);
					$("#inventory_br").fadeOut(3000);
					$("#inventory_box").fadeOut(3000);
					$("#hallway_WH1").fadeOut(3000);
					$("#hallway_WH2").fadeOut(3000);
					$("#location_JC").fadeOut(3000);
					$("#location_TH").fadeOut(3000);
					$("#location_WH").fadeOut(3000);
					$("#health_display").fadeOut(3000);
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}

			else if (input == "attack self with gun") {
				$("audio").detach("#yep");
				$("img").detach("#yep");
				$("video").detach("#screen");
				$('<p>You shot yourself, i don\'t know where you got ammo<br> or a gun for that matter<br> but you shot yourself</p>').insertBefore("#placeholder").fadeIn(1000);
				$("#map_box_test").fadeOut(3000);
				$("#map_box_TH").fadeOut(3000);
				$("#map_box_WH").fadeOut(3000);
				$("#map_back").fadeOut(3000);
				$("#hallway").fadeOut(3000);
				$("#hallway_TH1").fadeOut(3000);
				$("#hallway_TH2").fadeOut(3000);
				$("#inventory").fadeOut(3000);
				$("#inventory_br").fadeOut(3000);
				$("#inventory_box").fadeOut(3000);
				$("#hallway_WH1").fadeOut(3000);
				$("#hallway_WH2").fadeOut(3000);
				$("#location_JC").fadeOut(3000);
				$("#location_TH").fadeOut(3000);
				$("#location_WH").fadeOut(3000);
				$("#health_display").fadeOut(3000);
				$("#container").fadeOut(9000, function() {
				$("#killself").fadeIn(9000);
			});
			}
			
			//
			
			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
			
		
		}
		//
		//end kill
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
				
				//goo
				if (powder == true) {
					powd = "Strange Powder<br />";
				}
				else {
					powd = "";
				}
				//
				
				if (pclip == "" && dbugs == "" && ltray == "") {
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + pclip + dbugs + ltray + tch + btch + nt + ht + whp + knf + ky_1 + powd + icre + '</p>').insertBefore("#placeholder").fadeIn(1000);
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
						$('<video autoplay id="screen"><source src="video_JC/JCunlock_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == true && deadbugs == false) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");	
						$('<video autoplay id="screen"><source src="video_JC/JCunlock_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == true && deadbugs == "ate") {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");	
						$('<video autoplay id="screen"><source src="video_JC/JCunlock_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == false && deadbugs == true) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");	
						$('<video autoplay id="screen"><source src="video_JC/JCunlock_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == false && deadbugs == false) {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");	
						$('<video autoplay id="screen"><source src="video_JC/JCunlock.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
					else if (lunchtray == false && deadbugs == "ate") {
						$("video").detach("#screen");
						$("audio").detach("#jdoor");
						$('<audio autoplay id="jdoor"><source src="soundfx/irondoor_1.mp3" type="audio/mpeg"></audio>').insertAfter("#nope");	
						$('<video autoplay id="screen"><source src="video_JC/JCunlock.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					}
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//exit door
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
						$("#location_JC").fadeOut(500);
						$("#location_TH").fadeIn(500);
						$('<p>You are back in the hallway. The hallway continues to the east and west. The jail room is to the south. ' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						if (torch == true && note == true) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="video_TH/TH_fade_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");	
						} }
						else if (torch == true && note == false) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="video_TH/TH_fade_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");	
						}
						}
						else if (torch == false && note == false) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="video_TH/TH_fade.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="video_TH/TH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");	
						}
						}
						else if (torch == false && note == true) {
							$("video").detach("#screen");
							$('<video autoplay id="screen"><source src="video_TH/TH_fade_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							setTimeout(function(){TH_enter()}, 1000);
							function TH_enter() {
								$("video").detach("#screen");
								$('<video autoplay loop id="screen"><source src="video_TH/TH_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");	
						}
						}
					}
					else {
						$("#location_JC").fadeOut(500);
						$("#location_TH").fadeIn(500);
						$("#map_box_TH").fadeIn(500);
						$("#area_hallway").clone().insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						beentohallway = true;
						$("video").detach("#screen");
						$('<video autoplay id="screen"><source src="video_TH/TH_fade.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						setTimeout(function(){TH_enter()}, 1000);
						function TH_enter() {
							$("video").detach("#screen");
							$('<video autoplay loop id="screen"><source src="video_TH/TH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == false && lunchtray == true) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && lunchtray == true) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug_tray.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (deadbugs == true && lunchtray == false) {
					$("video").detach("#screen");
					$('<video autoplay loop id="screen"><source src="video_JC/JCclip_bug.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				$("#location_TH").fadeOut(500);
				$("#location_JC").fadeIn(500);
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
							$('<video autoplay loop id="screen"><source src="video_TR/TR.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						else if (searchtable == true && whip == false) {
							$('<video autoplay loop id="screen"><source src="video_TR/TR_knife.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						else if (searchtable == true && whip == true) {
							$('<video autoplay loop id="screen"><source src="video_TR/TR_knife_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
						else if (searchtable == false && whip == true) {
							$('<video autoplay loop id="screen"><source src="video_TR/TR_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						}
					}
					else {
						$("#area_torture").clone().insertBefore("#placeholder").fadeIn(1000);
						beentorture = true;
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="video_TR/TR.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
						$('<video autoplay loop id="screen"><source src="video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						currentroom = "westhall";
						}
						else if (icecream == false) {
							$('<video autoplay loop id="screen"><source src="video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
							$('<p>You are back at the west hallway. The floor cream remains. To the east is where you came from. To the north and south are dark rooms.</p>').insertBefore("#placeholder").fadeIn(1000);
							currentroom = "westhall";
						}
					}
					else {
						$("#area_westhall").clone().insertBefore("#placeholder").fadeIn(1000);
						$("#location_TH").fadeOut(500);
						$("#location_WH").fadeIn(500);
						$("#map_box_WH").fadeIn(500);
						$("#hallway_WH2").fadeIn(500);
						$("#hallway_WH1").fadeIn(500);
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
						$('<video autoplay loop id="screen"><source src="video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
						currentroom = "westhall";
						}
						else if (icecream == false) {
							$("video").detach("#screen");
							$('<video autoplay loop id="screen"><source src="video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
					burnttorch = true
					torch = false
					currentroom = "corridor_2"
					beentocorridor_2 = true
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
			else if (input == "go north" && currentroom == "corridor_2") {
				if (beentohub == false) {
				$("#area_hub").clone().insertBefore("#placeholder").fadeIn(1000);
				currentroom = "area_hub";
				beentohub = true;
				}
				else {
					if (unlocked_2 == true) {
						ulo2 = "";
					}
					else {
						ulo2 = "2,";
					}
					if (unlocked_3 == true) {
						ulo3 = "";
					}
					else {
						ulo3 = "3,";
					}
					if (unlocked_4 == true) {
						ulo4 = "";
					}
					else {
						ulo4 = "4,";
					}
					if (unlocked_5 == true) {
						ulo5 = "";
					}
					else {
						ulo5 = "5,";
					}
					if (unlocked_6 == true) {
						ulo6 = "";
					}
					else {
						ulo6 = "6";
					}
					if (unlocked_2 == false) {
						$('<p>All but the first door are locked.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
					else {
						$('<p>You return to the hub room. <br>Doors 1, ' + ulo2 + ulo3 + ulo4 + ulo5 + ulo6 +' are still locked.</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
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
					$('<video autoplay loop id="screen"><source src="video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (note == true) {
					$('<video autoplay loop id="screen"><source src="video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
					$('<video autoplay loop id="screen"><source src="video_WH/WH_cream.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
					$('<p>You are back at the west hallway. To the south is where you came from. To the north is a dark room and to the east the hallway continues.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "westhall";
					}
					else if (icecream == false) {
						$("video").detach("#screen");
						$('<video autoplay loop id="screen"><source src="video_WH/WH.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
					$('<video autoplay loop id="screen"><source src="video_TH/TH_torch.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (note == true) {
					$('<video autoplay loop id="screen"><source src="video_TH/TH_torch_note.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
					$('<video autoplay loop id="screen"><source src="video_TR/TR.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (searchtable == true && whip == false) {
					$('<video autoplay loop id="screen"><source src="video_TR/TR_knife.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (searchtable == true && whip == true) {
					$('<video autoplay loop id="screen"><source src="video_TR/TR_knife_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
				}
				else if (searchtable == false && whip == true) {
					$('<video autoplay loop id="screen"><source src="video_TR/TR_whip.mp4" type="video/mp4">you cannot use screen</video>').insertBefore("#zero");
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
		//end of health display

		
		//inventory display
		if (torch == true && listed_t == false) {
			$('<p>Torch</p>').insertBefore('#inv_box_bottom');
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
			$('<p>Key</p>').insertBefore('#inv_box_bottom');
			listed_ke = true;
		}
		if (whip == true && listed_w == false) {
			$('<p>Whip</p>').insertBefore('#inv_box_bottom');
			listed_w = true;
		}
		if (powder == true && listed_pow == false) {
			$('<p>Stramge Powder</p>').insertBefore('#inv_box_bottom');
			listed_pow = true;
		}












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
			$("audio").detach("#yep");
			$("img").detach("#yep");
			$("video").detach("#screen");
			$("#inventory").fadeOut(3000);
			$("#map_box_TH").fadeOut(3000);
			$("#map_box_WH").fadeOut(3000);
			$("#map_back").fadeOut(3000);
			$("#hallway").fadeOut(3000);
			$("#hallway_TH1").fadeOut(3000);
			$("#inventory").fadeOut(3000);
			$("#inventory_br").fadeOut(3000);
			$("#inventory_box").fadeOut(3000);
			$("#hallway_TH2").fadeOut(3000);
			$("#hallway_WH1").fadeOut(3000);
			$("#hallway_WH2").fadeOut(3000);
			$("#location_JC").fadeOut(3000);
			$("#location_TH").fadeOut(3000);
			$("#location_WH").fadeOut(3000);
			$("#health_display").fadeOut(3000);
			$("#map_box_test").fadeOut(3000);
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
