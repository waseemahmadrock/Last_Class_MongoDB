document.getElementById('form')
.onsubmit = (e) => {
    e.preventDefault(); //prevent page from reloading
    var usr = document.getElementById('usr').value;
    var pwd = document.getElementById('pwd').value;

    var options = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({usr: usr, pwd: pwd})
    }
    fetch('/adduser', options).then(result => {
        result.json().then(json => {
            console.log(json);
        })
    })

}

document.getElementById('fetchBtn')
.onclick = () => {
    fetch('/getusers').then(result => {
        result.json().then(json => {
            console.log(json);
        })
    })
}