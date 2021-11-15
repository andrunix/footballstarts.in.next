import Link from 'next/link';
import ScheduleDetail from './ScheduleDetail.js';
import Record from './record.js';

// export default function Schedule({schedule, record}) {
export default function Schedule({schedule, record}) {
    return (
        <>
          <div className="flex w-full border-b-2">
            <div className="flex-col bg-white px-4 py-2">
              <h2>Schedule</h2>
            </div>
            <div className="flex-col w-full bg-white px-4 py-2 text-right font-bold">
              Record 
              <Record {...record}/>
            </div>
          </div>
          <div>
            <div className="bg-white px-2 md:px-4 py-2">
              <ScheduleDetail schedule={schedule}/>
            </div>
          </div>
        </>
    );
}

