import React from "react";

function Gels(props) {
  return (
    <div className={`gels ${props.color} ${props.engagement}`}>
      <div className='outermost'>
        <div className='outer'>
          <div className='inner'>
            <div className='innermost'>
              {props.img && (
                <img
                  src={props.img.src}
                  style={{ opacity: props.bgOpacity }}
                  alt={props.img.alt}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gels;
