import { IoBagAddOutline } from "react-icons/io5";


function Container({children}) {
  return (
    <div className="w-[95%] m-auto">{children}</div>
  )
}


const DefaultButton = ({text}) => {
  return (
    <button className='default-btn'>
      <IoBagAddOutline/>{text}
    </button>
  )
}

export {Container, DefaultButton}