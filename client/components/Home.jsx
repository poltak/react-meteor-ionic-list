Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      users: MyData.find().fetch(),
    };
  },

  render() {
    let list = this.data.users.map((user) => {
      return (
        <div className="item item-avatar" key={user.email}>
          <img src={user.avatar}></img>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      );
    });

    return (
      <div className="list">
        {list}
      </div>
    );
  },

});