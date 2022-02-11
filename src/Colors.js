import React from 'react';

const Colors = ({Colors}) => {
  return <div className='colors'>
{Colors.map((color,index)=> 
<button  style={{"backgroundColor":color}} key={index}>
    
    </button>
)}
 

  </div>;
};

export default Colors;
