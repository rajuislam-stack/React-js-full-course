//Extra class // Event Delegation 

let countries = document.getElementById('countries');
let inputText = document.getElementById('add-country')

countries.addEventListener('click', (e)=>{
    if(e.target.matches('li')) { e.target.style.backgroundColor = 'yellow';
    }  
})



function addNewCountry(){
   let inputTextValue = inputText.value;
   let li = document.createElement('li');
   li.textContent =  inputTextValue;
   countries.appendChild(li);
   inputText.value = '';
   inputText.focus();
} 


// Note: Event Delegation (অর্পণ করা)

// Child এর event listener কে parent এ বসিয়ে, child এর event handle করাকেই Event Delegation বলে।
// অর্থাৎ, child এর event handle করার দায়িত্ব parent এর কাছে অর্পণ করা হয়।

// এতে করে প্রতিটা child এ আলাদা করে event listener বসাতে হয় না,
// বরং parent একাই সব child এর event handle করতে পারে (event bubbling ব্যবহার করে)।

//Note: Delegation = a technique (propagation use করে)