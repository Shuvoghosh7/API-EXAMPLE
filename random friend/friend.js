const loadFriend = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data =>displayFriend(data) )
}
loadFriend()
const displayFriend = data =>{
    const friends = data.results
    const friendContainer = document.getElementById("frn")
    for(const friend of friends){
        const p =document.createElement('p')
        p.innerText=`Name: ${friend.name.title} ${friend.name.first} ${friend.name.last}, Email: ${friend.email} `
        friendContainer.appendChild(p)
        console.log(friend.name.first,friend.name.last)
    }
    
}