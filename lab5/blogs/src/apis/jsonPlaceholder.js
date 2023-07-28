export const jsonplaceholder = () => {
    fetch('https://jsonplaceholder.typicode.com')
    .then(response => response.json())
    .then(json => console.log(json));
}