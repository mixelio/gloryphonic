import aboutHero from '@images/content/about-hero.jpg';

export const AboutUsHero = () => {

  return (
    <div className={'h-[400px] relative'}>
      <div className={'absolute h-full w-full'}>
        <img src={aboutHero} alt="" className={'absolute h-full w-full object-cover z-0'} />
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-r
            from-[var(--dark-background)]
            from-30%
            to-transparent
          "
        />
      </div>
      <div
        className={
          'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-[100%] max-w-[540px] p-[20px] bg-[radial-gradient(ellipse_at_center,rgb(var(--primary)_/_0.25)_0%,transparent_60%)]'
        }
      >
        <h1 className={'text-[clamp(2rem,8vw,3rem)] font-bold mb-[28px]'}>Наша команда</h1>
        <p className="mx-auto text-[1.2rem] mb-[36px] leading-[1.2]">
          Команда Gloryphonic складається з досвідчених професіоналів, які готові підтримати вас на
          кожному етапі вашого музичного шляху.
        </p>
      </div>
    </div>
  );
};
