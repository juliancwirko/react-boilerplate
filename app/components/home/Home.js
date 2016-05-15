import React from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import file1 from './images/287.jpg';
import file2 from './images/286.jpg';
import style from './styles.styl';
import { addTodo, counterTick } from '../../redux/actions';

const Home = (props) => {
  const { todos, dispatchAddTodo, ticker, dispatchCounterTick } = props;
  const users = {
    user1: 'user-1',
    user2: 'user-2',
  };
  const add = () => dispatchAddTodo(
    `Just testing Redux! Random id: ${Math.random().toString(36).split('.')[1]}`
  );
  const tick = () => dispatchCounterTick();

  return (
    <div>
      <div styleName="spacing">
        <h2>Redux testing:</h2>
        <button
          type="button"
          id="add-string"
          onClick={add}
        >
          Add random string to store!
        </button><span>--</span>
        <button
          type="button"
          id="add-click-count"
          onClick={tick}
        >
          Click count: {ticker}
        </button><br />
        {todos.map((item, index) => <div key={index}>{item}</div>)}
      </div>
      <div styleName="spacing">
        <h2>Routing example:</h2>
      </div>
      <div styleName="custom-grid">
        <div styleName="custom-cell">
          <Link to={`/route-1/${users.user1}`}>
            User 1
          </Link>
        </div>
        <div styleName="custom-cell">
          <Link to={`/route-1/${users.user2}`}>
            User 2
          </Link>
        </div>
      </div>
      <hr />
      <div styleName="spacing">
        <h2>...and some kittens - of course</h2>
      </div>
      <div styleName="custom-grid">
        <figure styleName="custom-cell">
          <img src={file2} alt="Yay, kittens!" />
          <figcaption>Yay, kittens with image loader.</figcaption>
        </figure>
        <figure styleName="custom-cell">
          <img src={file1} alt="Yay, kittens! I'll be base64 because I am small" />
          <figcaption>I will be base64 because I am small</figcaption>
        </figure>
      </div>
    </div>
  );
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  ticker: React.PropTypes.number.isRequired,
  dispatchAddTodo: React.PropTypes.func.isRequired,
  dispatchCounterTick: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  ticker: state.ticker,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchAddTodo: text => dispatch(addTodo(text)),
  dispatchCounterTick: () => dispatch(counterTick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
