import React from 'react'

const SubmitButton = ({defaultValue}) => {
    let dvalue=defaultValue;
  return (
    <>
        <input type="Submit" name="Submit" className="submit" defaultValue={dvalue} />
    </>
  )
}

export default SubmitButton