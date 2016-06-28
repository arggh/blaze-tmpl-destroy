Meteor.publish('rows', function() {
  return Rows.find();
});

Meteor.publish('columns', function(rowId) {
  return Columns.find({
    rowId: rowId
  });
})
