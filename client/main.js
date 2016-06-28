Template.mainLayout.viewmodel({
  onCreated() {
    if (!Rows.findOne()) {
      for (let i = 0; i < 450; i++) {
        const row = {
          name: Random.id(40),
          name1: Random.id(40),
          name2: Random.id(40),
          name3: Random.id(40),
          name4: Random.id(40),
          name5: Random.id(40),
          name6: Random.id(40),
          name7: Random.id(40),
          name8: Random.id(40),
          name9: Random.id(40),
        };
        const rowId = Rows.insert(row);
        for (let i = 0; i < 4; i++) {
          const col = {
            src: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            rowId: rowId,
            name: Random.id(40),
            name1: Random.id(40),
            name2: Random.id(40),
            name3: Random.id(40),
            name4: Random.id(40),
            name5: Random.id(40),
            name6: Random.id(40),
            name7: Random.id(40),
            name8: Random.id(40),
            name9: Random.id(40)
          };
          Columns.insert(col);
        }
      }
    }
  }
});

Template.list.viewmodel({
  rows() {
    return Rows.find();
  },
});

Template.row.viewmodel({
  columns() {
    return Columns.find({
      rowId: this.r()._id
    });
  }
});

Template.column.viewmodel({
  name() {
    const key = Random.choice(['name','name1','name2','name3','name4','name5','name6','name7','name8','name9'])
    return this.c()[key];
  }
});

Template.nav.viewmodel({
  showList() {
    return Session.get('showList');
  }
});
