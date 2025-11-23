import {useEffect, useState} from "react";
import ReactPlayer from 'react-player'
import {getArtistVideos} from "../../utils/getArtistVideos.ts";
import type {YouTubeVideo} from "../../api/yuotubeApi.ts";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import type { Artist } from '../../types/Artist.ts';

export const VideosList = ({ artist }: { artist: Artist }) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 7000, stopOnMouseEnter: false }),
  ]);
  const showVideos = videos.length > 0 && !loading;

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const vid = artist?.videos.length > 0 ? artist?.videos[0].playlist : 'PLY9ETa5VphqghSqCnNy7WgbLqR9AFLyP0';
        console.log(vid);
        const fetchedVideos = await getArtistVideos(vid);
        // 'PLY9ETa5VphqghSqCnNy7WgbLqR9AFLyP0'

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
            className="
                            relative
                            overflow-hidden
                            [&:before]
                        "
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
                    {/*<h3>{video.title}</h3>*/}
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
          </div>
        )}
      </div>
    </section>
  );
};