import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { PostsService } from 'services/posts.service';
import { NewsContext } from 'context/news.context';
import NewsItem from '../NewsItem/NewsItem';
import Container from '../ui/Container/Container';
import styles from './news.module.scss';
import Marquee from 'react-fast-marquee';

const News = () => {
  const { data: newsResponse, isFetching: isLoading, error } = useQuery({
    queryKey: ['getPosts'],
    queryFn: () => PostsService.getAllPosts(),
  });

  console.log('newsResponse', newsResponse);

  const { isNewsVisible } = useContext(NewsContext);

  return (
    <>
      {isNewsVisible ?
        <Container>
          <div className={styles.heading}>
            Новости
          </div>
          {error && !isLoading ? <h4 className={styles.error}>Что-то пошло не так...</h4> : <></> }

          {isLoading && !error ? <div className={styles.loading}>Идёт загрузка...</div> : <></> }

          {newsResponse?.articles?.length && !isLoading ?
            <section className={styles.news}>
              <Marquee pauseOnHover speed={150}>
                {newsResponse.articles.slice(90).map((news) => (
                    <NewsItem news={news} key={`${news.publishedAt}-${news.source?.id}`} />
                ))}
              </Marquee>
            </section>
            : <h4 className={styles.not_found}>По вашему запросу ничего не нашлось :(</h4>}
        </Container>
        :
        <></>
      }
    </>
  );
};

export default News;