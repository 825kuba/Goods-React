import { FaStar } from 'react-icons/fa';

import classes from './ReviewsSection.module.scss';

const ReviewsSection = () => {
  return (
    <section className={classes.reviews}>
      <article>
        <div className={classes.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
          sunt! Vel, dolorem qui? Eos dignissimos expedita, omnis fugiat
          exercitationem ullam! At totam reprehenderit facere hic?"
        </p>
        <span>Nick W.</span>
      </article>

      <article>
        <div className={classes.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eos architecto velit enim sit nam."
        </p>
        <span>Larry K.</span>
      </article>

      <article>
        <div className={classes.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam
          nemo expedita maxime repudiandae, fugit voluptate at minima harum aut
          necessitatibus quos quia esse. Dolores et optio veniam tempora
          laudantium!"
        </p>
        <span>Seung-Yun S.</span>
      </article>
    </section>
  );
};

export default ReviewsSection;
