// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import RQsuperHero from './component/RQsuperHero.page';
import ButtonClick from './component/ButtonClick';
import AwsAmplify from './component/AwsAmplify';


const queryClient = new QueryClient();

function App() {
  return (
    
    <AwsAmplify />

    
    // react query tutorial
    // <QueryClientProvider client={queryClient}>
    //   <div>
    //     <RQsuperHero />
    //     <ButtonClick />
    //   </div>
    // <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    // </QueryClientProvider>
  );
}

export default App;
