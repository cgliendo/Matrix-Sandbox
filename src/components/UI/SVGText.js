//Created by bash script

const SVGText = (props) => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        strokeLinejoin='round'
        strokeMiterlimit='2'
        clipRule='evenodd'
        viewBox='0 0 800 150'
        width={props.width ? props.width : '100%'}
        // height={props.height}
      >
        <text
          x='0'
          y='100'
          fontSize='8rem'
          fontFamily='DeadHead'
          fill='url("#myGradient")'
        >
          {props.children}
        </text>
      </svg>
    </div>
  );
};
export default SVGText;
