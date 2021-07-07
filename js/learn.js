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
  span_word.innerHTML = words[unknown_words[0]][0];
}

document.getElementById("give-answer").addEventListener("click", GiveAnswer);
document.getElementById("user-answer").addEventListener("keyup", function(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    document.getElementById("give-answer").click();
  }
});

function GiveAnswer()
{
  if(user_answers.length < unknown_words.length)
  {
    span_number.innerHTML = current_word + "/" + unknown_words.length;
    span_word.innerHTML = words[current_word][0];
    user_answers.push(user_answer.value);
    user_answer.value = "";

    current_word += (current_word < unknown_words.length);
  }

  var count_of_right = 0;
  var incorect = [];

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
        incorect.push(i);
      }
    }

    if(incorect.length)
    {
      var answer = "Результат: " + count_of_right + "/" + unknown_words.length + "\n\nПомилки:\n";
      
      for(var i = 0; i < incorect.length; i++)
      {
        answer += user_answers[incorect[i]] + " (" + words[incorect[i]][0] + " - " + words[incorect[i]][1] + " - " + words[incorect[i]][2] + ")\n"; 
      }

      alert(answer);
    }
    else{
      alert("Результат: " + count_of_right + "/" + unknown_words.length);
    }
    
    document.location.href = "learn-list.html";
  }
}