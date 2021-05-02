const r = require('rethinkdb');

r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
    
    if(err) throw err;

    r.db('test')
        .table('planets')
        //.filter(r.row('name').eq('Venus')) //equal to
        //.filter(r.row('name').ne('Venus'))
        //.filter(r.row('moons').gt(1)) //greater than
        //.filter(r.row('moons').ne(0)) //not equal to
        //.filter(r.row('moons').ge(0)) //greater than or equal to
        // lt - less than
        // le - less than or equal to
        .run(conn, function(err, cursor){
            if(err) throw err;
            //console.log(cursor);

            cursor.toArray(function(err,result){
                if(err) throw err;
                console.log(JSON.stringify(result, null, 2));
            })
        });
});