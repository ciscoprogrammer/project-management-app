import Input from './Input.jsx';
import { useRef } from 'react';
export default function NewProject({onAdd})
{
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave()
    {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="my-6 mx-2 py-1 px-5 rounded-md bg-stone-800 text-stone-50 hover:bh-stone-950">Savel</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={dueDate} label="Due Date"/>
            </div>
        </div>
    )
}