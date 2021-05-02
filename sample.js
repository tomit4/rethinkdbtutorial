const r = require('rethinkdb');

r.connect({ host: 'localhost', port: 28015 }, function(err, conn) { //28015 is default port connection for client side port, server default is 8080

    if(err) throw err;

    //console.log(conn);
/*
    r.db('test').tableCreate('countries').run(conn, function(err, res) {

        if(err) throw err;
        console.log(res);

        r.table('countries')
        .insert({ name: 'China', capital: 'Beijing'})
        .run(conn, function(err, res) {
            if(err) throw err;
            console.log(res);
        })
    })
*/
/*
    r.db('test').tableCreate('planets').run(conn, function(err, res) {

        if(err) throw err;
        console.log(res);
    });
});
*/
    r.table('planets')
    .insert([{name: 'Mars', moons: 2}])
    .run(conn, function(err, result){
        if(err) throw err;
        console.log(result);
    })
});

/*
    r.db('test').table('countries').run(conn, function(err, cursor){ //cursor is a temporary record which will be passed to the server which will then read it, the cursor will have all the details required.
        if(err) throw err;
        //console.log(cursor);
        
        cursor.toArray(function(err, result){ //this will convert our table into an array of objects that are then logged to the console.
            if(err) throw err;
            
            function replacer(key, value){
                if(key == "capital"){
                    return undefined;
                }
                else {
                    return value;
                }
            }

            // console.log(JSON.stringify(result, ["capital", "id"], 5));
            console.log(JSON.stringify(result, replacer, 5)); //in this case replacer returns "id" and "name" key/value pairs, but not the capital, as the function returns undefined when passed the key name "capital"
            //note that the second optional parameter can be passed "null" if you wish to display all of the data within the JSON, or you can specify within ["keyname"] and also ["keyname", "otherkeyname"] to display only the specified keynames.
            //we can also pass a function called replacer with a (key, value) passed as its parameters, which will return whatever results will equate to the names of the keys or return undefined.
            //also note that the third optional parameter, through which we have passed a number simply indicates the amount of indentation/whitespace we wish to display in our JSON.
        });
        
    });
});

    

    // r.db('test').tableCreate('tv_shows').run(conn, function(err, res) {

    //     if(err) throw err;
    //     console.log(res);

    //     r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(conn, function(err, res)
        
    //     {
    //         if(err) throw err;
    //         console.log(res);
    //     });
    
    // });
*/