Profile = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user:         Meteor.user(),
      userLoading:  Meteor.loggingIn(),
    };
  },

  render() {
    if (this.data.userLoading) {
      return (
        <AppLoading />
      );
    }

    if (!this.data.user) {
      return (
        <h2>Please log in</h2>
      );
    }

    return (
      <div className="profile-wrapper">
        <div className="image-wrapper">
          <img src={this.data.user.profile.image} />
        </div>

        <div className="login-wrapper">
          <a onClick={this.logOut}>Logout</a>
        </div>
      </div>
    );
  },

  logOut() {
    Meteor.logout();
  },

});