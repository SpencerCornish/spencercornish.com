import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function home() {
  return (
    <body>
      <section className='hero is-fullheight'>
        <div className='contentArea animated fadeIn fast'>
          <div className='container has-text-centered'>
            <div className='columns is-centered'>
              <div className='column is-4'>
                <Image className={styles.profilePhoto} src="/images/me.jpg" alt='A photo of me' width='20' height='20'/>
            </div>
            <div className='columns is-centered'>
              <div className='column is-4'>
                <h1 className='title is-2'>Spencer Cornish</h1>
                <h2 className='subtitle is-5'>Software Engineer in Bozeman, Montana</h2>
              </div>
            </div>
            <div className='columns is-centered'>
              <div className='column is-5 has-text-centered'>
                <p className='buttons is-centered'>
                  <a className='button is-rounded' target='_blank' rel="noreferrer" href='https://linkedin.com/in/spencercornish'>
                    <span className='icon linkedin'>
                      <i className='fab fa-linkedin'></i>
                    </span>
                    <span>LinkedIn</span>
                  </a>
                  <a className='button is-rounded' target='_blank' rel="noreferrer" href='https://github.com/spencercornish'>
                    <span className='icon github'>
                      <i className='fab fa-github'></i>
                    </span>
                    <span>Github</span>
                  </a>
                  <a className='button is-rounded' target='_blank' rel="noreferrer" href='assets/spencer-cornish-resume-2021.pdf'>
                    <span className='icon'>
                      <i className='fas fa-file-alt'></i>
                    </span>
                    <span>Resume</span>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>
        <div className='hero-foot'>
          <span className='tag is-dark photo-cred is-invisible' id='photo-cred'>
            <span className='icon'>
              <i className='fas fa-camera-retro'></i>
            </span>
            <a className='has-text-white-ter' target='_blank' rel="noreferrer" href='https://unsplash.com/@colterolmstead'>@Colter
              Olmstead</a>
          </span>
        </div>
      </section>
    </body>
  );
}
