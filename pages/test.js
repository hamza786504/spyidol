import { useState } from 'react';
import InputMask from 'react-input-mask';

function TimeInput(props) {
  let mask = 'dD-mM-YYYY';
  let formatChars = {
    'Y': '[0-9]',
    'd': '[0-3]',
    'D': '[0-9]',
    'm': '[0-1]',
    'M': '[1-9]'
  };

  let beforeMaskedValueChange = (newState, oldState, userInput) => {
    let { value } = newState;

    let dateParts = value.split('-');
    let dayPart = dateParts[0];
    let monthPart = dateParts[1];

    if(dayPart.startsWith('3'))
      formatChars['D'] = '[0-1]';
    else if(dayPart.startsWith('0'))
      formatChars['D'] = '[1-9]';
    else
      formatChars['D'] = '[0-9]';


    if(monthPart.startsWith('1'))
      formatChars['M'] = '[0-2]';
    else
      formatChars['M'] = '[1-9]';

    return {value, selection: newState.selection};
  }
  return (
   <InputMask
      mask={mask}
      value={props.value}
      onChange={props.onChange}
      formatChars={formatChars}
      beforeMaskedValueChange={beforeMaskedValueChange}>
    </InputMask>
  );
}

function Test() {
  const [date, setDate] = useState('');
  const handleInput = ({ target: { value } }) => setDate(value);
  return (
    <div>
      <TimeInput
        value={date}
        onChange={handleInput}>
      </TimeInput>
      <div style={{paddingTop: '12px'}}>Date: {date}</div>
    </div>
  );
}
export default Test;