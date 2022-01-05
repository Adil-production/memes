const API = 'https://meme-api.herokuapp.com/gimme'
var main = document.getElementById("main")

async function get() {
    const res = await fetch(API)
    const data = await res.json()
    console.log(data)
    var subreddit = document.getElementById("subreddit")
    var title = document.getElementById("title")
    var author = document.getElementById("author")
    var img = document.getElementById("img")
    img.src = data.url
    title.innerHTML = data.title
    author.innerHTML = data.author
    subreddit.innerHTML = data.subreddit
    
  }
  get()
  document.getElementById("star").addEventListener("click" , function(){
    var content = document.getElementById("content")
    var best = document.getElementById("best")
    var data = localStorage.getItem("data")
    if(data){
      //exist
      if(data.includes(content.innerHTML)){
        alert("This meme is already in your collection")
      } else{
        if (confirm('Are you sure you want to save this thing into the database?')) {
          // Save it!
          
          localStorage.setItem("data", data + content.innerHTML)
          best.innerHTML = data
        } else {
          // Do nothing!
          alert('Thing was not saved to the database.');
        }
        
      }
    } else{
      if (confirm('Are you sure you want to save this thing into the database?')) {
        // Save it!
      
        localStorage.setItem("data", content.innerHTML)
        best.innerHTML = data
      } else {
        // Do nothing!
        alert('Thing was not saved to the database.');
      }
    }
  })

  window.addEventListener("load",function(){
    var best = document.getElementById("best")
    var data = localStorage.getItem("data")
    best.innerHTML = data
  })
  document.getElementById("delete").addEventListener("click",function(){
    localStorage.removeItem("data")
    document.getElementById("best").innerHTML = ""
    alert("Information deleted")
  })

