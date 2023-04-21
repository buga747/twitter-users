import { Suspense } from 'react';
import Theme from './Theme/Theme';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Tweets } from 'pages/Tweets';

export const App = () => {
  return (
    <Theme>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
          </Route>
        </Routes>
      </Suspense>
    </Theme>
  );
};
