$(function (){
    
    var $orders = $('#Orders');
    var $name = $('#name');
    var $drink = $('#drink');
    
    var orderTemplate = ""+
        "<li>" +
        "<p><strong>Name:</strong> {{name}}</p>"+
        "<p><strong>Drink:</strong> {{drink}}</p>"+
        "<button data-id='{{id}}' class='remove'>X</button>"+
        "</li>";
    
    function addOrder(order){
        $orders.append(Mustache.render(orderTemplate,order));
    }
    
    $.ajax({
        
        type: 'GET',
        url: 'http://rest.learncode.academy/api/jon/team',
        success: function(orders){
            $.each(orders,function(i,order){
                addOrder(order);
            });
        },
    });
    
    $('#add-order').on('click',function(){
        
        var order = {
            name: $name.val(),
            drink: $drink.val(),
        };
        
        $.ajax({
            type: 'POST',
            url:'http://rest.learncode.academy/api/jon/team',
            data: order,
            success: function(newOrder){
                $orders.append('<li>name: '+newOrder.name+', drink: '+newOrder.drink+' </li>');
                console.log("Added",newOrder);
            }
        });
    });
    
    $orders.delegate('.remove','click',function(){
        
        $.ajax({
            type:'DELETE',
            url: 'http://rest.learncode.academy/api/jon/team/' + $(this).attr('data-id'),
        });
        
    });
    
});