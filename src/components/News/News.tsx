import React, { useContext } from 'react';
import { PostsService } from '../../services/posts.service';
import { useQuery } from 'react-query';
import styles from './news.module.scss';
import NewsItem from '../NewsItem/NewsItem';
import { NewsContext } from '../../context/news.context';
import Container from '../ui/Container/Container';
import Marquee from 'react-fast-marquee';

const News = () => {
  const { data: newsResponse, isLoading, error } = useQuery({
    queryKey: ['getPosts'],
    queryFn: () => PostsService.getAllPosts(),
  });

  const { isNewsVisible } = useContext(NewsContext);

  return (
    <>
      {isNewsVisible ?
        <Container>
          <div style={{ fontSize: '45px', color: 'white' }}>
            Новости
          </div>
          {newsResponse?.articles?.length ?
            <section className={styles.news}>
              <Marquee pauseOnHover speed={150}>
                {newsResponse.articles.slice(90).map((news) => (
                    <NewsItem news={news} key={`${news.publishedAt}-${news.source?.id}`} />
                ))}
              </Marquee>
            </section>
            : 'not-cool'}
        </Container>
        :
        <></>
      }
    </>
  );
};

export default News;