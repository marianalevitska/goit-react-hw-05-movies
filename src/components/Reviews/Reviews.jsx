import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../shared/api/movies';
import stl from './reviews.module.css';

function Reviews() {
  const [review, setReview] = useState({
    items: [],
    isLoading: false,
    error: null,
  });
  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviewsDetails = async () => {
      setReview(prevReview => ({
        ...prevReview,
        isLoading: true,
        error: null,
      }));

      try {
        const result = await getMovieReviews(movieId);
        setReview(prevReview => ({
          ...prevReview,
          isLoading: false,
          items: [...result.results],
        }));
      } catch (error) {
        setReview(prevReview => ({
          ...prevReview,
          isLoading: false,
          error,
        }));
      }
    };
    fetchReviewsDetails();
  }, [movieId]);
  const { isLoading, error, items } = review;

  const lines = items.map(({ content, id, author }) => {
    return (
      <li key={id} className={stl.item}>
        <h2 className={stl.title}>{author}</h2>

        <p className={stl.text}>{content}</p>
      </li>
    );
  });
  const isRender = Boolean(items.length > 0);
  return (
    <>
      {!isRender && (
        <p className={stl.comment}>We haven't had any comments yet</p>
      )}
      {isRender && <ul className={stl.list}> {lines}</ul>}
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
    </>
  );
}

export default Reviews;
