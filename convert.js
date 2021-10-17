window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let submit=document.getElementById("submit");
   let displayName=document.getElementById("nameDisplay")
   let yes=document.getElementById("yes");
   let prompt=document.getElementById("prompt")
   let text=document.getElementById("text here")
   var journalPrompt=document.createElement('button');
   var date=document.createElement('input');
   var submitDate=document.createElement('button');

   submit.addEventListener("click", function(){
      let enterName=document.getElementById("enterName").value
      displayName.textContent="Hello, "+ enterName
      prompt.textContent="Are you ready to be mindful?"

      var textArea = document.createElement('textarea'); 
      document.querySelector("form").appendChild(textArea); 
      
      journalPrompt.id="journalPrompt"
      journalPrompt.innerHTML="Click here for a journal prompt"
      document.body.appendChild(journalPrompt);

      date.type='date'
      date.id='date'
      document.querySelector('form').appendChild(date);

      submitDate.id="submitDate"
      document.querySelector('form').appendChild(submitDate);
      submitDate.innerHTML="Submit Journal for Today"

      let image=document.createElement('img');
      image.src='mindfulness.png';
      image.alt="Mindfulness quote";
      document.getElementById('body').appendChild("image");

   });

   journalPrompt.addEventListener("click",function(){
      var array=["What are you most looking forward to?",
                  "What do you remember most from your childhood?",
                  "What scares you?",
                  "Have you had a plan fall spectacularly to pieces?",
                  "What is your take on soul mates?",
                  "Are you a worrier? Is there a particular worry that you can’t shake? How do you cope with worry?",
                  "Dear Past Me . . .",
                  "Dear Future Me . . .?",
                  "Nobody knows that I . . .",
                  "Dear ____, it weighs on me that I never told you . . .",
                  "The biggest lie I’ve ever told is . . .",
                  "Is there anything you feel guilty about?  Is there anything you need to be forgiven for?",
                  "What’s the worst thing you’ve ever done?",
                  "What’s your secret desire?",
                  "What’s the most outrageous thing you’ve ever done?",
                  "My saddest memory is  . . .",
                  "Some of the things that make me happy are . . .",
                  "How do you deal with anger?",
                  "How easy is it for you to forgive those who have caused you pain?",
                  "What is the dominant emotion in your life right now?"]
      var jPrompt=document.createElement('h3');
      prompt.id='jPrompt'
      jPrompt.innerHTML=array[Math.floor(Math.random() * array.length)];
      document.body.appendChild(jPrompt);
   })

   submitDate.addEventListener("click", function(){
      var text = document.getElementById("textArea").value;
      var filename = "output.txt";
      saveTextAsFile(text, filename)
   })

   function saveTextAsFile(textToWrite, fileNameToSaveAs)
   {
      var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      if (window.webkitURL != null)
      {
     
         downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
      }
      else
      {

         downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
         downloadLink.onclick = destroyClickedElement;
         downloadLink.style.display = "none";
         document.body.appendChild(downloadLink);
      }
   
      downloadLink.click();
   } 

   // download test
   function download2(filename, textInput) {

      var element = document.createElement('a');
      element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
      element.setAttribute('download', filename);
      document.body.appendChild(element);
      element.click();
}

// download test
function download() {
   var iframe = document.getElementById('invisible');
   iframe.src = "file.doc";
}



   

      

}
   

