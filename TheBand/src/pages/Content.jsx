import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';


export default function Content() {
  return ( <>
<div id="animation-carousel" className="relative w-full  bg-gray-700" data-carousel="slide">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-500 ease-linear" data-carousel-item>
            <img src={photo1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <figcaption className="absolute px-4 text-lg text-gray-900 bottom-6 text-center">
      <p>We had the best time playing at Venice Beach!</p>
  </figcaption>
        </div>

        <div className="hidden duration-500 ease-linear" data-carousel-item>
            <img src={photo2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              <figcaption className="absolute px-4 text-lg text-gray-900 bottom-6 text-center">
      <p>The atmosphere in New York is lorem ipsum</p>
  </figcaption>
        </div>

        <div className="hidden duration-500 ease-linear" data-carousel-item="active">
            <img src={photo3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              <figcaption className="absolute px-4 text-lg text-gray-900 bottom-6 text-center">
      <p>Thank you, Chicago - A night we won't forget</p>
  </figcaption>
        </div>

        <div className="hidden duration-500 ease-linear" data-carousel-item>
            <img src={photo4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              <figcaption className="absolute px-4 text-lg text-gray-900 bottom-6 text-center">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
        </div>

        <div className="hidden duration-500 ease-linear" data-carousel-item>
            <img src={photo5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
        </div>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
</>);
}


