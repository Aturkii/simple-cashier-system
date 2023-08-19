var order=[];
  
  function add()
  {
   //Gets 
      item=document.getElementById("item").value;
      p=document.getElementById("p").value;
      q=document.getElementById("q").value;
      //Sets 
      order.push(item);
      order.push(p);
      order.push(q);
      show();
  }
  function show()
  {
    var data="<table border='1' width='100%'><tr><th>#</th>";
        data+="<th>Item</th><th>Item Price</th><th>Quantity</th>";
        data+="<th>Total Price</th></tr>";
        total=0;
        var grandtotal=0;
        var ser=1;
        for(i=0;i<order.length;i+=3)
        {
            item=order[i];
            price=order[i+1];
            q=order[i+2];
            total=q*price;
            data+="<tr><td>"+ser+"</td><td>"+item+"</td>";
            data+="<td>"+price+"</td>";
            data+="<td>"+q+"</td>" ;  
            data+="<td>"+total+'</td><tr>';
                ser++;
                grandtotal+=total;
        }
        data+="<tr style='background:skyblue;'><td>Total Price</td><td>";
            data+= grandtotal+"</td></tr></table>";

        document.getElementById("txt").innerHTML=data;
  }