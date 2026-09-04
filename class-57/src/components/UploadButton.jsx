import ButtonB from "./ButtonB";

export default function UploadButton() {
  return (
    <>
   <ButtonB onSmash ={()=> alert('Uploading!')}>
    Upload Image
   </ButtonB>
    </>
  )
}
