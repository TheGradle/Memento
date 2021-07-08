document.addEventListener("DOMContentLoaded", function()
{
  for(var i = 0; i < words.length; i++)
  {
    var li = document.createElement("li");
    var li_text = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);
    li.appendChild(li_text);
    
    if(words[i][0] == words[i][1] && words[i][1] == words[i][2])
    {
      document.getElementById("simple-words").appendChild(li);
    }
    else if(words[i][1] == words[i][2])
    {
      document.getElementById("middle-words").appendChild(li);
    }
    else 
    {
      document.getElementById("hard-words").appendChild(li);
    }
  }
});