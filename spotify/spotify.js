const fs = require("fs"); 
 
// Read users.json file 
fs.readFile("spotify20.json", function(err, data) { 
     
    // Check for errors 
    if (err) throw err; 
 
    // Converting to JSON 
    const dat = JSON.parse(data); 
    const arrayData = dat.map(item => item.master_metadata_track_name)
    console.log(arrayData)
});

