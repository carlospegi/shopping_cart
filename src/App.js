

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8defe9cfe6mshb1e59283de457a7p14cd77jsn40ad3fa58812',
      'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com'
    }
  };
  
  fetch('https://taobao-api.p.rapidapi.com/api?api=item_search&page_size=40&q=shoes', options)
    .then(response => return  response.json()

    )
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div className="App">
<h2>hola</h2>
    </div>
  );
}

export default App;
