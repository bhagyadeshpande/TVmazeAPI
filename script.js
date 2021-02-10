async function displayShows(userSearch){
  try{
    document.getElementById("container").innerHTML = "";
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${userSearch}`)
    let data = await response.json();
    let showObj = {};
    data.forEach(element => {
      showObj = element["show"];
      if(showObj["premiered"]!==null &&  
      showObj["image"]!==null && 
      showObj["genres"]!==null) {     
          let picURL = showObj["image"]["medium"];
          let picture = document.createElement("img");
          picture.setAttribute("src", picURL); 
          document.getElementById("container").append(picture);
          document.getElementById("container").innerHTML += "<br>" +
      showObj["name"] + "<br>" +
      showObj["genres"] + "<br>" +
      showObj["premiered"] + "<br>" +
      showObj["schedule"]["days"] + " " + 
      showObj["schedule"]["time"] + "<br>" + "<br>";
      }
      });        
  }
  catch(error){
    console.log(error);
  }
}




