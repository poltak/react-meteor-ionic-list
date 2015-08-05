SettingsList = React.createClass({

  propTypes() {
    return {
      tabs: React.PropTypes.array,
    };
  },

  getDefaultProps() {
    return {
      settings: ['Setting 1', 'Setting 2', 'Setting 3'],
    };
  },

  render() {
    let list = this.props.settings.map((setting) => {
      return (
        <div className="item" key={setting}>
          <h2><a onClick={this.sayHi.bind(null, setting)}>{setting}</a></h2>
        </div>
      );
    });

    return (
      <div className="list">
        {list}
      </div>
    );
  },

  sayHi(setting) {
    console.log('Hi! You clicked: ' + setting);
  },

});