let answerA
let answerB
let answerC
$(":radio").on("click", function(){

answerA =0;
answerB = 0;
answerC = 0;


if ($('#1a').prop('checked')){
answerA +=1 
}

if ($('#2a').prop('checked')){
answerA +=1
}
if ($('#3a').prop('checked')){
answerA +=1
}
if ($('#4a').prop('checked')){
answerA +=1
}
if ($('#5a').prop('checked')){
answerA +=1
}
if ($('#6a').prop('checked')){
answerA +=1
}

if ($('#7a').prop('checked')){
answerA +=1 
}

if ($('#8a').prop('checked')){
answerA +=1
}
if ($('#9a').prop('checked')){
answerA +=1
}
if ($('#10a').prop('checked')){
answerA +=1
}
if ($('#11a').prop('checked')){
answerA +=1
}
if ($('#12a').prop('checked')){
answerA +=1
}
if ($('#13a').prop('checked')){
answerA +=1 
}

if ($('#14a').prop('checked')){
answerA +=1
}
if ($('#15a').prop('checked')){
answerA +=1
}
if ($('#16a').prop('checked')){
answerA +=1
}
if ($('#17a').prop('checked')){
answerA +=1
}
if ($('#18a').prop('checked')){
answerA +=1
}

if ($('#19a').prop('checked')){
answerA +=1 
}

if ($('#20a').prop('checked')){
answerA +=1
}
if ($('#21a').prop('checked')){
answerA +=1
}
if ($('#22a').prop('checked')){
answerA +=1
}
if ($('#23a').prop('checked')){
answerA +=1
}
if ($('#24a').prop('checked')){
answerA +=1
}
if ($('#25a').prop('checked')){
answerA +=1
}
if ($('#26a').prop('checked')){
answerA +=1
}
if ($('#27a').prop('checked')){
answerA +=1
}
if ($('#28a').prop('checked')){
answerA +=1
}
if ($('#29a').prop('checked')){
answerA +=1
}
if ($('#30a').prop('checked')){
answerA +=1
}

$('#totalA').val(answerA)

if ($('#1b').prop('checked')){
answerB +=1 
}

if ($('#2b').prop('checked')){
answerB +=1
}
if ($('#3b').prop('checked')){
answerB +=1
}
if ($('#4b').prop('checked')){
answerB +=1
}
if ($('#5b').prop('checked')){
answerB +=1
}
if ($('#6b').prop('checked')){
answerB +=1
}
if ($('#7b').prop('checked')){
answerB +=1 
}

if ($('#8b').prop('checked')){
answerB +=1
}
if ($('#9b').prop('checked')){
answerB +=1
}
if ($('#10b').prop('checked')){
answerB +=1
}
if ($('#11b').prop('checked')){
answerB +=1
}
if ($('#12b').prop('checked')){
answerB +=1
}
if ($('#13b').prop('checked')){
answerB +=1 
}

if ($('#14b').prop('checked')){
answerB +=1
}
if ($('#15b').prop('checked')){
answerB +=1
}
if ($('#16b').prop('checked')){
answerB +=1
}
if ($('#17b').prop('checked')){
answerB +=1
}
if ($('#18b').prop('checked')){
answerB +=1
}

if ($('#19b').prop('checked')){
answerB +=1 
}

if ($('#20b').prop('checked')){
answerB +=1
}
if ($('#21b').prop('checked')){
answerB +=1
}
if ($('#22b').prop('checked')){
answerB +=1
}
if ($('#23b').prop('checked')){
answerB +=1
}
if ($('#24b').prop('checked')){
answerB +=1
}
if ($('#25b').prop('checked')){
answerB +=1
}
if ($('#26b').prop('checked')){
answerB +=1
}
if ($('#27b').prop('checked')){
answerB +=1
}
if ($('#28b').prop('checked')){
answerB +=1
}
if ($('#29b').prop('checked')){
answerB +=1
}
if ($('#30b').prop('checked')){
answerB +=1
}

$('#totalB').val(answerB)

if ($('#1c').prop('checked')){
answerC +=1 
}

if ($('#2c').prop('checked')){
answerC +=1
}
if ($('#3c').prop('checked')){
answerC +=1
}
if ($('#4c').prop('checked')){
answerC +=1
}
if ($('#5c').prop('checked')){
answerC +=1
}
if ($('#6c').prop('checked')){
answerC +=1
}

if ($('#7c').prop('checked')){
answerC +=1 
}

if ($('#8c').prop('checked')){
answerC +=1
}
if ($('#9c').prop('checked')){
answerC +=1
}
if ($('#10c').prop('checked')){
answerC +=1
}
if ($('#11c').prop('checked')){
answerC +=1
}
if ($('#12c').prop('checked')){
answerC +=1
}
if ($('#13c').prop('checked')){
answerC +=1 
}

if ($('#14c').prop('checked')){
answerC +=1
}
if ($('#15c').prop('checked')){
answerC +=1
}
if ($('#16c').prop('checked')){
answerC +=1
}
if ($('#17c').prop('checked')){
answerC +=1
}
if ($('#18c').prop('checked')){
answerC +=1
}

if ($('#19c').prop('checked')){
answerC +=1 
}

if ($('#20c').prop('checked')){
answerC +=1
}
if ($('#21c').prop('checked')){
answerC +=1
}
if ($('#22c').prop('checked')){
answerC +=1
}
if ($('#23c').prop('checked')){
answerC +=1
}
if ($('#24c').prop('checked')){
answerC +=1
}
if ($('#25c').prop('checked')){
answerC +=1
}
if ($('#26a').prop('checked')){
answerC +=1
}
if ($('#27c').prop('checked')){
answerC +=1
}
if ($('#28c').prop('checked')){
answerC +=1
}
if ($('#29c').prop('checked')){
answerC +=1
}
if ($('#30c').prop('checked')){
answerC +=1
}

$('#totalC').val(answerC)

$('button').on('click', function(e){
console.log(e.target.value)
console.log(answerA)
let returnedResults;

let aResult = "You are someone with a Visual learning style has a preference for seen or observed things, including pictures, diagrams, demonstrations, displays, handouts, films, flip-chart, etc. These people will use phrases such as ‘show me’, ‘let’s have a look at that’ and will be best able to perform a new task after reading the instructions or watching someone else do it first. These are the people who will work from lists and written directions and instructions."

let bResult= "You are someone with an Auditory learning style has a preference for the transfer of information through listening: to the spoken word, of self or others, of sounds and noises. These people will use phrases such as ‘tell me’, ‘let’s talk it over’ and will be best able to perform a new task after listening to instructions from an expert. These are the people who are happy being given spoken instructions over the telephone, and can remember all the words to songs that they hear!" 

let cResult="You are someone with a Kinaesthetic learning style has a preference for physical experience - touching, feeling, holding, doing, practical hands-on experiences. These people will use phrases such as ‘let me try’, how do you feel?’ and will be best able to perform a new task by going ahead and trying it out, learning as they go. These are the people who like to experiment, hands-on, and never look at the instructions first!"


if (answerA > answerB && answerA > answerC){
    returnedResults = document.getElementById("results").innerText = aResult
    console.log(returnedResults)
    $('#results').show()
}else if(answerB > answerA && answerB > answerC){
     returnedResults = document.getElementById("results").innerText = bResult
    console.log(returnedResults)
}else if (answerC > answerA && answerC > answerB){
     returnedResults = document.getElementById("results").innerText = cResult
    console.log(returnedResults)
}


})





})

$('button').addClass('animated bounce')
$('.well').addClass('animated shake')
