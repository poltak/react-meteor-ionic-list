const routes = (
  <ReactRouter.Route name="root" handler={AppBody}>
    <ReactRouter.Route name="home" path="/" handler={Home}>
      <ReactRouter.Route name="tabs" path="/" handler={Tabs} />
    </ReactRouter.Route>
    <ReactRouter.Route name="other" path="/other" handler={Other} />
    <ReactRouter.Route name="settings" path="/settings" handler={Settings} />
    <ReactRouter.DefaultRoute handler={AppLoading} />
    <ReactRouter.NotFoundRoute handler={AppNotFound} />
  </ReactRouter.Route>
);

Meteor.startup(() => {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler, state) => {
    React.render(<Handler />, document.getElementById('app'));
  });
});