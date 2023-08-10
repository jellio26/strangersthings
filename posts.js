function renderHomes(home){
    let deleteHome = document.createElement("button")
      deleteHome.setAttribute('id', 'delete-btn')
      deleteHome.innerText = "delete listing"
      deleteHome.addEventListener("click", function(event) {
      
      console.log("test222 home id ", homeDiv.id)
      
      if (event.target.id === 'delete-btn') {
      fetch(`http://localhost:3000/homes/${home.id}`, {
      method: "DELETE",
      headers: {
      "content-type": "application/json",
      accept: "application/json"
      }
      }).then(resp => resp.json())
      .then(() => {
      homeDiv.innerHTML = "";
      const home = homeDiv.querySelector(`[data-id='${homeDiv.id}']`);
      home.remove();
      })
      }
      })
    }
 