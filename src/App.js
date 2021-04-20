import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import React from 'react';
import { connect } from 'react-redux'
import { fetchAuditions } from './actions/fetchAuditions'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAuditions()
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainContainer />
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    auditions: state.auditions,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuditions: () => dispatch(fetchAuditions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
