import Image from 'next/image';
import { camelCase } from '../lib/teamUtils';
import FavoriteButton from './favorite-button';

export default function Countdown({teamId, normalized, team, days, fav, onClickFav}) {
  return (
    <div className="text-black text-center bg-opacity-50 bg-blue-500 rounded-t-2xl mx-auto">
      
      <div className="flex justify-center">
        {team &&
        <div className="flex flex-col p-2">
          <Image src={`/images/${normalized}/${teamId}.png`} width="45px" height="45px"/>
        </div>
        }
        <div className="uppercase text-white text-bold text-2xl align-middle flex flex-col p-2">
          {team ? team : 'College'} football starts in
        </div>
        <div className="flex align-right">
          {team &&
           <button onClick={() => onClickFav(!fav)}
                   className={`${fav ? 'text-3xl text-red-500' : 'text-2xl text-black'} p-2`}>
             {fav ? '♥' : '♡'}
             
           </button>
          }
        </div>
      </div>

      {days >= 0 &&
       <div className="flex text-5xl md:text-6xl lg:text-7xl xl:text-8xl justify-center mx-auto">
         <div className={["flex flex-col border-2 border-r-0 border-black rounded-l-xl my-2 p-6",
                          team ? `${camelCase(normalized)}AltColor` : "bg-white"]
                         .join(' ')}>
           {days}
         </div>
         <div className={["flex flex-col border-2 border-black rounded-r-xl my-2 p-6",
                          team ? `${camelCase(normalized)}Color` : "bg-yellow-600"]
                         .join(' ')}>
           days
         </div>
       </div>
      }
      {days < 0 &&
       <div className="flex text-xl md:text-2xl justify-center mx-auto">
         <div className="flex flex-col border-2 border-black rounded m-3  p-6 bg-white">
           <p>
             It looks like there are no games scheduled in the near future.
           </p>
           <p>
             Check back soon for updates.
           </p>
         </div>
       </div>
      }
    </div>
  );
}
