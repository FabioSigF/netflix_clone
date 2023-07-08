export default function Container({customClass, children}){
  return(
    <div className={ `container ${customClass?customClass:''}`}>
      {children}
    </div>
  )
}