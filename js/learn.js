function GetMyWords()
{
  for(var i = 0; i < words.length; i++)
  {
    var li = document.createElement("li");
    var li_text = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = i;
    checkbox.checked = getCookie("unknown word " + i);
    
    li.appendChild(checkbox);
    li.appendChild(li_text);

    document.getElementById("all-words").appendChild(li);

    if(getCookie("unknown word " + i))
    {
      document.getElementById("my-words-block").style.display = "block";
      var li = document.createElement("li");
      var li_text = document.createTextNode(words[i][0] + " — " + words[i][1] + " — " + words[i][2]);

      li.appendChild(li_text);
      document.getElementById("all-my-words").appendChild(li);
    }
  }

  if(getCookie("cookie agree"))
  {
    document.getElementById("cookie-warning").style.display = "none";
  }
}

document.getElementById("save-words").addEventListener("click", SaveWords);
document.getElementById("cookie-check").addEventListener("click", CookieAgree);

function CookieAgree()
{
  setCookie("cookie agree", true, 999999);
  document.getElementById("cookie-warning").style.display = "none";
}

function SaveWords()
{
  for(var i = 0; i < words.length; i++)
  {
    var checkbox = document.getElementById(i);
    
    if(checkbox.checked)
    {
      setCookie("unknown word " + i, words[i], 7);
      console.log(true);
    }
  }
  window.scrollTo(0, 0);
  location.reload();
}