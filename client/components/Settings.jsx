Settings = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {

    };
  },

  render() {
    return (
      <div>
        <Profile />
        <SettingsList />
      </div>
    );
  },
});