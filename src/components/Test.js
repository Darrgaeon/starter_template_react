import React, {Component} from "react";
import {api} from "../constants/Default";
import {showTest} from "../utils/showTest";
import PropTypes from "prop-types";


class Test extends Component {
  componentDidMount() {
    this.props.testLoadData(api);
  }

  handleClick = () => {
    console.log(1);
  };

  render() {
    const {data} = this.props;

    if (data === undefined || data.length === 0) return <div>Идет загрузка...</div>;

    return (
      <div>
        <h1>Hello world!</h1>
        <h2>{data.title}</h2>
        <h3>{showTest(23)}</h3>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

Test.propTypes = {
  data: PropTypes.any.isRequired,
  testLoadData: PropTypes.func.isRequired
};

export default Test;
