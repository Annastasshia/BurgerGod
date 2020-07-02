// Import MySQL connection.
var connection = require("../config/connection.js");

// Export the orm object for the model (burgers.js).
module.exports = function(table) {
  // Return an object for all our SQL statement functions for the specified table.
  return {
    selectAll: function(cb) {
      connection.query("SELECT * FROM ??", [table], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
   
    // An example of newRow would be {name: "panther", devoury: true}
    create: function(newRow, cb) {

      connection.query("INSERT INTO ?? SET ?", [table, newRow], function(err, result) {
        if (err) throw err;
        
        cb(result);
      });
    },
    // An example of updatedObj would be {name: "panther", devoury: false}
    // condition in object form: { id: 1 }
    update: function(updatedObj, condition, cb) {
      connection.query("UPDATE ?? SET ? WHERE ?", [table, updatedObj, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
    delete: function(condition, cb) {
      connection.query("DELETE FROM ?? WHERE ?", [table, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    }
  } 
}
