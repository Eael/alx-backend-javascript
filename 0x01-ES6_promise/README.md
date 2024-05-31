# About ES6 PROMISES 
This is simply the ability to catch errors.

Syntax `const promise2 = promise.then(successCallback, failureCallback)`

Eg: `doSomething()
        .then((url) => fetch(url))
        .then((res) => res.json())
        .then((data) => {
            listOfIngredients.push(data);
        })
        .then(() => {
            console.log(listOfIngredients);
        });
`
Eg 2: `function Something(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
  `
returns `{
  firstName: value,
  lastName: value,
}`

# Async Function
Allows you run and wait 

Syntax `async function logIngredients() {
            const url = await doSomething();
            const res = await fetch(url);
            const data = await res.json();
            listOfIngredients.push(data);
            console.log(listOfIngredients);
        }`
