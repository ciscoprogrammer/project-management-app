import NoProjectSelected from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import {useState} from 'react';
function App() {
  const [projectSelected, setProjectSelected]= useState({
    projectSelectedId : undefined,
    projects : []
  });

  function handleStartProjectAdd()
  {
    setProjectSelected( previousState =>
    {
        return {
        ... previousState,
        projectSelectedId : null

    }
  }

    );
  }

  let content;
  if (projectSelected.projectSelectedId === null )
  {
    content = <NewProject />
  } else if (projectSelected.projectSelectedId === undefined) {
    content = <NoProjectSelected onhandleProjectAdd={handleStartProjectAdd}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onhandleProjectAdd={handleStartProjectAdd} />
      {content}
    </main>
  );
}

export default App;
