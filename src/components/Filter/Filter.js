import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import actions from '../../redux/actions';

function Filter({ value, onChange }) {
  return (
    <label className={s.filterLabel}>
      <span className={s.filterTitle}>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStatetoProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Filter);
