const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const fadeSpeed = parseFloat(urlParams.get('fade')||'0.2');
const seekThreshold = parseFloat(urlParams.get('seek')||'0.01');

var state = localStorage.state || 'false,false,false,false,false,false,false';
state = state.split(',');
state = state.map(v=>v==='true');

var volume = localStorage.volume || '0.5,0.5,0.5,0.5,0.5,0.5,0.5';
volume = volume.split(',');
volume = volume.map(parseFloat);

var loadState = 6;

var song = [
	new Howl({
		src:['resources/Accordion.ogg','resources/Accordion.wav'],
		loop: true,
		volume: 0,
		onload: ()=>{loadState -= 1;},
		onloaderror:err=>{
			document.getElementById('loader').innerHTML = 
			`ERROR<p>Accordion: ${err}</p>`
		},
		onstop:i=>{song[0].play()},
		onplayerror:(i,e)=>{console.error(e)}
	}),
	new Howl({
		src:['resources/Acoustic Guitar.ogg','resources/Acoustic Guitar.wav'],
		loop: true,
		volume: 0,
		onload: ()=>{loadState -= 1;},
		onloaderror:err=>{
			document.getElementById('loader').innerHTML = 
			`ERROR<p>Acoustic Guitar: ${err}</p>`
		},
		onstop:i=>{song[1].play()},
		onplayerror:(i,e)=>{console.error(e)}
	}),
	new Howl({
		src:['resources/Electric Guitar Harmony.ogg','resources/Electric Guitar Harmony.wav'],
		loop: true,
		volume: 0,
		onload: ()=>{loadState -= 1;},
		onloaderror:err=>{
			document.getElementById('loader').innerHTML = 
			`ERROR<p>Electric Guitar Harmony: ${err}</p>`
		},
		onstop:i=>{song[2].play()},
		onplayerror:(i,e)=>{console.error(e)}
	}),
	new Howl({
		src:['resources/Banjo.ogg','resources/Banjo.wav'],
		loop: true,
		volume: 0,
		onload: ()=>{loadState -= 1;},
		onloaderror:err=>{
			document.getElementById('loader').innerHTML = 
			`ERROR<p>Banjo: ${err}</p>`
		},
		onstop:i=>{song[3].play()},
		onplayerror:(i,e)=>{console.error(e)}
	}),
	new Howl({
		src:['resources/Harmonica.ogg','resources/Harmonica.wav'],
		loop: true,
		volume: 0,
		onload: ()=>{loadState -= 1;},
		onloaderror:err=>{
			document.getElementById('loader').innerHTML = 
			`ERROR<p>Harmonica: ${err}</p>`
		},
		onstop:i=>{song[4].play()},
		onplayerror:(i,e)=>{console.error(e)}
	}),
	new Howl({
		src:['resources/Percussion.ogg','resources/Percussion.wav'],
		loop: true,
		volume: 0,
		onload: ()=>{loadState -= 1;},
		onloaderror:err=>{
			document.getElementById('loader').innerHTML = 
			`ERROR<p>Percussion: ${err}</p>`
		},
		onstop:i=>{song[5].play()},
		onplayerror:(i,e)=>{console.error(e)}
	})
];
