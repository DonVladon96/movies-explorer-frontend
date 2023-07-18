import './FilterCheckbox.css';

function FilterCheckbox() {
  return(
    <label htmlFor='checkbox' className='searchform-checkbox'>
      <input className='searchform-checkbox__input' type='checkbox' id='checkbox' />
      <span className='searchform-checkbox__span' />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
