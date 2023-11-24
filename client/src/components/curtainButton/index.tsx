const CurtainButton = ({ type }: { type: number }) => {
    const config = {
        text:"login",  
    }
    if(type){
    config.text="register"
    }
    else{
        type=0;
    }


  return <div className="curtainButton">{config.text}</div>;
};

export default CurtainButton;
