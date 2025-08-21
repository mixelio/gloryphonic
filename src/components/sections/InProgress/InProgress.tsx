import waiting from '@images/icons/undraw_compose-music_9403.svg';

export const InProgress = () => {
  return (
    <section className="inProgress mb-[56px]">
      <div className="container">
        <div className="w-full max-h-[70vh] flex flex-col items-center gap-8">
          <img
            src={waiting}
            alt="not found"
            className="block w-[100%] h-[40vh] object-contain mx-auto"
          />
          <h1 className="text-[28px]">Сторінка у розробці</h1>
          <p className="italic leading-[1.5] text-center">
            "Серце людини обдумує її дорогу, але Господь спрямовує її кроки."
          </p>
          <p>Притчі 16:9</p>
        </div>
      </div>
    </section>
  );
};
