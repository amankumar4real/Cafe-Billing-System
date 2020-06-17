var show=document.getElementById("pushed")

                

                function crea(itm,qty,pricing){
                        
                        arr_pri.push(pricing)

                        var trs=document.createElement("tr")

                        var tds_itm=document.createElement("td")
                        var tds_qty=document.createElement("td")
                        var tds_pri=document.createElement("td")

                        tds_itm.innerHTML=itm
                        tds_qty.innerHTML= "X"+ qty
                        tds_pri.innerHTML= "+ Rs. "+ pricing +" /-"

                        trs.appendChild(tds_itm)
                        trs.appendChild(tds_qty)
                        trs.appendChild(tds_pri)

                        show.appendChild(trs)
                    }

                var arr_pri=[]
                function adds(){

                    var itm=document.querySelector("select").value
                    var qty=document.getElementById("quan").value

                    console.log(itm,qty)

                    if(itm=="Coffee Large" && qty>0){
                        var pricing=Number(qty)*150
                        crea(itm,qty,pricing)
                        
                    }

                    else if(itm=="Coffee Small" && qty>0){
                        var pricing=Number(qty)*80
                        // console.log(itm,qty,pricing)
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Hot Chocolate Large" && qty>0){

                        var pricing=Number(qty)*180
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Hot Chocolate Small" && qty>0){

                        var pricing=Number(qty)*120
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Mocca Large" && qty>0){

                        var pricing=Number(qty)*110
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Mocca Small" && qty>0){

                        var pricing=Number(qty)*60
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Flavour Water" && qty>0){

                        var pricing=Number(qty)*50
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Takeaway Coffee" && qty>0){

                        var pricing=Number(qty)*40
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Raisin Toast" && qty>0){

                        var pricing=Number(qty)*150
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Chips" && qty>0){

                        var pricing=Number(qty)*80
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="French Fry" && qty>0){

                        var pricing=Number(qty)*120
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Gems" && qty>0){

                        var pricing=Number(qty)*100
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Ham Sandsich" && qty>0){

                        var pricing=Number(qty)*160
                        crea(itm,qty,pricing)
                        
                        }

                    else if(itm=="Chicken Gougons" && qty>0){

                        var pricing=Number(qty)*180
                        crea(itm,qty,pricing)
                        
                        }
                    else{
                        alert("You have not choosen a product or have the quantity set to 0!")
                    }
                    
                }

                var f_btn=document.getElementById("calc")

                f_btn.addEventListener("click", fn_to)


                function fn_to(){
                    var sum=0

                    for(var i=0; i<arr_pri.length; i++){
                        sum+=Number(arr_pri[i])
                    }


                    // for discount
                    var di=document.getElementById("disc").value

                    var dis_p=Math.floor((Number(di)/100)*sum)

                    var trs_d=document.createElement("tr")

                    var tds_d=document.createElement("td")
                    var tds_qty_d=document.createElement("td")
                    var tds_pri_d=document.createElement("td")

                    tds_d.innerHTML="Discount"
                    tds_qty_d.innerHTML= "---"
                    tds_pri_d.innerHTML= "- Rs. "+dis_p+" /-"

                    trs_d.appendChild(tds_d)
                    trs_d.appendChild(tds_qty_d)
                    trs_d.appendChild(tds_pri_d)

                    show.appendChild(trs_d)


                    //for tip
                    var tp=document.getElementById("ti").value

                    var tps=Number(tp)

                    var trs_td=document.createElement("tr")

                    var tds_td=document.createElement("td")
                    var tds_qty_td=document.createElement("td")
                    var tds_pri_td=document.createElement("td")

                    tds_td.innerHTML="Tip"
                    tds_qty_td.innerHTML= "---"
                    tds_pri_td.innerHTML= "+ Rs. "+tps+" /-"

                    trs_td.appendChild(tds_td)
                    trs_td.appendChild(tds_qty_td)
                    trs_td.appendChild(tds_pri_td)

                    show.appendChild(trs_td)

                    //line
                    var trs_ttdp=document.createElement("tr")

                    var tds_ttdp=document.createElement("td")
                    var tds_qty_ttdp=document.createElement("td")
                    var tds_pri_ttdp=document.createElement("td")

                    tds_ttdp.innerHTML=""
                    tds_qty_ttdp.innerHTML= ""
                    tds_pri_ttdp.innerHTML= "----------------"

                    trs_ttdp.appendChild(tds_ttdp)
                    trs_ttdp.appendChild(tds_qty_ttdp)
                    trs_ttdp.appendChild(tds_pri_ttdp)

                    show.appendChild(trs_ttdp) 


                    //total
                    var trs_ttd=document.createElement("tr")

                    var too= Number(sum+tps)-(dis_p)

                    var tds_ttd=document.createElement("td")
                    var tds_qty_ttd=document.createElement("td")
                    var tds_pri_ttd=document.createElement("td")

                    tds_ttd.innerHTML="Total"
                    tds_qty_ttd.innerHTML= ""
                    tds_pri_ttd.innerHTML= "+ Rs. "+too+" /-"

                    trs_ttd.appendChild(tds_ttd)
                    trs_ttd.appendChild(tds_qty_ttd)
                    trs_ttd.appendChild(tds_pri_ttd)

                    show.appendChild(trs_ttd)                    

                }
