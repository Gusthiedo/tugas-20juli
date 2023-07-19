import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [currentItem, setCurrentItem] = useState(0);
  const imgRef = useRef(null);
  const authorRef = useRef(null);
  const jobRef = useRef(null);
  const infoRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Pratama Putra",
      job: "Fullstack Developer",
      img: "https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg",
      text: "Merasa benar-benar terbantu di tempat ini, saya seperti berada di rumah sendiri. Timnya full support dan bikin nyaman",
    },
    {
      id: 2,
      name: "Ayu Dewi",
      job: "Entepreneur",
      img: "https://img.freepik.com/premium-photo/beautiful-islamic-female-model-wearing-hijab-fashion-muslim-woman-sitting-sand-beach_326694-735.jpg",
      text: "Terima kasih Psyche-Basecamp karena sudah mensupport dan membantu saya mengatasi berbagai macam masalah psikologis yang saya alami, saya menjadi orang yang lebih baik daripada sebelumnya",
    },
    {
      id: 3,
      name: "Helena",
      job: "Data Analyst",
      img: "https://static.vecteezy.com/system/resources/previews/005/339/848/large_2x/beautiful-islamic-female-model-wearing-hijab-fashion-a-modern-wedding-dress-for-muslim-woman-sitting-in-the-sand-and-beach-portrait-an-asian-girl-model-using-hijab-having-fun-at-the-beach-with-trees-free-photo.jpg",
      text: "Begitu banyak yang saya dapatkan dari Psyche-Basecamp ini, semuanya membantu saya menjadi pribadi yang lebih baik lagi",
    },
    {
      id: 4,
      name: "Yoga Kurniawan",
      job: "Mahasiswa",
      img: "https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg",
      text: "Ternyata ada tempat seperti ini di Indonesia, selama ini saya mencari semacam tim support psikologis, tapi belum menemukannya",
    },
  ];

  useEffect(() => {
    const item = reviews[currentItem];
    imgRef.current.src = item.img;
    authorRef.current.textContent = item.name;
    jobRef.current.textContent = item.job;
    infoRef.current.textContent = item.text;
  }, [currentItem, reviews]);

  const handleNextPerson = () => {
    let nextItem = currentItem + 1;
    if (nextItem > reviews.length - 1) {
      nextItem = 0;
    }
    setCurrentItem(nextItem);
  };

  const handlePrevPerson = () => {
    let prevItem = currentItem - 1;
    if (prevItem < 0) {
      prevItem = reviews.length - 1;
    }
    setCurrentItem(prevItem);
  };

  const handleRandomPerson = () => {
    const randomItem = Math.floor(Math.random() * reviews.length);
    setCurrentItem(randomItem);
  };

  return (
    <div>
      <header className="container header">
        <nav className="nav">
          <div className="logo">
            <h2>Psyche-Basecamp</h2>
          </div>

          <div className="nav_menu" id="nav_menu">
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill"></i>
            </button>

            <ul className="nav_menu_list">
              <li className="nav_menu_item" id="review">
                <a href="#review-title" className="nav_menu_link">
                  Testimonial
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  About Us
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  Our Service
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <button className="toggle_btn" id="toggle_btn">
            <i className="ri-menu-line"></i>
          </button>
        </nav>
      </header>

      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Selamat Datang di <span>Psyche-Basecamp</span>
                <br />
                Support System Psikologis Kamu
              </h1>
              <p className="info-text">
                Psyche-Basecamp didukung oleh tim yang berisi para ahli di
                bidang Ilmu Psikologi, sehingga kamu dapat memercayakan dan
                menggunakan Psyche-Basecamp sebagai rumah mental kamu yang aman.
              </p>

              <div className="btn_wrapper">
                <button className="btn view_more_btn">
                  view all pages <i className="ri-arrow-right-line"></i>
                </button>

                <button className="btn documentation_btn">documentation</button>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="psyche_img_wrapper">
                <img src="./img/psyche.jpg" alt="psyche-img" height="350" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="container">
          <div className="title" id="review-title">
            <h2>Testimoni Kami</h2>
            <div className="underline"></div>
          </div>

          <article className="testimonial">
            <img
              src={reviews[currentItem].img}
              alt={reviews[currentItem].name}
              ref={imgRef}
              className="person-img"
            />
            <h4 ref={authorRef}>{reviews[currentItem].name}</h4>
            <p className="job" ref={jobRef}>
              {reviews[currentItem].job}
            </p>
            <p className="info" ref={infoRef}>
              {reviews[currentItem].text}
            </p>
          </article>

          <div className="button-container">
            <button className="prev-btn" onClick={handlePrevPerson}>
              Prev
            </button>
            <button className="next-btn" onClick={handleNextPerson}>
              Next
            </button>
          </div>
          <button className="random-btn" onClick={handleRandomPerson}>
            Random review
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
