fetch('https://jsonplaceholder.typicode.com/users').then(
  res=>res.json()
).then(resp=>{

  resp.map(user=>{
    document.querySelector('#users').innerHTML+= `<li>${user.name}</li>`
  })
  resp.map(user=>{
    document.querySelector('#numb').innerHTML+= `<li>${user.phone}</li>`
  })
})