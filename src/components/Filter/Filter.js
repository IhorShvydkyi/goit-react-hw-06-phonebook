import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";
import PropTypes from "prop-types";
import { FilterStyled, Label, Input } from "./Filter.styled";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <Label>Find contact by the name</Label>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => {
          dispatch(actions.filterContact(e.target.value));
        }}
      />
    </FilterStyled>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};