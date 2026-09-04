import AlertButton from "./AlertButton";
import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function Toolbar() {
  return (
    <>
   <AlertButton message ='Playing!'>Play Movie</AlertButton>
   <AlertButton message ="Uploading!">Upload Image</AlertButton>
   <br /> 
   <br />
   <PlayButton movieName = "Kiki's Delivery Service"/>
   <UploadButton/>
    </>
  )
}
