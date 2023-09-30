import { aboutContent } from '../../lib/about'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-[80%]">
      {aboutContent.map((eachContent, contextidx) =>{
        const {heading, content, imageContent} = eachContent
        const contentId = heading.toLowerCase().replaceAll(' ','_');
        return <article key={contextidx} data-section id={contentId} className="mb-16" >
          <div className="text-4xl font-bold mb-8">{heading}</div>
          {content && content.map((contentValue, index) => <p key={index} className="text-xl mb-12 text-justify">{contentValue}</p>)}
          {(imageContent && imageContent.length) ? 
          <div className='flex flex-wrap gap-y-4 justify-between'>
            {imageContent.map((imgObj, index) => 
              (<div key={index} className='flex flex-col gap-2 w-[150px] text-sm items-center justify-items-center'>
                <Image src='/images/avatar.png' height={150} width={100} alt="avatar" />
                <div className='text-center'>{imgObj.name}</div>
                <div className='text-center text-xs'>{imgObj.position}</div>
              </div>)
            )}
          </div> : ''}
          </article>
      })}
    </div>
  )
}
