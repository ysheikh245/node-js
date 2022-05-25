const fetchData = callback => {
    console.log('Just got started')
    setTimeout(() => {
        callback('Done!')
    }, 1500);
    console.log('Just completed')
};

setTimeout(() => {
    console.log('Timer is done!!!')
    fetchData(text => console.log(text))
}, 2000);

console.log('Hi');
console.log('Hello');