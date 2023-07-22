const myquote = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    qouteauther: "― Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    qouteauther: "― Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    qouteauther: "― Frank Zappa",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    qouteauther: "― Albert Einstein",
  },
  {
    quote: "“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals”",
    qouteauther: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote: "“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”",
    qouteauther: "― Marilyn Monroe",
  }
];
let x;
function QuoteGenerator() {
  do {
    randomNumber = Math.floor(Math.random() * myquote.length);
  } while (x == randomNumber);
  x = randomNumber
  document.getElementById("quote").innerHTML = myquote[randomNumber].quote;
  document.getElementById("qouteauther").innerHTML =myquote[randomNumber].qouteauther;
}
