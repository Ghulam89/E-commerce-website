import React, { useState } from 'react'

const DetailSlider = () => {

  const imgs=[
    {
      id:0,value:'https://6valley.6amtech.com/storage/app/public/product/2022-04-20-625fe69f716aa.png'
    },
    {
      id:0,value:'https://6valley.6amtech.com/storage/app/public/product/2023-03-12-640d95996aa0a.png'
    },
    {
      id:0,value:'https://6valley.6amtech.com/storage/app/public/product/2023-03-12-640d95996bc11.png'
    },
  ]
  const [sliderdata,setSliderData] = useState(imgs[0]);
  const handleClick  = (index)=>{
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider)
  }
  return (
    <div className=''>

     <div className='border'>
       <div className='border m-1'>
          <img  src={sliderdata?.value} width="100%"   alt='' />
       </div>
     </div>

      <div className='d-flex gx-3 mt-2'>
      {
        imgs.map((data,i)=>
          <div className='theme_slider'>

            <img  className={sliderdata.id==i?"clicked":""}  key={i} src={data.value} onClick={()=>handleClick(i)} alt=''  width="100%" height="70"  />
          </div>
        )
      }
      </div>
    </div>
  )
}

export default DetailSlider