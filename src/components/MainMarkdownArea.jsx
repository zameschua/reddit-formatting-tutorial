import React from 'react';

import InputField from './InputField';
import MarkdownDisplayer from './MarkdownRenderer';

const MainMarkdownArea = ({displayText, updateDisplayText}) => {

  return (
    <div>
      <div className="row">

        <MarkdownDisplayer markdown={displayText} />

        <InputField
          value={displayText}
          onChangeHandler={updateDisplayText}
        />

      </div>
    </div>
  );
}

export default MainMarkdownArea;