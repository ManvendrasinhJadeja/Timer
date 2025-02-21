let btn = document.getElementById("btn")
let min = document.getElementById("min")
let display = document.getElementById("display")

let totalSec,totalMin,currSecond,inter;
btn.addEventListener("click",function(e){
    e.preventDefault();
    display.innerText="00:00";
    display.style.fontSize="7rem"
    totalSec=0
    totalMin=0
    currSecond=0
    if (inter) {
        clearInterval(inter);
    }
    totalSec = min.value*(60)
    
    inter = setInterval(()=>{
        totalMin = Math.floor(totalSec/60)
        currSecond = totalSec%60
        console.log(totalMin,totalSec,currSecond);
        display.innerText=`${totalMin} : ${currSecond}`
        totalSec--
        if (totalSec<0) {
            clearInterval(inter);
            display.innerText="00:00";
            pop();
            
                }
    },1000);    
})  



// asdf

let modal =document.getElementById("modal")
let btn2 =document.getElementById("btn2")
let quotePara =document.getElementById("para");

function pop(){
    quotePara.innerText=getRandomQuote();

        modal.classList.add("show")
        modal.classList.remove("hide")

    setTimeout(()=>{
        modal.classList.add("hide")
        modal.classList.remove("show")
    },7000)
}



btn2.addEventListener("click",()=>{

    modal.classList.add("hide")
    modal.classList.remove("show")
    
}) 





const quotes = [
    "Believe in yourself and all that you are.",
    "Every moment is a fresh beginning.",
    "Do what you can, with what you have, where you are.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "It always seems impossible until it's done.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Stay hungry. Stay foolish.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop until you’re proud.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes later becomes never. Do it now.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Difficult roads often lead to beautiful destinations.",
    "A journey of a thousand miles begins with a single step.",
    "Act as if what you do makes a difference. It does.",
    "What defines us is how well we rise after falling.",
    "You are never too old to set another goal or to dream a new dream.",
    "Opportunities don't happen, you create them.",
    "The secret of getting ahead is getting started.",
    "Doubt kills more dreams than failure ever will.",
    "Work hard in silence, let success make the noise.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Discipline is the bridge between goals and accomplishment.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Everything you can imagine is real.",
    "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    "A goal without a plan is just a wish.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Life isn’t about finding yourself. Life is about creating yourself.",
    "If everything was perfect, you would never learn and you would never grow.",
    "You must be the change you wish to see in the world.",
    "Be yourself; everyone else is already taken.",
    "Do something today that your future self will thank you for.",
    "Be so good they can’t ignore you.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "The only place where success comes before work is in the dictionary.",
    "The best revenge is massive success.",
    "Don’t wish it were easier. Wish you were better.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "Don't be afraid to give up the good to go for the great.",
    "If you want to achieve greatness stop asking for permission.",
    "Do what you can, with what you have, where you are.",
    "Don’t let yesterday take up too much of today.",
    "If opportunity doesn’t knock, build a door.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is not how high you have climbed, but how you make a positive difference in the world.",
    "The biggest risk is not taking any risk.",
    "Hustle until you no longer have to introduce yourself.",
    "Nothing will work unless you do.",
    "The man who moves a mountain begins by carrying away small stones.",
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.",
    "You can waste your lives drawing lines. Or you can live your life crossing them.",
    "Failure is not the opposite of success; it’s part of success.",
    "Difficulties in life are intended to make us better, not bitter.",
    "A winner is just a loser who tried one more time.",
    "No masterpiece was ever created by a lazy artist.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Be stubborn about your goals and flexible about your methods.",
    "What would you do if you weren’t afraid?",
    "The best way to get started is to quit talking and begin doing.",
    "Don’t limit your challenges. Challenge your limits.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Start where you are. Use what you have. Do what you can.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You miss 100% of the shots you don’t take.",
    "If you can dream it, you can do it.",
    "Great things are done by a series of small things brought together.",
    "One day or day one. You decide."
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}




