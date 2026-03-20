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
import { VideoSlide } from '../VideoSlide/VideoSlide.tsx';
const primaryColor = theme.palette.primary.main;

export const VideosList = ({ artist }: { artist: Artist }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" }, []);
  const [isPlaying, setIsPlaying] = useState(false)
  const [openedVideo, setOpenedVideo] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // ----------------------> Active index from Embla to React

  const handleSelect = useCallback(() => {
    if (!emblaApi) return

    const nextIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(nextIndex);
  }, [emblaApi])

  useEffect(() =>  {
    if (!emblaApi) return

    handleSelect()
    emblaApi.on('select', handleSelect)

    return () => {
      emblaApi.off('select', handleSelect)
    }
  }, [emblaApi, handleSelect])

  // -----------------------> end


  // ----------------------> Open only active slide

  const handleOpenSlide = (videoId: string, index: number) => {
    if (selectedIndex === null) return

    if (index !== selectedIndex) return

    setOpenedVideo(videoId)

    setIsPlaying(false) // Player isn't playing yet
  }

  // ----------------------> end


  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);

  const showVideos = videos.length > 0 && !loading;

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setOpenedVideo(null);
    }
  }, [emblaApi, setOpenedVideo]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setOpenedVideo(null);
    }
  }, [emblaApi, setOpenedVideo]);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const vid = artist?.videos.length > 0 ? artist?.videos[0].playlist : '';

        const fetchedVideos = vid ? await getArtistVideos(vid) : [];

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
      <div className="container relative">
        {showVideos && (
          <div
            ref={videos.length > 0 ? emblaRef : null}
            className="relative overflow-hidden [&:before]  mask-l-from-90% mask-r-from-90% max-h-[450px]"
          >
            <div className={'embla__container flex items-center'}>
              {videos.length > 0 ? (
                videos.map((video, index) => (
                  <VideoSlide
                    key={video.videoId}
                    video={video}
                    isPlaying={isPlaying}
                    isActive={index === selectedIndex}
                    onOpen={(id) => {
                      handleOpenSlide(id, index);
                    }}
                  />
                ))
              ) : (
                <p>Loading videos...</p>
              )}
            </div>
          </div>
        )}
        <IconButton
          className={`absolut top-1/2 -translate-y-1/2 left-0`}
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
          className={'absolute top-1/2 -translate-y-1/2 right-0 '}
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
        <div
          className={`fixed top-0 left-0 w-full h-full z-10 backdrop-blur ${!openedVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={() => {
            setOpenedVideo(null);
          }}
        ></div>
        <div
          className={`aspect-video w-[90%] md:w-[8d0%] lg:w-[70%] fixed z-20 top-1/2 left-1/2 -translate-y-[50%] ${!openedVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'} -translate-x-1/2  duration-300`}
        >
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${openedVideo}`}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </section>
  );
};