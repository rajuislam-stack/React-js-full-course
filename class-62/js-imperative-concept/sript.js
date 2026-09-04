//Note: JavaScript works in imperative approch.

async function handleSubmit(e){
 e.preventDefault();
 disable(submitBtn)
 disable(textArea)
 show(loading)
  hide(error)
try {
 await findResult(textArea.value);
 hide(form)
 show(success)
}
catch(err){
 error.textContent = err.message;
 show(error);
}
finally{
  hide(loading)
  enable(submitBtn)
  enable(textArea)
}

}

function handleTextArea(){
  if(textArea.value.trim() === ''){
    disable(submitBtn)
  }
  else{
    enable(submitBtn)
  }
}



function enable(value){
 value.disabled = false;
}

function disable(value){
 value.disabled = true;
}

function show(value){
 value.style.display = ''
}

function hide(value){
value.style.display = 'none' ;
}



function findResult(ans){
return new Promise((resolve, reject)=>{
   setTimeout(()=>{
      let isRightAns = ans.toLowerCase().trim() === 'istanbul';
      if(isRightAns){
        resolve()
      }
      else{
        reject(new Error('Good guess but a wrong answer. Try again!'))
      }
   }, 1500)
})
}


const form = document.getElementById('form');
const textArea = document.getElementById('textarea');
const submitBtn = document.getElementById('submit');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const success = document.getElementById('success');
form.onsubmit = handleSubmit;
textArea.oninput = handleTextArea;