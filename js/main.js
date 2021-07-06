document.getElementById("btn-search").addEventListener("click", Search);
document.getElementById("cookie-check").addEventListener("click", CookieAgree);
document.getElementById("input-search").addEventListener("keyup", function(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    document.getElementById("btn-search").click();
  }
});

document.getElementById("input-search").addEventListener("input", function() {
  if(this.value == "")
  {
    document.getElementById("btn-search").innerHTML = "Шукати";
    document.getElementById("btn-search").style.background = "transparent";
  }
});

function Search()
{
  var input_search = document.getElementById("input-search");
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
        document.getElementById("btn-search").innerHTML = "Знайдено!";
        document.getElementById("btn-search").style.background = "rgb(113, 227, 139)";
      }
    }

    if(!isFound)
    {
      document.getElementById("btn-search").innerHTML = "Не знайдено!";
      document.getElementById("btn-search").style.background = "#fd9393";
    }
  }
}

function CookieAgree()
{
  setCookie("cookie agree", true, 999999);
  document.getElementById("cookie-warning").style.display = "none";
}

function GetWords()
{
  RandomForms();
  GetMyWords();

  if(!getCookie("cookie agree"))
  {
    document.getElementById("cookie-warning").style.display = "block";
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

function GetMyWords()
{
  var number = 0;
  var isWords = false;

  for(var i = 0; i < words.length; i++)
  {
    if(getCookie("unknown word " + i) && number < 2)
    {
      var li = document.createElement("li");
      var li_text = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);
      li.appendChild(li_text);
      document.getElementById("my-words").appendChild(li);
      number++;
      isWords = true;
    }
  }

  if(!isWords)
  {
    document.getElementById("no-words").innerHTML = "Останнім часом ви не вчили слова";
    document.getElementById("btn-learn").innerHTML = "Вчити";
  }
}