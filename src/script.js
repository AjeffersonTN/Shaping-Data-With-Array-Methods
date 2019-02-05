let putOnDOM = document.querySelector("#output")
let putOnDOM2 = document.querySelector("#output2")
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
    //filter manufacturing businesses
    //fetch the database.json
fetch(`http://localhost:3000/businesses`)
    .then(response => response.json())
    .then(businesses => {
    let manufacturingBusinesses = businesses.filter(business => {
        let manBusiness = false
        if (business.companyIndustry === "Manufacturing") {
        manBusiness = true
        }
        return manBusiness
    })
    putOnDOM2.innerHTML = "<h1>Manufacturing Businesses</h1>"
    console.log(manufacturingBusinesses[0].companyName)
        manufacturingBusinesses.forEach(business => {console.log(business)
        putOnDOM2.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>
        ${business.addressCity}, ${business["addressStateCode"]} ${business['addressZipCode']}
        </section>
         `
        putOnDOM2.innerHTML += "<hr/>"
        });

})