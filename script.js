function lägg_till_kundvagn()
{
    console.log("An Item Has Been Added To The Cart");
}


let totalaSum = 0;  //definierar den totala summan för produkterna
const produktList = [];

function ladda_kundvagn()
{
    const sparadProduktList = localStorage.getItem("kundvagn");

    if (sparadProduktList)
        {
            const jsonKundvagn = JSON.parse(sparadProduktList);
            totalaSum = jsonKundvagn.totalaSum;

            document.getElementById("summa").innerText = "Total: " + totalaSum + ":-"; 
            jsonKundvagn.produktList.forEach(produkt => {
                lägg_till_produkt_i_element(produkt.namn, produkt.pris);
                produktList.push(produkt);
            });
        }

}



function spara_kundvagn()
{
    localStorage.setItem("kundvagn", JSON.stringify({totalaSum, produktList}));
}

function lägg_till_produkt_i_element(produktNamn, pris)
{
    let sakerList = document.querySelector(".saker");
    let produktSak = document.createElement("p");
    
    produktSak.innerText = produktNamn + " - " + pris + " :- ";
    sakerList.appendChild(produktSak);
    
}


document.addEventListener("DOMContentLoaded", ladda_kundvagn);



function lägg_till_kundvagn(pris, produktNamn)  //lägger till produkterna i kundvagnen (parameter)
{    

    totalaSum += pris;  
    document.getElementById("summa").innerText = "Total: " + totalaSum + ":-"; //uppdaterar summa-classen

    produktList.push({namn: produktNamn, pris});

    lägg_till_produkt_i_element(produktNamn, pris);

    spara_kundvagn();
}
