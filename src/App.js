import './App.css';
import NavigationBarA from './Components/Navigation Bar';
import PageContentA1 from './Components/PageContent1';
import PageContentA2 from './Components/PageContent2';
import PageContentA3 from './Components/PageContent3';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <NavigationBarA />
       <PageContentA1 />
       <PageContentA2 />
       <PageContentA3 />
       <Footer />
    </div>
  );
}

export default App;
