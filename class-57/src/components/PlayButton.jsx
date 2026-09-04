import ButtonB from "./ButtonB";

export default function PlayButton({movieName}) {
  function handlePlayClick(){
    alert(`playing ${movieName}`)
  }
  return (
    <>
    <ButtonB onSmash={handlePlayClick}>
      Play "{movieName}"
    </ButtonB>
    </>
  )
}
