var btn_search = document.getElementById("btn-search");
var input_search = document.getElementById("input-search");

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

document.addEventListener("DOMContentLoaded", function()
{
  for(var i = 0; i < 5; i++)
  {
    var li = document.createElement("li");
    var li_text = document.createTextNode(GetRandomForms());
    li.appendChild(li_text);
    
    document.getElementById("forms-list").appendChild(li);
  }

  var number = 0;

  for(var i = 0; i < words.length; i++)
  {
    if(getCookie("unknown word " + i) && number < 2)
    {
      var li = document.createElement("li");
      var li_text = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);
      li.appendChild(li_text);

      document.getElementById("my-words").appendChild(li);
      number++;
    }
  }

  if(!number)
  {
    document.getElementById("no-words").innerHTML = "<img src=\"img/emoji/unamused-face.png\" alt=\"\"> Останнім часом ви не вчили глаголи";
    document.getElementById("btn-learn").innerHTML = "Вчити";
  }
});

btn_search.addEventListener("click", function()
{
  var isFound = false;
  input_search.value = input_search.value.replace(" ", "");
  
  if(input_search.value != "")
  {
    for(var i = 0; i < words.length; i++)
    {
      if(words[i][0] == input_search.value.toLowerCase() || words[i][1] == input_search.value.toLowerCase() || words[i][2] == input_search.value.toLowerCase())
      {
        input_search.value = words[i][0] + " — " + words[i][1] + " — " + words[i][2];
        isFound = true;
        btn_search.innerHTML = "Знайдено!";
        btn_search.style.background = "#71e38b";
      }
    }

    if(!isFound)
    {
      btn_search.innerHTML = "Не знайдено!";
      btn_search.style.background = "#fd9393";
    }
  }
});

input_search.addEventListener("keyup", function(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    btn_search.click();
  }
});

input_search.addEventListener("input", function() {
  if(this.value == "")
  {
    btn_search.innerHTML = "Шукати";
    btn_search.style.background = "transparent";
  }
});