import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
//HashRouter最外层必须由它包裹
//Routes包裹Route
//Route配置路由规则
//Link用于点击跳转
// import Loading from 'components/loading/index';
// const Login = lazy(() => import('pages/login/index'));
import Layout from 'layout/index';
const Home = lazy(() => import('pages/home/index'));
const About = lazy(() => import('pages/about/index'));
const NotFound = lazy(() => import('pages/notFound/index'));

// const Layout = () => {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

const RoutersConfig = () => {
  return <HashRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout ><Outlet /></Layout>}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
};

export default RoutersConfig;