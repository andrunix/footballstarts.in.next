export default function Countdown({team, days}) {
  return (
    <div className="text-black text-center p-4 bg-opacity-25 bg-green-300 rounded-t-2xl">
      <div className="uppercase text-blue-900 text-center text-bold text-3xl p-4">
        {team ? team : 'College'} football starts in
      </div>
      <div className="flex text-5xl justify-center">
          <div className="bg-white border-2 border-black rounded-l-2xl p-6">{days}</div>
          <div className="bg-yellow-600 border-2 border-black rounded-r-2xl p-6">days</div>
      </div>
    </div>
  )
}