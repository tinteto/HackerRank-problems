// Helper function that returns a Promise resolving after ms milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that waits for the delay, then returns greeting
async function waitAndGreet(name, delay) {
  await wait(delay);
  return `Hello, ${name}`;
}

// Immediately Invoked Async Function Expression to use await at top-level
// (async () => {
//   const greeting = await waitAndGreet("Intern", 1000);
//   console.log(greeting); // Logs "Hello, Intern" after 1 second
// })();


//.then() method
waitAndGreet("Intern", 1000).then(greeting => {
  console.log(greeting);  // Hello, Intern (after 1 second)
});
