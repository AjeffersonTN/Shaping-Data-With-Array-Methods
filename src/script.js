let putOnDOM = document.querySelector("#output")
let putOnDOM2 = document.querySelector("#output2")
let putOnDOM3 = document.querySelector("#output3")
let putOnDOM4 = document.querySelector("#output4")
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

        manufacturingBusinesses.forEach(business => {
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
//map purchasing agent, company , phone number
//fetch the database.json
fetch(`http://localhost:3000/businesses`)
    .then(response => response.json())
    .then(businesses => {
        let agents = businesses.map(business => {
            return `
            "fullName": ${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast},<br>
            "company": ${business.companyName},<br>
            "phoneNumber": ${business.phoneWork}
            `
            })
            // console.log(agents)
        putOnDOM3.innerHTML = "<h1>Purchasing Agents</h1>"

           agents.forEach(agent => {
            putOnDOM3.innerHTML += agent

            putOnDOM3.innerHTML += "<hr/>"
           })
        })

//.find section for purchasing agents
fetch(`http://localhost:3000/businesses`)
    .then(response => response.json())
    .then(businesses => {
        document.querySelector("#agentSearch").addEventListener("keypress", keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
            let foundAgent = businesses.find(business => {
            let userSearch = keyPressEvent.target.value.toUpperCase()
            if (business.purchasingAgent.nameFirst.toUpperCase().includes(userSearch) || business.purchasingAgent.nameLast.toUpperCase().includes(userSearch))

            return userSearch

        })
console.log(foundAgent)
            putOnDOM4.innerHTML += `
                <h2>
                Found Purchasing Agent for: ${foundAgent.companyName}
                </h2>
                <section>
               Name: ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
               Phone Number: ${foundAgent.phoneWork}
                `
        }
    })
    });