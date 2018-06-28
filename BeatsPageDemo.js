$(function(){
    /*
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/bobbus/friend',
        data: {
            song: "That love",
            length: "4:55",
            bpm: 110,
            location: 'C:/Users/Quanah/Desktop/Fake Gucci Site/GregStillLove',
    },
        success: function(data){
                console.log("added",data);
            }
    
});
*/
    var $test = $('#button-test');
    
    var orderTemplate = "" +
        "<tr>" +
        "<td> {{song}} </td> " +
        "<td> {{length}} </td>" +
        "<td> {{bpm}} </td>" +
        "<td>" +
        "<audio id='{{audioId}}' preload='none'>" +
        "<source src='{{location}}' type='audio/mpeg'>" +
        "</audio>" +
        "<button id='{{idName}}'>play</button>"
        "</td>" +
        "</tr>";
    
    function addSong(song){
        $test.append(Mustache.render(orderTemplate,song));
    }
    
    $.ajax({
        
        type: 'GET',
        url: 'http://rest.learncode.academy/api/hanauq/newAge',
        success: function(listElement){
            $.each(listElement,function(i,music){
                addSong(music);
                var yourAudio = document.getElementById(music.audioId);
                var ctrl = document.getElementById(music.idName);
                
                ctrl.onclick = function(){
                    
                    var pause = ctrl.innerHTML === 'pause';
                    ctrl.innerHTML = pause ? 'play' : 'pause';
                    
                    var method = pause ? 'pause' : 'play';
                    yourAudio[method]();
                    
                    return false;
                    
                };
            });
        }
        
    });
    
});