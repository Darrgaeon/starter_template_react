import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {testLoadData} from "../actions/TestActions";
import Test from "../components/Test";

class TestContainer extends Component {
  render() {
    const {testLoadData, data} = this.props;
    return (
      <Test
        testLoadData={testLoadData}
        data={data.data}
      />
    );
  }
}

const mapStateToProps = store => ({
  data: store.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    testLoadData
  }, dispatch);

TestContainer.propTypes = {
  data: PropTypes.object.isRequired,
  testLoadData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
