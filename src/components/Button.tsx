interface IButtonProps {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass: string;
  //text: string;
}

function Button(props: IButtonProps) {
  return (
    <>
      <button
        id={props.id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${props.containerClass}`}
      >
        {props.leftIcon}
        <span className="font-general relative inline-flex overflow-hidden text-xs uppercase">
          <div>{props.title}</div>
        </span>
      </button>
    </>
  );
}

export default Button;
