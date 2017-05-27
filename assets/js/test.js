var apiKey = 'zXUuF4xob97q9Q9qtVWL6zJkgttptBj00gDvO8yh'

function searchFood(event){
    
    var searchValue = document.getElementById("searchValue").value;
    console.log(searchValue);
    
    var resultNames = document.getElementsByClassName("resultName");
    var resultDescriptions = document.getElementsByClassName("resultDescription")
    
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.nal.usda.gov/ndb/search/?format=json&q='+ searchValue +'&sort=r&max=5&offset=0&api_key=' + apiKey, true)
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        console.log(response);
        console.log(JSON.stringify(response, null, "\t"));
          for(var i = 0; i < resultDescriptions.length; i++){
              resultDescriptions[i].textContent = response.list.item[i].name;
          }
          
      } else {
        console.log("Error in network request: " + req.statusText);
      }
    });
    req.send(null);
    
    event.preventDefault();
}

function searchFoodOne(event){
    
    var searchValue = document.getElementById("searchValue").value;
    console.log(searchValue);
    var resultValue = document.getElementById("resultValue");
    
    resultValue.textContent = searchValue;
    event.preventDefault();
}