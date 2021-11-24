// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './component/Home.page';
import RQsuperHero from './component/RQsuperHero.page';
import SuperHero from './component/SuperHero.page';
import ButtonClick from './component/ButtonClick';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      {/* <Home /> */}
      <RQsuperHero />
      {/* <SuperHero /> */}
    </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    <ButtonClick />
    </QueryClientProvider>
  );
}

export default App;
