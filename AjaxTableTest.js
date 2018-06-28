$(function(){
    
    
    var $test = $('#test-table');
    
    var orderTemplate = "" +
        "<tr>" +
        "<td> {{song}} </td> " +
        "<td> {{length}} </td>" +
        "<td> {{bpm}} </td>" +
        "<td><button> Press</button> </td>" +
        "</tr>";
    
    function addSong(song){
        $test.append(Mustache.render(orderTemplate,song));
    }
     
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/quanah/team',
        data: {
            song: 'Lez Get it',
            length: '4:26',
            bpm: 182,
        },
        success: function(data){
            console.log("Song Added", data);
        },
        
    });
    
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/quanah/team',
        data: {
            song: 'Hey there girl',
            length: '3:24',
            bpm: 156,
        },
        success: function(data){
            console.log("Song Added", data);
        },
        
    });
    
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/quanah/team',
        data: {
            song: 'Money machine',
            length: '2:16',
            bpm: 138,
        },
        success: function(data){
            console.log("Song Added", data);
        },
        
    });
    
    $.ajax({
        
        type: 'GET',
        url: 'http://rest.learncode.academy/api/quanah/team',
        success: function(songs){
            $.each(songs,function(i,music){
                addSong(music);
            });
        }
        
    });
    
});