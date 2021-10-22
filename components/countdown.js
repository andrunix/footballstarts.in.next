export default function Countdown({team, days}) {
  return (
    <div className="text-black text-center p-1 bg-opacity-50 bg-green-500 rounded-t-2xl">
      <div className="uppercase text-white text-center text-bold text-2xl">
        {team ? team : 'College'} football starts in
      </div>
      <div className="flex text-5xl justify-center">
          <div className="bg-white border-2 border-black rounded-l-xl p-6">{days}</div>
          <div className="bg-yellow-600 border-2 border-black rounded-r-xl p-6">days</div>
      </div>
    </div>
  )
}