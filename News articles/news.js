const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

console.log(newsList)

searchFrom.addEventListener('submit', retrieve)

function retrieve(e) {

    e.preventDefault()

    const apiKey = 'caf2892bfc1d4470a8e9c723bbc8258b'
    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blanck')
            a.textContent = article.title;
            newsList.appendChild(a);
            newsList.appendChild(li);
        })
    })

    console.log(topic)

}
