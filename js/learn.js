var unknown_words = [];
var user_answers = [];
var span_number = document.getElementById("quiz-number");
var span_word = document.getElementById("quiz-word");
var user_answer = document.getElementById("user-answer");
var current_word = 1;

function LearnMyWords()
{
  for(var i = 0; i < words.length; i++)
  {
    if(getCookie("unknown word " + i))
    {
      unknown_words.push(i);
    }
  }

  span_number.innerHTML = current_word + "/" + unknown_words.length;
  span_word.innerHTML = words[current_word][0];

  if(!getCookie("cookie agree"))
  {
    document.getElementById("cookie-warning").style.display = "block";
  }
}

document.getElementById("give-answer").addEventListener("click", GiveAnswer);
document.getElementById("cookie-check").addEventListener("click", CookieAgree);
document.getElementById("user-answer").addEventListener("keyup", function(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    document.getElementById("give-answer").click();
  }
});

function CookieAgree()
{
  setCookie("cookie agree", true, 999999);
  document.getElementById("cookie-warning").style.display = "none";
}

function GiveAnswer()
{
  if(current_word <= unknown_words.length)
  {
    span_number.innerHTML = ++current_word + "/" + unknown_words.length;
    span_word.innerHTML = words[current_word][0];
    user_answers.push(user_answer.value);
    user_answer.value = "";
  }

  if(user_answers.length == unknown_words.length)
  {
    for(var i = 0; i < user_answers.length; i++)
    {
      console.log(user_answers[i] == (words[unknown_words[i]][0] + " - " + words[unknown_words[i]][1] + " - " + words[unknown_words[i]][2]));
    }
  }
}