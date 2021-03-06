[
  {"instructions": "Welcome to bell master! Ring the number 3 bell by clicking on the sally (the colorful part), then on the tail (the looped part at the bottom of the rope), OR hitting the 'j' key on your keyboard.",
  "mybell": 3},
  {
    "mybell": 3,
    "numbells": 6,
    "instructions": "The bells will now ring twice in numerical order, 1 through 6. Your task is to ring the number 3 bell so that the time between bells 2 and 3 is the same as that between 1 and 2. You can see how you did by looking at the dots that will appear above the ropes—the light blue ones represent the first bell of each row (bell 1 in this case) and the red dots show where your bell struck. Try it a few times to get comfortable! Click 'OK' to start.",
   "button": ["<button type=\"button\" id=\"okbutton\">OK</button>","<button type=\"button\" id=\"stopbutton\" class=\"disabled\">Stop</button>","<button type=\"button\" id=\"backbutton\">Back</button>","<button type=\"button\" id=\"nextbutton\">Next</button>"],
  "rowArr": [{"row": [[1],[2],[3],[4],[5],[6]]},{"row": [[1],[2],[3],[4],[5],[6]]}],
    "stoprounds": 1
  },
  {"mybell": 3,
   "numbells": 6,
   "instructions": "In the previous level you rang one 'whole pull' at a time—one handstroke (sally click) and one backstroke (tail click). This time you'll ring multiple whole pulls in a row. There's a slight pause between the end of each backstroke and the start of the next handstroke, called the handstroke gap. Click 'OK' to start. When the word 'Stand' appears, ring that handstroke, then one more backstroke, then stop. Clicking 'OK' again will restart it if you want more practice.",
  "rowArr": [{"row": [[1],[2],[3],[4],[5],[6]]},{"row": [[1],[2],[3],[4],[5],[6]]}]},
  {"mybell": 5,
  "instructions": "This time your task is to ring bell 5 so that it fits into the steady rhythm. The first three bells will change order but you will always be after bell 4, and always in fifth place.",
  "rowArr": [{"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]},
          {"row": [[2],[1],[3],[4],[5],[6]]},{"row": [[2],[3],[1],[4],[5],[6]]},
          {"row": [[3],[2],[1],[4],[5],[6]]},{"row": [[3],[1],[2],[4],[5],[6]]},
          {"row": [[1],[3],[2],[4],[5],[6]]},{"row": [[1],[2],[3],[4],[5],[6]]},
          {"row": [[1],[2],[3],[4],[5],[6]]},{"row": [[1],[2],[3],[4],[5],[6]]}]},
  {"mybell": 5,
   "instructions": "Stay on bell 5, but this time the first four bells will change order. Try to maintain your place before the 6.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,4,5,6],[5,6],[1,4,5,6],[5,6],[1,4,5,6],[5,6],[1,2,5,6]]},
  {"mybell": 5,
   "instructions": "Now for some call changes! Sometimes during a handstroke (when the sally click is about to happen) you'll see a 'call' telling two bells to trade places. The call will take effect on the next handstroke, so you have a backstroke to think about what the call means. If it's '5 to X', you'll move one place earlier to follow bell X. If the call is 'Y to X', where X is the bell you've *been* following, you'll move one place later to follow bell Y. If  the call is 'Y to X' where *Y* is the bell you've been following, you'll stay in the same place but the two bells in front of you will trade places. There are different ways to do call changes—this is 'calling down'.",
  "rowArr": [{"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]},
            {"row":[[1],[2],[3],[4],[5],[6]], "call": "5 to 3"},{"row":[[1],[2],[3],[4],[5],[6]]},
            {"row":[[1],[2],[3],[5],[4],[6]]},{"row":[[1],[2],[3],[5],[4],[6]]},
            {"row":[[1],[2],[3],[5],[4],[6]], "call": "3 to 1"},{"row":[[1],[2],[3],[5],[4],[6]]},
            {"row":[[1],[3],[2],[5],[4],[6]]},{"row":[[1],[3],[2],[5],[4],[6]]},
            {"row":[[1],[3],[2],[5],[4],[6]], "call": "5 to 3"},{"row":[[1],[3],[2],[5],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]], "call": "This row, 135246, is called Queens"},{"row":[[1],[3],[5],[2],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]]},{"row":[[1],[3],[5],[2],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]]},{"row":[[1],[3],[5],[2],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]], "call": "2 to 3"},{"row":[[1],[3],[5],[2],[4],[6]]},
            {"row":[[1],[3],[2],[5],[4],[6]]},{"row":[[1],[3],[2],[5],[4],[6]]},
            {"row":[[1],[3],[2],[5],[4],[6]], "call": "4 to 2"},{"row":[[1],[3],[2],[5],[4],[6]]},
            {"row":[[1],[3],[2],[4],[5],[6]]},{"row":[[1],[3],[2],[4],[5],[6]]},
            {"row":[[1],[3],[2],[4],[5],[6]], "call": "2 to 1"},{"row":[[1],[3],[2],[4],[5],[6]]},
            {"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]},
            {"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]}]},
  {"instructions": "Now you'll practice leading. You'll ring 'after' the tenor, the 6, but on the opposite stroke. You're also responsible for the 'handstroke gap', a silent bell that should fit in after the tenor's backstroke and before your handstroke. To start, click 'OK' then ring whenever you're ready!",
  "mybell": 1},
  {"instructions": "Back to bell 5 for some more call changes! These will start out the same but then involve you leading for a few rows.",
  "mybell": 5,
  "rowArr": [{"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]},
            {"row":[[1],[2],[3],[4],[5],[6]], "call": "5 to 3"},{"row":[[1],[2],[3],[4],[5],[6]]},
            {"row":[[1],[2],[3],[5],[4],[6]]},{"row":[[1],[2],[3],[5],[4],[6]]},
            {"row":[[1],[2],[3],[5],[4],[6]], "call": "3 to 1"},{"row":[[1],[2],[3],[5],[4],[6]]},
            {"row":[[1],[3],[2],[5],[4],[6]]},{"row":[[1],[3],[2],[5],[4],[6]]},
            {"row":[[1],[3],[2],[5],[4],[6]], "call": "5 to 3"},{"row":[[1],[3],[2],[5],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]]},{"row":[[1],[3],[5],[2],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]]},{"row":[[1],[3],[5],[2],[4],[6]]},
            {"row":[[1],[3],[5],[2],[4],[6]]},{"row":[[1],[3],[5],[2],[4],[6]]},
             {"row":[[1],[3],[5],[2],[4],[6]], "call": "5 to 1"},{"row":[[1],[3],[5],[2],[4],[6]]},
             {"row":[[1],[5],[3],[2],[4],[6]]},{"row":[[1],[5],[3],[2],[4],[6]]},
             {"row":[[1],[5],[3],[2],[4],[6]], "call": "5 to lead"},{"row":[[1],[5],[3],[2],[4],[6]]},
             {"row":[[5],[1],[3],[2],[4],[6]]},{"row":[[5],[1],[3],[2],[4],[6]]},
             {"row":[[5],[1],[3],[2],[4],[6]], "call": "3 to 5"},{"row":[[5],[1],[3],[2],[4],[6]]},
             {"row":[[5],[3],[1],[2],[4],[6]]},{"row":[[5],[3],[1],[2],[4],[6]]},
             {"row":[[5],[3],[1],[2],[4],[6]]},{"row":[[5],[3],[1],[2],[4],[6]]},
             {"row":[[5],[3],[1],[2],[4],[6]]},{"row":[[5],[3],[1],[2],[4],[6]]},
             {"row":[[5],[3],[1],[2],[4],[6]], "call": "3 to lead"},{"row":[[5],[3],[1],[2],[4],[6]]},
             {"row":[[3],[5],[1],[2],[4],[6]]},{"row":[[3],[5],[1],[2],[4],[6]]},
             {"row":[[3],[5],[1],[2],[4],[6]], "call": "2 to 5"},{"row":[[3],[5],[1],[2],[4],[6]]},
             {"row":[[3],[5],[2],[1],[4],[6]]},{"row":[[3],[5],[2],[1],[4],[6]]},
             {"row":[[3],[5],[2],[1],[4],[6]], "call": "2 to 3"},{"row":[[3],[5],[2],[1],[4],[6]]},
             {"row":[[3],[2],[5],[1],[4],[6]]},{"row":[[3],[2],[5],[1],[4],[6]]},
             {"row":[[3],[2],[5],[1],[4],[6]], "call": "1 to 2"},{"row":[[3],[2],[5],[1],[4],[6]]},
             {"row":[[3],[2],[1],[5],[4],[6]]},{"row":[[3],[2],[1],[5],[4],[6]]},
             {"row":[[3],[2],[1],[5],[4],[6]], "call": "4 to 1"},{"row":[[3],[2],[1],[5],[4],[6]]},
             {"row":[[3],[2],[1],[4],[5],[6]]},{"row":[[3],[2],[1],[4],[5],[6]]},
             {"row":[[3],[2],[1],[4],[5],[6]], "call": "1 to 3"},{"row":[[3],[2],[1],[4],[5],[6]]},
             {"row":[[3],[1],[2],[4],[5],[6]]},{"row":[[3],[1],[2],[4],[5],[6]]},
             {"row":[[3],[1],[2],[4],[5],[6]], "call": "1 to lead"},{"row":[[3],[1],[2],[4],[5],[6]]},
            {"row":[[1],[3],[2],[4],[5],[6]]},{"row":[[1],[3],[2],[4],[5],[6]]},
            {"row":[[1],[3],[2],[4],[5],[6]], "call": "2 to 1"},{"row":[[1],[3],[2],[4],[5],[6]]},
            {"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]},
            {"row":[[1],[2],[3],[4],[5],[6]]},{"row":[[1],[2],[3],[4],[5],[6]]}]},
  {"mybell": 1,
  "instructions": "Now you'll ring the treble (bell 1) in a method! Your task is to ring a handstroke and a backstroke in 2nd place then a handstroke and a backstroke in lead, then repeat those four strokes until told to stand. Like the call changes, the method will start the handstroke *after* the instruction to 'go' appears. This method is for only five bells, so the tenor will always be in last place.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,2,5,6],[5,6],[1,6]],
  "firstcall": "Go Bistow Little Bob Doubles",
  "numrounds": 4},
  {"mybell": 1,
   "instructions": "Try the same method but with all six bells moving, so you can't rely on the tenor to know when to lead.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": ["x",[1,2],"x",[1,6]],
  "firstcall": "Go Bastow Little Bob Minor",
  "numrounds": 4},
  {"mybell": 5,
  "instructions": "This time when the method starts, your task is to trade places with the 6 every stroke. You'll ring handstrokes in 6th place and backstrokes in 5th place. This is called 'dodging'.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": ["x",[1,4],"x",[1,4],"x",[1,4],"x",[1,2]],
  "firstcall": "Go Plain Bob Minimus on the front four",
  "numrounds": 4},
  {"mybell": 6,
  "instructions": "Now try a method called Slough Big Bob Place Minor. In this method, the 6 rings almost entirely in 6th place, except that you will 'make 5ths' (ring two blows in 5th place) four times. To know when to make 5ths you should try watching, listening to, and/or counting the treble's places. The treble will take four blows to 'hunt up' moving through 2nd, 3rd, 4th, and 5th place while you are in 6th place. Then you make 5ths while the treble 'lies behind' (makes 6ths) over you. Then you go back to 6th place while the treble takes four blows to hunt back down—5th, 4th, 3rd, 2nd. Finally you stay in 6th place for two more blows while the treble leads for two blows. This whole procedure will then be rung three more times. You'll end up ringing sets of 10 strokes in 6th place, but I encourage you to think of that as 4+2+4, with groups distinguished by what the treble is doing.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,6],[5,6],[1,6],"x",[1,4,5,6],"x",[1,6],[5,6],[1,6],[5,6],[1,6]],
  "firstcall": "Go Slough Big Bob Place Minor",
  "numrounds": 4},
  {"mybell": 3,
  "instructions": "Now for Very Little Bob Minor, in which you will simply make 4ths and make 3rds repeatedly. While you are making each place the two bells under (before) you will be swapping. Try to keep very steady over them.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": ["x",[1,4],"x",[3,6]],
  "firstcall": "Go Very Little Bob Minor",
  "numrounds": 4},
  {"mybell": 3,
   "instructions": "The next method can best be explained by just giving the string of places you will ring in: 4444 32 1111 23. That is the complete method, but you'll ring it three times in a row to get used to the pattern of moving up and down (later and earlier).",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[1,2,5,6],[1,4,5,6],[3,4,5,6],[1,4,5,6]],
  "firstcall": "Go Double Trouble Little Place Minimus",
  "numrounds": 4,
  "stoprounds": 3},
  {"mybell": 3,
  "instructions": "Now try Plain Hunt on four! The sequence of places is very similar to the last method: 44 32 11 23. This one groups nicely into 'whole pulls' or handstroke-backstroke pairs. First you 'lie at the back' or make 4ths (since the 5 and 6 are tenoring behind it's not quite the 'back'). Then you have a whole pull to hunt down. Then you 'lead full' (lead for a whole pull), then take another whole pull to hunt back up. Again you'll do this three times in a row.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,4,5,6]],
  "firstcall": "Go Plain Hunt on four",
  "numrounds": 4,
  "stoprounds": 3},
  {"mybell": 5,
    "instructions": "Now try Plain Hunt on six. Here's the sequence of places: 66 5432 11 2345. Like the previous level you'll start by lying at the back. On six bells it takes two whole pulls to hunt down and two whole pulls to hunt up. You might notice that on the way down the handstrokes are in odd-numbered places, and on the way up they're in even-numbered places. Like the previous levels you'll repeat this one a couple times to get used to the continuous cycle.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": ["x",[1,6]],
  "firstcall": "Go Plain Hunt on six",
  "numrounds": 4,
  "stoprounds": 3},
  {"mybell": 1,
  "instructions": "Back to something where you only ring in 1st and 2nd place. In this method your sequence of places will be 2122 1211. In ringing terms you'll dodge 1–2 up, make 2nds, dodge 1–2 down, and lead. The first two dodges will be with the 2, and you'll be making 2nds 'over' the 2. Each time you lead though, the bell you just dodged with will go out and a different one will come down for the next pair of dodges. You might try paying attention to the order the bells come to you in.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[3,4],"x",[3,4],[1,2],[3,4],"x",[3,4],[1,6]],
  "firstcall": "Go Gonville Little Treble Bob Minor",
  "numrounds": 4,
  "stoprounds": 1},
  {"mybell": 1,
    "instructions": "Try plain hunting again but this time from the treble. You'll start by hunting up, ringing one place later each blow. There's a ropesight trick for hunting up—if you can notice who is immediately after you in each row, that's who you'll ring after in the next row. For example, you begin in 1st place with the 2 over you. The first thing that happens when you start hunting is you ring in 2nds place over the 2! If you noticed the order the bells came to you in the last task, that might be helpful for this as well. Seeing who to ring over while hunting down is a lot harder, but in plain hunt it will be the same bells in the same order as when you hunted up, so paying attention on the way up can help on the way down.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": ["x",[1,6]],
  "firstcall": "Go Plain Hunt on six",
  "numrounds": 4,
  "stoprounds": 3},
  {"mybell": 1,
    "instructions": "Now try plain hunt on five. Here is the sequence of places, grouped by whole pulls: 23 45 54 32 11. Plain hunt on an odd number of bells has a slightly different feel than on an even number, because lying at the back is a backstroke then a handstroke instead of the reverse order. You'll pass the bells in the same order though, only omitting the 6.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,6]],
  "firstcall": "Go Plain Hunt on five",
  "numrounds": 4,
  "stoprounds": 3},
  {"mybell": 1,
    "instructions": "The next few levels will all involve plain hunt on five from the treble, but with increasing variation in the order you pass the bells. In this level you'll pass the other bells in one of two orders: 2453 or 2543. The trick of listening or looking for the bell immediately after you as you hunt up can be really helpful here.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,6],[5,6],[1,6],[5,6],[1,6],[5,6],[1,6],[5,6],[1,4,5,6]],
  "firstcall": "Go St Hilda's Place Doubles",
  "numrounds": 4,
  "stoprounds": 3},
  {"mybell": 1,
    "instructions": "This time the 2 will always take you off lead (lead right after you, i.e. you'll ring over the 2 in 2nd place on the way up) and take you off the back (lie at the back after you, so your second blow in 5th place will be over the 2) but the order in which you pass the other three bells will rotate each time you lead.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[3,6],[1,6],[5,6],[1,6],[5,6],[1,6],[5,6],[1,6],[5,6],[1,6]],
  "firstcall": "Go Grandsire Doubles",
  "numrounds": 4,
  "stoprounds": 2},
  {"mybell": 1,
    "instructions": "Now all four bells will rotate order! In this method, Plain Bob Doubles, each time you lead one of the other bells will make 2nds over you, which means that the last bell you passed on your way down (the bell you took off lead) will be the first bell you pass on your way up again (the bell that takes you off lead!).",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,6],[5,6],[1,6],[5,6],[1,6],[5,6],[1,6],[5,6],[1,2,5,6]],
  "firstcall": "Go Plain Bob Doubles",
  "numrounds": 4,
  "stoprounds": 1},
  {"mybell": 1,
    "instructions": "In this method the 2 will always take you off lead and you'll always take the 2 off lead (the 2 will make 2nds every time you lead). The other three bells will rotate order, but this time it'll be when you lie at the back instead of when you lead.",
  "rowzero": [[1],[2],[3],[4],[5],[6]],
  "placenotation": [[5,6],[1,6],[1,2,5,6],[3,6],[1,2,5,6],[3,6],[1,2,5,6],[1,6],[5,6],[1,2,5,6]],
  "firstcall": "Go Merton Bob Doubles",
  "numrounds": 4,
  "stoprounds": 1}
]