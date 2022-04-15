const solarBody = document.querySelectorAll('.btn');

// add eventlistenter to array of buttons
 Array.from(solarBody).forEach(p => p.addEventListener('click',getFetch));

 

function getFetch(click){
  let choice;
  for(let i = 0; i<= 10; i++){
    if(click.target.classList.contains('btn'+i)){
      choice = document.querySelector('.btn'+i).value;
    }
  }

 const url = `https://images-api.nasa.gov/search?q=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if (
          document.querySelector(".card").classList.contains("hidden")
      ) {
          document.querySelector(".card").classList.toggle("hidden");
      }
        let imgData = data.collection.items
        let imgNum = Math.floor(Math.random()*imgData.length)
        document.querySelector('h2').innerText = imgData[imgNum].data[0].title;

        document.querySelector('h3').innerText = imgData[imgNum].data[0].description;

        document.querySelector('img').src = imgData[imgNum].links[0].href;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}