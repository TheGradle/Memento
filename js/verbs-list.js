function GetWords()
{
  for(var i = 0; i < words.length; i++)
  {
    var node = document.createElement("li");
    var textnode = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);
    node.appendChild(textnode);
    
    if(words[i][0] == words[i][1] && words[i][1] == words[i][2])
    {
      document.getElementById("simple-words").appendChild(node);
    }
    else if(words[i][1] == words[i][2])
    {
      document.getElementById("middle-words").appendChild(node);
    }
    else 
    {
      document.getElementById("hard-words").appendChild(node);
    }
  }
}