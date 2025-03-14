function lägg_till_kundvagn()
{
    console.log("An Item Has Been Added To The Cart");
}

let totalaSum = 0;  //definierar den totala summan för produkterna

const produktList = [];

const check = console.log(produktList.length === new Set(produktList).size)

function lägg_till_kundvagn(pris, produktNamn)  //lägger till produkterna i kundvagnen (parameter)
{    
    if(produktNamn == "CPU","GPU","HDD","SSD","Moderkort","PSU")
        {
            produktList.push(produktNamn);
            console.log(produktNamn + " har lagts till i varukorgen");
        }

    if(produktList.includes("CPU","GPU","HDD","SSD","Moderkort","PSU") || check)
        {
            totalaSum += pris;
            document.getElementById("summa").innerText = "Total: " + totalaSum + ":-"; //uppdaterar summa-classen

            let sakerList = document.querySelector(".saker"); 
        
            let produktSak = document.createElement("p"); //lägger till en ny rad av elementet p för at se till att kundvagnen har saken man laggt till
            produktSak.innerText = "2x" + produktNamn + " - " + pris + ":-";  
        
            sakerList.appendChild(produktSak);
        }
    else
        {
    
    totalaSum += pris;  
    document.getElementById("summa").innerText = "Total: " + totalaSum + ":-"; //uppdaterar summa-classen

    let sakerList = document.querySelector(".saker"); 

    let produktSak = document.createElement("p"); //lägger till en ny rad av elementet p för at se till att kundvagnen har saken man laggt till
    produktSak.innerText = produktNamn + " - " + pris + ":-";  

    sakerList.appendChild(produktSak); //appendar produkten till kundvagnen


    }
}






