import './FilterCheckbox.css';

function FilterCheckbox( props) {

  const { switchHandler, switchCheked } = props;


  return(
    <label htmlFor='checkbox' className='searchform-checkbox'>
      <input className='searchform-checkbox__input' checked={switchCheked} onChange={(event)=>switchHandler(event.target.checked)} type='checkbox' id='checkbox' />
      <span className='searchform-checkbox__span' />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
