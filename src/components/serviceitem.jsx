import { useInView } from 'react-intersection-observer';

export default function ServiceItem(props) {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="group">
      <div
        ref={ref}
        className={`relative flex flex-col justify-center items-center h-60 m-2 
          transition-all duration-700 transform ${
          inView
            ? props.fromLeft
              ? 'translate-x-0'
              : 'translate-x-0'
            : props.fromLeft
            ? '-translate-x-full'
            : 'translate-x-full'
        }`}
        style={{ color: props.theme.color, backgroundColor: props.theme.backgroundColor }}
      >
        {/* Icon and Text */}
        <i
          style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            height: '5em',
            width: '5em',
          }}
        ></i>
        <p>{props.text}</p>

        {/* Hover content */}
        <div
          className="absolute inset-x-0 bottom-0 bg-red-500 text-white flex items-center justify-center transform transition-transform duration-1000 translate-y-full group-hover:translate-y-0"
        >
          View More...
        </div>
      </div>
    </div>
  );
}
