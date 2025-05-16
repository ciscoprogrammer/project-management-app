export default function Input({label,textarea, ...props})
{
    const classes ="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600  focus:outline-none focus:border-stone-600";
    //const classes = "w-full p-2 border-b-2 rounded-sm border-stone-500 bg-stone-700 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400";

    return (
        <p className="flex flex-col gap-2 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea ? <textarea className={classes} {...props} /> : <input className={classes} {...props}/>}
        </p>


    )
}