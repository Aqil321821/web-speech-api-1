//some older browser dont supports speechRec object for that we've webkitSpeechRecog


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;



const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const said = e.results[i][0].transcript.toLowerCase().trim();
    console.log(e.results);
    console.log(typeof e.results);

    if (acceptedColors.includes(said)) {
      document.body.style.backgroundColor = said;
      document.querySelector('h2').innerText=said;
    } else {
      alert('Please say a color');
    }
  }
  if (document.body.style.backgroundColor==='black') {

    document.querySelector('h1').style.color='white';
    document.querySelector('h2').style.color='white';
}else{
  document.querySelector('h1').style.color='black';
  document.querySelector('h2').style.color='black';
}
};

rec.start();
