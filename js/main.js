document.getElementById("btn-search").addEventListener("click", Search);
document.getElementById("input-search").addEventListener("keyup", function(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    document.getElementById("btn-search").click();
  }
});

function Search()
{
  var input_search = document.getElementById("input-search");
  var temp_request = input_search.value;
  input_search.value = input_search.value.replace(" ","");
  
  if(input_search.value != "")
  {
    for(var i = 0; i < words.length; i++)
    {
      if(words[i][0] == input_search.value.toLowerCase())
      {
        input_search.value = words[i][0] + " — " + words[i][1] + " — " + words[i][2];
      }
    }

    if(temp_request == input_search.value)
    {
      input_search.value = "Не знайдено. Пишіть лише першу форму глаголу";
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomForms() 
{
  var rand = getRandomInt(0, words.length);
  
  return words[rand][0] + " — " + words[rand][1] + " — " + words[rand][2];
}

function RandomForms()
{
  for(var i = 0; i < 5; i++)
  {
    var node = document.createElement("li");
    var textnode = document.createTextNode(GetRandomForms());
    node.appendChild(textnode);
    
    document.getElementById("forms-list").appendChild(node);
  }
}