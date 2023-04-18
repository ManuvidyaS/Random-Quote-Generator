const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getnewquote = async () =>
{
    
    var url="https://type.fit/api/quotes";    
    const response=await fetch(url);
    const quotes = await response.json();
    const index = Math.floor(Math.random()*quotes.length);
    const quote=quotes[index].text;
    const auth=quotes[index].author;
    if(auth==null)
    {
        author = "Anonymous";
    }
    text.innerHTML=quote;
    author.innerHTML=auth;
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+auth;
}
getnewquote();