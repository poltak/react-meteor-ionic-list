let Transition = React.addons.CSSTransitionGroup;

Tabs = React.createClass({

  propTypes() {
    return {
      tabs: React.PropTypes.array,
    };
  },

  getInitialState() {
    return {
      modal: false,
    };
  },

  getDefaultProps() {
    return {
      tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    };
  },

  render() {
    return (
      <div className="tab-stuff">
        {this.state.modal ? <Backdrop /> : false}
        <Transition transitionName="modal">
          {this.state.modal}
        </Transition>

        <div className="tabs tabs-icon-top">
          {
            this.props.tabs.map((tab, i) => {
              return (
                <a className="tab-item" key={tab} onClick={this.ionModal.bind(null, tab)}>
                  <i className="icon ion-star"></i>
                  {tab}
                </a>
              );
            })
          }
        </div>
      </div>
    );
  },

  ionModal(tab) {
    this.setState({
      modal: (
        <IonModal>
          <div className="h1 title">{tab}</div>
          <button onClick={ () => this.setState({modal: false}) } className="button button-icon active">
            <i className="icon ion-ios-close-empty"></i>
          </button>
        </IonModal>
      ),
    });
  },

});