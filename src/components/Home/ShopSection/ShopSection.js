import React, { useRef } from 'react';

import classes from './ShopSection.module.scss';

import ShopLink from './ShopLink';
import GalleryBtns from '../../UI/GalleryBtns';

const ShopSection = props => {
  const linkRef = useRef();
  const galleryRef = useRef();

  const scrollGalleryHandler = dir => {
    galleryRef.current.scrollLeft += linkRef.current.clientWidth * dir;
  };

  // const imgObserver = new IntersectionObserver(
  //   entries => {
  //     entries.forEach(entry => {
  //       console.log(entry);
  //     });
  //   },
  //   { root: galleryRef.current, threshold: 0.8 }
  // );

  return (
    <section className={classes.shopSection}>
      <div className={classes.wrapper}>
        <div>
          <h2>Shop Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            dolorem. Eaque autem odit dolores dolorem error, facere iure
            repellat quibusdam natus vero molestias necessitatibus adipisci!
            Odit optio, soluta tempore, sint tempora qui sequi sunt voluptate
            officia accusamus voluptatem voluptates error.
          </p>
        </div>
        <div className={classes.links} ref={galleryRef}>
          {props.categories.map(link => (
            <ShopLink
              linkName={link.name}
              key={link.id}
              src={link.src}
              ref={linkRef}
              onChooseCategory={props.onChooseCategory}
            />
          ))}
        </div>
        <GalleryBtns onClickBtn={scrollGalleryHandler} />
      </div>
    </section>
  );
};

export default ShopSection;
