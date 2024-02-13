const fs = require("fs"); 
 
// Read users.json file 
fs.readFile("spotify20.json", function(err, data) { 
     
    // Check for errors 
    if (err) throw err; 
 
    // Converting to JSON 
    const dat = JSON.parse(data); 
    const songname = dat.map(item => item.master_metadata_track_name)
    const tim = dat.map(item=>item.ts)

    const config = [{ tim :songname},]

    fs.writeFile("names.json", JSON.stringify(config, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      });

    console.log(songname)
});

// fs.writeFile("names.json", JSON.stringify(config, null, 2), (error) => {
//     if (error) {
//       console.log('An error has occurred ', error);
//       return;
//     }
//     console.log('Data written successfully to disk');
//   });