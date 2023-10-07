export function Character(character) {
  return (
    <div className="pl-10 pt-4 bg-black">
      <h3 className="pb-4 font-sans text-white text-3xl font-semibold">
        {character.name}
      </h3>
      <img
        src={character.image}
        alt={character.name}
        className="w-80 h-80 rounded-xl"
      />
      <p className="pt-6 pb-10 font-sans text-white text-2xl font-thin">{`Origin: ${
        character.origin && character.origin.name
      }`}</p>
    </div>
  );
}
export default Character;
