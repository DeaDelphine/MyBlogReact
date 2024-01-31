import { Header } from './components/Header';
import { useHashNavigation } from './hooks/useHashNavigation';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Single } from './pages/Single';
import './styles.css';

function App() {

  const { page, param } = useHashNavigation();
  const pageContent =getPageContent(page, param);

  return <>
    <Header page={page} /> 
    <div className='container my-3'>
      {pageContent}
      </div>
   
  </>
}
function getPageContent(page, param) { 
  if (page === 'home'){
    return <Home />;
  }
  if (page === 'contact'){
    return <Contact />;
  }
  if (page === 'post'){
    return <Single postId={param} />;
  }
  return <NotFound  page={page}/>
}

export default App
