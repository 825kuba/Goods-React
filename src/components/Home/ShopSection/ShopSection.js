import React, { useRef, useState, useEffect } from 'react';

import classes from './ShopSection.module.scss';

import ShopLink from './ShopLink';
import GalleryBtns from '../../UI/GalleryBtns';

import useGalleryObserver from '../../../hooks/use-galleryObserver';

const ShopSection = props => {
  const [
    firstComponentRef,
    lastComponentRef,
    galleryRef,
    firstComponentIsIntersecting,
    lastComponentIsIntersecting,
  ] = useGalleryObserver();

  // scroll gallery by img width in the correct direction
  const scrollGalleryHandler = dir => {
    galleryRef.current.scrollLeft +=
      firstComponentRef.current.clientWidth * dir;
  };

  // give the first and last img their correct refs
  const shopLinksJsx = props.categories.map((link, i, arr) => {
    if (i === 0) {
      return (
        <ShopLink
          linkName={link.name}
          key={link.id}
          src={link.src}
          ref={firstComponentRef}
          onChooseCategory={props.onChooseCategory}
        />
      );
    }
    if (i === arr.length - 1) {
      return (
        <ShopLink
          linkName={link.name}
          key={link.id}
          src={link.src}
          ref={lastComponentRef}
          onChooseCategory={props.onChooseCategory}
        />
      );
    } else {
      return (
        <ShopLink
          linkName={link.name}
          key={link.id}
          src={link.src}
          onChooseCategory={props.onChooseCategory}
        />
      );
    }
  });

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
          {shopLinksJsx}
        </div>
        <GalleryBtns
          onClickBtn={scrollGalleryHandler}
          hideLeftBtn={firstComponentIsIntersecting}
          hideRightBtn={lastComponentIsIntersecting}
        />
      </div>
    </section>
  );
};

export default ShopSection;
