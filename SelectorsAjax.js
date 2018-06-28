$(function(){
    
    
    
    var $genres = $('#selector');
    var $songs = $('#list');
    
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/HipHop/test',
        data: {song: 'Eskedit' , genre: 'Hip Hop'},
        success: function(data){
            console.log("Added",data);
        },
        
    });
    
    $('#get-list').on('click',function(){
        
        //console.log('Hi there :)');
        
        var $select = $genres.find(":selected").text();
        
        if($select == 'Hip Hop'){
        
                $.ajax({
                    
                    type: 'GET',
                    url: 'http://rest.learncode.academy/api/HipHop/test',
                    success: function(listElement){
                        console.log('Hi There :)');
                        $.each(listElement,function(i,element){
                            $songs.append('<li>song: '+element.song+', genre: '+element.genre+' </li>');
                        });
                    }
                    
                });
        }   
            
        
    });
    
    
});