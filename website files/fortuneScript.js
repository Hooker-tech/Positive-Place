let fortuneList = {
	"fortunes": [

{
        "Fortune":"Activities involving friends and relatives will be successful","Area of Life":" - Personal Involvements"},
{
        "Fortune":"An ambitious phase is about to begin. Don't hesitate to seek assistance","Area of Life":" - Personal Involvements"},
{
        "Fortune":"Someone close may try to thwart your efforts to attain your goals","Area of Life":" - Personal Involvements"},
{
        "Fortune":"Hurdles are ahead but they can be overcome with patience","Area of Life":" - Personal Involvements"},
{   
        "Fortune":"A special romantic wish could come true","Area of Life":" - Fulfilment"},
{
        "Fortune":"Hard work will bring its just rewards","Area of Life":" - Fulfilment"},
{
        "Fortune":"A friend interferes with your ambitions","Area of Life":" - Fulfilment"},
{
        "Fortune":"Don't be in too much of a rush to achieve your goals","Area of Life":" - Fulfilment"},
{
        "Fortune":"Anxieties will soon be allayed","Area of Life":" - Happiness"},
{
        "Fortune":"Happiness comes through the support of friends and family","Area of Life":" - Happiness"},
{
        "Fortune":"Be grateful fo rthe advice of others but follow your own instincts","Area of Life":" - Happiness"},
{
        "Fortune":"Optimism helps in the face of difficulties","Area of Life":" - Happiness"},
{
        "Fortune":"A special object of desire will soon be within reach","Area of Life":" - Future Achievements"},
{
        "Fortune":"Trust someone who pusts an interesting suggestion to you","Area of Life":" - Future Achievements"},
{
        "Fortune":"Discuss plans with loved ones before putting them into action","Area of Life":" - Future Achievements"},
{
        "Fortune":"There may be the need to reconsider certain ambitions","Area of Life":" - Future Achievements"},
{
        "Fortune":"An uncertain situation will call for quick thinking", "Area of Life":" - Caution"},
{
        "Fortune":"A recent risk proves to have been worth taking", "Area of Life":" - Caution"},
{
        "Fortune":"Avoid rash decisions concerning money", "Area of Life":" - Caution"},
{
        "Fortune":"AGuar against impulsiveness", "Area of Life":" - Caution"},
{
        "Fortune":"Romance is exciting and spontaneous", "Area of Life":" - Secret Wishes"},
{
        "Fortune":"You can help make a loved one's dream come true", "Area of Life":" - Secret Wishes"},
{
        "Fortune":"Ignore others who put doubts into your mind","Area of Life": " - Secret Wishes"},
{
        "Fortune":"Secret liaisons will not bring happiness","Area of Life": " - Secret Wishes"},
{
        "Fortune":"You can trust your friends", "Area of Life":" - Social Life"},
{
        "Fortune":"Team efforts bring great rewards", "Area of Life":" - Social Life"},
{
        "Fortune":"Friendships are a little strained", "Area of Life":" - Social Life"},
{
        "Fortune":"Be carful who you trust", "Area of Life":" - Social Life"},
{
        "Fortune":"Money is not the problem it used to be", "Area of Life":" - Wealth"},
{
        "Fortune":"Income will start to increase steadily", "Area of Life":" - Wealth"},
{
        "Fortune":"Joint funds need attention", "Area of Life":" - Wealth"},
{
        "Fortune":"Take car in long-term financial deals", "Area of Life":" - Wealth"},
{
        "Fortune":"Any changes that occur will be for the best", "Area of Life":" - Luck"},
{
        "Fortune":"Luck is linked with friends and associates", "Area of Life":" - Luck"},
{
        "Fortune":"If someone is standing in the way, be sure they don't block your progress", "Area of Life":" - Luck"},
{
        "Fortune":"Be patien if you don't feel lucky", "Area of Life":" - Luck"},
{
        "Fortune":"Personal relationships are harmonious", "Area of Life":" -Marriage"},
{
        "Fortune":"There's a need for some personal freedom", "Area of Life":" -Marriage"},
{
        "Fortune":"It's not advisable to rake up past disagreements", "Area of Life":" -Marriage"},
{
        "Fortune":"Tact is needed in loving relationships", "Area of Life":" -Marriage"},
{
        "Fortune":"Strong likelihood of succeeding in chosen profession", "Area of Life":" - Destiny"},
{
        "Fortune":"Friends help you achieve special targets", "Area of Life":" - Destiny"},
{
        "Fortune":"Attaining a long-term goal involves financial risk. Those who dare, win", "Area of Life":"- Destiny"},
{
        "Fortune":"Fate requires you to follow rather than lead", "Area of Life":" - Destiny"},
{
        "Fortune":"Hard work brings its just rewards", "Area of Life":" - Benefits and Rewards"},
{
        "Fortune":"Friends benefit you in some way", "Area of Life":" - Benefits and Rewards"},
{
        "Fortune":"Others may take what should be yours", "Area of Life":" - Benefits and Rewards"},
{
        "Fortune":"Fate requires you to follow rather than lead", "Area of Life":" - Benefits and Rewards"},
{
        "Fortune":"The future holds much in the way of achievements", "Area of Life":"Ambition"},
{
        "Fortune":"Team efforts bring surprising joy", "Area of Life":"Ambition"},
{
        "Fortune":"Practicality is a mush", "Area of Life":"Ambition"},
{
        "Fortune":"Don't be put off when things aren't going your way", "Area of Life":"Ambition"},
{
        "Fortune":"Stay steadfast and determined and you'll fulfil your ambitions", "Area of Life":" - Overall"},
{
        "Fortune":"Accept help when it is offered. you can't do everything on your own", "Area of Life":" - Overall"},
{
        "Fortune":"Sometimes you have to go it alone to achieve your ambitions", "Area of Life":" - Overall"},
{
        "Fortune":"Attaining long-term goals requires dedication, determination and lots of effort", "Area of Life":" - Overall"},

]
}

function randoFortune(){

    let newFortune = Math.floor(Math.random() * fortuneList["fortunes"].length)
    let fortuneOutput = fortuneList["fortunes"][newFortune]["Fortune"]
    let categoryOutput = fortuneList["fortunes"][newFortune]["Area of Life"]

    let fortuneArea = document.getElementById("fortune").innerText = fortuneOutput
    console.log (fortuneArea)
    let categoryArea = document.getElementById("category").innerText = categoryOutput
    console.log(categoryArea)


}

console.log(randoFortune())


let fontList = ['Agency FB', 'Algerian', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Blackadder ITC', 'Bradley Hand ITC', 'Briannic', 'Broadway', 'Brush Script MT', 'Curlz MT', 'Edwardian Script ITC', 'Forte', 'Freestyle Script', 'French Script MT', 'Gigi',  'Harrington', 'Ink Free', 'Jokerman', 'Juice ITC', 'Kristen ITC', 'Lucida Caligraphy', 'Script MT', 'Segoe Print', 'Snap ITC', 'Tempus Sans ITC']

function randoFont(){

    let newFont = Math.floor(Math.random() * fontList.length)
    let fontOutput = fontList[newFont]
  

    let fontFortuneArea = document.getElementById("fortune").style.fontFamily = fontOutput
    console.log (fontFortuneArea)
    let fontCategoryArea = document.getElementById("category").style.fontFamily = fontOutput
    console.log(fontCategoryArea)
//     let fontButtonArea = document.getElementById("generate").style.fontFamily = fontOutput
//     console.log(fontButtonArea)


}

console.log(randoFont())




