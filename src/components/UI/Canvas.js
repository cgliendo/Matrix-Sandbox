//Created by bash script
import { useEffect } from 'react';
import styles from './Canvas.module.css';

const Canvas = (props) => {
  const classes = `${styles.Canvas} ${props.className ? props.className : ''}`;

  useEffect(() => {
    //
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');

    // // Set line width
    // ctx.lineWidth = 10;

    // // Wall
    // ctx.strokeRect(75, 140, 150, 110);

    // // Door
    // ctx.fillRect(130, 190, 40, 60);

    // // Roof
    // ctx.beginPath();
    // ctx.moveTo(50, 140);
    // ctx.lineTo(150, 60);
    // ctx.lineTo(250, 140);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.drawImage(image, 20, 20);
  });

  return (
    <div className={classes}>
      <canvas width='500px' height='500px' id='mycanvas'></canvas>
      {/* <CzLogo></CzLogo> */}
    </div>
  );
};
export default Canvas;
