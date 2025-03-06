import { Label } from "@radix-ui/react-label";

function CommonForm({
    formControls,
    formData,
    setFormData,
    onSubmit,
    buttonText,
    isBtnDisabled,
}) {
  return (
    <>
    <form>
     <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => {
            <div className="grid w-full gap-1.5" key={controlItem.name}>
                <Label >{controlItem.Label}</Label>
            </div>
        })}
     </div>
     </form>
    </>
  );
}


export default CommonForm;