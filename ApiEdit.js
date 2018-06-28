$(function(){
    
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/hanauq/newAge',
        data: {
            song: "Six Seven",
            idName: 'FirstSong',
            audioId: 'OneSong',
            length: "4:44",
            bpm: 156,
            location: 'GregSixSeven.mp3',  
        },
        success: function(data){
                console.log("added",data);
            }
        
    });
    
    $.ajax({
        
        type: 'POST',
        url: 'http://rest.learncode.academy/api/hanauq/newAge',
        data: {
            song: 'Still Love',
            idName: 'SecondSong',
            audioId: 'TwoSong',
            length: '7:03',
            bpm: 142,
            location: 'GregStillLove.mp3',
        },
        success: function(data){
            console.log("added",data);
        }
        
    });
    
});