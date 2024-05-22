const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const quotes = [
  {
    quote: '신은 용기있는자를 결코 버리지 않는다',
    author: '켄러',
  },
  {
    quote: '피할수 없으면 즐겨라',
    author: '로버트 엘리엇',
  },
  {
    quote:
      '절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.',
    author: 'L론허바드',
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다',
    author: '앙드레 말로',
  },
  {
    quote: '혼자서는 작은 한 방울이지만 함께 모이면 바다를 이룹니다.',
    author: 'Ryunosuke Satoro',
  },
  {
    quote:
      '누군가는 바라고, 다른 누군가는 이루어지길 소망하고, 또 다른 누군가는 그것을 이루어냅니다.',
    author: ' Michael Jordan',
  },
  {
    quote:
      'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly',
  },
  {
    quote:
      'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga',
  },
  {
    quote:
      'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin',
  },
  {
    quote:
      'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn',
  },
];
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
