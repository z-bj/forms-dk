import React from "react";

const myHead = () => {
  return (
    <div>
      <h1 className="blue">Your comment</h1>
      {/* here child element don't accept inneritance style CSS, not like classic cssSheet
      
      an alternative to target an element to apply css is the MODULE, a style applied to the parent element via module will not be inherited by the child*/}
      <p className="red">I'm red or blue</p>
    </div>
  );
};

export default myHead;
