# rethinkdbtutorial
Following Rocky DeRaze's RethinkDB Tutorial

This are just the files for getting the general hang of RethinkDB in preparation to apply some of these methods to my To Do List Application.  It covers the basics including RethinkDB installation, creation of a DB, installation of rethinkdb module via npm, and general RethinkDB syntax used within node.

It is worth mentioning that the creation of tables should probably be separated into its own javascript file so that when node runs, it only creates the table once, otherwise, the file will continually create tables within the database, which is not desirable for obvious reasons.
