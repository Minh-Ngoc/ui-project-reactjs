import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from './routes';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            {
              publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = Fragment;
                if(route.layout) {
                  Layout = route.layout;
                } else {
                  Layout = Fragment;
                }
                return (
                  <Route 
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page/>
                      </Layout>
                    }
                  />
                )
              })
            }
          </Routes>
        </div>
      </Router>
  );
}

export default App;
