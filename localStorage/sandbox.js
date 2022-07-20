const todos =  [
    {text: 'play', author: 'jef'},
    {text: 'play more', author: 'jeffrey'},
    {text: 'stop playiong', author: 'carlos'}
    
]

// console.log(JSON.stringify(todos))

localStorage.setItem('todos',JSON.stringify(todos) )

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored))