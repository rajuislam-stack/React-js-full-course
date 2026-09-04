const div = document.getElementById('div');
const form = document.getElementById('form');
const button = document.getElementById('button');


div.addEventListener('click', handleClick )
form.addEventListener('click', handleClick, true)
button.addEventListener('click', handleClick)


function handleClick(e){
  console.log(e.currentTarget);
}



// Note: Event Propagation

// Propagation মানে হলো বিস্তার বা প্রসার।
// অর্থাৎ, event এর DOM এর ভিতরে এক element থেকে অন্য element এ ছড়িয়ে যাওয়াকেই Event Propagation বলে।

// এই concept ভালোভাবে বুঝতে হলে ২টা মূল বিষয় জানা দরকার:
// 1. Bubbling
// 2. Capturing

// (Event Delegation আলাদা একটি technique, এটা propagation ব্যবহার করে)


// 1. Bubbling (⬆️ Default)

// child element থেকে parent এর দিকে event উপরের দিকে যায়,
// এটাকেই Event Bubbling বলে।
// এটি default behavior।


// 2. Capturing (⬇️)

// Capturing হলো Bubbling এর উল্টো।
// অর্থাৎ, event প্রথমে parent থেকে শুরু হয়ে child এর দিকে নিচে নামে।

// Note: e.target vs e.currentTarget difference

// 1. e.target
// যে element এ আসলে event ঘটেছে, সেটাকেই দেখায়।

// 2. e.currentTarget
// যে element এ event listener বসানো হয়েছে, সেটাকেই দেখায়।
