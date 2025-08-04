import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import { Routes, Route, Navigate } from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import CategoryPage from './components/CategoryPage/CategoryPage'
import AboutPage from './components/AboutPage/AboutPage'
import BlogPage from './components/BlogPage/BlogPage'
import BlogDetails from './components/BlogPage/BlogDetails'
import ContactPage from './components/ContactPage/ContactPage'
import ReviewsPage from './components/ReviewsPage/ReviewsPage'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import Terms from './components/PrivacyPolicy/Terms'
import CookiePolicy from './components/PrivacyPolicy/CookiePolicy'
import DisclosurePolicy from './components/PrivacyPolicy/DisclosurePolicy'
import SubmitCoupon from './components/SubmitCoupon/SubmitCoupon'
import ErrorPage from './components/ErrorPage/ErrorPage'
import ScrollToTop from './ScrollToTop'
import CyberMonday from './components/CyberMonday/CyberMonday'
import ToprdpProviderPage from './components/ToprdpProviderPage/ToprdpProviderPage'

import './App.scss'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div class="load-main">
          <div class="loading">
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                exact={true}
                element={<LandingPage />}
              />
              <Route
                path="/category"
                exact={true}
                element={<CategoryPage PageName="Categories" />}
              />
              <Route
                path="/store"
                exact={true}
                element={<CategoryPage PageName="Stores" />}
              />
              <Route
                path="/about"
                exact={true}
                element={<AboutPage />}
              />
              <Route
                path="/blog"
                exact={true}
                element={<BlogPage />}
              />
              <Route
                path="/blog_details"
                exact={true}
                element={<BlogDetails />}
              />
              <Route
                path="/contact"
                exact={true}
                element={<ContactPage />}
              />
              <Route
                path="/review"
                exact={true}
                element={<ReviewsPage />}
              />
              <Route
                path="/privacy"
                exact={true}
                element={<PrivacyPolicy />}
              />
              <Route
                path="/terms"
                exact={true}
                element={<Terms />}
              />
              <Route
                path="/cookie"
                exact={true}
                element={<CookiePolicy />}
              />
              <Route
                path="/disclosure"
                exact={true}
                element={<DisclosurePolicy />}
              />
              <Route
                path="/submit_coupon"
                exact={true}
                element={<SubmitCoupon />}
              />
              <Route
                path="/cyber_monday"
                exact={true}
                element={<CyberMonday />}
              />
              <Route
                path="/error"
                exact={true}
                element={<ErrorPage />}
              />
              <Route
                path="/top_rdp_provider"
                exact={true}
                element={<ToprdpProviderPage />}
              />
              <Route
                path="*"
                element={<Navigate to="/error" replace />}
              />
            </Routes>
          </ScrollToTop>
          <Footer />
        </>
      )}
    </>
  )
}

export default App