Template.list.onCreated(function listOnCreated() {
  this.subscribe('rows');
});

Template.list.helpers({
  rows() {
    return Rows.find();
  },
});

Template.row.onCreated(function rowOnCreated() {
  this.subscribe('columns', this.data.r._id);
});

Template.row.helpers({
  columns() {
    return Columns.find({
      rowId: this.r._id
    });
  },
  onDestroyed() {
    console.log('Destroying')
  }
});

Template.column.helpers({
  name() {
    const key = Random.choice(['name','name1','name2','name3','name4','name5','name6','name7','name8','name9'])
    return this.c[key];
  }
});

Template.nav.helpers({
  showList() {
    return Session.get('showList');
  }
})

Template.nav.events({
  'click button#showList'(event, instance) {
    Session.set('showList', true);
  },
  'click button#hideList'(event, instance) {
    Session.set('showList', false);
  }
});
