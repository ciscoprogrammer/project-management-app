import Button from './Button.jsx';
import noProjectIconImage from '../assets/no-projects.png';
export default function NoProjectSelected()
{
    return <div className="mt-24 text-center w-2/3">
        <img src={noProjectIconImage} alt="An empty task lists" className="h-16 w-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected.</h2>
        <p className="text-stone-400 mb-4">Please Select a project or get started with new one</p>
        <p className="mt-8">
            <Button>Create new project</Button></p>
    </div>
}