
const Card=(props)=>{
      return(
<>
<div className="media mt-2 border-bottom border-primary">
            <div className="d-flex">
                 <a href={props.link}> <img className="mr-4 rounded-circle" src={props.img} alt="" /></a>
            </div>
            <div className="media-body">
                <h5>{props.title} | <span><small>{props.pub}</small></span></h5> 
                <p><i>{props.content}</i></p>  
                <p><i>Source : </i>{props.src}</p>
            </div>
</div>

</>
);
}
export default Card;
