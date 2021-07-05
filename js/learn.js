function GetMyWords()
{
  for(var i = 0; i < words.length; i++)
  {
    var li = document.createElement("li");
    var li_text = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = i;
    
    li.appendChild(checkbox);
    li.appendChild(li_text);

    document.getElementById("all-my-words").appendChild(li);
  }
}

document.getElementById("save-words").addEventListener("click", SaveWords);

function SaveWords()
{
  for(var i = 0; i < words.length; i++)
  {
    var checkbox = document.getElementById(i);
    
    if(checkbox.checked)
    {
      setCookie("unknown word " + i, words[i], 7);
    }
  }
}