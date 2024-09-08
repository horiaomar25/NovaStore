

const DropDownFilter = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row justify-center items-center'>
    <select className="select w-full max-w-xs border border-black lg:mr-4 xs:mb-4 ">
          <option disabled selected>Categories</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
      </select><select className="select w-full max-w-xs border border-black">
              <option disabled selected>Price</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
          </select></div></>
  )
}

export default DropDownFilter