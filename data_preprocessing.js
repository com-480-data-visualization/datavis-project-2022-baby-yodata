function preprocessingCharacters(path) {
    d3.csv(path).then(function(data){
        console.log(data[0]);
    });
}

// function numberOfData(path) {
//     var csvFile = d3.csv(path)
//     var lines = csvFile.split('\n');
//     for (var i= lines.length; i-->0;)
//         if (lines[i].match(/"/g).length%2===1)
//             lines.splice(i-1, 2, lines[i-1]+lines[i]);
//     var rowsn = lines.length;
//     console.log(rowsn);
// }

function numberOfData(path){
    d3.csv(path).then (function(data){
        console.log(data.length)
    });
}


function mean(path){
    d3.csv(path).then(function(data){
        var dataNotNull = data.filter(e => {
            return e.height !== "NA";
        });
        console.log(dataNotNull)
        // var res = dataNotNull.reduce((a, b) => (a.height + b.height))
        var res = 0;
        for (var i = 0; i < dataNotNull.length; i++) {
            res = res + parseInt(dataNotNull[i].height);
        }
        res = res / dataNotNull.length
        console.log(res); 
    });
}

function numberOfNotNull(path){
    d3.csv(path).then(function(data){
        var dataNotNull = data.filter(e => {
            return (e.name !== "NA" && e.height !== "NA" && e.mass !== "NA" && e.hair_color !== "NA" &&  e.skin_color !== "NA" && e.birth_year !== "NA" && e.eye_color !== "NA" && e.gender !== "NA" &&  e.homeworld !== "NA" && e.species !== "NA");
        });
        console.log(dataNotNull.length)
    });
}

preprocessingCharacters("./archive/characters.csv");
numberOfData("./archive/characters.csv");
mean("./archive/characters.csv");
numberOfNotNull("./archive/characters.csv");