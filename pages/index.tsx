import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Home() {

let twoImage = [
  "/images/2_of_diamonds.png",
  "/images/2_of_clubs.png",
  "/images/2_of_hearts.png",
  "/images/2_of_spades.png",
];
let threeImage = [
  "/images/3_of_diamonds.png",
  "/images/3_of_clubs.png",
  "/images/3_of_hearts.png",
  "/images/3_of_spades.png",
];
let fourImage = [
  "/images/4_of_diamonds.png",
  "/images/4_of_clubs.png",
  "/images/4_of_hearts.png",
  "/images/4_of_spades.png",
];
let fiveImage = [
  "/images/5_of_diamonds.png",
  "/images/5_of_clubs.png",
  "/images/5_of_hearts.png",
  "/images/5_of_spades.png",
];
let sixImage = [
  "/images/6_of_diamonds.png",
  "/images/6_of_clubs.png",
  "/images/6_of_hearts.png",
  "/images/6_of_spades.png",
];
let sevenImage = [
  "/images/7_of_diamonds.png",
  "/images/7_of_clubs.png",
  "/images/7_of_hearts.png",
  "/images/7_of_spades.png",
];
let eightImage = [
  "/images/8_of_diamonds.png",
  "/images/8_of_clubs.png",
  "/images/8_of_hearts.png",
  "/images/8_of_spades.png",
];
let nineImage = [
  "/images/9_of_diamonds.png",
  "/images/9_of_clubs.png",
  "/images/9_of_hearts.png",
  "/images/9_of_spades.png",
];
let tenImage = [
  "/images/10_of_diamonds.png",
  "/images/10_of_clubs.png",
  "/images/10_of_hearts.png",
  "/images/10_of_spades.png",
];

let jqkImage = [
  "/images/jack_of_diamonds.png",
  "/images/jack_of_clubs.png",
  "/images/jack_of_hearts.png",
  "/images/jack_of_spades.png",
  "/images/queen_of_diamonds.png",
  "/images/queen_of_clubs.png",
  "/images/queen_of_hearts.png",
  "/images/queen_of_spades.png",
  "/images/king_of_diamonds.png",
  "/images/king_of_clubs.png",
  "/images/king_of_hearts.png",
  "/images/king_of_spades.png",
];
let aceImage = [
  "/images/ace_of_diamonds.png",
  "/images/ace_of_clubs.png",
  "/images/ace_of_hearts.png",
  "/images/ace_of_spades.png",
];

function getRandomImage(arr) {
  const length = arr.length;
  const randomIndex = Math.floor(length * Math.random())
  return arr[randomIndex]
}
let cardPack = [ 
  {
    title: "two",
    value: 2,
    image: getRandomImage(twoImage)
  },
  {
    title: "three",
    value: 3,
    image: getRandomImage(threeImage)
  },
  {
    title: "four",
    value: 4,
    image: getRandomImage(fourImage)
  },
  {
    title: "five",
    value: 5,
    image: getRandomImage(fiveImage)
  },
  {
    title: "six",
    value: 6,
    image: getRandomImage(sixImage)
  },
  {
    title: "seven",
    value: 7,
    image: getRandomImage(sevenImage)
  },
  {
    title: "eight",
    value: 8,
    image: getRandomImage(eightImage)
  },
  {
    title: "nine",
    value: 9,
    image: getRandomImage(nineImage)
  },
  {
    title: "ten",
    value: 10,
    image: getRandomImage(jqkImage)
  },
  {
    title: "ace",
    value: 11,
    image: getRandomImage(aceImage)
  },
]
const [inPlay, setInPlay] = useState(false)


function generateCard(){
let randomNumber = Math.floor(Math.random() * cardPack.length)
 return  cardPack[randomNumber]
}

let firstCard = generateCard()
let secondCard = generateCard()
let dealerFirstCard = generateCard()
let dealerSecondCard = generateCard()

const [player, setPlayer] = useState([firstCard,secondCard])
let [playerTotal, setPlayerTotal] = useState(firstCard.value + secondCard.value)
const [dealer, setDealer] = useState([dealerFirstCard,dealerSecondCard ])
let [dealerTotal, setDealerTotal] = useState(dealerFirstCard.value + dealerSecondCard.value)
let [playerWins, setPlayerWins] = useState(0)
let [dealerWins, setDealerWins] = useState(0)
let [tie, setTie] = useState(0)
let [gameOver, setGameOver] = useState(false)
function startGame() {
setInPlay(true)
}

function newCard() {
  let newCard = generateCard();
  setPlayerTotal(playerTotal += newCard.value)
  return setPlayer([newCard].concat(player))
}
 function newDealerCard(){
  let newDealerCard = generateCard();
  setDealerTotal(dealerTotal += newDealerCard.value)
  console.log(newDealerCard.value);
  
    return setDealer([newDealerCard].concat(dealer))
}

function stick() {
  while (dealerTotal <= 16){
   newDealerCard()
  }
   winnerCalculation()
}

function winnerCalculation() {
  if (playerTotal >= 22){
    setDealerWins( dealerWins += 1)
  }
  else if (dealerTotal >= 22){
     setPlayerWins( playerWins += 1)
  }
  else if (playerTotal > dealerTotal){
     setPlayerWins( playerWins += 1)
  }
  else if(dealerTotal > playerTotal) {
    setDealerWins(dealerWins += 1)
  }
  else if (playerTotal === dealerTotal){
    setTie( tie += 1)
}
setGameOver(true)
}
useEffect(() => {
if (playerTotal > 21){
stick()
}
},[playerTotal])


function newGame() {
setPlayer([firstCard,secondCard])
setPlayerTotal(firstCard.value + secondCard.value)
setDealer([dealerFirstCard,dealerSecondCard ])
setDealerTotal(dealerFirstCard.value + dealerSecondCard.value)
setGameOver(false)
}

  return (
    <main className="flex h-screen justify-center items-center">
      <div >
        <div className='flex flex-col justify-center items-center'>
        { inPlay && (
            <div className='text-center border-4  border-orange-500 p-4 bg-black  text-orange-500 rounded-lg'>
            <h1 className='text-2xl font-bold mb-4'>Scoreboard</h1>
            <div className='flex justify-center items-center space-x-20'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold'>Player</h2>
                <p>Total: {playerTotal}</p>
                <p>Player wins: {playerWins}</p>
            </div>
            <div>
              <p>Ties: {tie}</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold'>Dealer</h2>
                <p>Total: {dealerTotal}</p>
                <p>Dealer wins: {dealerWins}</p>
            </div>
            </div>
                  {
        gameOver && (
            <div>
          <h2>Game over select new game to play again</h2>
        </div>
        )
      }
          </div>
        )}
        <h1>Players Hand</h1>
        { inPlay && (
           <ul className='flex space-x-3'>
          {player.map((card, index) => (
          <div key={index}>
            <Image 
            src={card.image}
            alt="" 
            width={100}
            height={100}
            priority
            />
          </div>
         ))}
         </ul>
        )}
        <h1 className='mt-5'>Dealers Hand</h1>
        { inPlay && (
           <ul className='flex space-x-3'>
          {dealer.map((card, index) => (
          <div key={index}>
            <Image 
            src={card.image}
            alt="" 
            width={100}
            height={100}
            priority
            />
          </div>
         ))}
         </ul>
        )}

        <div className='space-x-4'>
          <button onClick={startGame} 
        className='mt-4 mb-4 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>Start Game</button>
        { inPlay && (
          <button onClick= {newGame}
        className='mt-4 mb-4 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>New Game</button>
        )}
        { inPlay && (
          <button onClick= {newCard}
        className='mt-4 mb-4 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>New Card</button>
        )}
        { inPlay && gameOver == false &&(
          <button onClick= {stick}
        className='mt-4 mb-4 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>Stick</button>
        )}
        </div>
        </div>
      </div>
    </main>
  );

}




