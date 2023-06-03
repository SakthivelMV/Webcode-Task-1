// https://makeup-api.herokuapp.com/api/v1/products.json

// async and await with fetch


let p1 = fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
async function makeup() {
    let response = await p1
    console.log(response)
    let data = await response.json()
    console.log(data)
    try {
        let output = "";
        data.map((values) => {
            output += ` <tr>
        <td>${values.brand}</td>
        <td>${values.name}</td>
        <td>${values.price}</td>
        <td><img src="${values.image_link}"</td>
        <td>${values.product_link}</td>
        <td>${values.description
                }</td>
      </tr>`;

        })

        document.getElementById("tablebody").innerHTML = output;
    } catch (error) {
        alert(ex)
    }

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
    console.log("Success")
}
makeup()


document.getElementById("search").addEventListener("keyup", function () {
    var search = this.values.toLowerCase();
    newoutput = output.filter(function (values) {
        if (values.brand.includes(search) || values.name.includes(search) || values.price.includes(search) || values.image_link.includes(search) || values.product_link.includes(search)
        ||values.description.includes(search)){
        var newobj = {brand:values.brand,name:values.name,price:values.price,image_link:values.image_link,product_link:values.product_link,description:values.description}
        return newobj;
        }
        })
showtable(newoutput)
})



