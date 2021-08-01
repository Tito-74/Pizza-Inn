function PizzaOrder(size,type,crust,topping,quantity){
  this.size = size;
  this.pizzaType = type;
  this.crust =crust;
  this.topping=topping;
  this.quantity = quantity;
  }
PizzaOrder.prototype.getCrust = function (){
    if (this.crust === "thin") {
    return 100
    } else if (this.crust === "thick") {
    return 150
    } else if (this.crust === "flatbread") {
    return 200
    }else if (this.crust === "custom") {
    return 300
    }
}
    
PizzaOrder.prototype.getTopping = function (){
    if (this.topping === "tomato") {
    return 180
    } else if (this.topping === "pineapple") {
    return 200
    } else if (this.topping === "redpepper") {
    return 120
    } else if (this.topping === "irish") {
    return 220
    }
    else if (this.topping === "grapes") {
    return 320
    } else if (this.topping === "chicken") {
    return 170
    }
 }
    PizzaOrder.prototype.getSize = function () {
    if (this.pizzaType == "Veggie") {
    if (this.size == "Small") {
    return 550
    } else if (this.size == "Medium")
    return 800
    else {
    return 1200
    }
    } else if (this.pizzaType == "Cheese") {
    if (this.size == "Small") {
    return 300
    } else if (this.size == "Medium")
    return 800
    else {
    return 2000
    }
    } else if (this.pizzaType == "periperi") {
    if (this.size == "Small") {
    return 500
    } else if (this.size == "Medium")
    return 1000
    else {
    return 1900
    }
    } else if (this.pizzaType == "BBQChicken") {
    if (this.size == "Small") {
    return 600
    } else if (this.size == "Medium")
    return 1500
    else {
    return 1700
    }
    } else if (this.pizzaType == "Margherita") {
    if (this.size == "Small") {
    return 500
    } else if (this.size == "Medium")
    return 950
    else {
    return 1800
    }
    } else if (this.pizzaType == "hawaiian") {
    if (this.size == "Small") {
    return 400
    } else if (this.size == "Medium")
    return 850
    else {
    return 1600
    }
    
  } 
    else {
    return false;
    }
}
//user Interface
function fullOrderBill() {
  var sum = 0;
  $(".billPerOrder").each(function () {
  var value = $(this).text();
  if (!isNaN(value) && value.length != 0) {
  sum += parseFloat(value);
  console.log (sum);
  }
  });
  if (document.getElementById('deliverd').checked) {
  var result = "Your order is Ksh. " + sum + " with a delivery fee of Ksh. 200 ";
  var orderBill = sum + 200;
  var total = "Total: Ksh. " + orderBill + " .00";
  $('#result').text(result);
  $('#totalCost').text(total);
  alert("Your order will be delivered to your Location at a fee")
  // swal({
  // title: "Your order will be delivered to your Location at a fee of 200 shillings",
  // icon: "success",
  // })
  
  } else {
  var total = "Total: Ksh. " + sum + " .00";
  $('#totalCost').text(total)
  }
  }
  fullOrderBill();
//checkout button
function checkout() {
alert('Your order has been placed successfully. Thank You for shopping with Us')
// swal({
// title: "Your order has been placed successfully." + "\r\n" + "Thank You for shopping with Us",
// icon: "success",
// }).then((value) => {
// location.reload();
// });
}
$('.checkbox').change(function () {
if (document.getElementById("deliverd").checked) {
$('.location').show();
} else {
$('.location').hide();
}
});
$(function(){
  $("#submit").click(function (event) {
  event.preventDefault();
  var size = $("input[type='radio']:checked").val();
  var type = $("#type option:selected").val();
  var crust = $("#crust option:selected").val();
  var topping = $("#topping option:selected").val();
  var number = $("#number").val();
  var fullName = $("#fullname").val();
  if (type == '' || size == '' || crust == '' || topping == '' || number == ''|| fullName == '') {
  alert('Please make a complete order first');
  }else if (document.getElementById("deliverd").checked && $('#location').val() == '') {
  alert('Please fill out your location')
  }
  else {
  var inputSize = $("input[type='radio']:checked").val();
  var inputType = $('#type option:selected').val();
  var inputCrust = $('#crust option:selected').val();
  var inputquantity = $('#number').val();
  var inputTopping = $('#topping option:selected').val();
  //create new object
  var newOrder = new PizzaOrder(inputSize, inputType, inputCrust, inputTopping);
  
  //price per order
  var pizzaOrderBill = (newOrder.getSize() + newOrder.getCrust() + newOrder.getTopping()) * inputquantity;
  // console.log(inputSize);
  $('.displayOrder').show();
$(".table tbody:last").append("<tr>" +
"<td>" + $('#type option:selected').text() + "</td>" +
"<td>" + $("input[type='radio']:checked").val() + "</td>" +
"<td>" + $('#crust option:selected').text() + "</td>" +
"<td>" + $('#topping option:selected').text() + "</td>" +
"<td>" + $('#number').val() + "</td>" +
"<td><span class='billPerOrder'>" + pizzaOrderBill + "</span></td>" +
+
"</tr>");
$(fullOrderBill);

}
})
$('#checkout').click(function () {
checkout();
})

});
