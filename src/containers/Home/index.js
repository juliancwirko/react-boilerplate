import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, bool, func } from 'prop-types';
import { requestHomeData } from './actions';
import meta from './meta.json';
import Home from '../../views/Home';
import Spinner from '../../components/Spinner';

class HomeContainer extends React.Component {
  static propTypes = {
    homeData: object,
    requestHomeData: func.isRequired,
    isFetching: bool,
  }
  static defaultProps = {
    homeData: {},
    isFetching: true,
  }
  componentDidMount() {
    this.props.requestHomeData();
  }
  homeContent = () => {
    if (this.props.isFetching) {
      return <Spinner />;
    }
    return <Home data={this.props.homeData} meta={meta} />;
  }
  render() {
    return (
      <div>{this.homeContent()}</div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.homeReducer.isFetching,
  homeData: state.homeReducer.items,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestHomeData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
