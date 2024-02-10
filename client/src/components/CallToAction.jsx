import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Interested in learning more about these fields?
            </h2>
            <p className='text-gray-500 my-2'>
            Check out these resources featuring over 20 roadmaps for each domain.
            </p>
            <Button className='rounded-tl-xl rounded-bl-none bg-red-500 border-red-500'>
                <a href="https://roadmap.sh/" target='_blank' rel='noopener noreferrer'>
                Over 20 Roadmaps
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.cisco.com/c/en/us/solutions/enterprise-networks/it-information-technology-explained/jcr:content/Grid/category_atl/layout-category-atl/anchor_info.img.png/1672889128440.png" />
        </div>
    </div>
  )
}