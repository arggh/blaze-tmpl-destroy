FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", { tmpl: "hello"});
  }
});

FlowRouter.route('/list', {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", { tmpl: "list"});
  }
});
