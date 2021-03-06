IonModal = React.createClass({

  propTypes() {
    return {
      children: React.React.PropTypes.component,
    }
  },

  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="bar bar-light bar-header">
              <div className="content overflow-scroll">
                <div className="padding">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

});