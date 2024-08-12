export default function FavoriteButton({fav, onClickFavorite}) {
  return (
          <button onClick={() => onClickFavorite(!fav)}
                  className={`${fav ? 'text-3xl text-red-500' : 'text-2xl text-black'} p-2`}>
            {fav ? '♥' : '♡'}
          </button>
  );
}
