export default function Record({total, conferenceGames}) {
    return (
        <div className="inline px-2">
           {total.wins}-{total.losses}, Conf {conferenceGames.wins}-{conferenceGames.losses}
        </div>
    );
}

