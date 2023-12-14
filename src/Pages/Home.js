import React from 'react';
import styles from '../Pages/Home.module.css'
import resumeSvg from '../assets/resume.svg'
import Layout from '../Components/Layout/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Components/Layout/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Layout>
    {/* <Header/> */}
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span><br/>
          <Link to={'/login'} className='btn btn-info rounded-3 border-5 m-3'>Login</Link>
          <Link to={'/login'} className='btn btn-info rounded-3 border-5 m-3'>SignUp</Link>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>

    </div>
    </Layout>
    </>
  )
}

export default Home
