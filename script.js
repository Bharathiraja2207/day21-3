var isro_url="https://isro.vercel.app/api/customer_satellites"

async function isro_data(){
    var url_fetch=await fetch (isro_url)
   // console.log(url_fetch)
    var result=  url_fetch.json()
    var endresult=await result
   // console.log(endresult)
    var data=endresult.customer_satellites

    for(let i of data){
       
       var country=i.country
       var id =i.id
       var launch_date=i.launch_date
       var launcher=i.launcher
      // console.log(country,id,launch_date,launcher)
       var parrent=document.createElement('div')
        parrent.setAttribute('class','card row col-lg-3 col-sm-12')
        parrent.innerHTML=`
            <div class="head">
                <h5>${country}</h5>
                </div>
                <div class="body">
                    <p><b>id:</b>${id}</p>
                    <p><b>lanch_date:</b>${launch_date}</p>
                    <p><b>lanche:</b>${launcher}</p>
                </div>
                <br>
        `
        document.querySelector('body').append(parrent)

    }

}
isro_data()
