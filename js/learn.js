var span_number = document.getElementById("quiz-number");
var span_word = document.getElementById("quiz-word");
var input_answer = document.getElementById("user-answer");
var unknown_words = [];
var user_answers = [];
var current_word = 1;
var current_index = 0;

document.addEventListener("DOMContentLoaded", function()
{
  var error = true;
  
  for(var i = 0; i < words.length; i++)
  {
    if(getCookie("unknown word " + i))
    {
      unknown_words.push(i);
      error = false;
    }
  }

  if(error)
  {
    document.location = "error.html";
  }

  span_number.innerHTML = current_word + "/" + unknown_words.length;
  span_word.innerHTML = words[unknown_words[current_index]][0];
});

document.getElementById("give-answer").addEventListener("click", function()
{
  if(user_answers.length < unknown_words.length)
  {
    current_index += (current_index < unknown_words.length - 1);
    span_word.innerHTML = words[unknown_words[current_index]][0];
    user_answers.push(input_answer.value);
    input_answer.value = "";

    current_word += (current_word < unknown_words.length);
    
    span_number.innerHTML = current_word + "/" + unknown_words.length;
  }

  var count_of_right = 0;
  var incorect = [];
  var incorect_answers = [];

  if(user_answers.length == unknown_words.length)
  {
    for(var i = 0; i < user_answers.length; i++)
    {
      if(user_answers[i] == (words[unknown_words[i]][0] + " - " + words[unknown_words[i]][1] + " - " + words[unknown_words[i]][2]))
      {
        count_of_right++;
      }
      else
      {
        incorect.push(unknown_words[i]);
        incorect_answers.push(user_answers[i]);
      }
    }

    setCookie("result: number of rigth answers", count_of_right, 1);
    setCookie("result: number of unknown words", unknown_words.length, 1);

    if(incorect.length)
    {
      setCookie("result: mistakes", incorect, 1);
      setCookie("result: mistakes answers", incorect_answers, 1);
    }
    
    document.location.href = "result.html";
  }
});

document.getElementById("user-answer").addEventListener("keyup", function(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    document.getElementById("give-answer").click();
  }
});