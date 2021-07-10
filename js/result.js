document.addEventListener("DOMContentLoaded", function()
{
  if(getCookie("result: number of rigth answers"))
  {
    document.getElementById("answers").innerHTML = getCookie("result: number of rigth answers") + "/" + getCookie("result: number of unknown words");
    eraseCookie("result: number of rigth answers");
    eraseCookie("result: number of unknown words");

    var mistakes = getCookie("result: mistakes").split(",");
    var mistakes_answers = getCookie("result: mistakes answers").split(",");
    var mistakes_list = document.getElementById("mistakes");

    if(mistakes)
    {
      mistakes_list.style.display = "block";
      
      for(var i = 0; i < mistakes.length; i++)
      {
        var li = document.createElement("li");
        var li_text = document.createTextNode(mistakes_answers[i] + " (" + words[mistakes[i]][0] + " - " + words[mistakes[i]][1] + " - " + words[mistakes[i]][2] + ")");
        li.appendChild(li_text);
        
        document.getElementById("mistakes").appendChild(li);
      }

      eraseCookie("result: mistakes");
      eraseCookie("result: mistakes answers");
    }
  }
  else
  {
    document.location = "error.html";
  }
});