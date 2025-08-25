import { useFieldArray, useForm } from "react-hook-form";

const Analytics = () => {
   const { control, handleSubmit, register } = useForm({
      defaultValues: {
         imgurl: [{ name: "" }]
      }
   });
   const { fields, append, remove } = useFieldArray({
      control, name: "imgurl", rules: {
         required: "আবশ্যই একটি ছবি দিতে হবে"
      }
   });
   const submit = (data) => {
      console.log(data);
   }
   return (
      <form onSubmit={handleSubmit(submit)}>
         {fields?.map((f, idx) =>
            <div key={idx}>
               <i9nput
                  type="text"
                  className="p-5  border "
                  placeholder="image url here"
                  {...register(`imgurl.${idx}.name`, { required: { message: "Add url" } })}
               />
               {fields.length > 1 && <button onClick={() => remove(idx)} type="button">X</button>}
            </div>
         )
         }
         <button onClick={() => append()} type="button" className="btn">add</button>
      </form >
   );
};

export default Analytics;