export default function Countdown({team, days}) {
  return (
    <div className="text-black text-center p-1 bg-opacity-50 bg-blue-500 rounded-t-2xl mx-auto">
      <div className="uppercase text-white text-center text-bold text-2xl">
        {team ? team : 'College'} football starts in
      </div>
      <div className="flex text-5xl md:text-6xl lg:text-7xl xl:text-8xl justify-center mx-auto">
          <div className="bg-white border-2 border-r-0 border-black rounded-l-xl my-2 p-6">{days}</div>
          <div className="bg-yellow-600 border-2 border-black rounded-r-xl my-2 p-6">days</div>
      </div>
    </div>
  )
}