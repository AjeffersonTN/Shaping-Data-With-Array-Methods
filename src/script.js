let putOnDOM = document.querySelector("#output")
//fetch the database.json
fetch(`http://localhost:3000/businesses`)
    .then(response => response.json())
    .then(businesses => {
        businesses.forEach(business => {
          putOnDOM.innerHTML += `
            <h2>${business.companyName}</h2>
            <section>
              ${business.addressFullStreet}
            </section>
            <section>
              ${business.addressCity}, ${business["addressStateCode"]} ${business['addressZipCode']}
            </section>

          `
          putOnDOM.innerHTML += "<hr/>"
        });

    })
    putOnDOM.innerHTML = "<h1>Active Businesses</h1>"
