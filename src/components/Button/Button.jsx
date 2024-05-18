import classes from './Button.module.css'

export default function Button( {children, isActive, ...props} ){
	// let clasess = "button";
	// if (isActive) clasess += " active";
	return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
    //  <button className={clasess} onClick={onClick}>
    //    {children}
    //  </button>
  );
}