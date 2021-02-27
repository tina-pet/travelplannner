import React from 'react';
import './TravelPlannerForm.module.css';


export const TravelPlannerForm = () => {
    const selectOption = [];
    const format = 'HH:mm';

  return(
    <>
<form className='form'>
  <label className='nameForm'>'Cestovní itinerář'</label>
    <input placeholder='Zadejte datum'/>
    <div className='timePicker'>
      <input placeholder='Od' type={Date} />
      <input placeholder='Do' type={Date}/>
      </div>
      <div className='select'>
        <select  mode='multiple' placeholder='Vyberte kategorie'>
          
        </select>
        </div>
        <div className='textarea'>
        <textarea  rows={4} placeholder='Popis...'></textarea>
        </div>
        <div className='buttonsInline'>
        <div className='cancelButton'>
          <button type='button'>Zrušit</button>
        </div>
        <div className='okButton'>
        <button type='submit'>OK</button>
        </div>
        </div>
   </form>
   </>
  )
}
