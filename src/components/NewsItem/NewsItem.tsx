import React, { FC, memo } from 'react';
import { INews } from 'types/INews';
import styles from './news-item.module.scss';

const NewsItem: FC<{ news: INews }> = memo(function NewsItem({ news }) {
  return (
      <article className={styles.news}>
        <div className={styles.news_image}>
          <img src="https://storage.myseldon.com/news-pict-ab/AB739D51528C3EF1CDF05B15AB775A11" alt={news.title} />
        </div>
        <div className={styles.news_data}>
          <div className={styles.news_data_heading}>
            {news.title}
          </div>
          <p className={styles.news_data_description}>
            {news.body}
          </p>
        </div>

      </article>
  );
});

export default NewsItem;
