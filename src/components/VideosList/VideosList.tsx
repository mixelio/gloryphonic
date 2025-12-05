import { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import {getArtistVideos} from "../../utils/getArtistVideos.ts";
import type {YouTubeVideo} from "../../api/yuotubeApi.ts";
import useEmblaCarousel from "embla-carousel-react";
import type { Artist } from '../../types/Artist.ts';
import { IconButton } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { theme } from '../../theme.ts';
const primaryColor = theme.palette.primary.main;

export const VideosList = ({ artist }: { artist: Artist }) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const showVideos = videos.length > 0 && !loading;

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const vid = artist?.videos.length > 0 ? artist?.videos[0].playlist : 'PLY9ETa5VphqghSqCnNy7WgbLqR9AFLyP0';
        const fetchedVideos = await getArtistVideos(vid);

        setVideos(fetchedVideos);
      } catch (e) {
        console.error('Error fetching videos:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className={'videosList'}>
      <div className="container">
        {showVideos && (
          <div
            ref={videos.length > 0 ? emblaRef : null}
            className="relative overflow-hidden [&:before]"
          >
            <div className={'embla__container flex'}>
              {videos.length > 0 ? (
                videos.map((video) => (
                  <div
                    key={video.videoId}
                    className={
                      'embla__slide ' +
                      'mr-4 flex-[0_0_80%] ' +
                      'md:flex-[0_0_60%] ' +
                      'lg:flex-[0_0_45%] ' +
                      'border-2 rounded-2xl ' +
                      'overflow-hidden'
                    }
                  >
                    <h3>{video.title}</h3>
                    <ReactPlayer
                      src={`https://www.youtube.com/watch?v=${video.videoId}`}
                      width="100%"
                      height="400px"
                      controls={true}
                    />
                  </div>
                ))
              ) : (
                <p>Loading videos...</p>
              )}
            </div>

            <IconButton
              className={`absolut top-1/2`}
              onClick={scrollPrev}
              sx={{
                position: 'absolute',
                color: primaryColor,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <ArrowBackIosOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton
              // className={styles.embla__next}
              onClick={scrollNext}
              sx={{
                position: 'absolute',
                color: primaryColor,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <ArrowForwardIosOutlinedIcon fontSize="large" />
            </IconButton>
          </div>
        )}
      </div>
    </section>
  );
};